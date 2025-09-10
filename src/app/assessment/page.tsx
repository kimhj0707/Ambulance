"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import EmergencyAssessment, { type MedicalTeam, type EmergencyCase } from '@/components/medical/EmergencyAssessment'
import { ArrowLeft, Brain, Activity, Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AssessmentPage() {
  const [isAssessmentStarted, setIsAssessmentStarted] = useState(false)
  const [assignedTeam, setAssignedTeam] = useState<MedicalTeam | null>(null)
  const [emergencyCase, setEmergencyCase] = useState<EmergencyCase | null>(null)

  const handleTeamAssigned = (team: MedicalTeam, assessment: EmergencyCase) => {
    setAssignedTeam(team)
    setEmergencyCase(assessment)
  }

  const handleStartAssessment = () => {
    setIsAssessmentStarted(true)
  }

  const handleNewAssessment = () => {
    setIsAssessmentStarted(false)
    setAssignedTeam(null)
    setEmergencyCase(null)
  }

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
                <Brain className="h-12 w-12 text-blue-600" />
              </div>
              <div className="bg-red-100 p-4 rounded-full">
                <Activity className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              🧠 AI 응급도 평가 시스템
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              인공지능을 활용한 정확한 응급도 판정과 
              <span className="font-semibold text-blue-600"> 최적 전문의료진 자동 매칭</span> 서비스입니다.
            </p>
            
            {/* 긴급 연락처 */}
            <div className="mt-8 bg-red-100 border-2 border-red-200 rounded-lg p-6 inline-block">
              <div className="text-red-800 text-sm font-medium mb-3">
                🚨 생명 위험 시 즉시 연락
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-2xl font-bold text-red-600">
                  <Phone className="h-8 w-8" />
                  <span>010-9070-9720</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Activity className="h-4 w-4" />
                  <span>24시간 응급상담</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {!isAssessmentStarted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                AI 응급도 평가 시작하기
              </h2>
              
              {/* AI 시스템 소개 */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="text-blue-600 text-3xl mb-3">🤖</div>
                  <h3 className="font-semibold mb-2">AI 분석</h3>
                  <p className="text-sm text-gray-600">
                    증상 패턴을 분석하여 정확한 응급도를 판정합니다
                  </p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <div className="text-green-600 text-3xl mb-3">👨‍⚕️</div>
                  <h3 className="font-semibold mb-2">전문의 매칭</h3>
                  <p className="text-sm text-gray-600">
                    환자 상태에 가장 적합한 전문의료진을 자동 배정합니다
                  </p>
                </div>
                <div className="p-6 bg-purple-50 rounded-lg">
                  <div className="text-purple-600 text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold mb-2">신속 대응</h3>
                  <p className="text-sm text-gray-600">
                    골든타임을 지키는 최단시간 배정 시스템입니다
                  </p>
                </div>
              </div>

              {/* 사용 방법 */}
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">평가 진행 과정</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                    <div className="text-sm font-medium">증상 선택</div>
                    <div className="text-xs text-gray-500">현재 증상들을 체크</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                    <div className="text-sm font-medium">AI 분석</div>
                    <div className="text-xs text-gray-500">응급도 자동 판정</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                    <div className="text-sm font-medium">의료진 매칭</div>
                    <div className="text-xs text-gray-500">최적 팀 자동 선별</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                    <div className="text-sm font-medium">팀 배정</div>
                    <div className="text-xs text-gray-500">즉시 출동 준비</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleStartAssessment}
                  size="lg"
                  className="text-lg px-8"
                >
                  <Brain className="h-5 w-5 mr-2" />
                  AI 응급도 평가 시작
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8"
                  onClick={() => window.location.href = 'tel:010-9070-9720'}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  즉시 전화상담
                </Button>
              </div>
            </motion.div>
          ) : assignedTeam ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* 배정 완료 헤더 */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-4xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  전문 의료진 배정 완료!
                </h2>
                <p className="text-green-700">
                  AI 분석 결과에 따라 최적의 의료진이 배정되어 출동 준비 중입니다.
                </p>
              </div>

              {/* 배정된 팀 정보 */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  🚑 배정된 의료진: {assignedTeam.id}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">👨‍⚕️ 담당 전문의</h4>
                    <div className="space-y-1">
                      <div className="font-medium">{assignedTeam.doctor.name}</div>
                      <div className="text-sm text-gray-600">{assignedTeam.doctor.specialty}</div>
                      <div className="text-xs text-gray-500">경력 {assignedTeam.doctor.experience}년</div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {assignedTeam.doctor.certifications.slice(0, 2).map(cert => (
                          <span key={cert} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">👩‍⚕️ 담당 간호사</h4>
                    <div className="space-y-1">
                      <div className="font-medium">{assignedTeam.nurse.name}</div>
                      <div className="text-sm text-gray-600">{assignedTeam.nurse.specialty}</div>
                      <div className="text-xs text-gray-500">경력 {assignedTeam.nurse.experience}년</div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {assignedTeam.nurse.certifications.slice(0, 2).map(cert => (
                          <span key={cert} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 예상 도착 시간 */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Activity className="h-6 w-6 text-yellow-600" />
                    <div>
                      <div className="font-semibold text-yellow-800">
                        예상 도착 시간: {assignedTeam.responseTime}분
                      </div>
                      <div className="text-sm text-yellow-700">
                        현재 위치: {assignedTeam.currentLocation.address}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 응급도 정보 */}
                {emergencyCase && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-red-800 mb-2">📊 AI 분석 결과</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-red-600 mb-1">응급도</div>
                        <div className="font-medium">{
                          emergencyCase.severity === 'critical' ? '🚨 위급' :
                          emergencyCase.severity === 'urgent' ? '⚠️ 응급' :
                          emergencyCase.severity === 'moderate' ? '🔶 준응급' : '🔵 일반'
                        }</div>
                      </div>
                      <div>
                        <div className="text-sm text-red-600 mb-1">주요 증상</div>
                        <div className="text-sm">{emergencyCase.symptoms.slice(0, 2).join(', ')}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 실시간 추적 링크 */}
                <div className="text-center mb-6">
                  <Link href="/tracking">
                    <Button className="w-full sm:w-auto">
                      📍 실시간 위치 추적하기
                    </Button>
                  </Link>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">📞 긴급 연락처</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    onClick={() => window.location.href = 'tel:010-9070-9720'}
                  >
                    <Phone className="h-4 w-4" />
                    긴급 전화: 010-9070-9720
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    onClick={() => window.open('https://pf.kakao.com/_정신과전문구급차', '_blank')}
                  >
                    <MessageCircle className="h-4 w-4" />
                    카톡 상담
                  </Button>
                </div>
              </div>

              {/* 새 평가 버튼 */}
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={handleNewAssessment}
                  className="text-gray-600"
                >
                  새로운 평가 시작하기
                </Button>
              </div>
            </motion.div>
          ) : (
            <EmergencyAssessment onTeamAssigned={handleTeamAssigned} />
          )}
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
              AI 응급도 평가 시스템의 장점
            </h2>
            <p className="text-lg text-gray-600">
              최신 인공지능 기술로 더 정확하고 신속한 응급의료 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">정확한 분석</h3>
              <p className="text-gray-600">
                수천 건의 임상 데이터를 학습한 AI가 
                정확한 응급도를 판정합니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">신속한 매칭</h3>
              <p className="text-gray-600">
                실시간으로 가용한 전문의료진 중 
                최적의 팀을 즉시 배정합니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24시간 대응</h3>
              <p className="text-gray-600">
                언제든지 AI 평가 시스템을 통해 
                전문 응급의료 서비스를 받을 수 있습니다
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
              지금 바로 AI 응급도 평가를 받아보세요
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              정확한 진단과 신속한 전문의료진 배정으로 소중한 생명을 지킵니다
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={handleStartAssessment}
              >
                <Brain className="h-5 w-5 mr-2" />
                AI 평가 시작하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8"
                onClick={() => window.location.href = 'tel:010-9070-9720'}
              >
                <Phone className="h-5 w-5 mr-2" />
                즉시 전화상담
              </Button>
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