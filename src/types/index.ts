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
  tracks: CareerProgramTrack[]
  enrolmentSteps: { title: string; description: string }[]
  metaDescription: string
  keywords: string[]
}

export type FaqCategory =
  | "Getting Started"
  | "Applications & Tests"
  | "Visas & Work Rights"
  | "Costs, Loans & Scholarships"
  | "MBBS Abroad"
  | "Dubai IT Program"

export interface Faq {
  question: string
  answer: string
  category: FaqCategory
}

export interface CareerProgramTrack {
  mode: string
  bestFor: string
  howItWorks: string
  visa: string
}

export interface MbbsCountry {
  slug: string
  destinationId: string
  name: string
  flag: string
  heroImage: string
  headline: string
  summary: string
  cost: string
  costNote: string
  duration: string
  structure: string
  intake: string
  visa: string
  medium: string
  entranceExam: string
  timeline: string
  highlights: string[]
  considerations: string[]
  costBreakdown: { item: string; detail: string }[]
  faqs: CareerProgramFaq[]
  blogSlugs: string[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
}
