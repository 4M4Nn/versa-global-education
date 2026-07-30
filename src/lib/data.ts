import type { Destination, ProcessStep, Testimonial, BlogPost, Stat, Founder } from "@/types"

export const SITE = {
  name: "Versa Global",
  phone: "+91 9746433133",
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
    id: "georgia",
    name: "Georgia",
    flag: "🇬🇪",
    tagline: "Low-Cost MBBS & Management Degrees",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80&auto=format&fit=crop",
    programs: ["MBBS / Medicine", "Management & MBA", "Dentistry", "Business", "Engineering"],
    scholarships: "University merit-based fee waivers",
    intake: "September & February",
    visa: "Student Visa (D3)",
    description:
      "One of the most affordable routes to an internationally recognized medical degree — MCI/NMC-compliant MBBS at a fraction of Indian private college fees, alongside strong management and MBA programs taught in English.",
  },
  {
    id: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",
    tagline: "A Destination Most Agencies Overlook",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&q=80&auto=format&fit=crop",
    programs: ["Engineering", "Business & K-Trade", "Computer Science", "Design", "Biotechnology"],
    scholarships: "Global Korea Scholarship (GKS), university tuition waivers",
    intake: "March & September",
    visa: "D-2 Student Visa",
    description:
      "Top-ranked technology and engineering universities, generous scholarships, and a fast-growing job market in electronics, gaming, and biotech — a destination we intentionally highlight because most consultancies don&apos;t.",
  },
  {
    id: "vietnam",
    name: "Vietnam",
    flag: "🇻🇳",
    tagline: "Affordable Education, Fast-Growing Economy",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80&auto=format&fit=crop",
    programs: ["Business", "Medicine", "IT & Software Engineering", "Hospitality", "Engineering"],
    scholarships: "University tuition scholarships for international students",
    intake: "September & January",
    visa: "Student Visa (DH Visa)",
    description:
      "Low tuition and living costs, English-taught programs, and rising demand for skilled graduates in one of Asia&apos;s fastest-growing economies — an emerging option we bring to students before it becomes mainstream.",
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
    description: "A shortlist built entirely around your preferred country, course, and budget — not a fixed template.",
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
    name: "Sreenivasa Prabhu",
    role: "Principal Advisor – Global Education Pathways",
    monogram: "SP",
    color: "#C9A84C",
    bio: "A serial entrepreneur with an M.Sc. in Chemistry, an MBA, and a Master's in Innovation Management, Sreenivasa has built ventures across healthcare, education, training, and technology. He pursued higher education in Europe himself and has worked across international markets — bringing a genuine global outlook to every student he advises.",
  },
  {
    name: "Sandeep Neelamana",
    role: "Student Finance & Visa Advisory",
    monogram: "SN",
    color: "#1B2A4A",
    bio: "A financial services veteran with leadership roles at Reliance Nippon Life Insurance, Future Generali India Insurance, and Care Health Insurance, Sandeep led franchise operations worth over ₹100 crore through AssureX Fin Solutions and is founder of Future Optima IT Solutions and LoopGen Technologies. He brings deep expertise in lending, financial planning, and regulatory compliance to every student's loan and visa journey.",
  },
  {
    name: "Aman Faisal S",
    role: "Student Outreach & Digital Strategy",
    monogram: "AF",
    color: "#10B981",
    bio: "A digital marketing and talent-outreach specialist with a strong track record of building online communities and managing high-performing campaigns. Aman combines data-driven marketing with genuine student relationships to help aspiring applicants discover the right global education opportunities.",
  },
]

