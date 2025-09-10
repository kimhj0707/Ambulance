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
              <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <Phone className="h-8 w-8" />
                <span>010-9070-9720</span>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = 'tel:010-9070-9720'}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  24시간 상담 전화
                </Button>
                <Link href="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-3"
                  >
                    온라인 상담 신청
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
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

      {/* 간단한 CTA */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">도움이 필요하신가요?</h2>
          <p className="text-lg text-gray-600 mb-8">
            전문팀이 24시간 대기 중입니다. 언제든 연락주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => window.location.href = 'tel:010-9070-9720'}
            >
              <Phone className="h-5 w-5 mr-2" />
              010-9070-9720
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                온라인 상담
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}