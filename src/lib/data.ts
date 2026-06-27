import type { Destination, ProcessStep, Testimonial, BlogPost, Stat, Founder } from "@/types"

export const SITE = {
  name: "Versa Global",
  phone: "+91 7907215816",
  email: "admissions@versaglobal.in",
  address: "Kochi, Kerala, India",
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
]

export const DESTINATIONS: Destination[] = [
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "World-Class Universities",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80&auto=format&fit=crop",
    programs: ["MBA & Business", "Engineering", "Medicine", "Law", "Arts & Design"],
    scholarships: "Chevening, Commonwealth, GREAT",
    intake: "September & January",
    visa: "Student Visa (Tier 4)",
    description:
      "Home to 4 of world&apos;s top 10 universities. 2-year post-study work visa. Versa Global has partnerships with 40+ UK universities.",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Pathway to Permanent Residency",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80&auto=format&fit=crop",
    programs: ["Computer Science", "Business", "Engineering", "Nursing", "Hospitality"],
    scholarships: "Vanier CGS, Banting, Provincial",
    intake: "September & January",
    visa: "Study Permit + PGWP",
    description:
      "Most immigration-friendly study destination. PGWP leads directly to PR. Lower tuition than US/UK.",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "World-Class Education & Lifestyle",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80&auto=format&fit=crop",
    programs: ["Engineering", "Healthcare", "Business", "Agriculture", "Tourism"],
    scholarships: "Australia Awards, Endeavour",
    intake: "February & July",
    visa: "Student Visa (Subclass 500)",
    description:
      "2-4 years post-study work rights. 8 Group of Eight universities in global top 100. Outstanding quality of life.",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "Free Education in English",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80&auto=format&fit=crop",
    programs: ["Engineering", "Computer Science", "Business", "Natural Sciences", "Research"],
    scholarships: "DAAD, Erasmus+",
    intake: "October & April",
    visa: "National Visa (D-Visa)",
    description:
      "Most public universities charge zero tuition. German engineering degrees respected worldwide.",
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    tagline: "Ivy League & Beyond",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80&auto=format&fit=crop",
    programs: ["Business & MBA", "Computer Science", "Engineering", "Medicine", "Liberal Arts"],
    scholarships: "Fulbright, Hubert Humphrey",
    intake: "August & January",
    visa: "F-1 Student Visa",
    description:
      "50+ of world&apos;s top 100 universities. SAT/GRE/GMAT preparation support included.",
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    tagline: "English-Speaking EU Gateway",
    image: "https://images.unsplash.com/photo-1564959130747-897fb406b9af?w=600&q=80&auto=format&fit=crop",
    programs: ["Technology", "Pharma", "Business", "Data Analytics", "Healthcare"],
    scholarships: "Government of Ireland, Enterprise Ireland",
    intake: "September",
    visa: "Study Visa",
    description:
      "EU hub for Google, Apple, Facebook, Microsoft European HQs. Opens doors across Europe.",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    tagline: "Excellence + Quality of Life",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80&auto=format&fit=crop",
    programs: ["Agriculture", "Engineering", "Business", "Tourism", "Film & Media"],
    scholarships: "NZ Excellence Awards, NZ Aid",
    intake: "February & July",
    visa: "Student Visa",
    description:
      "Practical education, post-study work rights, extraordinary natural environment.",
  },
  {
    id: "dubai",
    name: "Dubai / UAE",
    flag: "🇦🇪",
    tagline: "Education Hub of the Middle East",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop",
    programs: ["Business", "Hospitality", "Engineering", "Architecture", "Media"],
    scholarships: "University merit scholarships",
    intake: "September & February",
    visa: "Student Residence Visa",
    description:
      "Proximity to Kerala, growing university landscape, strong Indian community.",
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Free Profile Assessment",
    description:
      "30-minute counselling session to assess profile, goals, budget, and destination preferences.",
  },
  {
    number: "02",
    title: "University Shortlisting",
    description: "Research-backed shortlist of 6-8 universities across 2-3 countries.",
  },
  {
    number: "03",
    title: "Application & SOP",
    description: "Expert-crafted SOP and complete application management.",
  },
  {
    number: "04",
    title: "Visa Preparation",
    description: "Complete visa documentation with 95% success rate.",
  },
  {
    number: "05",
    title: "Pre-Departure Support",
    description: "Accommodation, banking, insurance, and arrival support.",
  },
]

