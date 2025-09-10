"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // 페이지 로드 후 3초 뒤에 버튼 표시
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    // 5초마다 확장 애니메이션
    const expandTimer = setInterval(() => {
      if (isVisible) {
        setIsExpanded(true)
        setTimeout(() => setIsExpanded(false), 3000)
      }
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearInterval(expandTimer)
    }
  }, [isVisible])

  const handleCall = () => {
    window.location.href = 'tel:010-9070-9720'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {/* 확장된 상태 */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ scale: 0, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0, opacity: 0, x: 20 }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap"
              >
                <div className="text-sm font-bold">망설이지 마세요!</div>
                <div className="text-xs text-red-100">15분 내 전문팀 출동</div>
                {/* 말풍선 꼬리 */}
                <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-8 border-l-red-600 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 메인 버튼 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: isExpanded ? 1.1 : 1,
              boxShadow: isExpanded ? 
                "0 0 30px rgba(220, 38, 38, 0.6)" : 
                "0 10px 25px rgba(0, 0, 0, 0.2)"
            }}
            className="relative"
          >
            <Button
              onClick={handleCall}
              size="lg"
              className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-2xl animate-pulse"
            >
              <Phone className="h-8 w-8 animate-bounce" />
            </Button>

            {/* 펄스 애니메이션 링 */}
            <div className="absolute inset-0 rounded-full border-4 border-red-600 animate-ping opacity-30"></div>
            <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
          </motion.div>

          {/* 전화번호 표시 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          >
            010-9070-9720
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}