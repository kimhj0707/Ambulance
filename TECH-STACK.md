# 기술 스택 (Tech Stack)

## 🎯 기술 스택 선정 기준
- **SEO 최적화**: 검색 엔진에서 쉽게 찾을 수 있도록
- **접근성**: 다양한 사용자가 쉽게 이용 가능
- **성능**: 빠른 로딩 속도
- **보안**: 민감한 개인정보 안전 처리
- **확장성**: 서비스 성장에 따른 확장 가능
- **유지보수**: 지속적인 개선과 관리 용이

## 🛠️ 프론트엔드

### Next.js 14 (App Router)
- **선택 이유**: SEO 최적화, 서버사이드 렌더링
- **주요 기능**: 페이지 라우팅, 이미지 최적화, API 라우트
- **버전**: 14.x (App Router 사용)

### TypeScript
- **선택 이유**: 타입 안전성, 개발 생산성 향상
- **적용 범위**: 전체 프로젝트

### Tailwind CSS
- **선택 이유**: 빠른 스타일링, 일관된 디자인 시스템
- **설정**: 커스텀 색상, 반응형 디자인

### Shadcn/ui
- **선택 이유**: 접근성 기반 컴포넌트, 커스터마이징 용이
- **주요 컴포넌트**: Button, Form, Modal, Card

### React Hook Form
- **선택 이유**: 폼 상태 관리, 유효성 검사
- **적용**: 상담 신청 폼, 연락처 폼

### Framer Motion
- **선택 이유**: 부드러운 애니메이션, 사용자 경험 개선
- **적용**: 페이지 전환, 버튼 호버 효과

## 🔧 백엔드 & 데이터베이스

### Supabase
- **선택 이유**: 빠른 개발, 실시간 기능, 인증 시스템
- **주요 기능**: 
  - PostgreSQL 데이터베이스
  - 실시간 구독
  - 파일 저장소
  - 인증 시스템 (필요시)

### Nodemailer
- **선택 이유**: 상담 신청 알림 이메일 발송
- **설정**: Gmail SMTP 또는 전용 메일 서버

## 🔌 외부 API & 서비스

### KakaoMap API
- **용도**: 지도 표시, 위치 검색
- **기능**: 병원 위치, 서비스 지역 표시

### Cool SMS / Twilio
- **용도**: SMS 알림 서비스
- **기능**: 상담 신청 접수 알림

## 📊 상태 관리 & 데이터 페칭

### React Query (TanStack Query)
- **용도**: 서버 상태 관리, 캐싱
- **기능**: API 호출 최적화, 오류 처리

### Zustand (선택사항)
- **용도**: 클라이언트 상태 관리
- **기능**: 전역 상태 (모달, 테마 등)

## 🛡️ 유효성 검사 & 보안

### Zod
- **용도**: 데이터 스키마 검증
- **적용**: 폼 입력값, API 응답 검증

### bcrypt (서버사이드)
- **용도**: 비밀번호 암호화 (관리자 로그인 시)

## 🎨 UI/UX 도구

### Lucide React
- **용도**: 아이콘 라이브러리
- **특징**: 가벼움, 일관성

### next/image
- **용도**: 이미지 최적화
- **기능**: WebP 변환, 지연 로딩

## 📱 개발 도구

### ESLint + Prettier
- **용도**: 코드 품질 관리
- **설정**: Airbnb 스타일 가이드 기반

### Husky + lint-staged
- **용도**: Git 훅을 통한 코드 품질 검사
- **기능**: 커밋 전 린팅, 포맷팅

## 🔍 SEO & 분석

### next-seo
- **용도**: SEO 메타태그 관리
- **기능**: 구조화된 데이터, Open Graph

### Google Analytics 4
- **용도**: 사용자 행동 분석
- **기능**: 페이지뷰, 상담 신청 전환율

## 📊 모니터링

### Vercel Analytics
- **용도**: 성능 모니터링
- **기능**: Core Web Vitals 추적

### Sentry (선택사항)
- **용도**: 에러 추적
- **기능**: 실시간 오류 모니터링

## 🚀 배포 환경

### Vercel
- **선택 이유**: Next.js 최적화, 간편한 배포
- **기능**: 
  - 자동 배포
  - Edge Functions
  - 이미지 최적화
  - CDN

### 도메인 & SSL
- **도메인**: .com 또는 .co.kr
- **SSL**: Let's Encrypt (Vercel 자동 제공)

## 💾 개발 환경

### Node.js
- **버전**: 18.x 이상
- **패키지 매니저**: npm 또는 yarn

### Git
- **버전 관리**: GitHub
- **브랜치 전략**: main, develop, feature/*

## 📋 의존성 관리

### 주요 dependencies
```json
{
  "next": "14.x",
  "react": "18.x",
  "typescript": "5.x",
  "tailwindcss": "3.x",
  "@supabase/supabase-js": "2.x",
  "react-hook-form": "7.x",
  "framer-motion": "10.x",
  "@tanstack/react-query": "5.x",
  "zod": "3.x",
  "lucide-react": "latest"
}
```

### 개발 dependencies
```json
{
  "eslint": "8.x",
  "prettier": "3.x",
  "husky": "8.x",
  "lint-staged": "13.x",
  "@types/node": "20.x",
  "@types/react": "18.x"
}
```