export const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Neelamana",
    role: "Founder & Operations Head",
    monogram: "SN",
    color: "#1B2A4A",
    bio: "Sandeep ensures every Versa Global student receives meticulous support from first enquiry to landing in their destination.",
  },
  {
    name: "Sreenivasa Prabhu",
    role: "Founder & Finance Head",
    monogram: "SP",
    color: "#C9A84C",
    bio: "Sreenivasa helps students maximize scholarship opportunities and plan their study abroad finances effectively.",
  },
  {
    name: "Aman Faisal S",
    role: "Founder & Marketing Head",
    monogram: "AF",
    color: "#10B981",
    bio: "Aman makes Versa Global the most recognized study abroad brand in Kerala, reaching students across the state.",
  },
]

export const STATS: Stat[] = [
  { value: 1000, suffix: "+", label: "Students Placed" },
  { value: 60, suffix: "+", label: "Countries" },
  { value: 95, suffix: "%", label: "Visa Success Rate" },
  { value: 8, suffix: "+", label: "Destinations" },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arya Suresh",
    destination: "United Kingdom",
    university: "University of Manchester",
    quote:
      "Versa Global handled everything from my IELTS preparation to visa. I got into my dream university in the UK.",
    rating: 5,
  },
  {
    name: "Vivek Menon",
    destination: "Canada",
    university: "University of Toronto",
    quote:
      "The PGWP guidance from Versa Global was incredible. I now have my Canadian PR in progress.",
    rating: 5,
  },
  {
    name: "Lakshmi Pillai",
    destination: "Germany",
    university: "TU Munich",
    quote:
      "I had no idea Germany was free for international students until Versa Global explained it. Saved my family lakhs.",
    rating: 5,
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "uk-study-visa-2026",
    title: "Complete UK Student Visa Guide for Kerala Students 2026",
    category: "UK",
    date: "June 2026",
    excerpt:
      "Complete documentation checklist and timeline for Kerala students applying to UK universities.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop",
    body: `Applying for a UK Student Visa (formerly Tier 4) requires careful preparation, especially for Kerala students navigating the process for the first time. The UK remains one of the most sought-after destinations for higher education, offering world-class universities, a 2-year post-study work visa, and a rich multicultural environment.

The first step is securing a Confirmation of Acceptance for Studies (CAS) from your chosen UK university. Once you have your CAS number, you can apply online through the UK Visas and Immigration portal no more than 6 months before your course start date. Kerala students applying from India should budget approximately 5-6 weeks for the entire process, including biometrics at a UKVCAS service point in Kochi or Trivandrum.

Key documents include your CAS letter, proof of English proficiency (IELTS 6.0+ for most programs), financial evidence showing at least £1,334 per month for up to 9 months of living costs plus your first year&apos;s tuition, valid passport, and academic transcripts. Students from Kerala often face additional scrutiny on financial documents, so it is critical to ensure bank statements show consistent balances over 28 consecutive days prior to application.

Versa Global&apos;s dedicated UK visa team has maintained a 97% first-attempt success rate for Kerala students. Our counsellors review every document before submission, prepare you for potential immigration officer interviews, and guide you through the Healthcare Surcharge payment. Book your free profile assessment today and let us handle the complexity of your UK visa application.`,
  },
  {
    slug: "canada-pgwp-guide",
    title: "Canada PGWP: From Student Visa to Permanent Residency",
    category: "Canada",
    date: "May 2026",
    excerpt:
      "How Kerala students can use Canada&apos;s Post-Graduate Work Permit to get permanent residency.",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80&auto=format&fit=crop",
    body: `Canada&apos;s Post-Graduate Work Permit (PGWP) program is one of the most powerful pathways to permanent residency available to international students anywhere in the world. For Kerala students dreaming of building a life in Canada, the PGWP is the critical bridge between your student life and your Canadian future.

The PGWP allows graduates of eligible Designated Learning Institutions (DLIs) to work in Canada for up to 3 years after graduation, depending on the length of their study program. A program of 2 years or longer earns you a 3-year PGWP, which gives you the time needed to accumulate the Canadian work experience required for programs like Canadian Experience Class (CEC) under Express Entry. Most Kerala students at Versa Global target programs between 2-3 years to maximize their PGWP duration.

Once you have 1-2 years of skilled work experience in Canada under your PGWP, you become eligible to apply for permanent residency through Express Entry. The CEC stream has seen Comprehensive Ranking System (CRS) scores as low as 420-450 in recent draws, making it achievable for well-qualified Kerala professionals in fields like IT, engineering, healthcare, and business management.

Versa Global&apos;s Canada specialists help you select programs at the right DLIs that align with in-demand NOC (National Occupation Classification) codes, maximizing your chances of a successful PR application. Our post-landing support team stays connected with students throughout their PGWP period, advising on job search strategies, PR documentation, and provincial nominee programs as backup pathways.`,
  },
  {
    slug: "germany-free-education",
    title: "How to Study in Germany for Free in 2026",
    category: "Germany",
    date: "April 2026",
    excerpt:
      "Germany&apos;s public universities charge zero tuition. Here&apos;s how Kerala students can access this.",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80&auto=format&fit=crop",
    body: `Germany is the world&apos;s best-kept secret in international education. While Indian families spend ₹40-80 lakhs on UK or US degrees, German public universities charge zero tuition for international students — including those from Kerala. You only pay a semester contribution of roughly €250-350 covering administrative fees and often a public transport pass.

To access Germany&apos;s tuition-free universities, you will need to meet language requirements. Most undergraduate programs are taught in German, requiring at least B2-C1 German proficiency (TestDaF or DSH certification). However, Germany has seen an explosion of English-taught Master&apos;s programs, particularly in engineering, computer science, and business, where instruction is entirely in English and you only need IELTS 6.5 or equivalent. Universities like TU Munich, RWTH Aachen, and Heidelberg University offer world-class English programs at zero tuition cost.

The application process for German universities goes through uni-assist, a centralized portal that evaluates international credentials. Kerala students with strong academic records (65%+ in their undergraduate degree) are competitive for German university admissions. You will need to demonstrate €11,208 in a blocked account (Sperrkonto) to cover your first year of living expenses — this money is yours to use after arrival.

Versa Global&apos;s Germany specialists have helped dozens of Kerala families save tens of lakhs by choosing Germany over more expensive English-speaking destinations. We handle your uni-assist application, blocked account setup, German consulate visa appointment, and connect you with Kerala student communities already thriving in cities like Munich, Berlin, and Stuttgart.`,
  },
]

