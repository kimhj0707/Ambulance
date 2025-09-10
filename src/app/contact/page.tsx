"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loading } from "@/components/ui/loading"
import { Phone, Clock, MapPin, Mail, MessageSquare, User, FileText, Calendar, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    urgency: "일반",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 실제 서버 연동 시 API 호출
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/marcel-eberle-pZKCj9h10nI-unsplash.jpg"
            alt="Professional medical consultation"
            fill
            className="object-cover opacity-8"
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
              지금 바로 이송 신청하세요
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              혼자 감당하기 힘든 상황, 더 이상 혼자 견디지 마세요.
              전문팀이 24시간 대기하여 안전하고 신속한 이송 서비스를 제공합니다.
            </p>
            
            {/* 긴급 연락처 강조 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6 inline-block"
            >
              <div className="text-blue-800 text-sm font-medium mb-2">응급상황 시 즉시 연락</div>
              <div className="flex items-center gap-2 text-3xl font-bold text-blue-600">
                <Phone className="h-8 w-8" />
                <span>010-9070-9720</span>
              </div>
              <div className="text-blue-700 text-sm mt-2">24시간 연중무휴</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Background Image */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-96 opacity-10">
              <Image 
                src="/images/walter-dziemianczyk-EmXM5kcN3lw-unsplash.jpg"
                alt="Medical facility background"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">이송 서비스 신청</h2>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="text-amber-600 text-lg">💡</div>
                  <div>
                    <h3 className="font-medium text-amber-800 mb-1">보호자님, 이런 상황이시라면</h3>
                    <p className="text-amber-700 text-sm">
                      "병원 가자고 해도 안 간다고 하는데...", "갑자기 이상해졌는데 어떻게 해야 할지..."
                    </p>
                  </div>
                </div>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 inline mr-2" />
                        보호자 성함 *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="보호자 성함을 입력해주세요"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="h-4 w-4 inline mr-2" />
                        연락처 *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-2" />
                      이메일 주소
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 inline mr-2" />
                      현재 위치 *
                    </label>
                    <Input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="출발지 주소 (정확한 주소일수록 빠른 출동 가능)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 inline mr-2" />
                      상황의 긴급도 *
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                      required
                    >
                      <option value="응급">🚨 응급상황 (폭력/자해 위험 등)</option>
                      <option value="준응급">⚠️ 준응급 (병원 가기 거부하는 상황)</option>
                      <option value="일반">💙 일반 이송 (사전 계획된 병원 방문)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="h-4 w-4 inline mr-2" />
                      현재 상황 설명 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 resize-none"
                      placeholder="예: '아버지가 갑자기 이상한 말씀을 하시면서 병원 가는 것을 거부하고 계세요. 강제로 데려가려고 하니까 더 흥분하시고... 어떻게 해야 할지 모르겠습니다. 평소에 다니시던 ○○병원으로 모시고 싶습니다.'"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      💡 보호자님의 어려움과 환자 상태를 솔직하게 말씀해 주시면, 가장 적합한 방법으로 도움을 드리겠습니다.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="text-blue-600 text-lg">🤝</div>
                      <div>
                        <h3 className="font-medium text-blue-800 mb-1">보호자님께 약속드립니다</h3>
                        <p className="text-blue-700 text-sm">
                          • 신청 후 5분 내 전문 상담원이 연락드립니다<br/>
                          • 환자와 보호자 모두의 안전을 최우선으로 합니다<br/>
                          • 상황에 맞는 최적의 이송 방법을 제안해 드립니다
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loading size="sm" />
                        이송 신청 처리 중...
                      </>
                    ) : (
                      <>
                        <Phone className="h-5 w-5 mr-2" />
                        지금 바로 이송 신청하기
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-green-50 rounded-lg"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    이송 신청이 완료되었습니다
                  </h3>
                  <p className="text-green-700 mb-4">
                    전문 상담원이 5분 내에 연락드려 상황을 확인하고<br/>
                    가장 빠른 시간 내 출동하겠습니다.
                  </p>
                  <p className="text-sm text-green-600">
                    응급상황 시 010-9070-9720으로 즉시 연락해 주세요.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">지금 바로 연락하세요</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-blue-600 text-lg">⚡</div>
                  <div>
                    <h3 className="font-medium text-blue-800 mb-1">보호자님, 망설이지 마세요</h3>
                    <p className="text-blue-700 text-sm">
                      지금 이 순간도 힘들어하고 계실 보호자님의 마음을 잘 알고 있습니다.<br/>
                      전화 한 통으로 모든 것이 달라질 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">24시간 상담 전화</h3>
                      <p className="text-blue-600 text-2xl font-bold">010-9070-9720</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "어떻게 말해야 할지 모르겠어요." 괜찮습니다.<br/>
                    상황만 간단히 말씀해 주시면 저희가 알아서 도와드리겠습니다.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <Mail className="h-6 w-6 text-gray-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">이메일</h3>
                      <p className="text-gray-700">info@ambulance-service.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <MessageCircle className="h-6 w-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">카카오톡 상담</h3>
                      <p className="text-gray-700 mb-2">@정신과전문구급차</p>
                      <p className="text-sm text-gray-600">
                        전화하기 부담스러우시면 카카오톡으로도 상담 가능합니다.<br/>
                        "지금 상황이 이런데 어떻게 해야 할까요?" 언제든지 물어보세요.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-gray-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">서비스 지역</h3>
                      <p className="text-gray-700">전국 서비스 가능</p>
                      <p className="text-sm text-gray-600 mt-1">
                        서울, 경기, 인천 등 수도권은 즉시 출동 가능하며, 
                        지방 지역도 협력 네트워크를 통해 서비스를 제공합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <Clock className="h-6 w-6 text-gray-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">운영 시간</h3>
                      <p className="text-gray-700">24시간 연중무휴</p>
                      <p className="text-sm text-gray-600 mt-1">
                        응급상황은 언제든지, 일반 상담도 24시간 가능합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <Button
                  size="lg"
                  className="w-full text-lg"
                  onClick={() => window.location.href = 'tel:010-9070-9720'}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  지금 전화하기
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-lg bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-gray-900"
                  onClick={() => window.open('https://pf.kakao.com/_정신과전문구급차', '_blank')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카카오톡 상담하기
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-lg"
                  onClick={() => window.location.href = 'sms:010-9070-9720'}
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  문자 메시지 보내기
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Hours Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              보호자님, 혼자 견디지 마세요
            </h2>
            <p className="text-lg text-gray-600">
              "이런 일로 전화해도 될까요?" 걱정하지 마세요.<br/>
              어떤 상황이든 24시간 언제나 도움을 드릴 준비가 되어 있습니다.
            </p>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">이런 마음이시라면 지금 바로 연락하세요</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>• "어떻게 병원에 데려가야 할지 막막해요"</p>
                <p>• "혼자서는 도저히 감당이 안 되요"</p>
                <p>• "가족이 다칠까봐 무서워요"</p>
                <p>• "주변에 말하기도 어렵고..."</p>
                <p>• "이런 상황이 처음이라 어떻게 해야 할지..."</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">평일</h3>
              <p className="text-gray-600">24시간 운영</p>
              <p className="text-sm text-gray-500 mt-2">월요일 - 금요일</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">주말</h3>
              <p className="text-gray-600">24시간 운영</p>
              <p className="text-sm text-gray-500 mt-2">토요일 - 일요일</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">공휴일</h3>
              <p className="text-gray-600">24시간 운영</p>
              <p className="text-sm text-gray-500 mt-2">설날, 추석 포함 모든 공휴일</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}