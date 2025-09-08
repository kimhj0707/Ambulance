"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 rounded-lg p-2">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">
                정신과환자 전문구급차
              </div>
              <div className="text-sm text-gray-600">24시간 상담 서비스</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              홈
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              서비스 안내
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              회사 소개
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              상담 신청
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-600">24시간 상담</div>
              <div className="text-lg font-bold text-red-600">010-9070-9720</div>
            </div>
            <Button>
              <Phone className="h-4 w-4 mr-2" />
              상담받기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  홈
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  서비스 안내
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  회사 소개
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  상담 신청
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-600">24시간 상담</div>
                    <div className="text-xl font-bold text-red-600">010-9070-9720</div>
                  </div>
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    지금 상담받기
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}