"use client"

import { Button } from "@/components/ui/button"
import {
  Phone,
  Clock,
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileText,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPage() {
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
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              개인정보 처리방침
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              저희는 고객님의 개인정보를 소중히 여기며, 관련 법령에 따라
              안전하게 보호하고 있습니다.
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

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  시행일자
                </h2>
              </div>
              <p className="text-gray-700">
                본 개인정보 처리방침은 <strong>2025년 9월 8일</strong>부터
                시행됩니다.
              </p>
            </div>

            <div className="space-y-12">
              {/* 제1조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제1조 (개인정보의 처리목적)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    저희 정신과환자 전문구급차는 다음의 목적을 위하여 개인정보를
                    처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
                    용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
                    개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한
                    조치를 이행할 예정입니다.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>응급 이송 서비스 제공 및 상담</li>
                    <li>서비스 이용에 따른 본인 식별·인증</li>
                    <li>이송 서비스 예약 및 일정 관리</li>
                    <li>의료진 배정 및 이송 계획 수립</li>
                    <li>서비스 품질 개선 및 고객 만족도 조사</li>
                    <li>법정 의무 이행 (의료법, 응급의료법 등)</li>
                  </ul>
                </div>
              </div>

              {/* 제2조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제2조 (처리하는 개인정보 항목)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>저희가 처리하는 개인정보 항목은 다음과 같습니다:</p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">📋 필수 수집 항목</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>성명, 연락처(휴대폰번호)</li>
                      <li>이송 대상자 정보 (성명, 나이, 성별)</li>
                      <li>이송 출발지 및 도착지 주소</li>
                      <li>응급도 및 환자 상태 정보</li>
                      <li>보험정보 (건강보험증 번호 등)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">📝 선택 수집 항목</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>이메일 주소</li>
                      <li>특이사항 및 요청사항</li>
                      <li>보호자 정보</li>
                      <li>이전 병력 정보 (서비스 품질 향상용)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 제3조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제3조 (개인정보의 처리 및 보유기간)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    저희는 법령에 따른 개인정보 보유·이용기간 또는
                    정보주체로부터 개인정보를 수집 시에 동의받은 개인정보
                    보유·이용기간 내에서 개인정보를 처리·보유합니다.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3 text-blue-900">
                      ⏰ 보유기간
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        <strong>이송 서비스 기록:</strong> 5년 보관 (의료법에
                        따름)
                      </li>
                      <li>
                        <strong>상담 기록:</strong> 3년 보관
                      </li>
                      <li>
                        <strong>결제 정보:</strong> 5년 보관 (전자상거래법에
                        따름)
                      </li>
                      <li>
                        <strong>마케팅 동의:</strong> 동의 철회 시까지
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 제4조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제4조 (개인정보의 제3자 제공)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    저희는 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법
                    제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h3 className="font-semibold mb-3 text-yellow-900">
                      🏥 제공받는 자
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        <strong>의료기관:</strong> 환자 이송 및 치료를 위한 필수
                        정보
                      </li>
                      <li>
                        <strong>응급의료센터:</strong> 응급상황 시 생명구조를
                        위한 정보
                      </li>
                      <li>
                        <strong>보험회사:</strong> 보험 청구 및 정산을 위한 정보
                      </li>
                      <li>
                        <strong>관계기관:</strong> 법령에 따른 수사기관 요청 시
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 제5조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제5조 (정보주체의 권리·의무 및 행사방법)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    정보주체는 언제든지 다음과 같은 개인정보 보호 관련 권리를
                    행사할 수 있습니다:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="h-5 w-5 text-green-600" />
                        <h3 className="font-semibold text-green-900">열람권</h3>
                      </div>
                      <p className="text-sm">
                        개인정보 처리현황을 확인할 수 있습니다.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-900">
                          정정·삭제권
                        </h3>
                      </div>
                      <p className="text-sm">
                        잘못된 정보의 수정이나 삭제를 요구할 수 있습니다.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Lock className="h-5 w-5 text-purple-600" />
                        <h3 className="font-semibold text-purple-900">
                          처리정지권
                        </h3>
                      </div>
                      <p className="text-sm">
                        개인정보 처리 중단을 요구할 수 있습니다.
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="h-5 w-5 text-red-600" />
                        <h3 className="font-semibold text-red-900">
                          손해배상권
                        </h3>
                      </div>
                      <p className="text-sm">
                        개인정보 침해로 인한 손해배상을 청구할 수 있습니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold mb-2">📞 권리 행사 방법</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>전화: 010-9070-9720</li>
                      <li>이메일: privacy@ambulance-service.com</li>
                      <li>방문: 사전 연락 후 본사 방문</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 제6조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제6조 (개인정보 보호책임자)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    저희는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                    개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를
                    위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-blue-900 mb-4">
                      👤 개인정보 보호책임자
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p>
                          <strong>성명:</strong> 김은정
                        </p>
                        <p>
                          <strong>직책:</strong> 대표이사
                        </p>
                        <p>
                          <strong>연락처:</strong> 010-9070-9720
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>이메일:</strong> privacy@ambulance-service.com
                        </p>
                        <p>
                          <strong>팩스:</strong> 02-1234-5678
                        </p>
                        <p>
                          <strong>처리부서:</strong> 개인정보보호팀
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    ※ 정보주체께서는 저희의 서비스를 이용하시면서 발생한 모든
                    개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
                    개인정보 보호책임자에게 문의하실 수 있습니다.
                  </p>
                </div>
              </div>

              {/* 제7조 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제7조 (개인정보 처리방침 변경)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에
                    따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
                    변경사항의 시행 7일 전부터 공지사항을 통하여 고지할
                    것입니다.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">📅 변경 이력</h3>
                    <ul className="text-sm space-y-1">
                      <li>• 2025.01.01: 개인정보 처리방침 최초 제정</li>
                    </ul>
                  </div>
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
