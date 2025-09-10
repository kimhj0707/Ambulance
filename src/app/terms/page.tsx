"use client"

import { Button } from "@/components/ui/button"
import {
  Phone,
  Clock,
  ArrowLeft,
  Scale,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsPage() {
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
            <div className="flex items-center justify-center mb-6">
              <Scale className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              이용약관
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              정신과환자 전문구급차 서비스 이용에 관한 약관입니다. 서비스 이용
              전 반드시 확인해 주세요.
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

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  시행일자 및 적용범위
                </h2>
              </div>
              <p className="text-gray-700">
                본 이용약관은 <strong>2025년 9월 8일</strong>부터 시행되며,
                정신과환자 전문구급차가 제공하는 모든 서비스에 적용됩니다.
              </p>
            </div>

            <div className="space-y-12">
              {/* 제1조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제1조 (목적 및 정의)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">1. 목적</h3>
                    <p>
                      본 약관은 정신과환자 전문구급차(이하 "회사")가 제공하는
                      정신과 환자 전문 이송 서비스의 이용과 관련하여 회사와
                      이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로
                      합니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">2. 정의</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div>
                        <span className="font-medium text-blue-600">회사:</span>
                        <span className="ml-2">
                          정신과환자 전문구급차를 말합니다.
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-blue-600">
                          이용자:
                        </span>
                        <span className="ml-2">
                          회사의 서비스를 이용하는 환자, 보호자, 의료기관을
                          말합니다.
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-blue-600">
                          이송 서비스:
                        </span>
                        <span className="ml-2">
                          정신과 환자의 안전한 의료기관 이송을 위한 전문
                          서비스를 말합니다.
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-blue-600">
                          의료진:
                        </span>
                        <span className="ml-2">
                          회사와 계약된 정신과 전문의, 간호사, 응급구조사를
                          말합니다.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제2조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제2조 (서비스의 내용 및 범위)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>회사가 제공하는 서비스의 내용은 다음과 같습니다:</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h3 className="font-semibold text-green-900">
                          포함 서비스
                        </h3>
                      </div>
                      <ul className="text-sm space-y-2">
                        <li>• 24시간 응급 이송 서비스</li>
                        <li>• 정신과 전문 의료진 동반</li>
                        <li>• 안전장비 및 의료장비 제공</li>
                        <li>• 병원 간 전원 서비스</li>
                        <li>• 가족 상담 및 안내</li>
                        <li>• 보험 청구 지원</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <h3 className="font-semibold text-red-900">
                          제외 서비스
                        </h3>
                      </div>
                      <ul className="text-sm space-y-2">
                        <li>• 의료진단 및 처방</li>
                        <li>• 정신과 치료 행위</li>
                        <li>• 입원 절차 대행</li>
                        <li>• 약물 처방 및 투여</li>
                        <li>• 법적 대리 행위</li>
                        <li>• 장기간 간병 서비스</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제3조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제3조 (서비스 이용 신청 및 승낙)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">1. 이용 신청</h3>
                    <p>
                      서비스 이용을 원하는 자는 다음 방법으로 신청할 수
                      있습니다:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>전화 신청: 010-9070-9720 (24시간)</li>
                      <li>온라인 신청: 홈페이지 상담 신청 폼</li>
                      <li>의료기관을 통한 신청</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      2. 신청 시 필요 정보
                    </h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <ul className="list-disc list-inside space-y-1">
                        <li>환자 기본 정보 (성명, 나이, 성별)</li>
                        <li>보호자 연락처</li>
                        <li>출발지 및 목적지 주소</li>
                        <li>환자 상태 및 응급도</li>
                        <li>보험 정보 (해당 시)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      3. 서비스 거부 사유
                    </h3>
                    <p>다음의 경우 서비스 제공을 거부할 수 있습니다:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>허위 정보 제공 시</li>
                      <li>의료진 안전에 심각한 위험이 예상되는 경우</li>
                      <li>법령 위반이 예상되는 요청</li>
                      <li>기술적, 물리적으로 서비스 제공이 불가능한 지역</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 제4조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제4조 (이용료금 및 결제)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">1. 요금 체계</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li>
                          <strong>기본료:</strong> 거리 및 시간에 따른 기본
                          이송비
                        </li>
                        <li>
                          <strong>의료진 동반료:</strong> 전문의, 간호사 동반 시
                          추가 비용
                        </li>
                        <li>
                          <strong>야간/휴일 할증:</strong> 22시~06시, 공휴일 20%
                          할증
                        </li>
                        <li>
                          <strong>응급 할증:</strong> 응급상황 시 30% 할증
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">2. 결제 방법</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>현금 결제</li>
                      <li>신용카드/체크카드</li>
                      <li>계좌이체</li>
                      <li>보험 직불 (가능 시)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">3. 환불 정책</h3>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li>
                          <strong>출동 전 취소:</strong> 수수료 없이 100% 환불
                        </li>
                        <li>
                          <strong>출동 후 환자 사정으로 취소:</strong> 기본료의
                          50% 청구
                        </li>
                        <li>
                          <strong>회사 사정으로 취소:</strong> 100% 환불 + 대안
                          제시
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제5조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제5조 (이용자의 의무)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>이용자는 다음의 의무를 준수해야 합니다:</p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">📋 정보 제공 의무</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>정확한 환자 정보 및 상태 제공</li>
                        <li>응급도에 대한 솔직한 고지</li>
                        <li>특이사항 및 위험요소 사전 통보</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🤝 협조 의무</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>의료진의 안전 지시 사항 준수</li>
                        <li>이송 과정에서의 적극적 협조</li>
                        <li>약정된 시간 및 장소 준수</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">💰 결제 의무</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>서비스 이용료의 정당한 지급</li>
                        <li>추가 발생 비용에 대한 인정</li>
                        <li>보험 처리 관련 서류 제출</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제6조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제6조 (회사의 의무 및 책임)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      1. 서비스 제공 의무
                    </h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li>• 전문적이고 안전한 이송 서비스 제공</li>
                        <li>• 24시간 응급 대응 체계 유지</li>
                        <li>• 적절한 의료장비 및 안전장비 구비</li>
                        <li>• 숙련된 전문 의료진 배치</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      2. 개인정보 보호 의무
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>개인정보보호법에 따른 개인정보 보호</li>
                      <li>의료정보의 비밀 유지</li>
                      <li>제3자 정보 제공 시 사전 동의 획득</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      3. 책임의 범위
                    </h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="font-medium mb-2">
                        회사는 다음에 대해 책임을 집니다:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>이송 과정에서의 안전사고</li>
                        <li>의료진의 과실로 인한 손해</li>
                        <li>약정된 서비스 불이행</li>
                      </ul>
                      <p className="font-medium mt-4 mb-2">
                        단, 다음의 경우 책임을 지지 않습니다:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>천재지변 등 불가항력적 사유</li>
                        <li>이용자의 고의 또는 중과실</li>
                        <li>환자의 기존 질환 악화</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제7조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제7조 (분쟁해결 및 준거법)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      1. 분쟁해결 절차
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium">협의</h4>
                          <p className="text-sm text-gray-600">
                            당사자 간 직접 협의를 통한 해결 시도
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium">조정</h4>
                          <p className="text-sm text-gray-600">
                            관련 기관의 조정 절차 활용
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium">소송</h4>
                          <p className="text-sm text-gray-600">
                            관할 법원을 통한 최종 해결
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      2. 준거법 및 관할법원
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li>
                          <strong>준거법:</strong> 대한민국 법령
                        </li>
                        <li>
                          <strong>관할법원:</strong> 회사 소재지 관할법원
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제8조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제8조 (약관의 변경)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    회사는 관련 법령에 위배되지 않는 범위에서 본 약관을 변경할
                    수 있습니다. 약관이 변경되는 경우 변경 사유 및 적용일자를
                    명시하여 시행 7일 전부터 홈페이지에 공지합니다.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">📅 약관 변경 이력</h3>
                    <ul className="text-sm space-y-1">
                      <li>• 2025.01.01: 이용약관 최초 제정</li>
                    </ul>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    ※ 변경된 약관은 공지 후 이의제기가 없으면 동의한 것으로
                    봅니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                📞 문의 및 상담
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p>
                    <strong>24시간 상담전화:</strong> 010-9070-9720
                  </p>
                  <p>
                    <strong>이메일:</strong> info@ambulance-service.com
                  </p>
                </div>
                <div>
                  <p>
                    <strong>팩스:</strong> 02-1234-5678
                  </p>
                  <p>
                    <strong>홈페이지:</strong> www.ambulance-service.com
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <Link href="/">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
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