export const FAQS = [
  {
    question: "How long does the study abroad application process take?",
    answer:
      "Typically 6-12 months from initial consultation to visa approval. We recommend starting at least 12 months before your intended intake date to maximize university options and scholarship opportunities.",
  },
  {
    question: "What are the English language requirements for studying abroad?",
    answer:
      "Most universities require IELTS 6.0-7.0 or TOEFL 80-100. Requirements vary by university and program. We provide IELTS preparation guidance and can recommend partner coaching centres in Kerala.",
  },
  {
    question: "How much does it cost to study abroad?",
    answer:
      "Costs vary significantly by destination. Germany public universities have zero tuition. Canada costs CAD 15,000-35,000/year. UK costs GBP 12,000-25,000/year. We help you identify scholarships to reduce costs.",
  },
  {
    question: "What is Versa Global&apos;s visa success rate?",
    answer:
      "We maintain a 95%+ visa success rate across all destinations. Our team reviews every document before submission and has deep knowledge of each country&apos;s immigration requirements.",
  },
  {
    question: "Do you offer post-arrival support?",
    answer:
      "Yes. Our pre-departure and post-arrival support includes accommodation search, airport pickup coordination, bank account opening guidance, SIM card setup, and connecting you with our alumni network in your destination.",
  },
  {
    question: "Can I work while studying abroad?",
    answer:
      "Yes — most destinations allow part-time work. UK allows 20 hours/week during term. Canada allows 20 hours/week off-campus. Australia allows 48 hours per fortnight. Germany allows 120 full days or 240 half days per year.",
  },
]

export const SCHEMES = [
  {
    name: "Kerala State Education Loan",
    description:
      "Government-backed loans up to ₹20 lakhs for students from Kerala pursuing higher education abroad. Low interest rates with moratorium during study period.",
  },
  {
    name: "National Overseas Scholarship",
    description:
      "Central government scholarship for SC/ST students to pursue higher education abroad. Covers tuition, living expenses, and travel for Masters and PhD programs.",
  },
  {
    name: "HDFC Credila Education Loan",
    description:
      "Specialized education loan product for Indian students studying abroad. Covers tuition, accommodation, travel, and other education-related expenses.",
  },
]

export const OFFER = {
  title: "Free Profile Evaluation",
  subtitle: "Know Your Study Abroad Potential",
  description:
    "Our expert counsellors will assess your academic profile, career goals, and budget to recommend the best universities and destinations — at absolutely no cost.",
  cta: "Book Free Evaluation",
}
