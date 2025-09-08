"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, Users, Shield, Heart, ArrowRight, Award, Target, Eye } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "인간적 배려",
      description: "환자와 가족의 마음을 이해하고 가족같은 따뜻한 마음으로 접근합니다."
    },
    {
      icon: Shield,
      title: "전문성",
      description: "정신과 전문 의료진과 체계적인 프로토콜로 최고의 전문 서비스를 제공합니다."
    },
    {
      icon: Clock,
      title: "신속함",
      description: "24시간 언제든지 신속하게 대응하여 골든타임을 놓치지 않습니다."
    },
    {
      icon: Users,
      title: "신뢰성",
      description: "10년 이상의 경험과 수많은 성공 사례로 검증된 신뢰할 수 있는 서비스입니다."
    }
  ]

  const stats = [
    { number: "10+", label: "서비스 경력 (년)" },
    { number: "1000+", label: "성공 이송 건수" },
    { number: "24/7", label: "연중무휴 서비스" },
    { number: "100%", label: "고객 만족도" }
  ]

  const team = [
    {
      name: "김은정 대표",
      role: "대표이사 / 정신과 전문의",
      description: "15년 이상의 정신과 임상경험을 바탕으로 환자중심의 전문 이송 서비스를 이끌어갑니다."
    },
    {
      name: "이수진 팀장",
      role: "의료팀장 / 간호사",
      description: "정신과 병동에서 10년간 근무한 경험으로 환자 케어의 전문성을 담당합니다."
    },
    {
      name: "박민수 팀장",
      role: "이송팀장 / 응급구조사",
      description: "응급의료 분야 12년 경력으로 안전하고 신속한 이송을 책임집니다."
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
              회사 소개
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              정신과 환자를 위한 전문 이송 서비스의 선두주자로서, 
              가족같은 마음과 최고의 전문성으로 함께하겠습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Target className="h-12 w-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">우리의 미션</h2>
              </div>
              <p className="text-lg text-gray-600">
                정신과 환자와 가족이 겪는 어려운 상황에서 전문적이고 인간적인 도움을 제공하여, 
                안전하고 존중받는 이송 경험을 만들어갑니다.
              </p>
              <p className="text-gray-600">
                단순한 이송이 아닌, 환자의 존엄성을 지키고 가족의 마음을 이해하는 
                진정한 의료 서비스를 추구합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Eye className="h-12 w-12 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">우리의 비전</h2>
              </div>
              <p className="text-lg text-gray-600">
                정신건강 분야에서 가장 신뢰받는 전문 이송 서비스로 성장하여, 
                환자와 가족이 희망을 잃지 않도록 든든한 동반자가 되겠습니다.
              </p>
              <p className="text-gray-600">
                지속적인 연구와 혁신을 통해 더 나은 서비스를 개발하고, 
                정신건강에 대한 사회적 인식 개선에도 기여하겠습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              핵심 가치
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              저희가 추구하는 가치와 철학입니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              숫자로 보는 우리의 성과
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              신뢰할 수 있는 실적으로 입증된 전문성
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              전문 팀 소개
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              풍부한 경험과 전문성을 갖춘 우리 팀을 소개합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              우리의 발자취
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              꾸준한 성장과 발전의 역사
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6 p-6 bg-white rounded-lg"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                2015
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">회사 설립</h3>
                <p className="text-gray-600">정신과 환자 전문 이송 서비스의 필요성을 인식하고 전문 서비스 시작</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-6 p-6 bg-white rounded-lg"
            >
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                2018
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">서비스 확대</h3>
                <p className="text-gray-600">전문 의료진 확충 및 24시간 서비스 체계 구축</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-6 p-6 bg-white rounded-lg"
            >
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                2021
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">품질 인증 획득</h3>
                <p className="text-gray-600">의료서비스 품질 인증 및 안전 관리 시스템 도입</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-6 p-6 bg-white rounded-lg"
            >
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                2025
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">디지털 혁신</h3>
                <p className="text-gray-600">온라인 상담 시스템 구축 및 고객 서비스 품질 향상</p>
              </div>
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
              함께 희망을 만들어갑시다
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              어려운 상황에서도 희망을 잃지 않도록, 저희가 든든한 동반자가 되겠습니다
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
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  지금 상담받기
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  서비스 알아보기
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