"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, AlertTriangle, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const emergencyChecklist = [
  {
    category: "즉시 전화 (생명 위험)",
    color: "red",
    items: [
      "자해를 시도하거나 자살을 말하고 있다",
      "타인을 해치겠다고 협박하거나 폭력을 행사한다", 
      "의식을 잃었거나 응답하지 않는다",
      "과도한 약물을 복용했다",
      "심한 환각이나 망상으로 위험한 행동을 한다"
    ]
  },
  {
    category: "15분 내 전화 (응급상황)",
    color: "orange", 
    items: [
      "갑자기 극도로 흥분하거나 공격적이 되었다",
      "병원 가기를 완강히 거부하며 상태가 악화되고 있다",
      "가족이나 주변을 무서워하며 집을 나가려 한다",
      "며칠째 잠을 자지 않고 이상한 행동을 한다",
      "평소와 전혀 다른 말이나 행동을 계속한다"
    ]
  },
  {
    category: "1시간 내 상담 (준응급)",
    color: "yellow",
    items: [
      "우울해하며 활동을 전혀 하지 않는다", 
      "식사를 거부하거나 개인위생을 포기했다",
      "계속해서 불안해하며 떨고 있다",
      "환청이 들린다고 하지만 위험하지는 않다",
      "기분 변화가 심하고 예측할 수 없다"
    ]
  }
]

export default function EmergencyCheckPage() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const toggleItem = (item: string) => {
    setCheckedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    )
  }

  const getUrgencyLevel = () => {
    const redItems = emergencyChecklist[0].items.filter(item => checkedItems.includes(item))
    const orangeItems = emergencyChecklist[1].items.filter(item => checkedItems.includes(item))
    const yellowItems = emergencyChecklist[2].items.filter(item => checkedItems.includes(item))

    if (redItems.length > 0) return "immediate"
    if (orangeItems.length > 0) return "urgent" 
    if (yellowItems.length > 0) return "soon"
    return "normal"
  }

  const urgencyLevel = getUrgencyLevel()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              <span className="text-red-600">응급상황 체크리스트</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              현재 상황에 해당하는 항목들을 체크해주세요.<br/>
              <span className="font-bold text-red-600">체크 결과에 따라 즉시 전화 안내</span>를 받으실 수 있습니다.
            </p>
            
            {/* 긴급 전화번호 */}
            <div className="bg-red-600 text-white p-4 rounded-lg inline-block animate-pulse">
              <div className="text-2xl font-bold">긴급상황 시 즉시 전화</div>
              <div className="text-3xl font-bold mt-2">010-9070-9720</div>
            </div>
          </div>
        </div>
      </section>

      {/* 체크리스트 */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {emergencyChecklist.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${
                  category.color === 'red' ? 'border-red-500' :
                  category.color === 'orange' ? 'border-orange-500' : 
                  'border-yellow-500'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className={`h-6 w-6 ${
                    category.color === 'red' ? 'text-red-500' :
                    category.color === 'orange' ? 'text-orange-500' : 
                    'text-yellow-500'
                  }`} />
                  <h2 className={`text-2xl font-bold ${
                    category.color === 'red' ? 'text-red-600' :
                    category.color === 'orange' ? 'text-orange-600' : 
                    'text-yellow-600'
                  }`}>
                    {category.category}
                  </h2>
                </div>

                <div className="grid gap-3">
                  {category.items.map((item, itemIndex) => (
                    <label 
                      key={itemIndex}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={checkedItems.includes(item)}
                        onChange={() => toggleItem(item)}
                        className={`mt-1 w-5 h-5 rounded ${
                          category.color === 'red' ? 'text-red-600 focus:ring-red-500' :
                          category.color === 'orange' ? 'text-orange-600 focus:ring-orange-500' :
                          'text-yellow-600 focus:ring-yellow-500'
                        }`}
                      />
                      <span className="text-gray-800 leading-relaxed">{item}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 체크 결과 */}
          {checkedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 bg-white rounded-xl shadow-2xl p-8 border-4 border-red-200"
            >
              {urgencyLevel === 'immediate' && (
                <div className="text-center">
                  <div className="text-6xl mb-4">🚨</div>
                  <h3 className="text-3xl font-bold text-red-600 mb-4">즉시 전화하세요!</h3>
                  <p className="text-xl text-gray-800 mb-6">
                    생명이 위험한 상황입니다.<br/>
                    1초라도 망설이지 말고 바로 연락주세요.
                  </p>
                  <Button 
                    size="lg"
                    className="text-3xl px-20 py-8 bg-red-600 hover:bg-red-700 animate-bounce"
                    onClick={() => window.location.href = 'tel:010-9070-9720'}
                  >
                    <Phone className="h-10 w-10 mr-4" />
                    010-9070-9720
                  </Button>
                </div>
              )}

              {urgencyLevel === 'urgent' && (
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-4">15분 내 전화하세요</h3>
                  <p className="text-xl text-gray-800 mb-6">
                    응급상황입니다. 상황이 더 악화되기 전에<br/>
                    전문팀에 연락해주세요.
                  </p>
                  <Button 
                    size="lg"
                    className="text-2xl px-16 py-6 bg-orange-600 hover:bg-orange-700 animate-pulse"
                    onClick={() => window.location.href = 'tel:010-9070-9720'}
                  >
                    <Phone className="h-8 w-8 mr-3" />
                    지금 바로 전화
                  </Button>
                </div>
              )}

              {urgencyLevel === 'soon' && (
                <div className="text-center">
                  <div className="text-6xl mb-4">⏰</div>
                  <h3 className="text-3xl font-bold text-yellow-600 mb-4">1시간 내 상담받으세요</h3>
                  <p className="text-xl text-gray-800 mb-6">
                    전문적인 상담이 필요한 상황입니다.<br/>
                    미루지 마시고 연락주세요.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="text-xl px-12 py-4 bg-yellow-600 hover:bg-yellow-700"
                      onClick={() => window.location.href = 'tel:010-9070-9720'}
                    >
                      <Phone className="h-6 w-6 mr-2" />
                      전화 상담
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="text-xl px-12 py-4"
                      onClick={() => window.location.href = '/contact'}
                    >
                      온라인 상담
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* 기본 연락처 */}
          <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              확실하지 않으시다면 언제든 연락하세요
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              전문 상담원이 상황을 정확히 판단해드립니다.
            </p>
            <Button 
              size="lg"
              className="text-xl px-12 py-4"
              onClick={() => window.location.href = 'tel:010-9070-9720'}
            >
              <Phone className="h-6 w-6 mr-2" />
              010-9070-9720
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}