export const STATS: Stat[] = [
  { value: 1000, suffix: "+", label: "Students Placed" },
  { value: 60, suffix: "+", label: "Countries" },
  { value: 95, suffix: "%", label: "Visa Success Rate" },
  { value: 20, suffix: "+", label: "Bank & NBFC Partners" },
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
    slug: "most-trusted-study-abroad-agency",
    title: "What Makes Versa Global the Most Trusted Study Abroad Agency for Indian Students",
    category: "Versa Global",
    date: "July 2026",
    excerpt:
      "Firsthand international experience, transparent counselling, and end-to-end support — here&apos;s why students across India choose Versa Global as their study abroad partner.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&auto=format&fit=crop",
    body: `Choosing a study abroad agency is one of the most consequential decisions a student and their family will make, which is why Versa Global has built its reputation as the most trusted study abroad agency for students across India — not just in one state or city. Our team has personally studied at leading international institutions and built professional careers across global markets, giving us firsthand understanding of both the opportunities and the challenges of studying overseas.

Unlike agencies that push students toward a fixed list of partner universities, Versa Global builds every recommendation around the individual — their academic profile, career goals, budget, and personal preferences. We support 60+ study destinations worldwide, from globally popular choices like the UK, Canada, Australia, and the USA, to high-value alternatives like Germany, and emerging destinations such as Georgia, Vietnam, and South Korea that most consultancies never mention.

Our support does not stop at admission. Versa Global provides end-to-end assistance across the entire study abroad journey — university selection, application and admission support, education loan guidance through our tie-ups with 20+ banks and NBFCs, visa assistance, country-specific documentation, accommodation arrangements, and pre-departure and arrival support.

With a 95%+ visa success rate and 1,000+ students placed, Versa Global combines global perspective, personalized mentorship, and transparent guidance to help students not only study abroad, but thrive abroad. Book a free profile evaluation today and experience why families trust Versa Global with their most important academic decision.`,
  },
  {
    slug: "study-medicine-management-georgia",
    title: "Study MBBS and Management in Georgia: The Low-Cost Alternative for Indian Students",
    category: "Georgia",
    date: "July 2026",
    excerpt:
      "Georgia offers MCI/NMC-recognized medical degrees and strong management programs at a fraction of the cost of private colleges in India.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80&auto=format&fit=crop",
    body: `While the UK, Canada, and Australia dominate study abroad conversations, Georgia has quietly become one of the smartest choices for Indian students seeking a medical or management degree without the extreme cost of private colleges back home. Georgian medical universities are recognized by the National Medical Commission (NMC), meaning graduates are eligible to practice in India after clearing the FMGE screening test, just like graduates from any other recognized foreign medical university.

Tuition for a 6-year MBBS program in Georgia typically ranges from $40,000-50,000 for the entire course — a fraction of what private medical seats cost in India, with no capitation fees and transparent, English-medium instruction from year one. Living costs are equally affordable, and the application process does not require entrance exams beyond NEET eligibility for Indian students.

Georgia&apos;s management and MBA programs are an equally strong option, offering internationally recognized business degrees, English-taught coursework, and significantly lower tuition than equivalent programs in Western Europe or North America — making it an excellent low-cost pathway into global business education.

Versa Global&apos;s Georgia specialists handle university selection, NMC-compliance verification, visa documentation, and pre-departure preparation, ensuring students and families make a fully informed decision about this increasingly popular destination.`,
  },
  {
    slug: "study-in-south-korea-vietnam",
    title: "South Korea and Vietnam: Study Abroad Destinations Most Agencies Won't Tell You About",
    category: "South Korea",
    date: "June 2026",
    excerpt:
      "Two of Asia&apos;s fastest-growing economies offer world-class technology programs, generous scholarships, and low costs — yet most consultancies never mention them.",
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&q=80&auto=format&fit=crop",
    body: `Most study abroad consultancies funnel every student toward the same handful of countries — the UK, Canada, Australia, and the USA. But South Korea and Vietnam offer real, underexplored opportunities that deserve far more attention than they get, which is exactly why Versa Global makes a point of highlighting them.

South Korea has become a genuine hub for technology, engineering, and design education, home to globally ranked universities like Seoul National University, KAIST, and Yonsei University. The Global Korea Scholarship (GKS) and numerous university-level tuition waivers make South Korea highly affordable relative to its academic quality, and its booming electronics, gaming, and biotechnology industries offer strong post-study career prospects for international graduates.

Vietnam, meanwhile, is one of Asia&apos;s fastest-growing economies, with rising demand for skilled professionals in IT, business, and engineering. Tuition and living costs are a fraction of those in traditional Western destinations, English-taught programs are increasingly common, and the cultural and geographic proximity to India makes the transition smoother for many students.

Versa Global&apos;s counsellors evaluate whether South Korea or Vietnam genuinely fits a student&apos;s goals and budget — not because it&apos;s trendy, but because for the right profile, these destinations can outperform the more obvious choices.`,
  },
  {
    slug: "uk-study-visa-2026",
    title: "Complete UK Student Visa Guide 2026",
    category: "UK",
    date: "June 2026",
    excerpt:
      "Complete documentation checklist and timeline for Indian students applying to UK universities.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop",
    body: `Applying for a UK Student Visa (formerly Tier 4) requires careful preparation, especially for students navigating the process for the first time. The UK remains one of the most sought-after destinations for higher education, offering world-class universities, a 2-year post-study work visa, and a rich multicultural environment.

The first step is securing a Confirmation of Acceptance for Studies (CAS) from your chosen UK university. Once you have your CAS number, you can apply online through the UK Visas and Immigration portal no more than 6 months before your course start date. Applicants from India should budget approximately 5-6 weeks for the entire process, including biometrics at a UKVCAS service point.

Key documents include your CAS letter, proof of English proficiency (IELTS 6.0+ for most programs — though some universities waive this requirement depending on your academic background), financial evidence showing at least £1,334 per month for up to 9 months of living costs plus your first year&apos;s tuition, valid passport, and academic transcripts. It is critical to ensure bank statements show consistent balances over 28 consecutive days prior to application.

Versa Global&apos;s dedicated UK visa team has maintained a 97% first-attempt success rate for students across India. Our counsellors review every document before submission, prepare you for potential immigration officer interviews, and guide you through the Healthcare Surcharge payment. Book your free profile assessment today and let us handle the complexity of your UK visa application.`,
  },
  {
    slug: "canada-pgwp-guide",
    title: "Canada PGWP: From Student Visa to Permanent Residency",
    category: "Canada",
    date: "May 2026",
    excerpt:
      "How Indian students can use Canada&apos;s Post-Graduate Work Permit to get permanent residency.",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80&auto=format&fit=crop",
    body: `Canada&apos;s Post-Graduate Work Permit (PGWP) program is one of the most powerful pathways to permanent residency available to international students anywhere in the world. For students dreaming of building a life in Canada, the PGWP is the critical bridge between your student life and your Canadian future.

The PGWP allows graduates of eligible Designated Learning Institutions (DLIs) to work in Canada for up to 3 years after graduation, depending on the length of their study program. A program of 2 years or longer earns you a 3-year PGWP, which gives you the time needed to accumulate the Canadian work experience required for programs like Canadian Experience Class (CEC) under Express Entry. Most Versa Global students target programs between 2-3 years to maximize their PGWP duration.

Once you have 1-2 years of skilled work experience in Canada under your PGWP, you become eligible to apply for permanent residency through Express Entry. The CEC stream has seen Comprehensive Ranking System (CRS) scores as low as 420-450 in recent draws, making it achievable for well-qualified professionals in fields like IT, engineering, healthcare, and business management.

Versa Global&apos;s Canada specialists help you select programs at the right DLIs that align with in-demand NOC (National Occupation Classification) codes, maximizing your chances of a successful PR application. Our post-landing support team stays connected with students throughout their PGWP period, advising on job search strategies, PR documentation, and provincial nominee programs as backup pathways.`,
  },
  {
    slug: "germany-free-education",
    title: "How to Study in Germany for Free in 2026",
    category: "Germany",
    date: "April 2026",
    excerpt:
      "Germany&apos;s public universities charge zero tuition. Here&apos;s how Indian students can access this.",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80&auto=format&fit=crop",
    body: `Germany is the world&apos;s best-kept secret in international education. While Indian families spend ₹40-80 lakhs on UK or US degrees, German public universities charge zero tuition for international students. You only pay a semester contribution of roughly €250-350 covering administrative fees and often a public transport pass.

To access Germany&apos;s tuition-free universities, you will need to meet language requirements. Most undergraduate programs are taught in German, requiring at least B2-C1 German proficiency (TestDaF or DSH certification). However, Germany has seen an explosion of English-taught Master&apos;s programs, particularly in engineering, computer science, and business, where instruction is entirely in English and you only need IELTS 6.5 or equivalent — and some programs waive the requirement altogether based on prior medium of instruction. Universities like TU Munich, RWTH Aachen, and Heidelberg University offer world-class English programs at zero tuition cost.

The application process for German universities goes through uni-assist, a centralized portal that evaluates international credentials. Students with strong academic records (65%+ in their undergraduate degree) are competitive for German university admissions. You will need to demonstrate €11,208 in a blocked account (Sperrkonto) to cover your first year of living expenses — this money is yours to use after arrival.

Versa Global&apos;s Germany specialists have helped dozens of families save tens of lakhs by choosing Germany over more expensive English-speaking destinations. We handle your uni-assist application, blocked account setup, German consulate visa appointment, and connect you with student communities already thriving in cities like Munich, Berlin, and Stuttgart.`,
  },
]

