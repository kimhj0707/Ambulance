"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface AmbulanceData {
  id: string
  status: 'available' | 'dispatched' | 'onsite' | 'transporting'
  location: {
    lat: number
    lng: number
  }
  destination?: {
    lat: number
    lng: number
    name: string
  }
  estimatedArrival?: string
  medicalTeam: {
    doctor: string
    nurse: string
  }
  patientInfo?: {
    priority: 'high' | 'medium' | 'low'
    condition: string
  }
}

interface GoogleMapsTrackerProps {
  ambulances: AmbulanceData[]
  selectedAmbulance: string | null
  onAmbulanceSelect: (id: string) => void
}

const statusConfig = {
  available: { 
    color: '#10B981', // green-500
    icon: '🟢'
  },
  dispatched: { 
    color: '#F59E0B', // yellow-500
    icon: '🟡'
  },
  onsite: { 
    color: '#F97316', // orange-500
    icon: '🟠'
  },
  transporting: { 
    color: '#EF4444', // red-500
    icon: '🔴'
  }
}

export default function GoogleMapsTracker({ 
  ambulances, 
  selectedAmbulance, 
  onAmbulanceSelect 
}: GoogleMapsTrackerProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [markers, setMarkers] = useState<Map<string, google.maps.Marker>>(new Map())
  const [isApiKeyValid, setIsApiKeyValid] = useState(true)

  // Google Maps 초기화
  useEffect(() => {
    const initMap = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

      if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
        setIsApiKeyValid(false)
        setIsLoading(false)
        return
      }

      try {
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places']
        })

        const google = await loader.load()
        
        if (mapRef.current) {
          const mapInstance = new google.maps.Map(mapRef.current, {
            center: { lat: 37.5665, lng: 126.9780 }, // 서울 시청
            zoom: 12,
            mapTypeId: 'roadmap',
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          })

          setMap(mapInstance)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Google Maps 로딩 에러:', error)
        setIsApiKeyValid(false)
        setIsLoading(false)
      }
    }

    initMap()
  }, [])

  // 구급차 마커 업데이트
  const updateMarkers = useCallback(() => {
    if (!map) return

    // 기존 마커 제거
    markers.forEach(marker => marker.setMap(null))
    const newMarkers = new Map<string, google.maps.Marker>()

    ambulances.forEach((ambulance) => {
      // 구급차 아이콘 SVG
      const ambulanceIcon = {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="${statusConfig[ambulance.status].color}" stroke="white" stroke-width="2"/>
            <text x="20" y="26" text-anchor="middle" font-family="Arial" font-size="16" fill="white">🚑</text>
          </svg>
        `)}`,
        size: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 20)
      }

      const marker = new google.maps.Marker({
        position: ambulance.location,
        map: map,
        title: ambulance.id,
        icon: ambulanceIcon,
        animation: ambulance.status === 'dispatched' || ambulance.status === 'transporting' 
          ? google.maps.Animation.BOUNCE 
          : undefined
      })

      // 정보창 생성
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: ${statusConfig[ambulance.status].color};">
              ${statusConfig[ambulance.status].icon} ${ambulance.id}
            </h3>
            <div style="margin-bottom: 6px;">
              <strong>상태:</strong> ${
                ambulance.status === 'available' ? '대기중' :
                ambulance.status === 'dispatched' ? '출동중' :
                ambulance.status === 'onsite' ? '현장도착' :
                '이송중'
              }
            </div>
            <div style="margin-bottom: 6px;">
              <strong>의료진:</strong> ${ambulance.medicalTeam.doctor}
            </div>
            ${ambulance.estimatedArrival ? `
              <div style="margin-bottom: 6px;">
                <strong>예상 도착:</strong> ${ambulance.estimatedArrival}
              </div>
            ` : ''}
            ${ambulance.destination ? `
              <div style="margin-bottom: 6px;">
                <strong>목적지:</strong> ${ambulance.destination.name}
              </div>
            ` : ''}
            ${ambulance.patientInfo ? `
              <div style="margin-bottom: 6px;">
                <strong>환자 상태:</strong> ${ambulance.patientInfo.condition}
              </div>
            ` : ''}
          </div>
        `
      })

      marker.addListener('click', () => {
        infoWindow.open(map, marker)
        onAmbulanceSelect(ambulance.id)
      })

      // 선택된 구급차인 경우 정보창 자동 열기
      if (selectedAmbulance === ambulance.id) {
        infoWindow.open(map, marker)
      }

      newMarkers.set(ambulance.id, marker)

      // 목적지가 있는 경우 경로 표시
      if (ambulance.destination) {
        const directionsService = new google.maps.DirectionsService()
        const directionsRenderer = new google.maps.DirectionsRenderer({
          map: map,
          suppressMarkers: true,
          polylineOptions: {
            strokeColor: statusConfig[ambulance.status].color,
            strokeOpacity: 0.8,
            strokeWeight: 4
          }
        })

        directionsService.route(
          {
            origin: ambulance.location,
            destination: ambulance.destination,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === 'OK' && result) {
              directionsRenderer.setDirections(result)
            }
          }
        )

        // 목적지 마커
        const destinationMarker = new google.maps.Marker({
          position: ambulance.destination,
          map: map,
          title: ambulance.destination.name,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C12.13 2 9 5.13 9 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                <circle cx="16" cy="9" r="3" fill="white"/>
                <text x="16" y="28" text-anchor="middle" font-family="Arial" font-size="10" fill="#333">🏥</text>
              </svg>
            `),
            size: new google.maps.Size(32, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 16)
          }
        })
      }
    })

    setMarkers(newMarkers)
  }, [map, ambulances, selectedAmbulance, onAmbulanceSelect])

  // 구급차 위치 업데이트 시 마커 업데이트
  useEffect(() => {
    updateMarkers()
  }, [updateMarkers])

  // 선택된 구급차로 지도 중심 이동
  useEffect(() => {
    if (map && selectedAmbulance) {
      const selected = ambulances.find(a => a.id === selectedAmbulance)
      if (selected) {
        map.panTo(selected.location)
        map.setZoom(15)
      }
    }
  }, [map, selectedAmbulance, ambulances])

  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <div className="text-gray-600">Google Maps를 로딩중입니다...</div>
        </div>
      </div>
    )
  }

  if (!isApiKeyValid) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-red-600 text-4xl mb-4">⚠️</div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Google Maps API 키가 필요합니다
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            실시간 위치 추적을 위해 Google Maps API 키를 설정해주세요.
          </p>
          <div className="bg-gray-100 p-3 rounded text-xs text-left">
            <div className="font-mono">
              1. .env.local 파일에서<br/>
              2. NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=실제_API_키<br/>
              3. 개발서버 재시작
            </div>
          </div>
          <div className="mt-4">
            <a 
              href="https://console.cloud.google.com/google/maps-apis/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              Google Cloud Console에서 API 키 발급받기 →
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      className="w-full h-96 rounded-lg shadow-inner"
      style={{ minHeight: '400px' }}
    />
  )
}