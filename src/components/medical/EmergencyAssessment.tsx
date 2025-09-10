"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Brain, Heart, Clock, UserCheck, AlertTriangle, CheckCircle, XCircle, Activity } from 'lucide-react'
import { motion } from 'framer-motion'

export interface MedicalTeam {
  id: string
  doctor: {
    name: string
    specialty: string
    experience: number
    certifications: string[]
    availabilityScore: number
  }
  nurse: {
    name: string
    specialty: string
    experience: number
    certifications: string[]
  }
  responseTime: number
  currentLocation: {
    lat: number
    lng: number
    address: string
  }
  specializations: string[]
  equipment: string[]
  successRate: number
}

export interface EmergencyCase {
  symptoms: string[]
  severity: 'critical' | 'urgent' | 'moderate' | 'low'
  patientAge: number
  consciousness: 'alert' | 'confused' | 'unconscious'
  vitalSigns: {
    bloodPressure?: string
    heartRate?: number
    temperature?: number
    oxygenSaturation?: number
  }
  mentalHealthHistory: boolean
  currentMedication: string[]
  riskFactors: string[]
}

interface EmergencyAssessmentProps {
  onTeamAssigned: (team: MedicalTeam, assessment: EmergencyCase) => void
}

const mockMedicalTeams: MedicalTeam[] = [
  {
    id: "TEAM-001",
    doctor: {
      name: "김은정 전문의",
      specialty: "정신건강의학과",
      experience: 12,
      certifications: ["정신건강의학과 전문의", "응급의학과 수련", "자살예방 전문가"],
      availabilityScore: 95
    },
    nurse: {
      name: "이수진 간호사",
      specialty: "정신건강간호사",
      experience: 8,
      certifications: ["정신건강간호사", "응급간호사", "위기개입 전문가"]
    },
    responseTime: 8,
    currentLocation: {
      lat: 37.5665,
      lng: 126.9780,
      address: "서울시 중구 시청 인근"
    },
    specializations: ["급성 정신증상", "자살위험 평가", "약물중독", "조현병 급성기"],
    equipment: ["정신과 응급키트", "진정제", "생체징후 모니터", "자해방지 장비"],
    successRate: 94.2
  },
  {
    id: "TEAM-002", 
    doctor: {
      name: "박민수 전문의",
      specialty: "정신건강의학과",
      experience: 15,
      certifications: ["정신건강의학과 전문의", "중독의학 전문가", "법정신의학"],
      availabilityScore: 88
    },
    nurse: {
      name: "김혜진 간호사",
      specialty: "중환자간호사",
      experience: 10,
      certifications: ["중환자간호사", "정신건강간호사", "응급처치 강사"]
    },
    responseTime: 12,
    currentLocation: {
      lat: 37.5519,
      lng: 126.9918,
      address: "서울시 동대문구 인근"
    },
    specializations: ["약물중독", "알코올중독", "조울증", "인격장애"],
    equipment: ["해독 응급키트", "심전도기", "산소공급 장비", "응급약물"],
    successRate: 91.8
  },
  {
    id: "TEAM-003",
    doctor: {
      name: "정하늘 전문의", 
      specialty: "정신건강의학과",
      experience: 10,
      certifications: ["정신건강의학과 전문의", "아동청소년정신의학", "가족치료 전문가"],
      availabilityScore: 92
    },
    nurse: {
      name: "윤서연 간호사",
      specialty: "아동간호사",
      experience: 7,
      certifications: ["아동간호사", "정신건강간호사", "발달장애 전문가"]
    },
    responseTime: 10,
    currentLocation: {
      lat: 37.5133,
      lng: 127.0590,
      address: "서울시 강남구 인근"
    },
    specializations: ["아동청소년", "발달장애", "ADHD", "자폐스펙트럼"],
    equipment: ["소아용 진정제", "아동 안전장비", "놀이치료 도구", "가족상담 키트"],
    successRate: 96.5
  }
]

const emergencySymptoms = {
  critical: [
    "자해 시도", "자살 위험", "폭력 행동", "의식 저하", "심한 착란", "경련"
  ],
  urgent: [
    "급성 정신병적 증상", "심한 불안", "공황발작", "환각", "망상", "흥분상태"
  ],
  moderate: [
    "우울감", "불면", "식욕부진", "집중력 저하", "피해망상", "강박증상"
  ],
  low: [
    "가벼운 불안", "스트레스 반응", "적응장애", "경미한 우울", "수면장애"
  ]
}

const severityConfig = {
  critical: { color: 'bg-red-500', text: '위급', icon: '🚨', priority: 1 },
  urgent: { color: 'bg-orange-500', text: '응급', icon: '⚠️', priority: 2 },
  moderate: { color: 'bg-yellow-500', text: '준응급', icon: '🔶', priority: 3 },
  low: { color: 'bg-green-500', text: '일반', icon: '🔵', priority: 4 }
}

