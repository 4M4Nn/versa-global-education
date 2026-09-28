export interface Destination {
  id: string
  name: string
  flag: string
  tagline: string
  image: string
  programs: string[]
  scholarships: string
  intake: string
  visa: string
  description: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  destination: string
  university: string
  quote: string
  rating: number
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
  body: string
  /** ISO date (YYYY-MM-DD) for sitemap and BlogPosting schema */
  publishedAt?: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface Founder {
  name: string
  role: string
  monogram: string
  color: string
  bio: string
}

export interface CareerProgramModule {
  title: string
  topics: string[]
}

export interface CareerProgramFaq {
  question: string
  answer: string
}

export interface CareerProgram {
  slug: string
  title: string
  shortName: string
  tagline: string
  associationPartner: string
  focus: string
  durationHours: string
  durationMonths: string
  modes: string[]
  targetAudience: string
  prerequisites: string
  learningObjectives: string[]
  modules: CareerProgramModule[]
  industryExposure: { title: string; description: string }[]
  careerReadinessSteps: string[]
  careerOutcomes: string[]
  trainingMaterials: string[]
  assessmentPlan: string[]
  fee: { amount: number; currency: string; paymentMode: string; durationRange: string }
  certificationExams: { name: string; code: string; fee: number; currency: string }[]
  schedule: { fullTime: string[]; partTime: string[] }
  instructorProfile: { summary: string; certifications: string[] }
  studentsPlaced: string
  jobAssuranceStatement: string
  location: string
  image: string
  heroImage: string
  faqs: CareerProgramFaq[]
  metaDescription: string
  keywords: string[]
}
