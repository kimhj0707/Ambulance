"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, Users, Shield, Heart, ArrowRight, CheckCircle, Star, Ambulance } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const urgentScenarios = [
    {
      icon: "🚨",
      title: "갑자기 폭력적이 되었을 때",
      description: "가족이나 본인을 해치려 하거나, 물건을 부수는 등 위험한 상황",
      situation: "\"갑자기 소리 지르며 물건을 집어던지기 시작했어요. 어떻게 해야 할지 모르겠어요.\"",
      solution: "즉시 안전거리를 유지하고 저희에게 연락하세요. 전문팀이 15분 내 도착해 안전하게 상황을 정리합니다.",
      color: "orange"
    },
    {
      icon: "😰",
      title: "자해 위험이 있을 때", 
      description: "자살 시도, 자해 행동, 극단적 말을 할 때",
      situation: "\"계속 죽고 싶다고 하면서 위험한 행동을 해요. 혼자서는 막을 수가 없어요.\"",
      solution: "1초도 지체하지 마세요. 24시간 응급 핫라인으로 즉시 연락주시면 전문 위기개입팀이 출동합니다.",
      color: "orange"
    },
    {
      icon: "😵",
      title: "의식이 흐리거나 쓰러졌을 때",
      description: "약물 과다복용, 의식 잃음, 호흡곤란 등 응급상황",
      situation: "\"약을 많이 먹었는지 의식이 흐릿해지고 있어요. 119를 불러야 하나요?\"",
      solution: "119와 동시에 저희도 연락하세요. 정신과 전문 응급처치와 동시에 적절한 병원으로 신속 이송합니다.",
      color: "orange"
    }
  ]

  const commonScenarios = [
    {
      icon: "😔",
      title: "병원 가기를 거부할 때",
      description: "치료 필요하지만 본인이 병원 가기를 완강히 거부하는 경우",
      situation: "\"치료가 필요한데 절대 병원에 안 간다고 해요. 억지로 데려갈 수도 없고...\"",
      solution: "무리한 강요는 금물입니다. 전문 상담사가 먼저 가서 설득하고, 환자분이 수긍하시면 자연스럽게 이송해드립니다.",
      color: "blue"
    },
    {
      icon: "😟",
      title: "몸집이 큰 환자를 혼자 감당하기 어려울 때",
      description: "신체적으로 보호자가 통제하기 어려운 상황",
      situation: "\"덩치가 크고 힘이 세서 제가 혼자서는 도저히 어떻게 할 수가 없어요.\"",
      solution: "체격이나 힘에 상관없이 안전하게 모십니다. 전문 이송팀이 안전장비와 기법으로 환자와 가족 모두 다치지 않게 해드립니다.",
      color: "blue"
    },
    {
      icon: "🏥",
      title: "어느 병원으로 가야 할지 모를 때",
      description: "증상에 맞는 적절한 병원을 찾기 어려운 경우",
      situation: "\"응급실로 가야 하나, 정신과로 가야 하나... 어디로 가야 할지 모르겠어요.\"",
      solution: "환자 상태를 정확히 판단해서 가장 적절한 병원으로 모셔드립니다. 병원과의 사전 연락도 저희가 담당합니다.",
      color: "blue"
    }
  ]

  const specialCases = [
    {
      icon: "🌙",
      title: "새벽이나 휴일 응급상황",
      description: "일반 의료기관이 문을 닫은 시간의 응급상황",
      situation: "\"새벽 3시인데 갑자기 상태가 악화됐어요. 어디로 연락해야 하죠?\"",
      solution: "24시간 365일 언제든 연락하세요. 새벽이든 휴일이든 상관없이 15분 내 전문팀이 출동합니다.",
      color: "green"
    },
    {
      icon: "👁️",
      title: "주변 시선이 걱정될 때",
      description: "이웃이나 주변 사람들의 시선 때문에 119 신고가 부담스러운 경우",
      situation: "\"일반 구급차가 오면 온 동네가 다 알게 될 것 같아서 차마 신고를 못하겠어요.\"",
      solution: "무표시 전용 차량으로 조용히 모셔드립니다. 주변에서는 일반적인 병원 이송으로만 보입니다.",
      color: "green"
    },
    {
      icon: "💔",
      title: "가족 모두 지쳐있을 때",
      description: "장기간 돌봄으로 가족 모두가 심신이 지친 상황",
      situation: "\"몇 달째 이런 상황이 계속되면서 저희 가족들도 모두 지쳐버렸어요.\"",
      solution: "환자분 이송과 함께 가족 상담도 함께 진행합니다. 앞으로의 치료 계획과 가족 지원 방안을 함께 고민해드립니다.",
      color: "green"
    }
  ]

  const process = [
    {
      step: "📞",
      title: "전화 상담 (즉시)",
      description: "상황을 자세히 들어보고 가장 적절한 대응 방법을 안내해드립니다.",
      detail: "• 환자 상태 파악 • 응급도 판단 • 이송 방법 결정 • 가족 안내"
    },
    {
      step: "🚗",  
      title: "전문팀 출동 (15분)",
      description: "경험 많은 전문 의료진과 이송팀이 필요한 장비를 갖고 출동합니다.",
      detail: "• 정신과 전문의/간호사 • 안전 이송 장비 • 응급처치 키트 • 무표시 차량"
    },
    {
      step: "🤝",
      title: "현장 상황 정리 (차분히)",
      description: "환자와 가족의 마음을 안정시키고 상황을 차분히 정리합니다.",
      detail: "• 환자 설득 및 안정 • 가족 상담 • 병원 연락 • 이송 준비"
    },
    {
      step: "🏥",
      title: "안전한 이송 (책임지고)",
      description: "전 과정을 모니터링하며 안전하게 병원까지 모셔드립니다.",
      detail: "• 전문 의료진 동반 • 실시간 상태 체크 • 가족 상황 공유 • 병원 인계"
    },
    {
      step: "💙",
      title: "사후 관리 (끝까지)",
      description: "이송이 끝난 후에도 가족분들이 필요로 하는 도움을 제공합니다.",
      detail: "• 입원 절차 도움 • 가족 상담 지원 • 향후 계획 상의 • 24시간 연락 가능"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image 
            src="/images/priscilla-du-preez-aPa843frIzI-unsplash.jpg"
            alt="Professional care background"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="text-orange-600">이런 상황에서 연락하세요</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              혼자서는 감당하기 어려운 순간들이 있습니다. <br/>
              <span className="font-semibold text-blue-600">망설이지 마시고 언제든 연락주세요.</span> 
              10년간 수많은 가족들과 함께해온 저희가 도와드리겠습니다.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-orange-600">
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

      {/* 응급 상황 시나리오 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-orange-600 sm:text-4xl">
              🚨 이런 응급상황에는 즉시 연락하세요
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              생명이 위험하거나 안전사고가 일어날 수 있는 상황들입니다
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {urgentScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-100 border-2 border-orange-200 rounded-lg p-6"
              >
                <div className="text-4xl mb-4 text-center">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">{scenario.title}</h3>
                <p className="text-orange-700 text-sm mb-4">{scenario.description}</p>
                
                <div className="bg-white/80 p-4 rounded-lg mb-4">
                  <div className="text-xs text-orange-600 font-semibold mb-2">보호자의 목소리:</div>
                  <p className="text-orange-800 italic text-sm">{scenario.situation}</p>
                </div>
                
                <div className="bg-orange-600 text-white p-4 rounded-lg">
                  <div className="text-xs font-semibold mb-2">✅ 저희 해결방법:</div>
                  <p className="text-sm">{scenario.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="bg-orange-600 text-white p-6 rounded-lg inline-block">
              <h3 className="text-xl font-bold mb-2">🚨 위 상황이라면 1초도 망설이지 마세요!</h3>
              <Button 
                size="lg" 
                className="text-xl px-12 py-3 bg-white text-orange-600 hover:bg-orange-50 font-bold"
                onClick={() => window.location.href = 'tel:010-9070-9720'}
              >
                <Phone className="h-6 w-6 mr-3" />
                010-9070-9720 즉시 전화
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 일반적인 어려운 상황들 */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-600 sm:text-4xl">
              💙 이런 어려운 상황에도 도와드립니다
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              응급은 아니지만 혼자서는 감당하기 어려운 상황들입니다
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {commonScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4 text-center">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">{scenario.title}</h3>
                <p className="text-blue-700 text-sm mb-4">{scenario.description}</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="text-xs text-blue-600 font-semibold mb-2">보호자의 고민:</div>
                  <p className="text-blue-800 italic text-sm">{scenario.situation}</p>
                </div>
                
                <div className="bg-blue-600 text-white p-4 rounded-lg">
                  <div className="text-xs font-semibold mb-2">✅ 저희 해결방법:</div>
                  <p className="text-sm">{scenario.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 특수한 상황들 */}
      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-600 sm:text-4xl">
              💚 이런 특수한 상황도 맡겨주세요
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              다른 곳에서 거절당하거나 어려워하는 상황들도 경험으로 해결합니다
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {specialCases.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4 text-center">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-3 text-center">{scenario.title}</h3>
                <p className="text-green-700 text-sm mb-4">{scenario.description}</p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <div className="text-xs text-green-600 font-semibold mb-2">보호자의 걱정:</div>
                  <p className="text-green-800 italic text-sm">{scenario.situation}</p>
                </div>
                
                <div className="bg-green-600 text-white p-4 rounded-lg">
                  <div className="text-xs font-semibold mb-2">✅ 저희 해결방법:</div>
                  <p className="text-sm">{scenario.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 이송 과정 상세 설명 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              🤝 이런 과정으로 도와드립니다
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              처음부터 끝까지, 보호자님과 함께 단계별로 차근차근 진행합니다
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{step.step}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <div className="text-sm text-blue-600 font-semibold">
                          {index === 0 ? "전화 받자마자 바로" : 
                           index === 1 ? "평균 15분 내 도착" :
                           index === 2 ? "충분한 시간을 두고" :
                           index === 3 ? "이송 전 과정에서" : "퇴원할 때까지"}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">{step.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm font-semibold text-gray-800 mb-2">구체적으로 이런 일들을 합니다:</div>
                      <p className="text-sm text-gray-600">{step.detail}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 h-64 relative overflow-hidden">
                    <Image 
                      src={index === 0 ? "/images/marcel-eberle-pZKCj9h10nI-unsplash.jpg" :
                           index === 1 ? "/images/ambulance-1666012_1280.jpg" :
                           index === 2 ? "/images/priscilla-du-preez-aPa843frIzI-unsplash.jpg" :
                           index === 3 ? "/images/walter-dziemianczyk-EmXM5kcN3lw-unsplash.jpg" :
                           "/images/priscilla-du-preez-aPa843frIzI-unsplash.jpg"}
                      alt={`Process step ${index + 1}`}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-blue-100/50"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      {index === 0 && <Phone className="h-16 w-16 text-blue-600" />}
                      {index === 1 && <Ambulance className="h-16 w-16 text-blue-600" />}
                      {index === 2 && <Users className="h-16 w-16 text-blue-600" />}
                      {index === 3 && <Shield className="h-16 w-16 text-blue-600" />}
                      {index === 4 && <Heart className="h-16 w-16 text-blue-600" />}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">💙 끝까지 책임지고 함께합니다</h3>
              <p className="text-blue-100 text-lg mb-6">
                단순히 이송만 하고 끝이 아닙니다. 가족분들이 안심하실 때까지 함께하겠습니다.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-500 p-4 rounded-lg">
                  <div className="font-bold">10년 경험</div>
                  <div className="text-sm text-blue-200">축적된 노하우</div>
                </div>
                <div className="bg-blue-500 p-4 rounded-lg">
                  <div className="font-bold">무사고 기록</div>
                  <div className="text-sm text-blue-200">단 한 건도 없습니다</div>
                </div>
                <div className="bg-blue-500 p-4 rounded-lg">
                  <div className="font-bold">24시간 대기</div>
                  <div className="text-sm text-blue-200">언제든 연락하세요</div>
                </div>
              </div>
            </div>
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
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
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

      {/* 강력한 최종 CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white rounded-lg p-8 shadow-xl max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                😔 이런 상황이 계속 반복되고 있나요?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <div className="text-orange-700 text-lg font-semibold mb-2">
                    💔 보호자의 마음
                  </div>
                  <ul className="text-orange-600 text-sm space-y-2 text-left">
                    <li>• "혼자서는 도저히 감당할 수 없어요"</li>
                    <li>• "어떻게 해야 할지 모르겠어요"</li>
                    <li>• "병원에 어떻게 데려가죠?"</li>
                    <li>• "가족들도 지쳐가고 있어요"</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <div className="text-blue-700 text-lg font-semibold mb-2">
                    💙 저희가 해드리는 일
                  </div>
                  <ul className="text-blue-600 text-sm space-y-2 text-left">
                    <li>• "전문팀이 15분 내 도착합니다"</li>
                    <li>• "상황을 차분히 정리해드립니다"</li>
                    <li>• "안전하게 병원까지 모셔드립니다"</li>
                    <li>• "가족 상담도 함께 진행합니다"</li>
                  </ul>
                </div>
              </div>

              {/* 응급상황 */}
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-8 rounded-lg mb-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-3">🚨 지금 당장 위험한 상황이신가요?</h3>
                  <div className="text-orange-100">폭력, 자해, 의식 잃음 등 응급상황은 1초도 망설이지 마세요</div>
                </div>
                
                <div className="flex justify-center mb-4">
                  <Button 
                    size="lg" 
                    className="text-3xl px-20 py-6 bg-white text-orange-600 hover:bg-orange-50 shadow-xl font-bold"
                    onClick={() => window.location.href = 'tel:010-9070-9720'}
                  >
                    <Phone className="h-10 w-10 mr-4" />
                    010-9070-9720
                  </Button>
                </div>
                <div className="text-center text-orange-100 text-sm">
                  ⚡ 즉시 연결 ⚡ 15분 내 도착 ⚡ 전문팀 출동
                </div>
              </div>

              {/* 일반상담 */}
              <div className="border-2 border-blue-200 bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    💬 급하지 않다면 상세 상담부터 받아보세요
                  </h3>
                  <p className="text-blue-600 mb-4">
                    상황을 차근차근 들어보고 가장 좋은 방법을 함께 찾아드립니다
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={() => window.location.href = 'tel:010-9070-9720'}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    전화로 상세 상담
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="text-lg px-8">
                      온라인으로 상담 신청
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* 신뢰 지표 */}
              <div className="grid md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
                <div>
                  <div className="font-bold text-blue-600">10년 경험</div>
                  <div>2015년부터</div>
                </div>
                <div>
                  <div className="font-bold text-green-600">무사고 기록</div>
                  <div>단 한 건도 없음</div>
                </div>
                <div>
                  <div className="font-bold text-purple-600">24시간 대기</div>
                  <div>연중무휴 운영</div>
                </div>
                <div>
                  <div className="font-bold text-orange-600">전문 의료진</div>
                  <div>정신과 전문팀</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}