import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import StructuredData from "@/components/schema/StructuredData"
import ExitIntentPopup from "@/components/ui/exit-intent-popup"
import FloatingCallButton from "@/components/ui/floating-call-button"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "정신과 환자 전문 구급차 서비스 - 24시간 응급 이송 | 전국 서비스",
    template: "%s | 정신과 전문 구급차"
  },
  description: "정신과 환자 전문 이송 서비스. 10년 경험 전문 의료진이 24시간 안전하게 모셔드립니다. 서울, 경기, 인천 전지역 서비스. ☎️ 010-9070-9720",
  keywords: [
    "정신과 환자 이송", 
    "정신과 구급차", 
    "정신과 응급상황",
    "24시간 정신과 상담",
    "자해 위험 응급상황",
    "정신과 환자 병원 이송",
    "서울 정신과 구급차",
    "경기도 정신과 이솨",
    "응급 정신과",
    "정신과 전문 의료진",
    "정신과 환자 거부",
    "전문 이송 서비스"
  ],
  authors: [{ name: "정신과 전문 구급차" }],
  creator: "정신과 전문 구급차 서비스",
  publisher: "정신과 전문 구급차 서비스",
  robots: "index, follow",
  
  // Open Graph for social media
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://your-domain.com',
    siteName: '정신과 전문 구급차 서비스',
    title: '정신과 환자 전문 구급차 - 24시간 안전 이송',
    description: '10년 경험 전문 의료진이 24시간 안전하게 정신과 환자를 모셔드립니다. 전국 서비스. 010-9070-9720',
    images: [
      {
        url: '/images/ambulance-1666012_1280.jpg',
        width: 1200,
        height: 630,
        alt: '정신과 전문 구급차 서비스'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '정신과 환자 전문 구급차 - 24시간 안전 이송',
    description: '10년 경험 전문 의료진이 24시간 안전하게 모셔드립니다. 전국 서비스.',
    images: ['/images/ambulance-1666012_1280.jpg']
  },
  
  // Additional metadata
  category: '의료 서비스',
  classification: '정신과 전문 이송 서비스',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="KR" />
        <meta name="geo.placename" content="대한민국" />
        <meta name="geo.position" content="37.5665;126.9780" />
        <meta name="ICBM" content="37.5665, 126.9780" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <StructuredData />
          <ExitIntentPopup />
          <FloatingCallButton />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
