"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, Users, Shield, Heart, ArrowRight, CheckCircle, Star, Ambulance } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Clock,
      title: "응급 이송 서비스",
      description: "24시간 언제든지 응급 상황에 즉시 대응하는 전문 이송 서비스입니다.",
      features: [
        "24시간 365일 대응",
        "평균 15분 내 출동",
        "전문 응급처치",
        "병원 직통 연결"
      ],
      color: "red"
    },
    {
      icon: Users,
      title: "전문 의료진 동반",
      description: "정신과 전문 의료진이 직접 동반하여 안전한 이송을 보장합니다.",
      features: [
        "정신과 전문의 동반",
        "간호사 전담 케어",
        "심리 상담 지원",
        "가족 상담 서비스"
      ],
      color: "blue"
    },
    {
      icon: Shield,
      title: "안전한 이송",
      description: "체계적인 이송 프로토콜과 최신 장비로 안전을 최우선으로 합니다.",
      features: [
        "안전 장비 완비",
        "체계적 이송 프로토콜",
        "실시간 생체 모니터링",
        "보험 적용 가능"
      ],
      color: "green"
    }
  ]

  const process = [
    {
      step: "01",
      title: "상담 및 접수",
      description: "24시간 상담 전화를 통해 상황을 파악하고 최적의 이송 계획을 수립합니다."
    },
    {
      step: "02",
      title: "전문팀 출동",
      description: "정신과 전문 의료진과 이송팀이 신속하게 현장으로 출동합니다."
    },
    {
      step: "03",
      title: "안전한 이송",
      description: "환자의 상태에 맞는 전문적인 케어로 안전하게 목적지까지 이송합니다."
    },
    {
      step: "04",
      title: "사후 관리",
      description: "이송 후 환자와 가족에게 필요한 정보와 상담을 제공합니다."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              전문 이송 서비스
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              정신과 환자를 위한 전문적이고 안전한 이송 서비스를 제공합니다.
              24시간 전문 의료진과 함께 최고의 케어를 약속드립니다.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
                <Phone className="h-8 w-8" />
                <span>010-9070-9720</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  지금 상담받기
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              서비스 상세 안내
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              각 서비스는 환자의 안전과 편안함을 최우선으로 설계되었습니다
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    service.color === 'red' ? 'bg-red-100' :
                    service.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <service.icon className={`h-8 w-8 ${
                      service.color === 'red' ? 'text-red-600' :
                      service.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 ${
                          service.color === 'red' ? 'text-red-600' :
                          service.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                        }`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${
                    service.color === 'red' ? 'from-red-50 to-red-100' :
                    service.color === 'blue' ? 'from-blue-50 to-blue-100' : 'from-green-50 to-green-100'
                  } rounded-lg p-8 h-64 flex items-center justify-center`}>
                    <Ambulance className={`h-32 w-32 ${
                      service.color === 'red' ? 'text-red-400' :
                      service.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                    }`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              서비스 이용 과정
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              간단한 4단계로 안전한 이송 서비스를 이용하실 수 있습니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              왜 저희를 선택해야 할까요?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6"
            >
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10년 이상의 경험</h3>
              <p className="text-gray-600">정신과 환자 이송 분야에서 축적된 풍부한 경험과 노하우</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6"
            >
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">가족같은 마음</h3>
              <p className="text-gray-600">환자와 가족의 마음을 이해하는 따뜻한 케어</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6"
            >
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% 안전 보장</h3>
              <p className="text-gray-600">체계적인 안전 프로토콜과 전문 장비로 완벽한 안전 보장</p>
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
              지금 바로 상담받아보세요
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              전문 상담원이 24시간 대기하여 최적의 서비스를 제안드립니다
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
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}