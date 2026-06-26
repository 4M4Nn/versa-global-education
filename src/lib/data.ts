import type { Destination, ProcessStep, Founder, BlogPost, FAQ, Scheme, NavLink } from "@/types"

export const SITE_NAME = "Versa Global"
export const SITE_TAGLINE = "Study Abroad. Land Your Dream University."
export const SITE_DESCRIPTION = "Versa Global helps Kerala students study in 60+ countries with 95% visa success rate. Expert counselling for UK, USA, Canada, Australia, Germany, and more."
export const PHONE = "+91 7907215816"
export const WHATSAPP = "917907215816"
export const WA_URL = "https://wa.me/917907215816"
export const EMAIL = "admissions@versaglobal.in"
export const ADDRESS = "Kochi, Kerala, India"
export const SOURCE = "versa-global"
export const PARENT_URL = "https://versagrowthventures.com"

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Courses", href: "/courses" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Schemes", href: "/schemes" },
  { label: "Contact", href: "/contact" },
]

export const DESTINATIONS: Destination[] = [
  {
    id: "uk", name: "United Kingdom", flag: "🇬🇧", tagline: "World-Class Universities",
    accent: "#003087",
    programs: ["MBA & Business", "Engineering", "Healthcare & Medicine", "Law", "Arts & Design"],
    scholarships: "Chevening, Commonwealth, GREAT scholarships", intake: "September & January",
    visa: "Student Visa (Tier 4)",
    desc: "The UK hosts 4 of the world's top 10 universities and offers post-study work visas for up to 2 years after graduation. Versa Global has established relationships with admission offices at over 40 UK universities.",
  },
  {
    id: "canada", name: "Canada", flag: "🇨🇦", tagline: "Pathway to PR",
    accent: "#FF0000",
    programs: ["Computer Science & IT", "Business & Finance", "Engineering", "Nursing", "Hospitality"],
    scholarships: "Vanier CGS, Banting, Provincial scholarships", intake: "September & January",
    visa: "Study Permit + PGWP",
    desc: "Canada is the most immigration-friendly study destination — the Post-Graduate Work Permit (PGWP) leads directly to Permanent Residency. Canadian universities offer world-class education with comparatively lower tuition than US or UK.",
  },
  {
    id: "australia", name: "Australia", flag: "🇦🇺", tagline: "Live & Work Down Under",
    accent: "#FFCC02",
    programs: ["Engineering & Mining", "Healthcare", "Business & Commerce", "Agriculture", "Tourism"],
    scholarships: "Australia Awards, Endeavour scholarships", intake: "February & July",
    visa: "Student Visa (Subclass 500)",
    desc: "Australia offers 2-4 years of post-study work rights and is consistently rated among the world's most liveable countries. The 8 Group of Eight universities rank in the global top 100.",
  },
  {
    id: "germany", name: "Germany", flag: "🇩🇪", tagline: "Free Education in English",
    accent: "#FFCC00",
    programs: ["Engineering & Automotive", "Computer Science", "Natural Sciences", "Business Administration", "Research"],
    scholarships: "DAAD, Erasmus+, University scholarships", intake: "Winter (October) & Summer (April)",
    visa: "National Visa (D-Visa)",
    desc: "Germany is the #1 destination for budget-conscious students — most public universities charge zero tuition for international students. German engineering degrees are globally respected, and the job market in Germany for technical graduates is exceptional.",
  },
  {
    id: "usa", name: "United States", flag: "🇺🇸", tagline: "Ivy League & Beyond",
    accent: "#0033A0",
    programs: ["Business & MBA", "Computer Science & AI", "Engineering", "Medical Research", "Liberal Arts"],
    scholarships: "Fulbright, Hubert Humphrey, University merit aid", intake: "Fall (August) & Spring (January)",
    visa: "F-1 Student Visa",
    desc: "Home to 50+ of the world's top 100 universities, the US remains the gold standard for higher education. Versa Global specializes in SAT/GRE/GMAT preparation alongside university applications for comprehensive admission support.",
  },
  {
    id: "ireland", name: "Ireland", flag: "🇮🇪", tagline: "English-Speaking EU Hub",
    accent: "#169B62",
    programs: ["Technology & IT", "Pharmaceutical Sciences", "Business", "Data Analytics", "Healthcare"],
    scholarships: "Government of Ireland, Enterprise Ireland", intake: "September",
    visa: "Study Visa",
    desc: "Ireland is where Silicon Valley meets the EU — home to European headquarters of Google, Apple, Facebook, and Microsoft. A degree from Ireland opens doors across Europe, with the added advantage of English-medium instruction.",
  },
  {
    id: "new-zealand", name: "New Zealand", flag: "🇳🇿", tagline: "Nature & World-Class Education",
    accent: "#00843D",
    programs: ["Agriculture & Environmental Science", "Engineering", "Business", "Tourism & Hospitality", "Film & Media"],
    scholarships: "New Zealand Excellence Awards, New Zealand Aid Programme", intake: "February & July",
    visa: "Student Visa",
    desc: "New Zealand offers exceptional quality of life, practical education systems, and straightforward post-study work rights. The country actively welcomes Indian students with dedicated support networks.",
  },
  {
    id: "dubai", name: "Dubai / UAE", flag: "🇦🇪", tagline: "Education Hub of the Middle East",
    accent: "#006400",
    programs: ["Business & Finance", "Hospitality & Tourism", "Engineering", "Architecture", "Media & Communication"],
    scholarships: "University merit scholarships, employer sponsorships", intake: "September & February",
    visa: "Student Residence Visa",
    desc: "Dubai has become a world-class education hub with campuses from global universities. Its proximity to Kerala and the existing Indian community make it an ideal destination for those who want a global education without leaving the region.",
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { num: "01", title: "Free Profile Assessment", desc: "30-minute counselling session to assess academic profile, career goals, budget, and destination preferences." },
  { num: "02", title: "Destination & University Shortlisting", desc: "Research-backed recommendations of 6-8 universities across 2-3 countries that match your profile." },
  { num: "03", title: "SOP & Essay Writing", desc: "Expert-crafted Statement of Purpose and application essays tailored to each university's requirements." },
  { num: "04", title: "Application Submission", desc: "Complete application management — from document preparation to submission tracking for all shortlisted universities." },
  { num: "05", title: "Scholarship Applications", desc: "Simultaneous applications to available scholarships and financial aid opportunities." },
  { num: "06", title: "Offer Letter Negotiation", desc: "We review all offer letters, negotiate entry conditions where possible, and help you choose the best offer." },
  { num: "07", title: "Visa Application & Documentation", desc: "Complete visa application preparation with 95% success rate — we handle every document requirement." },
  { num: "08", title: "Pre-Departure Briefing", desc: "Comprehensive preparation: accommodation, banking, health insurance, cultural orientation." },
  { num: "09", title: "Arrival Support", desc: "Partner connections in every destination country for airport pickup, initial accommodation, and community connections." },
]

export const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Neelamana", role: "Founder & Operations Head", monogram: "SN", color: "#1B2A4A",
    bio: "Sandeep's operational systems ensure every Versa Global student receives the same meticulous attention from first enquiry to landing in their destination country.",
    quote: "Every student who leaves Kerala with our support carries Versa's reputation. That keeps us accountable.",
  },
  {
    name: "Sreenivasa Prabhu", role: "Founder & Finance Head", monogram: "SP", color: "#C9A84C",
    bio: "Sreenivasa structures our scholarship-finding and financial planning services, ensuring students maximize every available funding opportunity.",
    quote: "A great education abroad is an investment. We help families calculate that investment wisely.",
  },
  {
    name: "Aman Faisal S", role: "Founder & Marketing Head", monogram: "AF", color: "#10B981",
    bio: "Aman's marketing vision has made Versa Global the most recognized study abroad brand in Kerala, reaching students from Kasaragod to Thiruvananthapuram.",
    quote: "Every Kerala student deserves a global education. We make sure they know it is possible.",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "uk-study-visa-guide-2026",
    title: "Complete Guide to UK Student Visa for Kerala Students (2026)",
    date: "June 2026", tag: "UK",
    excerpt: "The UK Student Visa (formerly Tier 4) process has specific requirements for Indian applicants. Here is the complete documentation checklist and timeline.",
    body: `The UK Student Visa is one of the most straightforward processes for international students, but documentation must be precise. A single incorrect document can delay your visa by weeks.\n\nThe core documents required are: your Confirmation of Acceptance for Studies (CAS) from your university, valid passport, financial evidence showing sufficient funds, English language test scores (IELTS minimum 6.0), and proof of accommodation.\n\nThe financial requirement is often misunderstood. You need to show nine months of living costs (approximately £1,334/month) plus your first year's tuition fees in your account for 28 consecutive days before applying. This is called the "28-day bank rule."\n\nApplications should be submitted at least 3 months before your course start date, though the visa can only be issued 6 months in advance.\n\nVersa Global's visa preparation service has a 95% success rate for UK applications. We review every document before submission, flag potential issues, and prepare you for any potential interview requirements.`,
  },
  {
    slug: "canada-pgwp-guide",
    title: "Canada PGWP: How Kerala Graduates Turn Student Visas into PR",
    date: "May 2026", tag: "Canada",
    excerpt: "The Post-Graduate Work Permit (PGWP) is Canada's most powerful immigration pathway. Here's how Kerala students can plan their entire Canada journey from study to PR.",
    body: `Canada has become the #1 study abroad destination for Kerala students with immigration goals, and for good reason — the pathway from student to permanent resident is clearer than any other country.\n\nThe PGWP allows graduates of Designated Learning Institutions (DLIs) to work in Canada for up to 3 years after graduation, matching the length of their program. During this period, graduates accumulate Canadian work experience, which is the most valuable asset for Express Entry immigration applications.\n\nThe optimal strategy is a 2-year college diploma (PGWP: 2 years) or a 3-year bachelor's degree (PGWP: 3 years) in a NOC TEER 0, 1, 2, or 3 occupation — these are the categories that qualify for Express Entry.\n\nVersa Global counselors map out the full 5-7 year journey for Kerala students pursuing Canada as a permanent destination: choosing the right DLI and program, navigating the PGWP, Express Entry, and ultimately, citizenship eligibility.`,
  },
  {
    slug: "germany-free-education",
    title: "How Kerala Students Can Study in Germany for Free in 2026",
    date: "April 2026", tag: "Germany",
    excerpt: "Germany's public universities charge zero tuition for international students. Here's the complete guide to studying in Germany — programs, language, DAAD scholarships.",
    body: `Germany is the world's best-kept secret in international education. Public universities in Germany charge no tuition fees for international students — only a semester contribution of roughly €300-500 (approximately ₹30,000).\n\nFor Kerala students, this represents an extraordinary value proposition. Engineering degrees from TU Munich, Karlsruhe, or RWTH Aachen are globally respected — and genuinely free.\n\nThe primary requirement is language. Most undergraduate programs require B2 or C1 level German. However, over 1,700 English-taught programs are available at master's level — making Germany accessible without German language proficiency for postgraduate students.\n\nGMAT/GRE is not required for German university admissions. A strong bachelor's degree with relevant GPA is sufficient for most programs.\n\nThe DAAD scholarship provides monthly stipends of €850-1,200 to selected Indian students. Versa Global has a dedicated DAAD application support track with a 60% success rate for Kerala applicants.`,
  },
]

