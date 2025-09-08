# 보안 및 개인정보 처리 가이드

## 🛡️ 보안 개요

정신과 환자 이송 서비스는 민감한 의료 정보와 개인정보를 다루므로, 최고 수준의 보안과 개인정보 보호가 필수입니다.

---

## 🔒 기술적 보안 조치

### 1. 데이터 전송 보안
- **HTTPS 강제 적용**: 모든 통신을 SSL/TLS로 암호화
- **HSTS 헤더**: HTTP Strict Transport Security 설정
- **CSP 헤더**: Content Security Policy로 XSS 공격 방지

```javascript
// next.config.js 보안 헤더 설정
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
]
```

### 2. 입력 데이터 검증
- **Zod 스키마 검증**: 모든 폼 입력값 검증
- **SQL 인젝션 방지**: Supabase ORM 활용
- **XSS 방지**: 사용자 입력값 이스케이프 처리

```typescript
// 상담 신청 폼 검증 스키마
const consultationSchema = z.object({
  name: z.string().min(2).max(50).regex(/^[가-힣a-zA-Z\s]+$/),
  phone: z.string().regex(/^010-\d{4}-\d{4}$/),
  situation: z.string().min(10).max(500),
  location: z.string().min(5).max(100),
  consent: z.boolean().refine(val => val === true)
});
```

### 3. 세션 및 인증 보안
- **JWT 토큰**: 안전한 세션 관리 (관리자 기능 시)
- **토큰 만료**: 적절한 만료 시간 설정
- **Refresh Token**: 보안성과 사용성 균형

### 4. API 보안
- **Rate Limiting**: 과도한 요청 방지
- **CORS 정책**: 허용된 도메인만 접근
- **API 키 보안**: 환경 변수로 관리

```javascript
// Rate limiting 구현
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 5, // 최대 5회 요청
  message: '너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.'
});
```

---

## 🗄️ 데이터 보안

### 1. 데이터베이스 보안
- **데이터 암호화**: 저장 시 암호화 (Supabase 기본 제공)
- **접근 권한 관리**: RLS (Row Level Security) 적용
- **정기 백업**: 자동 백업 및 복구 시스템
- **감사 로그**: 데이터 접근 기록 관리

### 2. 민감 데이터 처리
- **최소 수집 원칙**: 필요한 정보만 수집
- **암호화 저장**: bcrypt를 활용한 해시화
- **로그 제외**: 민감 정보 로깅 금지

```typescript
// 민감 데이터 마스킹
const maskPersonalInfo = (data: any) => {
  return {
    ...data,
    phone: data.phone.replace(/(\d{3})-(\d{4})-(\d{4})/, '$1-****-$3'),
    name: data.name.charAt(0) + '*'.repeat(data.name.length - 1)
  };
};
```

### 3. 파일 업로드 보안
- **파일 타입 검증**: 허용된 확장자만 업로드
- **파일 크기 제한**: 최대 파일 크기 설정
- **바이러스 스캔**: 업로드된 파일 검사

---

## 📋 개인정보보호법 준수

### 1. 개인정보 수집 및 이용
- **수집 목적**: 구급차 이송 서비스 제공
- **수집 항목**: 이름, 연락처, 위치정보, 상황 설명
- **보유 기간**: 서비스 제공 후 1년 (법정 보관 기간)
- **제3자 제공**: 의료기관, 응급실 (동의 시)

### 2. 수집 동의 절차
```html
<!-- 동의서 체크박스 -->
<label>
  <input type="checkbox" required />
  개인정보 수집 및 이용에 동의합니다. 
  <a href="/privacy">자세히 보기</a>
</label>

<label>
  <input type="checkbox" />
  제3자 정보 제공에 동의합니다. (선택)
  <a href="/third-party">자세히 보기</a>
</label>
```

### 3. 개인정보처리방침 필수 내용
- 개인정보의 처리 목적
- 개인정보의 처리 및 보유 기간
- 개인정보의 제3자 제공에 관한 사항
- 개인정보처리의 위탁에 관한 사항
- 정보주체의 권리·의무 및 행사방법
- 개인정보 보호책임자 연락처

