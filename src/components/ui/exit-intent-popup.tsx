"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, X, Clock, AlertTriangle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && 
        !hasShown && 
        !showPopup &&
        window.scrollY > 300 // 사용자가 페이지를 어느정도 스크롤한 후
      ) {
        setShowPopup(true)
        setHasShown(true)
      }
    }

    // 모바일에서는 5초 후 자동으로 팝업 표시
    const mobileTimer = setTimeout(() => {
      if (!hasShown && window.innerWidth <= 768) {
        setShowPopup(true)
        setHasShown(true)
      }
    }, 5000)

    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [hasShown, showPopup])

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleCall = () => {
    window.location.href = 'tel:010-9070-9720'
    setShowPopup(false)
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* 팝업 컨테이너 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 닫기 버튼 */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* 헤더 */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-pulse">🚨</div>
                <h2 className="text-2xl font-bold text-red-600 mb-2">
                  잠시만요!
                </h2>
                <p className="text-lg text-gray-800">
                  혼자 고민하지 마세요
                </p>
              </div>

              {/* 메시지 */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-red-800 text-sm leading-relaxed">
                      지금 이 순간도 힘드시죠? 
                      <span className="font-semibold block mt-1">
                        15분만 기다려주시면 전문팀이 달려갑니다.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 전화번호 */}
              <div className="bg-red-600 text-white rounded-lg p-6 text-center mb-6 animate-pulse">
                <div className="text-3xl font-bold mb-2">010-9070-9720</div>
                <div className="text-red-100 text-sm">👆 터치하면 바로 연결</div>
              </div>

              {/* 버튼들 */}
              <div className="space-y-3">
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="w-full text-xl py-4 bg-red-600 hover:bg-red-700 text-white font-bold transform hover:scale-105 transition-all duration-200 animate-bounce"
                >
                  <Phone className="h-6 w-6 mr-3 animate-bounce" />
                  지금 바로 전화하기
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>평균 15분 내 도착 | 24시간 운영</span>
                </div>

                <Button
                  onClick={handleClose}
                  variant="ghost"
                  size="sm"
                  className="w-full text-gray-500 hover:text-gray-700"
                >
                  나중에 할게요
                </Button>
              </div>

              {/* 신뢰도 지표 */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-xs text-gray-600">
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">10년</div>
                    <div>경험</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">무사고</div>
                    <div>기록</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">24시간</div>
                    <div>운영</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-orange-600">전문팀</div>
                    <div>출동</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}