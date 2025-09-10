"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const serviceAreas = [
  {
    region: "서울특별시",
    districts: ["강남구", "서초구", "송파구", "강동구", "마포구", "용산구", "중구", "종로구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구"],
    responseTime: "15분 내",
    specialNote: "24시간 즉시 출동 가능 지역",
    bgColor: "bg-blue-50"
  },
  {
    region: "경기도", 
    districts: ["수원시", "성남시", "고양시", "용인시", "부천시", "안산시", "안양시", "남양주시", "화성시", "평택시", "의정부시", "시흥시", "파주시", "김포시", "광명시", "광주시", "군포시", "하남시", "오산시", "이천시", "양평군", "여주시"],
    responseTime: "30분 내",
    specialNote: "수도권 전 지역 신속 대응",
    bgColor: "bg-green-50"
  },
  {
    region: "인천광역시",
    districts: ["중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"],
    responseTime: "25분 내", 
    specialNote: "인천공항, 항만 지역 포함",
    bgColor: "bg-purple-50"
  }
]

export default function AreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image 
            src="/images/walter-dziemianczyk-EmXM5kcN3lw-unsplash.jpg"
            alt="서울 경기 인천 지역 서비스"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="text-blue-600">전국 어디든</span> 신속하게 출동합니다
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              서울, 경기, 인천 전 지역에서 <span className="font-semibold text-blue-600">15-30분 내 도착</span><br/>
              24시간 대기하는 전문 의료진이 안전하게 모셔드립니다.
            </p>
            
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <Phone className="h-8 w-8" />
                <span>010-9070-9720</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 지역별 서비스 안내 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              지역별 서비스 안내
            </h2>
            <p className="text-lg text-gray-600">
              각 지역의 특성을 고려한 맞춤형 서비스를 제공합니다
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${area.bgColor} rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="text-center mb-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.region}</h3>
                  <div className="flex items-center justify-center gap-2 text-blue-600">
                    <Clock className="h-4 w-4" />
                    <span className="font-semibold">평균 도착: {area.responseTime}</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">서비스 지역</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {area.districts.slice(0, 8).map((district, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                        {district}
                      </div>
                    ))}
                    {area.districts.length > 8 && (
                      <div className="col-span-2 text-center text-blue-600 text-xs">
                        +{area.districts.length - 8}개 지역 더 보기
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
                  <div className="text-sm font-medium mb-1">🚀 특별 서비스</div>
                  <div className="text-sm">{area.specialNote}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 지역별 특화 서비스 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              지역별 특화 서비스
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">서울 대학병원 연계</h3>
              <p className="text-gray-600 text-sm">
                서울대병원, 삼성서울병원, 세브란스병원 등<br/>
                주요 대학병원과의 긴밀한 협력 체계
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">경기도 광역 커버</h3>
              <p className="text-gray-600 text-sm">
                신도시 지역과 외곽 지역까지<br/>
                전문 네트워크를 통한 신속 대응
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">인천공항 특별 지원</h3>
              <p className="text-gray-600 text-sm">
                공항 내 응급상황 및<br/>
                해외 입국자 특별 이송 서비스
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            우리 지역 서비스가 궁금하신가요?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            정확한 위치와 상황을 알려주시면 최적의 출동 계획을 세워드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => window.location.href = 'tel:010-9070-9720'}
            >
              <Phone className="h-5 w-5 mr-2" />
              지금 바로 상담
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <MapPin className="h-5 w-5 mr-2" />
                지역별 상세 상담
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}