---

## 👥 조직적 보안 조치

### 1. 접근 권한 관리
- **최소 권한 원칙**: 업무에 필요한 최소한의 권한만 부여
- **권한 정기 검토**: 분기별 권한 재검토
- **관리자 계정 보안**: 2단계 인증 필수

### 2. 직원 교육
- **정기 보안 교육**: 월 1회 보안 교육 실시
- **개인정보보호 교육**: 개인정보보호법 준수 교육
- **사고 대응 교육**: 보안 사고 시 대응 절차 교육

### 3. 보안 정책
- **비밀번호 정책**: 강력한 비밀번호 사용 의무
- **업무용 기기 관리**: 개인 기기와 업무 분리
- **외부 접근 제한**: VPN을 통한 안전한 원격 접근

---

## 🚨 보안 사고 대응

### 1. 사고 탐지
- **모니터링 시스템**: 24시간 시스템 모니터링
- **이상 징후 탐지**: 비정상적인 접근 패턴 감지
- **자동 알림**: 보안 위협 시 즉시 알림

### 2. 사고 대응 절차
1. **사고 확인** (5분 이내)
2. **영향 범위 파악** (30분 이내)
3. **피해 확산 차단** (1시간 이내)
4. **복구 작업** (당일 내)
5. **사후 분석** (1주일 이내)

### 3. 개인정보 유출 대응
- **즉시 신고**: 개인정보보호위원회 신고 (72시간 이내)
- **사용자 알림**: 피해자에게 즉시 통지
- **손해 배상**: 피해 발생 시 적절한 배상

```javascript
// 보안 사고 로그 기록
const logSecurityEvent = async (event: SecurityEvent) => {
  await supabase
    .from('security_logs')
    .insert({
      event_type: event.type,
      severity: event.severity,
      description: event.description,
      ip_address: event.ip,
      timestamp: new Date(),
      handled: false
    });
  
  // 심각한 사고 시 즉시 알림
  if (event.severity === 'HIGH') {
    await sendAlertNotification(event);
  }
};
```

---

## 🔧 정기적 보안 점검

### 1. 월간 점검 항목
- [ ] SSL 인증서 유효성 확인
- [ ] 보안 헤더 설정 점검
- [ ] 취약점 스캔 실행
- [ ] 접근 로그 분석
- [ ] 백업 데이터 무결성 확인

### 2. 분기별 점검 항목
- [ ] 전체 시스템 보안 감사
- [ ] 개인정보 처리 현황 점검
- [ ] 직원 보안 교육 실시
- [ ] 보안 정책 업데이트
- [ ] 복구 계획 테스트

### 3. 연간 점검 항목
- [ ] 외부 보안 전문가 감사
- [ ] 개인정보보호 규정 준수 확인
- [ ] 전체 시스템 아키텍처 검토
- [ ] 보안 예산 계획 수립

---

## 📞 보안 관련 연락처

### 개인정보보호책임자
- **이름**: [담당자명]
- **이메일**: privacy@[도메인].com
- **전화**: 02-XXXX-XXXX

### 기술 보안 담당자
- **이름**: [개발자명]
- **이메일**: security@[도메인].com
- **전화**: 02-XXXX-XXXX

### 응급 상황 대응
- **24시간 핫라인**: 010-XXXX-XXXX
- **이메일**: emergency@[도메인].com

---

## 📖 관련 문서

1. **개인정보처리방침** - `/privacy`
2. **이용약관** - `/terms`
3. **보안 정책** - 내부 문서
4. **사고 대응 매뉴얼** - 내부 문서
5. **개인정보보호법 가이드라인** - 개인정보보호위원회

---

## 🔄 문서 업데이트

- **최초 작성**: 2025년 1월
- **최근 수정**: [날짜]
- **다음 검토 예정**: [날짜 + 6개월]
- **버전**: 1.0

이 가이드는 관련 법령 변경 및 기술 발전에 따라 정기적으로 업데이트됩니다.