"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, Users, Shield, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/walter-dziemianczyk-EmXM5kcN3lw-unsplash.jpg"
            alt="Professional medical facility"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              <span className="text-gray-900">정신과 환자 전문</span><br/>
              <span className="text-blue-600">안전 이송 서비스</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
            >
              10년 경험의 <span className="font-semibold text-blue-600">전문 의료진</span>이 
              24시간 안전하고 신속한 이송 서비스를 제공합니다.
            </motion.p>
            
            {/* 24시간 연락처 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg shadow-xl animate-pulse">
                <div className="flex items-center gap-3 text-3xl font-bold">
                  <Phone className="h-10 w-10 animate-bounce" />
                  <span>010-9070-9720</span>
                </div>
                <div className="text-sm text-red-100 text-center mt-1">지금 바로 전화하세요</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>24시간 상담 가능</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <div className="flex flex-col gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg" 
                  className="text-2xl px-12 py-6 bg-red-600 hover:bg-red-700 shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse"
                  onClick={() => window.location.href = 'tel:010-9070-9720'}
                >
                  <Phone className="h-8 w-8 mr-3 animate-bounce" />
                  지금 바로 전화하기
                </Button>
                <div className="text-center text-sm text-gray-600">
                  ⚡ 응급상황 시 즉시 연결 ⚡
                </div>
                <Button 
                  size="sm"
                  variant="outline"
                  className="text-sm px-6 py-2 border-gray-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  온라인 상담 (급하지 않은 경우)
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 서비스 특징 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="/images/ambulance-1666012_1280.jpg"
                  alt="24시간 응급 이송 서비스"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24시간 대기</h3>
              <p className="text-gray-600">언제든 연락하시면 15분 내 출동합니다</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="/images/priscilla-du-preez-aPa843frIzI-unsplash.jpg"
                  alt="전문 의료진의 안전한 케어"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">안전 보장</h3>
              <p className="text-gray-600">10년간 무사고 기록으로 안전성이 입증되었습니다</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="/images/marcel-eberle-pZKCj9h10nI-unsplash.jpg"
                  alt="정신과 전문 의료진"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전문 의료진</h3>
              <p className="text-gray-600">정신과 전문 의료진이 직접 이송에 참여합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* 강력한 전화 유도 CTA */}
      <section className="py-20 bg-gradient-to-r from-red-50 via-orange-50 to-red-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-2xl p-8 border-4 border-red-200">
            <h2 className="text-4xl font-bold text-red-600 mb-4">🚨 망설이지 마세요!</h2>
            <p className="text-xl text-gray-800 mb-2 font-semibold">
              지금 이 순간도 힘든 상황이신가요?
            </p>
            <p className="text-lg text-gray-600 mb-8">
              10년 경험 전문팀이 <span className="font-bold text-red-600">15분 내</span> 달려갑니다
            </p>
            
            <div className="bg-red-600 text-white p-6 rounded-lg mb-6 animate-pulse">
              <div className="text-3xl font-bold mb-2">010-9070-9720</div>
              <div className="text-red-100">👆 터치하면 바로 연결</div>
            </div>
            
            <Button 
              size="lg" 
              className="text-2xl px-16 py-6 bg-red-600 hover:bg-red-700 shadow-xl transform hover:scale-105 w-full sm:w-auto"
              onClick={() => window.location.href = 'tel:010-9070-9720'}
            >
              <Phone className="h-8 w-8 mr-3 animate-bounce" />
              지금 바로 전화하기
            </Button>
            
            <div className="mt-4 text-sm text-gray-500">
              📞 전화 연결 즉시 전문 상담 | 🚗 평균 15분 내 도착 | 💝 24시간 운영
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}