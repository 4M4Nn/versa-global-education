export interface Destination {
  country: string
  flag: string
  universities: string
  description: string
  color: string
  popular: string[]
}

export interface Course {
  name: string
  icon: string
  countries: string
  demand: string
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  country: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface LeadData {
  name: string
  phone: string
  email?: string
  company?: string
  service_interested?: string
  source_website: string
  message?: string
}
