"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Navigation, MapPin, Clock, Phone, Users, Activity } from 'lucide-react'
import GoogleMapsTracker from '@/components/maps/GoogleMapsTracker'

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

// 시뮬레이션용 구급차 데이터
const mockAmbulanceData: AmbulanceData[] = [
  {
    id: "AMB-001",
    status: "available",
    location: { lat: 37.5665, lng: 126.9780 }, // 서울 시청
    medicalTeam: {
      doctor: "김은정 전문의",
      nurse: "이수진 간호사"
    }
  },
  {
    id: "AMB-002", 
    status: "dispatched",
    location: { lat: 37.5519, lng: 126.9918 }, // 동대문구
    destination: {
      lat: 37.5326, lng: 127.0244,
      name: "서울성모병원"
    },
    estimatedArrival: "12분",
    medicalTeam: {
      doctor: "박민수 전문의",
      nurse: "김혜진 간호사"
    },
    patientInfo: {
      priority: "high",
      condition: "급성 정신증상"
    }
  },
  {
    id: "AMB-003",
    status: "transporting", 
    location: { lat: 37.5133, lng: 127.0590 }, // 강남구
    destination: {
      lat: 37.4979, lng: 127.0276,
      name: "삼성서울병원"
    },
    estimatedArrival: "8분",
    medicalTeam: {
      doctor: "정하늘 전문의",
      nurse: "윤서연 간호사"
    },
    patientInfo: {
      priority: "medium", 
      condition: "정신과 입원 이송"
    }
  }
]

const statusConfig = {
  available: { 
    color: 'bg-green-500', 
    text: '대기중', 
    icon: '🟢'
  },
  dispatched: { 
    color: 'bg-yellow-500', 
    text: '출동중', 
    icon: '🟡'
  },
  onsite: { 
    color: 'bg-orange-500', 
    text: '현장도착', 
    icon: '🟠'
  },
  transporting: { 
    color: 'bg-red-500', 
    text: '이송중', 
    icon: '🔴'
  }
}

const priorityConfig = {
  high: { color: 'text-red-600', bg: 'bg-red-50', text: '응급' },
  medium: { color: 'text-yellow-600', bg: 'bg-yellow-50', text: '준응급' },
  low: { color: 'text-green-600', bg: 'bg-green-50', text: '일반' }
}

export default function AmbulanceTracker() {
  const [ambulances, setAmbulances] = useState<AmbulanceData[]>(mockAmbulanceData)
  const [selectedAmbulance, setSelectedAmbulance] = useState<string | null>(null)

  // 실시간 위치 업데이트 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setAmbulances(prev => prev.map(amb => {
        if (amb.status === 'dispatched' || amb.status === 'transporting') {
          // 목적지 방향으로 약간씩 이동 (시뮬레이션)
          const newLat = amb.location.lat + (Math.random() - 0.5) * 0.001
          const newLng = amb.location.lng + (Math.random() - 0.5) * 0.001
          return {
            ...amb,
            location: { lat: newLat, lng: newLng }
          }
        }
        return amb
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Navigation className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">🚑 실시간 구급차 추적</h3>
            <p className="text-blue-100 text-sm">현재 운행중인 구급차 위치와 상태를 실시간으로 확인하세요</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 p-4">
        {/* 구급차 목록 */}
        <div className="lg:col-span-1 space-y-3">
          <h4 className="font-semibold text-gray-800 flex items-center gap-2">
            <Activity className="h-4 w-4" />
            구급차 현황 ({ambulances.length}대)
          </h4>
          
          {ambulances.map((ambulance) => (
            <div 
              key={ambulance.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedAmbulance === ambulance.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedAmbulance(ambulance.id)}
            >
              {/* 구급차 ID와 상태 */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">{ambulance.id}</span>
                  <div className={`px-2 py-1 rounded-full text-xs text-white ${statusConfig[ambulance.status].color}`}>
                    {statusConfig[ambulance.status].icon} {statusConfig[ambulance.status].text}
                  </div>
                </div>
                {ambulance.estimatedArrival && (
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="h-3 w-3" />
                    {ambulance.estimatedArrival}
                  </div>
                )}
              </div>

              {/* 의료진 정보 */}
              <div className="mb-3 text-sm">
                <div className="flex items-center gap-1 text-blue-600 mb-1">
                  <Users className="h-3 w-3" />
                  <span className="font-medium">의료진</span>
                </div>
                <div className="text-gray-600 text-xs space-y-1">
                  <div>👨‍⚕️ {ambulance.medicalTeam.doctor}</div>
                  <div>👩‍⚕️ {ambulance.medicalTeam.nurse}</div>
                </div>
              </div>

              {/* 환자 정보 (이송중인 경우) */}
              {ambulance.patientInfo && (
                <div className="mb-3 text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${priorityConfig[ambulance.patientInfo.priority].bg} ${priorityConfig[ambulance.patientInfo.priority].color}`}>
                      {priorityConfig[ambulance.patientInfo.priority].text}
                    </span>
                  </div>
                  <div className="text-gray-600 text-xs">
                    {ambulance.patientInfo.condition}
                  </div>
                </div>
              )}

              {/* 목적지 정보 */}
              {ambulance.destination && (
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-green-600 mb-1">
                    <MapPin className="h-3 w-3" />
                    <span className="font-medium">목적지</span>
                  </div>
                  <div className="text-gray-600 text-xs">
                    {ambulance.destination.name}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 지도 영역 */}
        <div className="lg:col-span-2">
          <div className="relative">
            <GoogleMapsTracker 
              ambulances={ambulances}
              selectedAmbulance={selectedAmbulance}
              onAmbulanceSelect={setSelectedAmbulance}
            />

            {/* 지도 컨트롤 */}
            <div className="absolute top-4 right-4 space-y-2">
              <Button
                size="sm"
                variant="outline"
                className="bg-white/90 hover:bg-white"
                onClick={() => window.location.href = 'tel:010-9070-9720'}
              >
                <Phone className="h-4 w-4 mr-1" />
                긴급연락
              </Button>
            </div>
          </div>

          {/* 선택된 구급차 상세 정보 */}
          {selectedAmbulance && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h5 className="font-semibold text-blue-900 mb-2">
                {selectedAmbulance} 상세 정보
              </h5>
              {(() => {
                const selected = ambulances.find(a => a.id === selectedAmbulance)
                return selected ? (
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">현재 상태</div>
                      <div className="font-medium">{statusConfig[selected.status].text}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">예상 도착시간</div>
                      <div className="font-medium">{selected.estimatedArrival || '대기중'}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">담당 의료진</div>
                      <div className="font-medium">{selected.medicalTeam.doctor}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">담당 간호사</div>
                      <div className="font-medium">{selected.medicalTeam.nurse}</div>
                    </div>
                  </div>
                ) : null
              })()}
            </div>
          )}
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="bg-gray-50 px-4 py-3 border-t">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>실시간 업데이트 중</span>
            </div>
            <div>마지막 업데이트: 방금 전</div>
          </div>
          <div>
            총 {ambulances.length}대 구급차 운영중
          </div>
        </div>
      </div>
    </div>
  )
}