"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loading } from "@/components/ui/loading"
import { Phone, Clock, MapPin, Mail, MessageSquare, User, FileText, Calendar } from "lucide-react"
import { motion } from "framer-motion"

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
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              상담 신청
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              전문 상담원이 24시간 대기하여 최적의 서비스를 제안드립니다.
              언제든지 편안하게 연락해 주세요.
            </p>
            
            {/* 긴급 연락처 강조 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 bg-red-50 border-2 border-red-200 rounded-lg p-6 inline-block"
            >
              <div className="text-red-800 text-sm font-medium mb-2">응급상황 시 즉시 연락</div>
              <div className="flex items-center gap-2 text-3xl font-bold text-red-600">
                <Phone className="h-8 w-8" />
                <span>010-9070-9720</span>
              </div>
              <div className="text-red-700 text-sm mt-2">24시간 연중무휴</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">온라인 상담 신청</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 inline mr-2" />
                        성함 *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="홍길동"
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
                      지역/위치
                    </label>
                    <Input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="서울시 강남구 또는 상세 주소"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 inline mr-2" />
                      응급도
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    >
                      <option value="응급">응급 (즉시 필요)</option>
                      <option value="준응급">준응급 (오늘 중)</option>
                      <option value="일반">일반 (상담 문의)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="h-4 w-4 inline mr-2" />
                      상세 내용
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 resize-none"
                      placeholder="환자 상태, 이송 희망 병원, 기타 요청사항 등을 자세히 적어주세요."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loading size="sm" />
                        상담 신청 중...
                      </>
                    ) : (
                      <>
                        <FileText className="h-5 w-5 mr-2" />
                        상담 신청하기
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
                    상담 신청이 완료되었습니다
                  </h3>
                  <p className="text-green-700 mb-4">
                    전문 상담원이 빠른 시간 내에 연락드리겠습니다.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h2>
              
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
                    언제든지 연락해 주세요. 전문 상담원이 24시간 대기하고 있습니다.
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
              언제든지 연락하세요
            </h2>
            <p className="text-lg text-gray-600">
              정신건강 위기 상황은 예고 없이 찾아옵니다. 
              저희는 24시간 준비되어 있습니다.
            </p>
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