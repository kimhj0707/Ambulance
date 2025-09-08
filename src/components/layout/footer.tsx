import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 rounded-lg p-2">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">정신과환자 전문구급차</div>
                <div className="text-sm text-gray-400">전문성과 신뢰의 이송 서비스</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              정신과 환자와 가족의 어려운 상황을 이해하고, 
              전문성과 인간적인 배려를 바탕으로 최선의 서비스를 제공합니다.
            </p>
            
            {/* 24시간 연락처 강조 */}
            <div className="bg-red-600 rounded-lg p-4 inline-block">
              <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6" />
                <div>
                  <div className="text-sm">24시간 상담 문의</div>
                  <div className="text-2xl font-bold">010-9070-9720</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  서비스 안내
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  회사 소개
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  상담 신청
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">010-9070-9720</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">info@ambulance-service.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">전국 서비스 가능</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">24시간 연중무휴</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 정신과환자 전문구급차. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}