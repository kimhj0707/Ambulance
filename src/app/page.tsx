"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, Users, Shield, Heart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              정신과 환자 전문
              <span className="text-blue-600"> 구급차 서비스</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
            >
              24시간 전문 의료진과 함께하는 안전하고 인간적인 이송 서비스를 제공합니다. 
              가족같은 마음으로 최고의 전문성과 신뢰로 함께하겠습니다.
            </motion.p>
            
            {/* 24시간 연락처 강조 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
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
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  지금 상담받기
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  서비스 안내
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              전문 이송 서비스
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              정신과 환자를 위한 맞춤형 전문 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Emergency Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">응급 이송</h3>
              <p className="text-gray-600">
                24시간 언제든지 응급 상황에 즉시 대응하는 전문 이송 서비스
              </p>
            </motion.div>

            {/* Professional Staff */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전문 의료진 동반</h3>
              <p className="text-gray-600">
                정신과 전문 의료진이 직접 동반하여 안전한 이송을 보장합니다
              </p>
            </motion.div>

            {/* Safe Transport */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">안전한 이송</h3>
              <p className="text-gray-600">
                체계적인 이송 프로토콜과 최신 장비로 안전을 최우선으로 합니다
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Heart className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              가족같은 마음으로
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              정신과 환자와 가족의 어려운 상황을 이해하고, 
              전문성과 인간적인 배려를 바탕으로 최선의 서비스를 제공합니다.
            </p>
            
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  상담 신청하기
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