export default function EmergencyAssessment({ onTeamAssigned }: EmergencyAssessmentProps) {
  const [currentCase, setCurrentCase] = useState<EmergencyCase | null>(null)
  const [assessmentStep, setAssessmentStep] = useState<'input' | 'analysis' | 'matching' | 'assignment'>('input')
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [patientInfo, setPatientInfo] = useState({
    age: 30,
    consciousness: 'alert' as const,
    mentalHealthHistory: false,
    medication: '',
    riskFactors: [] as string[]
  })
  const [matchedTeams, setMatchedTeams] = useState<{ team: MedicalTeam; score: number }[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  // AI 기반 중증도 평가 시뮬레이션
  const assessSeverity = (symptoms: string[]): EmergencyCase['severity'] => {
    const criticalSymptoms = symptoms.filter(s => emergencySymptoms.critical.includes(s))
    const urgentSymptoms = symptoms.filter(s => emergencySymptoms.urgent.includes(s))
    
    if (criticalSymptoms.length > 0) return 'critical'
    if (urgentSymptoms.length > 0) return 'urgent'
    if (symptoms.length > 2) return 'moderate'
    return 'low'
  }

  // 의료진 매칭 알고리즘
  const matchMedicalTeams = (emergencyCase: EmergencyCase): { team: MedicalTeam; score: number }[] => {
    return mockMedicalTeams.map(team => {
      let score = 0

      // 전문성 매칭 (40점)
      const specialtyMatch = team.specializations.some(spec => 
        emergencyCase.symptoms.some(symptom => spec.includes(symptom))
      )
      if (specialtyMatch) score += 40

      // 경험 점수 (20점)
      score += Math.min(team.doctor.experience, 20)

      // 가용성 점수 (20점)
      score += (team.doctor.availabilityScore / 100) * 20

      // 응답 시간 점수 (10점)
      score += Math.max(0, 10 - team.responseTime / 2)

      // 성공률 점수 (10점)
      score += (team.successRate / 100) * 10

      // 중증도별 가중치
      const severityWeight = {
        critical: 1.5,
        urgent: 1.3,
        moderate: 1.1,
        low: 1.0
      }[emergencyCase.severity]

      score *= severityWeight

      return { team, score: Math.round(score) }
    }).sort((a, b) => b.score - a.score)
  }

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    )
  }

  const handleAnalysis = async () => {
    if (selectedSymptoms.length === 0) return

    setIsAnalyzing(true)
    setAssessmentStep('analysis')

    // 시뮬레이션: AI 분석 시간
    await new Promise(resolve => setTimeout(resolve, 2000))

    const severity = assessSeverity(selectedSymptoms)
    const newCase: EmergencyCase = {
      symptoms: selectedSymptoms,
      severity,
      patientAge: patientInfo.age,
      consciousness: patientInfo.consciousness,
      mentalHealthHistory: patientInfo.mentalHealthHistory,
      currentMedication: patientInfo.medication.split(',').map(m => m.trim()).filter(m => m),
      riskFactors: patientInfo.riskFactors,
      vitalSigns: {}
    }

    setCurrentCase(newCase)
    setAssessmentStep('matching')

    // 의료진 매칭
    const matches = matchMedicalTeams(newCase)
    setMatchedTeams(matches)
    setIsAnalyzing(false)
  }

  const handleTeamAssignment = (team: MedicalTeam) => {
    if (!currentCase) return
    setAssessmentStep('assignment')
    onTeamAssigned(team, currentCase)
  }

  return (
    <div className="space-y-6">
      {/* 단계별 진행 표시 */}
      <div className="flex items-center justify-between mb-8">
        {['입력', '분석', '매칭', '배정'].map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              ['input', 'analysis', 'matching', 'assignment'].indexOf(assessmentStep) >= index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {index + 1}
            </div>
            <div className={`ml-2 text-sm font-medium ${
              ['input', 'analysis', 'matching', 'assignment'].indexOf(assessmentStep) >= index
                ? 'text-blue-600'
                : 'text-gray-400'
            }`}>
              {step}
            </div>
            {index < 3 && (
              <div className={`w-16 h-0.5 ml-4 ${
                ['input', 'analysis', 'matching', 'assignment'].indexOf(assessmentStep) > index
                  ? 'bg-blue-600'
                  : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      {assessmentStep === 'input' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-bold">AI 응급도 평가 시스템</h3>
            </div>
            <p className="text-gray-600 text-sm">
              증상을 선택하시면 AI가 응급도를 판정하고 최적의 전문의료진을 매칭해드립니다.
            </p>
          </div>

          {/* 증상 선택 */}
          <div>
            <h4 className="font-semibold mb-3">현재 나타나는 증상을 선택해주세요</h4>
            {Object.entries(emergencySymptoms).map(([severity, symptoms]) => (
              <div key={severity} className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className={severityConfig[severity as keyof typeof severityConfig].color}>
                    {severityConfig[severity as keyof typeof severityConfig].icon} {severityConfig[severity as keyof typeof severityConfig].text}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {symptoms.map(symptom => (
                    <button
                      key={symptom}
                      onClick={() => handleSymptomToggle(symptom)}
                      className={`p-2 text-sm rounded-lg border transition-all ${
                        selectedSymptoms.includes(symptom)
                          ? 'bg-blue-100 border-blue-500 text-blue-700'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 환자 정보 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">환자 연령</label>
              <input
                type="number"
                value={patientInfo.age}
                onChange={(e) => setPatientInfo(prev => ({ ...prev, age: parseInt(e.target.value) || 0 }))}
                className="w-full p-2 border rounded-lg"
                min="0" max="120"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">의식상태</label>
              <select
                value={patientInfo.consciousness}
                onChange={(e) => setPatientInfo(prev => ({ ...prev, consciousness: e.target.value as any }))}
                className="w-full p-2 border rounded-lg"
              >
                <option value="alert">명료</option>
                <option value="confused">혼란</option>
                <option value="unconscious">의식불명</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="mentalHistory"
              checked={patientInfo.mentalHealthHistory}
              onChange={(e) => setPatientInfo(prev => ({ ...prev, mentalHealthHistory: e.target.checked }))}
            />
            <label htmlFor="mentalHistory" className="text-sm">정신건강 치료 이력 있음</label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">현재 복용약물 (쉼표로 구분)</label>
            <input
              type="text"
              value={patientInfo.medication}
              onChange={(e) => setPatientInfo(prev => ({ ...prev, medication: e.target.value }))}
              className="w-full p-2 border rounded-lg"
              placeholder="예: 리스페달, 올란자핀"
            />
          </div>

          <Button
            onClick={handleAnalysis}
            disabled={selectedSymptoms.length === 0 || isAnalyzing}
            className="w-full py-3 text-lg"
          >
            <Activity className="h-5 w-5 mr-2" />
            AI 응급도 분석 시작
          </Button>
        </motion.div>
      )}

      {assessmentStep === 'analysis' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-xl font-bold mb-2">AI 분석 중...</h3>
          <p className="text-gray-600">
            증상 분석 및 응급도 판정을 진행하고 있습니다
          </p>
        </motion.div>
      )}

      {assessmentStep === 'matching' && currentCase && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* 응급도 판정 결과 */}
          <div className={`p-6 rounded-lg text-white ${severityConfig[currentCase.severity].color}`}>
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">
                  {severityConfig[currentCase.severity].icon} 응급도: {severityConfig[currentCase.severity].text}
                </h3>
                <p className="opacity-90">선택하신 증상을 기반으로 AI가 분석한 결과입니다</p>
              </div>
            </div>
            <div className="text-sm opacity-90">
              주요 증상: {currentCase.symptoms.join(', ')}
            </div>
          </div>

          {/* 매칭된 의료진 목록 */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-green-600" />
              매칭된 전문 의료진 ({matchedTeams.length}팀)
            </h4>
            
            <div className="space-y-4">
              {matchedTeams.map(({ team, score }, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer hover:shadow-lg ${
                    index === 0 ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleTeamAssignment(team)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`px-2 py-1 rounded text-xs font-bold text-white ${
                        index === 0 ? 'bg-green-500' : 'bg-gray-400'
                      }`}>
                        {index === 1 ? '최적' : `${index + 1}순위`}
                      </div>
                      <div>
                        <h5 className="font-bold">{team.id}</h5>
                        <p className="text-sm text-gray-600">매칭도: {score}%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{team.responseTime}분 도착</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">담당 전문의</div>
                      <div className="font-medium">{team.doctor.name}</div>
                      <div className="text-xs text-gray-500">{team.doctor.specialty} • 경력 {team.doctor.experience}년</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">담당 간호사</div>
                      <div className="font-medium">{team.nurse.name}</div>
                      <div className="text-xs text-gray-500">{team.nurse.specialty} • 경력 {team.nurse.experience}년</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {team.specializations.slice(0, 3).map(spec => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="text-green-600">
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                      성공률 {team.successRate}%
                    </div>
                    <div className="text-blue-600">
                      📍 {team.currentLocation.address}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {assessmentStep === 'assignment' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            의료진 배정 완료!
          </h3>
          <p className="text-gray-600 mb-6">
            최적의 전문 의료진이 배정되었습니다. 곧 출동하겠습니다.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              📞 긴급 상황 시: 010-9070-9720 (24시간)
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}