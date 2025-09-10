import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "정신과 전문 구급차 서비스",
    "description": "정신과 환자를 위한 전문적이고 안전한 24시간 이송 서비스",
    "url": "https://your-domain.com",
    "telephone": "010-9070-9720",
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "availableService": {
      "@type": "MedicalService",
      "name": "정신과 환자 전문 이송 서비스",
      "serviceType": "Emergency Medical Transport",
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "010-9070-9720",
          "contactType": "Emergency",
          "availableLanguage": "Korean",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", 
              "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        }
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "서울특별시"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "경기도"
      },
      {
        "@type": "AdministrativeArea",
        "name": "인천광역시"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR",
      "addressRegion": "서울특별시"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "010-9070-9720",
      "contactType": "Emergency",
      "availableLanguage": "Korean"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "정신과 전문 이송 서비스",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24시간 응급 정신과 이송",
            "description": "응급상황 시 즉시 출동하는 전문 의료진 동반 이송 서비스"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "일반 정신과 환자 이송",
            "description": "병원 가기를 거부하는 환자를 위한 전문적 설득 및 안전 이송"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "24시간 전문 상담",
            "description": "정신과 전문 의료진의 전화 상담 및 상황별 대응 가이드"
          }
        }
      ]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "정신과 전문 구급차",
    "image": "/images/ambulance-1666012_1280.jpg",
    "telephone": "010-9070-9720",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5665,
      "longitude": 126.9780
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 37.5665,
        "longitude": 126.9780
      },
      "geoRadius": "100000"
    }
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "정신과 전문 구급차 서비스",
    "url": "https://your-domain.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://your-domain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  )
}