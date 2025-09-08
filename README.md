# 정신과 환자 전문 구급차 서비스 홈페이지

## 프로젝트 개요
정신과 환자를 위한 전문적이고 안전한 이송 서비스를 제공하는 홈페이지 개발 프로젝트입니다.

## 주요 기능
- 24시간 응급 상담 및 예약 시스템
- 전문 의료진 동반 이송 서비스  
- 맞춤형 이송 계획 수립
- 실시간 상담 신청 및 문의
- 서비스 이용 안내 및 FAQ

## 타겟 사용자
- 정신과 환자 가족 및 보호자
- 의료기관 관계자
- 응급 상황 대응이 필요한 개인

## 핵심 가치
- **전문성**: 정신과 환자 이송 전문 의료진
- **안전성**: 체계적인 이송 프로토콜
- **신뢰성**: 24시간 대응 가능한 서비스
- **인간적 배려**: 가족같은 마음으로 접근

## 기술 스택
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Lucide React
- **Backend**: Supabase (PostgreSQL, 실시간 기능)
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4

## 개발 환경 설정

### 필수 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 프로젝트 구조
```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # 전역 스타일
│   ├── layout.tsx      # 루트 레이아웃
│   └── page.tsx        # 메인 페이지
├── components/
│   ├── ui/             # Shadcn/ui 컴포넌트
│   └── ...             # 커스텀 컴포넌트
└── lib/
    └── utils.ts        # 유틸리티 함수
```

## 개발 가이드라인
- [기술 스택 문서](./TECH-STACK.md)
- [개발 로드맵](./DEVELOPMENT-ROADMAP.md)  
- [보안 및 개인정보 처리](./SECURITY-PRIVACY-GUIDE.md)

## 배포
이 프로젝트는 Vercel에서 호스팅됩니다:
- 자동 배포: main 브랜치 push 시
- 미리보기: PR 생성 시
- 도메인: [배포 후 업데이트]

## 기여 방법
1. 이 저장소를 Fork
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)  
5. Pull Request 생성

## 라이선스
MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일 참조

## 연락처
- **프로젝트 관리자**: [이름]
- **이메일**: [이메일 주소]
- **개발 문의**: [GitHub Issues](링크)

---

**⚕️ 정신과 환자의 안전한 이송을 위한 전문 서비스입니다.**