export const FAQS = [
  {
    question: "How long does the study abroad application process take?",
    answer:
      "Typically 6-12 months from initial consultation to visa approval. We recommend starting at least 12 months before your intended intake date to maximize university options and scholarship opportunities.",
  },
  {
    question: "How long does the visa process take once my documents are ready?",
    answer:
      "It takes about 1 to 1.5 months, if all the documents are in place. Delays usually happen only when documentation is incomplete, so our team reviews everything upfront to keep you on schedule.",
  },
  {
    question: "Is IELTS or TOEFL compulsory for every university?",
    answer:
      "Not always. There are universities that may waive off the IELTS/TOEFL requirement depending on your academic background and prior medium of instruction. Please discuss this with our consultants during your profile evaluation.",
  },
  {
    question: "What are the English language requirements for studying abroad?",
    answer:
      "Most universities require IELTS 6.0-7.0 or TOEFL 80-100. Requirements vary by university and program, and some universities waive this requirement altogether. We provide IELTS preparation guidance and can recommend partner coaching centres.",
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
    name: "20+ Bank & NBFC Partnerships",
    description:
      "We work directly with 20+ leading banks and NBFCs, giving students access to competitive interest rates and faster loan approvals — without having to shop around on their own.",
  },
  {
    name: "End-to-End Loan Documentation Support",
    description:
      "From collateral paperwork to income proof and sanction letters, our team manages the entire loan application process on your behalf, saving you time and preventing costly errors.",
  },
  {
    name: "Personalized Lender Matching",
    description:
      "Every student's financial situation is different. We match you with the lender and loan structure best suited to your profile, collateral availability, and repayment timeline.",
  },
]

export const OFFER = {
  title: "Free Profile Evaluation",
  subtitle: "Know Your Study Abroad Potential",
  description:
    "Our expert counsellors will assess your academic profile, career goals, and budget to recommend the best universities and destinations — at absolutely no cost.",
  cta: "Book Free Evaluation",
}
