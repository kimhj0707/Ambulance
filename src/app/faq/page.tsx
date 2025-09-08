"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Clock, ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const faqCategories = [
    {
      title: "서비스 이용",
      items: [
        {
          question: "24시간 정말 서비스가 가능한가요?",
          answer: "네, 저희는 365일 24시간 운영됩니다. 응급상황이든 일반 상담이든 언제든지 010-9070-9720으로 연락해 주세요. 전문 상담원이 항시 대기하고 있습니다."
        },
        {
          question: "서비스 지역은 어디까지인가요?",
          answer: "전국 서비스가 가능합니다. 서울, 경기, 인천 등 수도권은 즉시 출동이 가능하며, 지방 지역은 협력 네트워크를 통해 서비스를 제공합니다. 구체적인 지역 문의는 전화 상담을 통해 확인해 드립니다."
        },
        {
          question: "출동까지 얼마나 걸리나요?",
          answer: "응급상황의 경우 평균 15분 내 출동합니다. 지역과 교통상황에 따라 다를 수 있지만, 최대한 신속하게 현장에 도착할 수 있도록 최선을 다하고 있습니다."
        },
        {
          question: "어떤 경우에 서비스를 이용할 수 있나요?",
          answer: "정신과 환자의 병원 이송이 필요한 모든 상황에서 이용 가능합니다. 응급입원, 병원 전원, 퇴원 후 이송, 정기 진료 이송 등 다양한 상황에 대응합니다."
        }
      ]
    },
    {
      title: "비용 및 결제",
      items: [
        {
          question: "서비스 비용은 어떻게 되나요?",
          answer: "이송 거리, 시간대, 응급도 등에 따라 비용이 결정됩니다. 기본적으로 투명한 요금제를 운영하며, 상담 시 정확한 비용을 안내해 드립니다. 보험 적용 가능 여부도 함께 확인해 드립니다."
        },
        {
          question: "보험 적용이 가능한가요?",
          answer: "의료진 동반 이송의 경우 건강보험 적용이 가능한 경우가 많습니다. 보험 적용 여부와 본인부담금은 환자의 상태, 이송 사유 등에 따라 달라지므로 상담 시 자세히 안내해 드립니다."
        },
        {
          question: "결제 방법은 어떻게 되나요?",
          answer: "현금, 카드, 계좌이체 등 다양한 결제 방법을 지원합니다. 응급상황의 경우 서비스 이용 후 결제도 가능하니 비용 걱정 없이 우선 연락해 주세요."
        }
      ]
    },
    {
      title: "전문성 및 안전",
      items: [
        {
          question: "어떤 의료진이 동반하나요?",
          answer: "정신과 전문의, 정신과 전문 간호사, 응급구조사 등 정신과 환자 이송에 특화된 전문 의료진이 동반합니다. 환자 상태에 따라 최적의 의료진을 배정합니다."
        },
        {
          question: "환자 안전은 어떻게 보장되나요?",
          answer: "체계적인 이송 프로토콜, 최신 의료장비, 실시간 생체 모니터링 등을 통해 환자 안전을 최우선으로 합니다. 10년 이상의 경험과 무사고 운영 기록이 있습니다."
        },
        {
          question: "환자가 비협조적인 경우에도 이송 가능한가요?",
          answer: "네, 정신과 환자 이송 전문 경험을 바탕으로 비협조적인 환자도 안전하게 이송합니다. 적절한 진정 처치와 안전 장비를 활용하여 환자와 가족 모두의 안전을 보장합니다."
        }
      ]
    },
    {
      title: "절차 및 준비사항",
      items: [
        {
          question: "이송 신청 시 필요한 서류가 있나요?",
          answer: "기본적으로 환자 신분증, 보험증, 진료 관련 서류가 필요합니다. 응급상황의 경우 서류가 미비해도 우선 이송 후 추후 보완이 가능하니 걱정하지 마세요."
        },
        {
          question: "가족이 함께 동행할 수 있나요?",
          answer: "네, 가능합니다. 환자 상태와 차량 상황을 고려하여 1-2명의 보호자가 함께 동행할 수 있습니다. 상담 시 미리 말씀해 주시면 준비해 드립니다."
        },
        {
          question: "병원 예약은 저희가 해야 하나요?",
          answer: "병원 예약이 되어 있으면 좋지만, 응급상황의 경우 저희가 병원과 연락하여 입원 절차를 도와드립니다. 평소 다니던 병원이 있으시면 미리 알려주세요."
        }
      ]
    }
  ]

  const allFAQs = faqCategories.flatMap((category, categoryIndex) => 
    category.items.map((item, itemIndex) => ({
      ...item,
      categoryTitle: category.title,
      id: categoryIndex * 100 + itemIndex
    }))
  )

  const filteredFAQs = allFAQs.filter(
    faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

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
              자주 묻는 질문
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              정신과 환자 전문 이송 서비스에 대한 궁금한 점들을 
              정리해 두었습니다. 찾으시는 답변이 없으시면 언제든지 연락해 주세요.
            </p>

            {/* 긴급 연락처 */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
                <Phone className="h-8 w-8" />
                <span>010-9070-9720</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>24시간 상담 가능</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="궁금한 내용을 검색해보세요..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            /* 검색 결과 */
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                '{searchTerm}' 검색 결과 ({filteredFAQs.length}개)
              </h2>
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border border-gray-200 rounded-lg"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <div>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                          {faq.categoryTitle}
                        </span>
                        <h3 className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </h3>
                      </div>
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                {filteredFAQs.length === 0 && (
                  <div className="text-center py-8">
                    <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">검색 결과가 없습니다.</p>
                    <p className="text-sm text-gray-400 mt-2">
                      다른 키워드로 검색하시거나 직접 문의해 주세요.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* 카테고리별 FAQ */
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const itemId = categoryIndex * 100 + itemIndex
                      return (
                        <div key={itemIndex} className="border border-gray-200 rounded-lg">
                          <button
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                            onClick={() => toggleItem(itemId)}
                          >
                            <h3 className="text-lg font-medium text-gray-900 pr-4">
                              {item.question}
                            </h3>
                            {openItems.includes(itemId) ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          <AnimatePresence>
                            {openItems.includes(itemId) && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                                  {item.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              언제든지 연락해 주세요. 전문 상담원이 친절하게 답변드리겠습니다.
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
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.location.href = '/contact'}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                온라인 상담신청
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}