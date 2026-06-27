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