export const FAQS: FAQ[] = [
  { q: "What is the minimum IELTS score required to study abroad?", a: "It varies by destination: UK requires minimum 6.0-6.5, Canada 6.0-6.5, Australia 6.0-6.5, Germany (English programs) 6.5, USA 80 iBT TOEFL or 6.5 IELTS. We assess your score early and provide preparation guidance if needed." },
  { q: "Can I get a scholarship to study abroad?", a: "Yes. Scholarships are available at every level — from government funded (Chevening UK, DAAD Germany, Vanier Canada) to university merit scholarships. Our scholarship finder service has helped Kerala students save lakhs in tuition fees." },
  { q: "How much does it cost to study abroad?", a: "Costs vary dramatically by country. Germany is cheapest (virtually free tuition, ~₹6-10L/year living costs). UK costs ₹15-35L/year. Canada ₹12-25L/year. UAE can be comparable to Indian private colleges. We provide exact cost breakdowns for your specific universities." },
  { q: "What documents do I need for a student visa?", a: "Core documents include: passport, university offer letter/CAS, financial proof, English test scores (IELTS/TOEFL), educational certificates, and Statement of Purpose. Document requirements vary by country — we prepare a specific checklist for your destination." },
  { q: "What is Versa Global's visa success rate?", a: "Our visa success rate is 95%. This is achieved through meticulous document preparation, thorough review before submission, and flagging potential issues before they become rejections." },
  { q: "How early should I start the study abroad process?", a: "Ideally 18 months before your intended intake. This allows time for test preparation, university research, application submission, and visa processing. Many students start 12 months ahead — still manageable. Less than 6 months is very challenging." },
  { q: "Does Versa Global provide post-arrival support?", a: "Yes. We have partner networks in every destination country who provide airport pickup, initial accommodation guidance, SIM cards, and community connections with other Kerala students in your city." },
]

export const SCHEMES: Scheme[] = [
  {
    title: "Free Profile Evaluation", tag: "FREE",
    desc: "Book a free 30-minute session with a Versa Global counselor. We review your academic profile, test scores, and career goals to give you a clear, honest assessment of your study abroad options.",
    cta: "Book Free Evaluation",
  },
  {
    title: "Scholarship Hunt Package", tag: "HIGH VALUE",
    desc: "Our dedicated scholarship research team identifies and applies to every scholarship your profile qualifies for — university merit, government, and private scholarships across all your shortlisted universities.",
    cta: "Get Scholarship Help",
  },
  {
    title: "Visa Guarantee Package", tag: "GUARANTEED",
    desc: "Our Visa Guarantee Package includes complete visa documentation, expert review, and a money-back guarantee on our visa service fee if your visa is rejected due to documentation error.",
    cta: "Get Visa Guarantee",
  },
]
