import type { Destination, ProcessStep, Testimonial, BlogPost, Stat, Founder } from "@/types"

export const SITE = {
  name: "Versa Global",
  phone: "+91 9746433133",
  email: "admissions@versaglobal.in",
  address: "3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021",
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
      "EU hub for Google, Apple, Facebook, Microsoft European HQs. Note: Ireland&apos;s free-fees scheme covers EU/EEA students only — international tuition applies, with strong scholarship support available.",
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
    title: "Canada PGWP 2026: Complete Guide to Eligibility, Cost, Application & Life After It Expires",
    category: "Canada",
    date: "August 2026",
    excerpt:
      "What the Post-Graduate Work Permit is, who&apos;s eligible, how much it costs, how long it lasts, and what to do when it expires — everything Indian students ask us about PGWP.",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80&auto=format&fit=crop",
    body: `Canada&apos;s Post-Graduate Work Permit (PGWP) is one of the most powerful pathways to permanent residency available to international students anywhere in the world. It&apos;s also the single topic our Canada counsellors field the most questions about — so this guide answers the practical ones directly, in order.

## What Is the PGWP?

The PGWP is an open work permit issued to international students after they graduate from an eligible Designated Learning Institution (DLI) in Canada. "Open" means it isn&apos;t tied to a single employer — you can work for almost any employer, in almost any occupation, anywhere in Canada, for the duration of the permit. It exists specifically to let graduates gain Canadian work experience, which is the single biggest factor in qualifying for permanent residency afterward.

## Who Is Eligible for PGWP?

Eligibility depends primarily on your program and institution, not your grades or field of study. In general, you qualify if you: completed a program at least 8 months long at an eligible DLI, studied full-time throughout your program (with limited exceptions for your final semester), graduated and received your credential confirmation, and apply within 180 days of receiving that confirmation. Programs shorter than 8 months, most online/distance programs, and certain non-DLI institutions do not qualify — this is exactly why Versa Global only recommends PGWP-eligible institutions and programs when we build your Canada application.

## How to Apply for PGWP Inside Canada

Most students apply from within Canada, online through your IRCC (Immigration, Refugees and Citizenship Canada) account, shortly after receiving official confirmation that you&apos;ve completed your program. You&apos;ll need your final transcript or an official completion letter, your study permit, a valid passport, and the application fee. You can typically continue working full-time under your existing study permit&apos;s post-graduation work authorization while your PGWP application is processed, as long as you applied before your study permit expired and meet the maintained-status conditions.

## Can You Apply for PGWP From Outside Canada?

Yes — if you left Canada after completing your program, you can still apply for PGWP from outside the country, provided you apply within the 180-day window and meet all other eligibility requirements. The process is largely the same, submitted online through your IRCC account, though you won&apos;t have implied status to work while it&apos;s processed since you&apos;re not physically in Canada. Because timing matters so much here, we recommend confirming your exact situation with a counsellor before you travel.

## PGWP Cost and Fees

The PGWP application involves a work permit processing fee plus an open work permit holder fee, both paid to IRCC at the time of application (fees are set by IRCC and revised periodically, so always confirm the current amount on the official IRCC fee schedule before paying). Budget for these as part of your overall post-study costs alongside any biometrics fee, which most applicants have already provided during their study permit application and won&apos;t need to repeat unless specifically requested.

## PGWP Processing Time

Processing times move around based on IRCC&apos;s current volumes, but most PGWP applications are processed within a few weeks to a couple of months when submitted online with complete documentation. Incomplete applications — missing transcripts, unclear completion letters, mismatched program details — are the most common cause of delay, which is why our team reviews every document before submission.

## Do You Need IELTS or PTE for PGWP?

No — unlike your original study permit or a future PR application, the PGWP application itself does not require an IELTS, PTE, or any other English test score. Your language test scores become relevant again later, when you apply for permanent residency through Express Entry, where a higher score directly improves your Comprehensive Ranking System (CRS) points.

## How Long Does PGWP Last, and Can It Be Extended?

Your PGWP length is tied directly to the length of your study program: programs of 8 months to under 2 years typically receive a permit matching the program length, while programs of 2 years or longer receive the maximum 3-year PGWP. This is why most Versa Global students target 2-year-plus programs specifically to maximize their post-study work window. Importantly, the PGWP itself generally cannot be extended beyond what your program length qualifies you for — which makes planning what happens next essential well before it expires.

## From PGWP to Permanent Residency

Once you have 1-2 years of skilled work experience in Canada under your PGWP, you become eligible to apply for permanent residency through Express Entry, most commonly via the Canadian Experience Class (CEC) stream. CRS score requirements shift with every draw, but CEC has historically been one of the more accessible streams for graduates with in-demand NOC (National Occupation Classification) codes in fields like IT, engineering, healthcare, and business management. Provincial Nominee Programs (PNPs) are a strong backup pathway if your CRS score falls short of a given Express Entry draw.

## What Happens When Your PGWP Expires — How to Stay in Canada

This is the question we get asked most urgently, usually with a few months of the permit left. The realistic options, roughly in order of how commonly they&apos;re used: apply for PR before your PGWP expires if you already qualify (the strongest option, since PR removes the expiry problem entirely); transition to an employer-specific work permit if you have a job offer and a positive LMIA or an LMIA-exempt category applies; apply under a Provincial Nominee Program stream that leads to a work permit bridge; or, in limited cases, apply for a bridging open work permit if you have a pending PR application. What you should not do is let your PGWP lapse without a plan — status gaps make every one of these paths harder. If your PGWP is expiring within the next year, that&apos;s exactly the point to start this conversation with us, not after.

## How Versa Global Helps

Our Canada specialists help you select programs at DLIs that align with in-demand NOC codes from day one, maximizing both your PGWP duration and your PR chances later. Our post-landing support team stays connected with students throughout their PGWP period — advising on job search strategy, PR documentation, and PNP backup pathways — so "what happens when my PGWP expires" is a question you&apos;re never asking us for the first time with three months left on the clock.`,
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
  {
    slug: "study-in-ireland-cost-guide",
    title: "Study in Ireland 2026: Real Cost Breakdown, Best Universities & Is It Actually Free?",
    category: "Ireland",
    date: "August 2026",
    excerpt:
      "What studying in Ireland actually costs for Indian students — tuition, living expenses, medicine and nursing programs, scholarships, and the honest answer to \"can I study in Ireland for free?\"",
    image:
      "https://images.unsplash.com/photo-1564959130747-897fb406b9af?w=600&q=80&auto=format&fit=crop",
    body: `Ireland comes up in almost every conversation we have about the EU as an English-speaking gateway with Google, Apple, Meta, and Microsoft&apos;s European headquarters all based there. It also comes with more myths and mixed information than almost any other destination we advise on — so here&apos;s the honest, practical version.

## Is Ireland Free to Study In?

No, not for international students — this is the single biggest misconception we correct. Ireland&apos;s "free fees" scheme covers tuition for Irish and EU/EEA citizens at public universities, not international students from India or most non-EU countries. As a non-EU international student, you will pay full international tuition fees, which vary significantly by university and course. There is no blanket free-tuition pathway to Ireland the way there is with Germany&apos;s public universities — budget for real tuition costs from the start.

## What Does It Actually Cost to Study in Ireland?

For Indian students, total annual costs typically run in two parts: tuition and living expenses. Tuition for international undergraduate programs commonly ranges from roughly €10,000-€25,000 per year depending on the university and course, with postgraduate business and specialized programs often at the higher end. Living costs in Dublin — the most expensive city — typically run €12,000-€15,000 per year for accommodation, food, and transport, while smaller cities like Cork, Galway, and Limerick can bring this down meaningfully. Altogether, most Indian students should budget somewhere between ₹20-40 lakhs per year all-in, though this varies widely by course and city.

## What Does It Cost to Study Medicine in Ireland?

Medicine is Ireland&apos;s most expensive program category for international students, and one of the most commonly asked-about. International medical program fees typically run significantly higher than other courses — often in the range of €45,000-€60,000+ per year at leading medical schools, across a 5-6 year program. This makes Ireland a premium option for medicine specifically, generally more expensive than management or engineering programs, and worth planning for well in advance given the extended program length.

## Best Universities and Cities to Study In

Trinity College Dublin, University College Dublin, University College Cork, NUI Galway, and Dublin City University are Ireland&apos;s most recognized universities internationally, particularly strong in technology, pharma, business, and data analytics — directly aligned with the multinational employers headquartered in Dublin. Dublin offers the strongest job market and networking access but the highest living costs; Cork, Galway, and Limerick offer meaningfully lower living costs with strong programs and a less overwhelming adjustment for students new to living abroad.

## Scholarships for Indian Students

The Government of Ireland International Education Scholarship and various Enterprise Ireland and university-specific scholarships offer partial tuition support, though — unlike Germany&apos;s zero-tuition model — scholarships in Ireland typically offset rather than eliminate costs. University-specific merit scholarships are often the most accessible starting point, and our counsellors help identify which of your target universities offer them before you apply, since availability changes by intake.

## Do You Need IELTS to Study in Ireland?

Most programs require IELTS (typically 6.0-6.5 for undergraduate, 6.5-7.0 for postgraduate and professional programs like nursing), though some universities accept alternative proof of English proficiency — including PTE Academic or, in specific cases, a strong record of English-medium prior education. IELTS-waiver pathways exist but are university and course-specific, not a general rule, so this is worth confirming for your exact shortlist rather than assuming either way.

## Studying Nursing or Law in Ireland

Nursing is a genuinely strong Irish specialization with clear registration pathways into the Irish and broader EU healthcare system after graduation, though it requires meeting both academic and, for some programs, clinical-placement eligibility criteria. Law degrees in Ireland (LLB) are respected but note that practicing law in Ireland as a non-EU graduate involves additional qualification steps beyond the degree itself — this is a common point of confusion we walk students through before they commit to the program.

## How Versa Global Helps With Ireland Applications

We build your Ireland shortlist around your actual budget and career goals rather than university prestige alone — because the cost gap between a Dublin business master&apos;s and a Cork-based technology program can be enormous for a similar career outcome. Our team handles university applications, scholarship applications where available, visa documentation, and the financial evidence requirements for your Irish study visa, so the number you budget for at the start is the number you actually pay.`,
  },
  {
    slug: "best-study-abroad-consultants-kochi-checklist",
    title: "How to Choose the Best Study Abroad Consultant in Kochi (2026 Checklist)",
    category: "Versa Global",
    date: "August 2026",
    excerpt:
      "Kochi has dozens of study abroad consultancies. Here&apos;s the honest checklist to evaluate any of them — including us — before you commit.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop",
    body: `Search "study abroad consultants in Kochi" and you&apos;ll get dozens of names, most with a mix of genuinely good and clearly fake-looking reviews. We&apos;re not going to tell you Versa Global is the only good option in Kochi — that wouldn&apos;t be honest, and it wouldn&apos;t help you. Instead, here&apos;s the actual checklist we&apos;d want you to use to evaluate any consultant, including us.

## Ask About Their Real Visa Success Rate — And Ask How It&apos;s Measured

Every consultancy will quote you a success rate. Ask specifically: success rate out of applications submitted, or out of initial consultations? A consultancy that only takes on students it&apos;s confident about will naturally show a higher number than one that&apos;s transparent about every case. Ask for the rate broken down by country, since a strong UK number doesn&apos;t tell you anything about their Canada or Ireland track record.

## Check Whether They Have a Physical Office You Can Visit

This matters more for study-abroad decisions than almost any other service purchase, because you&apos;re trusting someone with a life decision involving lakhs of rupees and years of your life. A consultancy operating only through Instagram DMs and WhatsApp, with no verifiable office address in Kochi, is a real risk — not necessarily a scam, but harder to hold accountable if something goes wrong mid-process.

## Ask Exactly What&apos;s Included in Their Fee — Before You Pay Anything

This is where most complaints against consultancies in Kochi actually originate: unclear scope. Get a written breakdown of what&apos;s covered — university applications, SOP writing, visa documentation, post-landing support — and what costs extra. A consultancy that&apos;s vague about this upfront is far more likely to surprise you with add-on charges later.

## Ask Who Will Actually Handle Your File

Larger consultancies often have a sales counsellor who signs you up and a completely different, more junior team that actually processes your application. Ask directly who you&apos;ll be working with day-to-day, and whether that person specializes in your target country — a generalist counsellor handling UK, Canada, Ireland, and Australia applications simultaneously is not the same as a dedicated country specialist.

## Read Reviews Critically, Not Just by Star Rating

A consultancy with 500 five-star reviews and almost no detail in any of them is a weaker signal than one with 80 reviews that mention specific counsellor names, specific universities, and specific outcomes. Genuine reviews tend to be specific; incentivized or fake reviews tend to be generic.

## Ask About Post-Landing Support, Not Just Visa Approval

A visa stamp isn&apos;t the finish line. Ask what happens after you land — is there support with accommodation, initial banking setup, or (for Canada specifically) guidance through the PGWP and PR process later? Consultancies that treat visa approval as the end of the relationship tend to leave students unsupported exactly when questions get more complicated, not less.

## What We&apos;d Want You to Ask Us

If you&apos;re evaluating Versa Global against any other Kochi consultancy using this exact checklist, we&apos;re comfortable with that — ask us our country-wise success rates, ask to meet the counsellor who&apos;ll actually handle your file, and ask what our post-landing support actually looks like. That&apos;s a fair way to choose, whoever you end up going with.`,
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
