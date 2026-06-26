export interface Destination {
  id: string; name: string; flag: string; tagline: string
  programs: string[]; scholarships: string; intake: string; visa: string
  desc: string; accent: string
}
export interface ProcessStep {
  num: string; title: string; desc: string
}
export interface Founder {
  name: string; role: string; monogram: string; color: string; bio: string; quote: string
}
export interface BlogPost {
  slug: string; title: string; date: string; excerpt: string; tag: string; body: string
}
export interface FAQ { q: string; a: string }
export interface Scheme { title: string; desc: string; cta: string; tag: string }
export interface NavLink { label: string; href: string }
