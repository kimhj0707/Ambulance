"use client"

import { Button } from "@/components/ui/button"
import AmbulanceTracker from "@/components/ambulance/AmbulanceTracker"
import { Phone, Clock, ArrowLeft, Navigation, Shield, Activity } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function TrackingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-red-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <Navigation className="h-12 w-12 text-blue-600" />
              </div>
              <div className="bg-red-100 p-4 rounded-full">
                <Activity className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              🚑 실시간 구급차 추적
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              현재 운행중인 구급차의 실시간 위치와 상태를 투명하게 공개합니다. 
              <span className="font-semibold text-blue-600"> 언제든지 구급차 위치를 확인</span>하여 안심하세요.
            </p>
            
            {/* 긴급 연락처 */}
            <div className="mt-8 bg-red-100 border-2 border-red-200 rounded-lg p-6 inline-block">
              <div className="text-red-800 text-sm font-medium mb-3">
                🚨 응급상황 시 즉시 연락
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
                  <Phone className="h-8 w-8" />
                  <span>010-9070-9720</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>24시간 상담 가능</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real-time Tracker */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AmbulanceTracker />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              왜 실시간 추적이 중요할까요?
            </h2>
            <p className="text-lg text-gray-600">
              투명성과 신뢰성을 바탕으로 더 나은 응급의료 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">투명성 보장</h3>
              <p className="text-gray-600">
                구급차의 실시간 위치와 상태를 공개하여 
                서비스의 투명성을 보장합니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">정확한 도착시간</h3>
              <p className="text-gray-600">
                실시간 위치 기반으로 정확한 도착 예정시간을 
                제공하여 불안감을 해소합니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Activity className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">실시간 모니터링</h3>
              <p className="text-gray-600">
                이송 과정 전체를 실시간으로 모니터링하여 
                가족들이 안심할 수 있도록 합니다
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              실시간 추적 사용방법
            </h2>
            <p className="text-lg text-gray-600">
              간단한 3단계로 구급차 위치를 실시간으로 확인하세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">구급차 요청</h3>
              <p className="text-gray-600">
                010-9070-9720으로 연락하여 
                구급차를 요청합니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">추적 ID 수신</h3>
              <p className="text-gray-600">
                구급차 배정 후 추적 가능한 
                고유 ID를 받게 됩니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">실시간 확인</h3>
              <p className="text-gray-600">
                이 페이지에서 구급차의 실시간 위치와 
                상태를 확인할 수 있습니다
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              지금 바로 이용해보세요
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              24시간 언제든지 전문 구급차 서비스를 이용할 수 있습니다
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
                <Phone className="h-8 w-8" />
                <span>010-9070-9720</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>24시간 상담 가능</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={() => window.location.href = 'tel:010-9070-9720'}
              >
                <Phone className="h-5 w-5 mr-2" />
                지금 전화하기
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  온라인 상담신청
                </Button>
              </Link>
            </div>

            {/* Back to Home */}
            <div className="mt-8">
              <Link href="/">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  홈으로 돌아가기
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}