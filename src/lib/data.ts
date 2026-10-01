import type { Destination, ProcessStep, Testimonial, BlogPost, Stat, Founder, CareerProgram, Faq } from "@/types"
import { OCTOBER_2026_POSTS } from "@/lib/blog-october-2026"
import { OCTOBER_2026_FAQS } from "@/lib/faqs-october-2026"

export const SITE = {
  name: "Versa Global",
  phone: "+91 9746433133",
  email: "admissions@versaglobal.in",
  businessEmail: "info@versagrowthventures.in",
  address: "3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021",
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/#destinations" },
  { label: "MBBS Abroad", href: "/mbbs-abroad" },
  { label: "Dubai IT Program", href: "/career-academy/it-infrastructure-engineer-program-dubai" },
  { label: "Courses", href: "/courses" },
  { label: "Digital Office", href: "/digital-office" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
]

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Study Destinations", href: "/destinations" },
  { label: "MBBS Abroad", href: "/mbbs-abroad" },
  { label: "MBBS in Vietnam", href: "/mbbs-abroad/vietnam" },
  { label: "MBBS in Georgia", href: "/mbbs-abroad/georgia" },
  { label: "Dubai IT Program", href: "/career-academy/it-infrastructure-engineer-program-dubai" },
  { label: "Career Academy", href: "/career-academy" },
  { label: "Courses", href: "/courses" },
  { label: "Digital Office", href: "/digital-office" },
  { label: "Education Loans", href: "/schemes" },
  { label: "Our Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export const ANNOUNCEMENTS = [
  {
    label: "Career Academy",
    message: "100% Job-Assured IT Program in Dubai — 60+ Students Already Placed in the GCC!",
    href: "/career-academy/it-infrastructure-engineer-program-dubai",
  },
  {
    label: "MBBS Abroad",
    message: "NEET-Qualified? Study MBBS in Vietnam From ₹31 Lakhs for the Full Program, Hostel Included",
    href: "/mbbs-abroad",
  },
]

export const BLOG_TOPIC_LINKS = [
  { label: "MBBS Abroad", href: "/mbbs-abroad" },
  { label: "Dubai IT Program", href: "/career-academy/it-infrastructure-engineer-program-dubai" },
  { label: "Study Destinations", href: "/destinations" },
  { label: "Education Loans", href: "/schemes" },
  { label: "All FAQs", href: "/faq" },
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
      "Low tuition and living costs, English-taught programs, and rising demand for skilled graduates in one of Asia&apos;s fastest-growing economies. MBBS in Vietnam now starts from ₹31 lakhs — NMC-recognized, FMGE-eligible.",
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

export const CAREER_PROGRAMS: CareerProgram[] = [
  {
    slug: "it-infrastructure-engineer-program-dubai",
    title: "IT Infrastructure Engineer Program — Dubai, Online & Hybrid",
    shortName: "IT Infrastructure Engineer Program",
    tagline: "100% Job Assurance in GCC Countries — A Job That's Earned, Not Granted",
    associationPartner: "MACOB IT Solutions, Dubai — Corporate Training Division",
    focus: "IT Desktop Level 1 / Level 2, Basic Cloud Administration — specialising in Windows Server, Microsoft Azure and Office 365",
    durationHours: "250 Hrs",
    durationMonths: "4.5 – 6 Months",
    modes: ["Online", "Hybrid", "Classroom in Dubai"],
    targetAudience: "Degree / Diploma holders",
    prerequisites: "Basic familiarity with computer operation",
    learningObjectives: [
      "Specialise in Microsoft Windows Server, Microsoft Azure Cloud and Office 365",
      "Build practical, employer-ready infrastructure and cloud administration skills",
    ],
    modules: [
      {
        title: "Module 1 — Hardware & Networking",
        topics: [
          "IBM PC Installation and Configuration",
          "Hardware Maintenance and Troubleshooting",
          "Booting Issues, Partitions & OS Installations",
          "Software Installations",
          "Network Fundamentals",
          "Routers / Switch / Firewall Familiarization",
          "Cable Crimping and Basic Connectivity",
          "Basic LAN Infrastructure Setup",
        ],
      },
      {
        title: "Module 2 — Windows Server 2022",
        topics: [
          "Installation, Upgrading and Migration",
          "Storage Services, Storage Migration and Software-Defined Storage",
          "Hyper-V Virtualization",
          "Installation & Configuration of AD, DHCP, DNS, FTP, IIS, DFS",
          "Implementing Network Load Balancing",
          "AD, Disaster Recovery, Backup & Troubleshooting",
          "RAID Implementation",
          "Creating and Managing Deployments",
          "Performance Monitoring, Tuning & Load Mitigation",
        ],
      },
      {
        title: "Module 3 — Cisco Certified Network Associate (CCNA)",
        topics: [
          "IP Addressing, Subnetting & VLSM",
          "Router & Switch Connectivity, Modes and Configurations",
          "Routing — Static and Dynamic",
          "NAT / PAT and ACL",
          "Switch Configurations",
          "VLAN, Trunk & VTP",
          "Inter-VLAN Routing",
          "MAC Binding and Port Security",
        ],
      },
      {
        title: "Module 4 — Microsoft Azure Administrator",
        topics: [
          "Manage Azure Identities and Governance",
          "Implement and Manage Storage, Azure Files and Blob Storage",
          "Deploy and Manage Azure Compute Resources, Virtual Machines and Containers",
          "Implement and Manage Virtual Networking, Secure Access and Load Balancing",
          "Monitor and Maintain Azure Resources",
          "Manage Microsoft Entra Users, Groups and Access to Azure Resources",
          "Create and Configure Azure App Service",
          "Automate Deployment via ARM Templates / Bicep",
          "Implement Backup and Recovery, Azure Site Recovery and Failover",
          "Configure and Interpret Reports and Alerts for Backups",
        ],
      },
      {
        title: "Module 5 — Microsoft Office 365 Administration",
        topics: [
          "Deploy and Manage a Microsoft 365 Tenant",
          "Implement and Manage Microsoft Entra Identity",
          "Manage Security and Threats using Microsoft Defender",
          "Manage Compliance using Microsoft Purview",
          "Manage Users, Groups, Roles and Role Groups",
          "Implement and Manage Authentication Methods",
          "Migration of Emails from SharePoint / Zoho / Exchange to Office 365",
        ],
      },
    ],
    industryExposure: [
      { title: "Client Site Visits & AMC Audit", description: "Shadow live annual-maintenance audits at client premises in Dubai." },
      { title: "Real-Time Project Participation", description: "Work on active infrastructure and cloud engagements alongside MACOB IT Solutions' team." },
      { title: "Azure & Office 365 Implementation", description: "Hands-on participation in live tenant deployments, not simulations." },
      { title: "Data Center Visit — Dubai NOC", description: "Guided tour of a live regional Network Operations Center." },
    ],
    careerReadinessSteps: [
      "CV Clinic",
      "Job Guidance Workshop",
      "LinkedIn Workshop",
      "ATS Workshop",
      "Technical Interview Prep",
      "HR Questions Prep",
      "Mock Interviews",
    ],
    careerOutcomes: [
      "IT Administrator",
      "IT Level 1 / Level 2 Administrator",
      "IT System / Network Administrator",
      "IT Coordinator",
      "Microsoft Cloud Administrator",
      "Microsoft Messaging Administrator",
    ],
    trainingMaterials: [
      "Classroom theoretical training",
      "Practical, hands-on sessions with real servers",
      "Classroom digital notes and reference links / materials",
      "Access to latest servers, switches, routers, storage & firewalls",
      "Remote server and cloud lab environments",
    ],
    assessmentPlan: [
      "Quizzes: ongoing classroom interaction",
      "Assignments: periodic take-home assignments",
      "Final Project: 3 capstone projects",
      "Participation: real live customers, Data Center visits and AMC visits",
    ],
    fee: { amount: 23500, currency: "AED", paymentMode: "Single Payment", durationRange: "4.5 – 6 Months" },
    certificationExams: [
      { name: "MCSE Azure — MS104", code: "MS104", fee: 1300, currency: "AED" },
      { name: "Office 365 — MS101", code: "MS101", fee: 1300, currency: "AED" },
      { name: "CCNA Routing & Switching", code: "CCNA", fee: 3900, currency: "AED" },
    ],
    schedule: {
      fullTime: [
        "Morning batch: 10:00 AM – 6:00 PM (flexible)",
        "Minimum 50 training hours per month",
        "Weekly client site visits (flexible)",
        "25 hours dedicated to interview preparation",
      ],
      partTime: [
        "Customised time slots aligned to your work schedule",
        "Same curriculum depth and hands-on access as full-time learners",
      ],
    },
    instructorProfile: {
      summary: "Certified trainers with 10+ years of hands-on industry experience. Multiple trainers deliver the bundle-pack sessions, each specialising in their respective module.",
      certifications: ["MCSE", "CCNA", "Azure", "Office 365", "VMware", "CEH", "Linux"],
    },
    studentsPlaced: "60+",
    jobAssuranceStatement:
      "Every candidate receives dedicated job-assurance support until placed. This is not a guarantee handed out for free — it is the outcome of the discipline, skills and real-world exposure built into every stage of the program: live infrastructure practice, client site visits, real-time projects, a full career-readiness track and rigorous mock interviews. Learners who complete the program requirements and engage fully with the placement process are supported until they are placed in a GCC country.",
    location: "Dubai, UAE (classroom & hands-on labs) — with online and hybrid options for students studying from India",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80&auto=format&fit=crop",
    faqs: [
      {
        question: "What is the fee for the IT Infrastructure Engineer Program and what does it include?",
        answer:
          "The program fee is AED 23,500, payable as a single payment, and includes 250 hours of training over 4.5–6 months, full access to the 5-module curriculum, hands-on lab and client-site exposure, the complete 7-step career-readiness and 100% job-assurance track, and all three certification exam fees — MCSE Azure (MS104), Office 365 (MS101), and CCNA Routing & Switching — worth AED 6,500 on their own, at no extra cost. This excludes only living expenses in Dubai and visa fees, which vary by individual circumstances.",
      },
      {
        question: "Is visa support provided for students coming to Dubai for this program?",
        answer:
          "Yes. Versa Global provides visa support for students who choose the Dubai classroom or hybrid track, guiding you through the documentation needed to study in the UAE. Living expenses and the visa fee itself are the only costs not included in the AED 23,500 program fee and should be budgeted for separately.",
      },
      {
        question: "Can I complete this program online from India without moving to Dubai?",
        answer:
          "Yes. The IT Infrastructure Engineer Program runs in a 3-in-1 format — online, hybrid, or full classroom in Dubai — so you can study entirely online from India, combine remote study with periodic Dubai sessions on the hybrid track, or relocate to Dubai for full in-person classroom training and client site visits. All three tracks cover the same 250-hour curriculum and carry the same 100% job assurance.",
      },
      {
        question: "What does 100% job assurance actually mean in this program?",
        answer:
          "100% job assurance means every candidate who completes the program requirements and fully engages with the placement process receives dedicated job-assurance support until they are placed in a GCC country — it is not a job handed out without effort. It is backed by live infrastructure practice, real client site visits, real-time projects with MACOB IT Solutions, a complete 7-stage career-readiness track (CV clinic through mock interviews), and rigorous technical and HR interview preparation. 60+ students have been successfully placed in GCC countries through this pathway.",
      },
      {
        question: "How long does the IT Infrastructure Engineer Program take to complete?",
        answer:
          "The program runs 250 training hours over 4.5 to 6 months, depending on whether you're on the full-time track (minimum 50 training hours per month, morning batch 10 AM–6 PM) or the part-time track, which uses customised time slots aligned to your work schedule while covering the same curriculum depth.",
      },
      {
        question: "What certifications and career roles does this program prepare me for?",
        answer:
          "The curriculum prepares you for Microsoft's MCSE Azure (MS104) and Office 365 (MS101) certifications plus Cisco's CCNA Routing & Switching certification — all three exam fees are included in your program fee, at no extra cost. Graduates typically move into roles such as IT Administrator, IT Level 1/2 Administrator, IT System/Network Administrator, IT Coordinator, Microsoft Cloud Administrator, and Microsoft Messaging Administrator across GCC employers.",
      },
      {
        question: "Do I need prior IT experience to join this program?",
        answer:
          "No formal IT background is required — the program is designed for degree or diploma holders with basic familiarity with computer operation. Training starts from hardware and networking fundamentals in Module 1 before progressing to Windows Server, CCNA, Azure, and Office 365 administration.",
      },
      {
        question: "Who delivers the training and who are the trainers?",
        answer:
          "The program is delivered by Versa Global in association with MACOB IT Solutions, Dubai — Corporate Training Division. Sessions are led by certified trainers with 10+ years of hands-on industry experience, with multiple trainers each specialising in their own module. Trainer certifications include MCSE, CCNA, Azure, Office 365, VMware, CEH and Linux.",
      },
      {
        question: "Should I choose the online, hybrid or Dubai classroom track?",
        answer:
          "Choose online if you want to train from India without relocating — you get live sessions and remote access to server and cloud labs. Choose hybrid if you want remote study combined with periodic in-person sessions and site visits in Dubai. Choose the Dubai classroom if you want the full in-person experience with direct access to real servers, routers and switches, client site visits and the Dubai NOC data centre visit. The curriculum and the 100% job assurance are identical on all three.",
      },
      {
        question: "Is there a part-time option for working professionals?",
        answer:
          "Yes. Part-time learners get customised time slots aligned to their work schedule, with the same curriculum depth and hands-on access as full-time learners. Full-time learners train in a morning batch from 10:00 AM to 6:00 PM (flexible), with a minimum of 50 training hours per month.",
      },
      {
        question: "What real-world exposure do students get during the program?",
        answer:
          "Students take part in client site visits and AMC audits at client premises in Dubai, real-time projects on MACOB IT Solutions' active infrastructure and cloud engagements, live Azure and Office 365 tenant implementations, and a guided visit to a Dubai NOC data centre.",
      },
      {
        question: "How are students assessed?",
        answer:
          "Assessment combines ongoing classroom quizzes, periodic take-home assignments, three capstone projects and participation in live customer work, data centre visits and AMC visits.",
      },
      {
        question: "What does the placement preparation include?",
        answer:
          "A 7-stage career-readiness track: CV clinic, job guidance workshop, LinkedIn workshop, ATS workshop, technical interview preparation, HR questions preparation and mock interviews. Full-time learners get 25 hours dedicated to interview preparation.",
      },
      {
        question: "How many students have been placed through this program?",
        answer: "60+ students have been placed in GCC countries through this program so far.",
      },
      {
        question: "How do I enrol in the IT Infrastructure Engineer Program?",
        answer:
          "Start with a free consultation by phone or WhatsApp. Our Career Academy counsellors assess your background, help you choose between the online, hybrid and Dubai classroom tracks, and guide you through enrolment — including visa support if you choose a Dubai track.",
      },
    ],
    tracks: [
      {
        mode: "Online",
        bestFor: "Students and working professionals who want to train from India without relocating",
        howItWorks: "All 250 hours delivered remotely through live sessions, with remote access to server and cloud lab environments",
        visa: "No UAE visa needed",
      },
      {
        mode: "Hybrid",
        bestFor: "Learners who want in-person exposure without moving for the full program",
        howItWorks: "Remote study combined with periodic in-person sessions and client site visits in Dubai",
        visa: "UAE visa needed for the Dubai sessions — visa support provided",
      },
      {
        mode: "Classroom in Dubai",
        bestFor: "Learners who want the full hands-on experience, in the Gulf from day one",
        howItWorks: "Relocate to Dubai for the 4.5–6 month program, with direct access to real servers, routers and switches, client site visits and a Dubai NOC data centre visit",
        visa: "UAE visa needed — visa support provided",
      },
    ],
    enrolmentSteps: [
      {
        title: "Book a free consultation",
        description: "Call or WhatsApp Versa Global. A Career Academy counsellor reviews your qualification, background and goals.",
      },
      {
        title: "Choose your track",
        description: "Pick online, hybrid or the Dubai classroom, and full-time or part-time, based on your budget and schedule.",
      },
      {
        title: "Enrol and confirm your seat",
        description: "Complete enrolment and pay the AED 23,500 program fee, which includes all three certification exams.",
      },
      {
        title: "Visa support for Dubai tracks",
        description: "If you chose the hybrid or classroom track, we guide you through the UAE visa documentation.",
      },
      {
        title: "Train across five modules",
        description: "250 hours covering hardware and networking, Windows Server 2022, CCNA, Azure and Office 365, with live client exposure.",
      },
      {
        title: "Career readiness and placement",
        description: "Complete the 7-stage career-readiness track and receive dedicated placement support until you are placed in a GCC country.",
      },
    ],
    metaDescription:
      "100% job-assured IT Infrastructure Engineer Program by Versa Global, in association with MACOB IT Solutions, Dubai. Windows Server, Azure, Office 365 & CCNA training — online, hybrid or classroom in Dubai. AED 23,500, all certification exam fees included. 60+ students placed in GCC countries.",
    keywords: [
      "assured job in GCC countries",
      "study in Dubai IT course",
      "IT infrastructure engineer program Dubai",
      "100% job assurance IT course",
      "Windows Server Azure Office 365 CCNA training",
      "IT course with visa support Dubai",
      "career and skills academy Versa Global",
      "IT jobs in GCC after training",
      "IT jobs in Dubai for freshers",
      "job assured IT course in Dubai for Indians",
      "CCNA Azure course with placement in UAE",
      "IT course in Dubai from Kerala",
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  ...OCTOBER_2026_POSTS,
  {
    slug: "study-in-south-korea-guide-indian-students-2026",
    title: "Study in South Korea 2026: D-2 Visa, GKS Scholarship & Costs for Indian Students",
    category: "South Korea",
    date: "September 2026",
    publishedAt: "2026-09-29",
    excerpt:
      "A practical guide for Indian students considering South Korea — the D-2 student visa, the Global Korea Scholarship, English-taught programs, intakes, part-time work, and staying on after graduation.",
    image: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=600&q=80&auto=format&fit=crop",
    body: `South Korea is one of the strongest value-for-money study destinations for Indian students in 2026: globally ranked technology and engineering universities, a growing number of English-taught programs, and the fully funded Global Korea Scholarship (GKS) — at a total cost that is often well below the UK, USA, or Australia. It is a destination most consultancies skip, which is exactly why Versa Global counsels students on it.

## Which Visa Do I Need to Study in South Korea?

Degree students (bachelor's, master's, and PhD) apply for the D-2 student visa after receiving an admission letter and a Certificate of Admission from a Korean university. Students joining a Korean language program first — common for those who want to study later in Korean — use the D-4 visa. You will typically need your admission documents, proof of funds, academic records, and a valid passport, submitted through the Korean embassy or consulate that covers your state.

## What Is the Global Korea Scholarship (GKS)?

GKS is the Korean government's flagship scholarship for international students, run by the National Institute for International Education (NIIED). For selected students it generally covers tuition, a monthly living allowance, round-trip airfare, and a Korean language course before the degree begins. Selection is competitive and runs through two tracks — the embassy track and the university track — so the application strategy matters. Many Korean universities also offer their own tuition waivers for international students with strong grades.

## Do I Need to Know Korean?

Not for every program. Leading universities offer English-taught degrees, particularly in engineering, computer science, business, and international studies. However, basic Korean makes daily life, part-time work, and job hunting far easier, and a TOPIK (Test of Proficiency in Korean) score can strengthen both scholarship and job applications. We usually advise students to begin Korean alongside their application, not after arrival.

## When Are the Intakes?

South Korea has two main intakes: March (spring) and September (fall). March is the larger intake. Because GKS and many university deadlines close several months ahead, we recommend starting the process 9–12 months before your target semester.

## Can I Work Part-Time While Studying?

Yes, with permission. International students on a D-2 visa can work part-time after obtaining approval through their university and immigration office, within weekly hour limits that depend on your study level and Korean-language proficiency. Part-time income helps with living costs but should not be counted on to pay tuition — your financial plan needs to stand on its own.

## Can I Stay and Work in South Korea After Graduating?

Graduates can apply for the D-10 job-seeker visa to look for work in Korea after completing their degree, and move to an employment visa once hired. Korea's electronics, semiconductor, automotive, gaming, and biotech industries actively hire engineering and IT graduates, especially those with some Korean-language ability.

## How Does Versa Global Help?

We shortlist universities that match your profile and budget, assess whether you are a realistic GKS candidate and which track suits you, prepare your study plan and personal statement, arrange education-loan support through our 20+ bank and NBFC partners, and guide your D-2 visa documentation end-to-end. Book a free profile evaluation to find out whether South Korea is the right fit for you.`,
  },
  {
    slug: "education-loan-for-study-abroad-guide-2026",
    title: "Education Loan for Study Abroad 2026: Secured vs Unsecured, Documents & How to Compare",
    category: "Education Loans",
    date: "September 2026",
    publishedAt: "2026-09-29",
    excerpt:
      "How study abroad education loans actually work for Indian students — collateral vs non-collateral loans, what lenders check, the documents you need, and how to compare offers beyond the interest rate.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop",
    body: `Most Indian students fund study abroad with an education loan from a bank or NBFC. The two main choices are a secured loan (backed by property or deposits as collateral), which usually carries a lower interest rate, and an unsecured loan, which needs no collateral but depends heavily on your university, course, and co-applicant's income. The right choice depends on your family's assets, the loan amount, and how fast you need the sanction letter for your visa.

## What Is the Difference Between Secured and Unsecured Education Loans?

A secured loan is backed by collateral such as a house, flat, land, or fixed deposits. Because the lender's risk is lower, secured loans generally offer lower interest rates and higher loan amounts. An unsecured loan needs no collateral; instead, lenders look closely at the ranking of your university, the employability of your course, and the income and credit history of your co-applicant. Unsecured loans are usually faster to sanction but more expensive.

## What Do Lenders Check Before Approving a Loan?

Lenders typically assess your admission letter and the university's standing, the course and its job prospects, your academic record, your co-applicant's income and CIBIL (credit) score, and — for secured loans — the value and legal clarity of the collateral. A weak co-applicant credit score is one of the most common reasons for delays, so we check this at the start rather than after an application is rejected.

## Which Documents Do I Need?

Expect to provide: your admission or offer letter, academic mark sheets and certificates, test scores (IELTS, TOEFL, GRE, GMAT as applicable), passport, a cost-of-study breakdown, KYC documents for you and your co-applicant, the co-applicant's income proof (salary slips, ITRs, or business financials), bank statements, and — for secured loans — property papers, valuation, and legal-verification documents. Versa Global prepares and reviews this entire set before it reaches the lender.

## How Should I Compare Loan Offers?

Look beyond the headline interest rate. Compare the processing fee, whether the rate is fixed or floating, the moratorium period (the time after your course before full repayment starts), whether interest must be paid during the course, prepayment charges, the margin money you must contribute, and how quickly the lender can issue a sanction letter for your visa file. A slightly lower rate with a slow sanction can cost you an intake.

## When Should I Apply for an Education Loan?

Start the conversation as soon as you have a shortlist of universities, and apply formally once you hold an admission or conditional offer. Many visa processes require proof of funds, so a sanction letter needs to be in hand before your visa application — which is why we build the loan timeline into your overall application plan from day one.

## Are There Tax Benefits on Education Loan Interest?

Indian income-tax law has provided a deduction on the interest paid on education loans for higher studies, available to the person repaying the loan under the applicable tax regime. Rules and regimes change, so confirm the current provision with a tax advisor before relying on it in your repayment plan.

## How Does Versa Global Help With Education Loans?

We work directly with 20+ banks and NBFCs, match you with lenders suited to your collateral situation and university, handle documentation end-to-end, and help you compare offers side by side — so you are not shopping around lenders on your own while also managing applications and visa deadlines. Book a free consultation to get a realistic loan plan for your destination.`,
  },
  {
    slug: "how-to-write-sop-for-student-visa",
    title: "How to Write a Statement of Purpose (SOP) That Gets You Admitted — and Approved for a Visa",
    category: "Applications",
    date: "September 2026",
    publishedAt: "2026-09-29",
    excerpt:
      "Your SOP is read twice — by the university and, increasingly, by visa officers. Here's how to structure it, what to include, and the mistakes that get applications rejected.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop",
    body: `A strong Statement of Purpose (SOP) explains, in your own words, why you chose this specific course, at this specific university, in this specific country — and how it connects your past studies or work to a realistic career plan. Admissions teams use it to judge fit; visa officers in countries like Canada, the UK, and Australia increasingly use similar statements to judge whether you are a genuine student. A generic or copied SOP is one of the most avoidable reasons for rejection.

## What Should an SOP Include?

A clear academic and professional background, the specific reason you want this course (and what in your experience led you to it), why this university — referencing actual modules, faculty areas, facilities, or industry links — why this country rather than India or elsewhere, your short-term and long-term career goals, and how your finances and plans make the move realistic. Every claim should be something you can explain in a visa interview.

## How Long Should an SOP Be?

Follow the university's instructions first — some specify a word or character limit, and exceeding it looks careless. Where no limit is given, around 800–1,000 words is typical for postgraduate applications. Clear and specific beats long and general every time.

## What Is the Difference Between an SOP for Admission and for a Visa?

An admission SOP focuses on academic fit and motivation. A visa-oriented statement — such as Australia's Genuine Student responses or the study plan Canada expects — must also show that your study plan is logical, that you can fund it, and that your intentions are consistent with the visa's rules. Gaps in education or work, a change of field, or a course at a lower level than your previous degree all need an honest, specific explanation.

## What Are the Most Common SOP Mistakes?

Copying templates or using AI-generated text without personalising it, opening with a childhood story unrelated to the course, listing achievements without explaining what they led to, praising the university in general terms that could apply anywhere, vague career goals like "work at a top company", ignoring study gaps, and inconsistencies between the SOP, your CV, and your documents. Visa officers compare these side by side.

## Can I Use AI Tools to Write My SOP?

You can use tools to check grammar or organise your thoughts, but the content, experiences, and reasoning must be yours. Many universities run similarity and AI-writing checks, and a statement that sounds generic undermines the very thing it is meant to prove — that this plan is genuinely yours.

## How Does Versa Global Help With SOPs?

Our counsellors interview you first, then help you structure and refine your own story — course fit, university research, career logic, and explanations for any gaps — and cross-check it against your documents and the specific country's visa expectations. We never hand out a template. Book a free profile evaluation to start your application the right way.`,
  },
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

**Trinity College Dublin (TCD)** — Ireland&apos;s oldest and most internationally recognized university. International undergraduate fees typically range €13,758-€29,548/year depending on course, with postgraduate fees spanning roughly €6,000-€35,800/year. Strong across business, engineering, computer science, and law.

**University College Dublin (UCD)** — Ireland&apos;s largest university, with particularly strong business (Smurfit) and engineering programs. International undergraduate fees typically run €16,800-€25,600/year.

**University College Cork (UCC)** — Consistently ranked among Ireland&apos;s top universities for research, with especially strong medicine, dentistry, and pharma programs — though medicine and dentistry specifically are the most expensive courses in the country, often exceeding €52,000/year.

**NUI Galway and Dublin City University (DCU)** — Both offer meaningfully lower fees than Trinity or UCD for comparable technology and business programs, making them strong options for students prioritizing value without sacrificing recognition.

On top of tuition, nearly every Irish university also charges a Student Contribution Charge (capped around €2,500/year covering services and exams) and smaller annual levies (roughly €150-€300) for student union and campus facilities — worth budgeting for separately from headline tuition figures.

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
  {
    slug: "mbbs-in-vietnam-cost-eligibility",
    title: "MBBS in Vietnam 2026: Fees Starting at ₹31 Lakhs, Eligibility & NMC Recognition",
    category: "Vietnam",
    date: "August 2026",
    excerpt:
      "The full breakdown of what MBBS in Vietnam actually costs, why it starts at ₹31 lakhs, whether the degree is recognized in India, and what NEET and FMGE mean for your eligibility.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80&auto=format&fit=crop",
    body: `MBBS in Vietnam has quietly become one of the most cost-effective ways for Indian students to earn a recognized medical degree — and it&apos;s a question we now get almost as often as our Georgia MBBS enquiries. Here&apos;s the complete, honest breakdown.

## Why MBBS in Vietnam Starts From ₹31 Lakhs

Through Versa Global, MBBS in Vietnam starts from ₹31 lakhs for the complete 6-year program — tuition, hostel, and administration fees included as a structured, transparent cost rather than a per-year estimate that grows unpredictably. This is meaningfully lower than most private medical seats in India, which routinely run ₹60 lakhs to over ₹1 crore with capitation fees on top, and it&apos;s competitive with or below most other popular MBBS-abroad destinations.

## Total Cost Breakdown

The ₹31 lakh starting figure covers your tuition and hostel accommodation for the full program. On top of this, budget for living expenses — food, local transport, and personal costs — which typically run modestly given Vietnam&apos;s low cost of living compared to Europe or North America. Exact final cost depends on the specific university and any optional accommodation upgrades, which our Vietnam counsellors walk you through university-by-university during your consultation, so there are no surprises after enrollment.

## Is a Vietnam MBBS Degree Recognized in India?

Yes, provided you study at an NMC (National Medical Commission) recognized university — which is the only kind of university Versa Global places students at. Graduates of NMC-recognized foreign medical universities are eligible to sit the FMGE (Foreign Medical Graduate Examination) to practice medicine in India, exactly the same requirement that applies to graduates from any other recognized foreign medical university, including Georgia, Russia, or the Philippines.

## Do You Need NEET for MBBS in Vietnam?

Yes — this applies to every Indian student pursuing MBBS abroad, in every destination, with no exceptions. A qualifying NEET score is mandatory to be eligible to practice medicine in India after you graduate, regardless of which country you study in. Be cautious of any consultancy suggesting otherwise; it&apos;s not a Vietnam-specific requirement we can work around, it&apos;s a national regulation that applies universally.

## Eligibility Requirements

Beyond a qualifying NEET score, eligibility for MBBS in Vietnam generally requires a minimum of 50% aggregate in Physics, Chemistry, and Biology at the 10+2 level (relaxed for reserved categories per NEET norms), and you must meet the minimum age requirement set by NMC guidelines. Unlike some other destinations, Vietnamese medical universities generally do not require a separate university entrance exam beyond these baseline requirements, which simplifies the admission timeline considerably.

## Admission Process and Intake

Vietnam&apos;s medical programs typically run September and January intakes. The process starts with document evaluation (10+2 marksheet, NEET scorecard, passport), followed by university application, offer letter, visa documentation (DH visa), and pre-departure preparation. From initial consultation to visa approval, most students complete the full process in 3-4 months when documentation is in order — noticeably faster than some other MBBS-abroad destinations.

## Vietnam vs India: What You&apos;re Actually Saving

A private MBBS seat in India frequently costs ₹60 lakhs to over ₹1 crore once capitation and hidden fees are factored in, with seat availability itself a major constraint given NEET cutoffs. At ₹31 lakhs for the complete program in Vietnam, the cost difference is substantial even after factoring in living expenses and travel — while the degree pathway to practicing in India (via FMGE) remains identical either way.

## How Versa Global Helps

Our Vietnam specialists work exclusively with NMC-recognized universities, handle your complete application and DH visa documentation, and prepare you for both university admission and eventual FMGE readiness from day one — not as an afterthought after you&apos;ve already graduated. If you&apos;re NEET-qualified and exploring MBBS-abroad options, a free consultation is the fastest way to see exactly how the ₹31 lakh Vietnam pathway compares to your other options.`,
  },
  {
    slug: "where-to-study-mbbs-after-neet",
    title: "Where to Study MBBS After NEET: Vietnam vs Georgia for Indian Students",
    category: "Versa Global",
    date: "August 2026",
    excerpt:
      "NEET-qualified but exploring options abroad? Here&apos;s an honest comparison of Vietnam and Georgia — Versa Global&apos;s two MBBS destinations — to help you decide.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&auto=format&fit=crop",
    body: `Every year, a large number of NEET-qualified students don&apos;t get a seat that matches their budget or preferred college in India — and start asking the same question: where should I study MBBS instead? Versa Global works with two primary MBBS destinations, Vietnam and Georgia, and this is the honest comparison we walk every family through.

## Do You Need NEET to Study MBBS Abroad?

Yes, in every country, with no exceptions. A qualifying NEET score is required for any Indian student to be eligible to practice medicine in India after graduating from a foreign medical university — this is not destination-specific, so "which country doesn&apos;t require NEET" is the wrong question to ask. The real question is which NMC-recognized destination fits your budget and timeline best.

## Vietnam: Starting From ₹31 Lakhs

Vietnam is currently our most affordable MBBS destination, starting from ₹31 lakhs for the complete 6-year program including tuition and hostel. It suits students prioritizing cost above all else, with a comparatively fast 3-4 month admission timeline and September/January intakes. Vietnamese universities generally require only your NEET score and 10+2 marks for eligibility, without an additional university entrance exam.

## Georgia: The Established Alternative

Georgia typically runs $40,000-50,000 (roughly ₹33-42 lakhs) for the full program — a similar overall range to Vietnam, with a longer track record of Indian students studying there and a larger existing alumni and support network. Georgian medical universities are also NMC-recognized, with the same FMGE pathway to practice in India afterward.

## How to Actually Decide Between Them

Cost is close enough between the two that it usually isn&apos;t the deciding factor once you look at the real numbers — the more useful questions are about intake timing (Vietnam&apos;s January intake can mean starting sooner if you&apos;ve just missed a cycle), climate and lifestyle preference, and how established the current Indian student community is at your shortlisted university, which matters more for day-to-day comfort than most students expect going in.

## Both Lead to the Same FMGE Pathway

Whichever you choose, the path to practicing in India afterward is identical: graduate from your NMC-recognized university, then clear the FMGE. Neither destination gives you a shortcut around this step, and neither makes it harder than the other — the degree recognition pathway itself is not a differentiator between Vietnam and Georgia.

## How Versa Global Helps You Decide

Because we work with both destinations directly rather than pushing one over the other, our free consultation is a genuine comparison — we&apos;ll walk you through current costs, intake dates, and university options at both, matched to your NEET score, budget, and timeline, so you&apos;re choosing based on your actual situation rather than whichever destination a consultancy happens to specialize in.`,
  },
  {
    slug: "it-job-assurance-program-dubai-gcc",
    title: "100% Job-Assured IT Infrastructure Engineer Program: Study in Dubai, Get Placed Across the GCC",
    category: "Career Academy",
    date: "September 2026",
    excerpt:
      "Versa Global&apos;s Career & Skills Academy now offers a 100% job-assured IT Infrastructure Engineer Program in association with MACOB IT Solutions, Dubai — online, hybrid, or full classroom in the UAE.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop",
    body: `Versa Global is best known as a study abroad agency, but our Career & Skills Academy exists for a different kind of student — one who wants a job in the Gulf, not a degree from it. Our newest program, the IT Infrastructure Engineer Program, is built in association with MACOB IT Solutions, Dubai, and comes with 100% job assurance across GCC countries. 60+ students have already been placed through it.

## What Is the IT Infrastructure Engineer Program?

It&apos;s a 250-hour, 4.5-6 month career transformation program covering Windows Server 2022, Microsoft Azure Administration, Microsoft Office 365 Administration, and Cisco&apos;s CCNA — the exact stack that GCC employers hire IT Level 1/2 administrators, system/network administrators, and cloud administrators for. Training runs in three formats: fully online, hybrid, or full classroom in Dubai, so you can study from India or relocate for hands-on, in-person training with visa support provided for the Dubai track.

## What Does "100% Job Assurance" Actually Mean Here?

It means every candidate who completes the program requirements and engages fully with our placement process receives dedicated job-assurance support until they are placed in a GCC country — not a job handed out for free. It&apos;s backed by real infrastructure practice on live servers and routers, client site visits and AMC audit shadowing, real-time project participation on active MACOB IT Solutions engagements, a guided Dubai NOC data center visit, and a structured 7-stage career-readiness track — CV clinic, job guidance workshop, LinkedIn workshop, ATS workshop, technical interview prep, HR questions prep, and mock interviews. 60+ students have gone through this exact pipeline and been placed.

## How Much Does It Cost?

The program fee is AED 23,500, paid as a single payment, covering the full 250-hour curriculum, the complete job-assurance and placement track, and all three certification exam fees — MCSE Azure (MS104), Office 365 (MS101), and CCNA Routing & Switching — a combined AED 6,500 in exams included at no extra cost. This excludes only living expenses in Dubai and visa fees, which vary by individual circumstances.

## Who Should Apply?

The program is built for degree or diploma holders with basic familiarity with computer operation — no prior IT work experience is required. Training starts from hardware and networking fundamentals before progressing through Windows Server, CCNA, Azure, and Office 365, so students entering with zero infrastructure background and students looking to formalize existing skills both fit the intake profile.

## How Versa Global and MACOB IT Solutions Work Together

Versa Global handles counselling, enrollment, and the visa-support process for students choosing the Dubai or hybrid track, while MACOB IT Solutions, Dubai — a working corporate IT services provider, not just a training center — delivers the curriculum, the real client site exposure, and the eventual GCC placement network. That combination is what makes the job assurance credible: students train on infrastructure MACOB actually manages for real clients, not simulated lab environments alone.

Explore the full program — curriculum, fee breakdown, class schedule, and every FAQ — on our [Career Academy page](/career-academy/it-infrastructure-engineer-program-dubai), or book a free consultation to see if this pathway fits your goals.`,
  },
  {
    slug: "study-in-dubai-guide-indian-students",
    title: "Study in Dubai as an Indian Student: Visa Support, Costs & What Daily Life Is Actually Like",
    category: "Career Academy",
    date: "September 2026",
    excerpt:
      "What it&apos;s actually like to move to Dubai for career-focused IT training — visa support, living costs, and how the classroom and hybrid tracks work for Indian students.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop",
    body: `Every year, more Indian students choose Dubai not for a university degree, but for hands-on, job-focused technical training that leads directly into the GCC job market. If you&apos;re considering our IT Infrastructure Engineer Program&apos;s classroom or hybrid track, here&apos;s the honest, practical picture of what moving to Dubai for it actually involves.

## Do I Need a Visa to Study in Dubai?

Yes — Indian nationals require a UAE visa to study or train in Dubai. Versa Global provides visa support to students enrolling in the classroom or hybrid track of the IT Infrastructure Engineer Program, guiding you through the documentation process. The visa fee itself is not included in the AED 23,500 program fee and should be budgeted for separately, alongside your living expenses.

## What Does It Cost to Live in Dubai While Training?

Living costs in Dubai depend heavily on your accommodation choice — shared accommodation is significantly more affordable than a private apartment, and areas like Deira, Al Nahda, and International City are popular with students and young professionals for cost reasons. Budget realistically for rent, food, local transport (Dubai&apos;s metro and bus network is extensive and affordable), and personal expenses on top of the program fee — these are excluded from the AED 23,500 and vary by lifestyle and accommodation choice.

## What Is the Difference Between the Online, Hybrid and Classroom Tracks?

The fully online track lets you complete all 250 hours of training remotely from India, with live sessions and remote lab access to servers and cloud environments. The hybrid track blends remote study with periodic in-person sessions and site visits in Dubai. The full classroom track means relocating to Dubai for the entire 4.5-6 month program, with direct access to real servers, routers, switches, and MACOB IT Solutions&apos; live client site visits and Dubai NOC data center tour. All three tracks cover an identical curriculum and carry the same 100% job assurance — the choice comes down to your budget, visa timeline, and how much you value in-person hands-on access.

## What Is a Typical Full-Time Training Day Like?

Full-time students train in a morning batch from 10:00 AM to 6:00 PM (flexible), completing a minimum of 50 training hours per month, with weekly client site visits worked in flexibly around the schedule and 25 dedicated hours for interview preparation across the program. Part-time students get customised time slots that fit around existing work commitments, covering the same curriculum depth and hands-on access.

## Can I Work While Training in Dubai?

The IT Infrastructure Engineer Program is a full training commitment designed to prepare you for direct GCC employment after completion, not a part-time study arrangement alongside independent work — your visa category and permitted activities during the training period should be confirmed directly with our counsellors based on your specific circumstances before you commit to the classroom track.

## How Versa Global Supports You Before You Land

Beyond visa support, our counsellors walk you through what to expect in Dubai — accommodation guidance, an honest cost breakdown for your specific budget, and connecting you with the MACOB IT Solutions training team ahead of your start date, so your first week in Dubai is spent settling into training, not figuring out logistics from scratch.

If you&apos;re weighing the Dubai classroom track against studying online from India, book a free consultation and we&apos;ll walk through the real costs and trade-offs for your specific situation.`,
  },
  {
    slug: "it-jobs-gcc-countries-demand-2026",
    title: "IT Jobs in GCC Countries: Which Roles Are in Demand and How Employers Actually Hire",
    category: "Career Academy",
    date: "September 2026",
    excerpt:
      "Windows Server, Azure and network administration roles are in steady demand across the UAE, Saudi Arabia and the wider GCC. Here&apos;s what employers actually look for.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&auto=format&fit=crop",
    body: `The GCC&apos;s ongoing digital infrastructure buildout — across the UAE, Saudi Arabia, Qatar, and the wider region — has kept steady demand for IT infrastructure and cloud administration talent, even as the broader tech hiring market has cooled elsewhere. Here&apos;s what that demand actually looks like and what employers hire for.

## Which IT Roles Are Most in Demand Across the GCC?

IT Administrators, IT Level 1/2 Support Administrators, System and Network Administrators, and Microsoft Cloud and Messaging Administrators remain consistently in demand across GCC employers, because every organization running Windows Server infrastructure, Microsoft 365 tenants, and cloud workloads on Azure needs people who can manage, secure, and troubleshoot them day to day. These are foundational, always-needed roles rather than trend-driven ones, which is part of why they offer a reliable entry point for career-changers and new graduates alike.

## Do Employers Require Certifications, or Just Experience?

Both, generally. GCC employers hiring for infrastructure and cloud administration roles typically look for a combination of practical hands-on experience — actual server, network, and cloud administration work, not just theory — and recognized certifications like Microsoft&apos;s MCSE Azure and Office 365 credentials plus Cisco&apos;s CCNA. Candidates who can show both a portfolio of real infrastructure work and the matching certification tend to move through hiring processes faster, because the certification verifies baseline competence while the experience demonstrates you can apply it under real conditions.

## Why Real Client Site Experience Matters More Than Classroom-Only Training

A significant share of GCC IT hiring managers specifically ask about hands-on experience with live systems during interviews, because simulated lab environments don&apos;t fully prepare candidates for the pressure and unpredictability of production infrastructure. This is exactly why Versa Global&apos;s IT Infrastructure Engineer Program is built around real client site visits, AMC audit shadowing, and active project participation with MACOB IT Solutions&apos; actual Dubai clients, rather than classroom simulations alone.

## What Salary Range Can Entry-Level IT Infrastructure Roles Expect in the GCC?

Entry-level IT Administrator and Level 1/2 Support roles in the UAE and wider GCC vary by employer size, industry, and emirate, and exact figures shift with market conditions — so rather than quoting a number that may already be outdated, our placement team gives every candidate a realistic, current salary expectation for their specific certifications and target role during the job-assurance process, based on the roles our current employer network is actively hiring for.

## How Does Versa Global&apos;s Placement Process Actually Work?

Once you complete the IT Infrastructure Engineer Program&apos;s curriculum and career-readiness track — CV clinic, LinkedIn workshop, ATS workshop, technical interview prep, HR questions prep, and mock interviews — our placement support connects you with GCC employers actively hiring for the roles you&apos;re certified in, and stays engaged with you until you&apos;re placed. This is what our 100% job assurance actually refers to: sustained placement support tied to genuine completion of the training and readiness process, not a one-time job posting forwarded after graduation.

## Is Now a Good Time to Train for GCC IT Roles?

The GCC&apos;s continued investment in digital government services, cloud migration, and enterprise IT modernization across the UAE and Saudi Arabia in particular means foundational infrastructure and cloud administration skills stay in steady demand — these are operational roles tied to running existing and growing IT estates, not roles exposed to the volatility of newer tech trends. For candidates without a GCC-specific network already, a structured program with built-in employer placement — rather than an independent job search from outside the region — remains the more reliable path in.

Ready to see if this pathway fits your background? Explore the full [IT Infrastructure Engineer Program](/career-academy/it-infrastructure-engineer-program-dubai) or book a free consultation with our Career Academy counsellors.`,
  },
  {
    slug: "it-infrastructure-program-100-percent-job-guarantee-dubai",
    title: "100% Job Guarantee IT Program in Dubai: How Versa Global's IT Infrastructure Engineer Program Actually Delivers It",
    category: "Career Academy",
    date: "September 2026",
    excerpt:
      "A 100% job guarantee IT program in Dubai only means something if the placement pipeline behind it is real. Here&apos;s exactly how Versa Global&apos;s IT Infrastructure Engineer Program backs its guarantee.",
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&q=80&auto=format&fit=crop",
    body: `Search "100% job guarantee IT course" and you&apos;ll find dozens of programs making the same claim. Versa Global&apos;s Career & Skills Academy makes it too — for our IT Infrastructure Engineer Program, delivered in association with MACOB IT Solutions, Dubai — but the honest question every serious applicant should ask is: what actually backs that guarantee? Here&apos;s the full picture, so you can evaluate it properly.

## What Does "100% Job Guarantee" Mean in This Program?

It means every student who completes the program&apos;s 250-hour curriculum and the accompanying career-readiness track receives dedicated, ongoing placement support until they are hired in a GCC IT role — support that doesn&apos;t stop after one interview or one application cycle. It is not a job handed out automatically on enrollment, and it is not a guarantee of a specific salary or employer; it is a guarantee of sustained, structured placement effort tied to genuine completion of the training. 60+ students have already been placed through this exact process.

## Which Employers Actually Hire Through This Program?

Placements run through MACOB IT Solutions&apos; live employer network across the UAE and wider GCC — organizations that need IT Administrators, IT Level 1/2 Support staff, System and Network Administrators, and Microsoft Cloud and Messaging Administrators to run their Windows Server, Microsoft 365, and Azure environments. Because MACOB is a working corporate IT services provider with existing GCC clients, the roles you&apos;re placed into come out of real, ongoing employer relationships rather than a cold job board.

## Why Should a 100% Job Guarantee Be Trusted Here Specifically?

Because the guarantee is backed by things a training-only provider can&apos;t offer: real infrastructure practice on live servers and routers (not simulated labs), client site visits and AMC audit shadowing with MACOB&apos;s actual customers, a guided Dubai NOC data center visit, and a 7-stage career-readiness track — CV clinic, job guidance workshop, LinkedIn workshop, ATS workshop, technical interview prep, HR questions prep, and mock interviews — before you&apos;re ever put in front of an employer. Certification exams for MCSE Azure (MS104), Office 365 (MS101), and CCNA Routing & Switching are included in the program fee, so you walk into interviews with verifiable credentials, not just a training certificate.

## What Does the Program Cost, and What's Included?

The full program is AED 23,500, paid once, covering the 250-hour curriculum across Windows Server 2022, Microsoft Azure Administration, Office 365 Administration, and CCNA, all three certification exam fees (a combined AED 6,500 value), the complete career-readiness track, and job-guarantee placement support until you&apos;re hired. Living costs and visa fees for students choosing the Dubai classroom or hybrid track are excluded and vary by individual circumstances.

## Who Qualifies for the Job Guarantee?

Degree or diploma holders with basic computer literacy qualify — no prior IT work experience is required, since training starts from hardware and networking fundamentals before progressing to server, cloud, and network administration. The guarantee applies to students who complete the curriculum and actively engage with the placement process (attending workshops, mock interviews, and employer introductions); it is not available to students who enroll but do not complete the training.

## How Do I Get Started?

Enrollment starts with a free consultation where our Career Academy counsellors assess your background and walk you through the online, hybrid, and Dubai classroom tracks — all three carry an identical curriculum and the same 100% job guarantee. Explore the full curriculum, fee breakdown, and every FAQ on the [Career Academy program page](/career-academy/it-infrastructure-engineer-program-dubai), or book a free call to see if this pathway fits you.`,
  },
  {
    slug: "study-in-australia-visa-guide-2026",
    title: "Australia Student Visa (Subclass 500) Guide 2026: Costs, Timeline & Post-Study Work Rights",
    category: "Australia",
    date: "September 2026",
    excerpt:
      "Everything Indian students need to know about Australia&apos;s Subclass 500 student visa — the Genuine Student requirement, financial evidence, timelines, and post-study work rights.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80&auto=format&fit=crop",
    body: `Australia remains one of the most consistently popular destinations for Indian students, home to 8 Group of Eight universities ranked in the global top 100 and post-study work rights that stretch 2-4 years depending on your qualification and location. Here&apos;s what the Subclass 500 Student Visa process actually involves.

## What Is the Genuine Student (GS) Requirement?

Since 2024, Australia replaced the older Genuine Temporary Entrant test with the Genuine Student (GS) requirement, which assesses whether your study plans, career goals, and personal circumstances genuinely support a temporary stay to study in Australia. You&apos;ll need to write a personal statement addressing your reasons for choosing your course and institution, your understanding of the visa conditions, and your intended activities after your studies. Versa Global&apos;s counsellors help you prepare a GS statement that genuinely reflects your profile rather than a generic template, since assessors specifically look for personalized, consistent answers.

## What Financial Evidence Do I Need?

You must show sufficient funds to cover your first year&apos;s tuition, travel costs, and living expenses for yourself (and any accompanying family) at the amount set by the Department of Home Affairs, which is revised periodically. Acceptable evidence includes bank statements, education loan sanction letters, or a combination of both, and the funds must be genuinely available and traceable — not a last-minute deposit. Our team reviews your financial documentation before submission to avoid the most common cause of refusals: inconsistent or insufficiently seasoned funds.

## How Long Does the Australian Visa Process Take?

Processing times vary by visa office and time of year but generally range from a few weeks to a couple of months once your Confirmation of Enrolment (CoE) and complete documentation are lodged. Applying well ahead of the February or July intake — ideally as soon as you receive your CoE — gives buffer room for any additional document requests from the Department of Home Affairs.

## What Are Australia's Post-Study Work Rights?

Graduates can apply for a Temporary Graduate visa (subclass 485) after completing their course, with the permitted stay length depending on your qualification level and the location of your institution — regional campuses often carry longer post-study work entitlements than metro campuses, which is a factor worth weighing when choosing between universities.

## Is IELTS Compulsory for Every Australian University?

Most universities require IELTS 6.0-6.5 overall for undergraduate and postgraduate programs, though English-medium academic backgrounds and some university-specific waivers can reduce or remove this requirement depending on the institution. Our counsellors check your specific university and program for waiver eligibility before you commit to a test.

## What Does It Cost to Study in Australia?

Tuition varies by university and program, and living costs depend heavily on the city — Sydney and Melbourne run higher than regional centres. Scholarships like Australia Awards and Endeavour can offset costs significantly for eligible students, and Versa Global&apos;s 20+ bank and NBFC partnerships help structure education loans around your specific budget.

Ready to evaluate your Australia options? Book a free profile evaluation with Versa Global&apos;s Australia specialists.`,
  },
  {
    slug: "usa-f1-student-visa-guide-2026",
    title: "USA F-1 Student Visa Guide 2026: SEVIS, I-20, DS-160 & the Visa Interview",
    category: "United States",
    date: "September 2026",
    excerpt:
      "A step-by-step look at the US F-1 student visa process — SEVIS fee, Form I-20, DS-160, the visa interview, and OPT work rights after graduation.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80&auto=format&fit=crop",
    body: `The United States is home to 50+ of the world&apos;s top 100 universities, and the F-1 Student Visa remains the pathway for Indian students pursuing that education. The process has more distinct steps than most other destinations, so here&apos;s how it actually flows in order.

## What Is Form I-20 and How Do I Get One?

Once you&apos;re admitted to a Student and Exchange Visitor Program (SEVP)-certified US institution, the university issues Form I-20, a certificate of eligibility that confirms your enrollment and the program details. You cannot apply for an F-1 visa without it, so everything else in the process starts only after your I-20 arrives.

## What Is the SEVIS Fee, and When Do I Pay It?

Before scheduling your visa interview, you must pay the SEVIS I-901 fee, which registers you in the Student and Exchange Visitor Information System. Keep the payment receipt — you&apos;ll need to present it at your visa interview along with your I-20, and immigration officers do check that the SEVIS record is active and matches your documents.

## How Do I Complete the DS-160 and Book My Interview?

The DS-160 is the online nonimmigrant visa application form, completed before you can schedule your interview at the nearest US Embassy or Consulate. You&apos;ll need your I-20 number, passport details, and a recent photograph meeting US visa specifications. Once submitted, you pay the visa application fee and book your interview slot — during peak intake season (spring for a fall start), slots fill up fast, so we recommend completing this the moment your I-20 arrives.

## What Actually Happens at the F-1 Visa Interview?

The consular officer&apos;s primary job is assessing whether you intend to return to India after your studies and whether you can genuinely afford your program. Expect direct questions about your chosen course, why that specific university, your academic background, your funding source, and your post-graduation plans. Confident, consistent, specific answers matter far more than rehearsed scripts — Versa Global runs mock interview sessions with every US-bound student before their actual appointment.

## What Financial Documents Do I Need to Show?

You need to demonstrate funds covering your full first-year tuition and living costs, typically through bank statements, an education loan sanction letter, or a combination, along with an affidavit of support if a sponsor is involved. Consistency between your I-20&apos;s stated costs and your financial documents is essential — mismatches are a common reason for refusal.

## Can I Work in the US During or After My Studies?

F-1 students can work on-campus up to 20 hours/week during term, and many students qualify for Curricular Practical Training (CPT) for course-related internships. After graduation, Optional Practical Training (OPT) allows up to 12 months of work authorization in your field, extendable to 24 additional months for STEM-designated degrees — a total of up to 36 months for eligible STEM graduates.

Book a free profile evaluation and let Versa Global&apos;s US counsellors walk you through your I-20 timeline, SEVIS payment, and interview preparation.`,
  },
  {
    slug: "study-in-new-zealand-guide-2026",
    title: "Study in New Zealand 2026: Visa, Costs & Post-Study Work Rights Guide",
    category: "New Zealand",
    date: "September 2026",
    excerpt:
      "What Indian students should know before choosing New Zealand — student visa requirements, realistic costs, and post-study work rights across Auckland, Wellington, and beyond.",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80&auto=format&fit=crop",
    body: `New Zealand rarely gets the attention the UK, Canada, or Australia do, but it consistently delivers practical, industry-aligned education alongside a quality of life that&apos;s hard to match — which is exactly why Versa Global treats it as a serious option, not an afterthought.

## What Do I Need for a New Zealand Student Visa?

You&apos;ll need an Offer of Place from a New Zealand institution, evidence of sufficient funds to cover tuition and living costs for your intended study period, a return air ticket or funds to purchase one, and health and travel insurance where required. Immigration New Zealand also expects a genuine intention to study, similar in spirit to requirements in other major destinations — your application should clearly reflect why this specific course and institution fit your academic and career goals.

## How Much Does It Cost to Study in New Zealand?

Tuition and living costs vary by city and institution, with Auckland and Wellington generally running higher than smaller centres like Dunedin or Hamilton. New Zealand Excellence Awards and NZ Aid scholarships can meaningfully offset tuition for eligible Indian students, and our team helps structure an education loan through our 20+ bank and NBFC partners for the remaining cost.

## When Are the Intakes, and How Far Ahead Should I Apply?

New Zealand&apos;s main intakes are February and July, matching Australia&apos;s academic calendar. We recommend starting your application at least 8-10 months ahead of your target intake to allow time for offer letters, visa processing, and financial documentation, especially given New Zealand&apos;s smaller number of visa processing centres compared to bigger destinations.

## What Are New Zealand's Post-Study Work Rights?

Eligible graduates can apply for a Post Study Work Visa, allowing you to work in New Zealand after completing your qualification — a meaningful pathway toward gaining local experience and, for many graduates, eventually pursuing residency pathways. Exact entitlements depend on your qualification level and the institution you graduate from, so we confirm your specific eligibility before you select a course.

## Which Courses Is New Zealand Actually Strong In?

Agriculture, engineering, business, tourism, and film & media are particular strengths, reflecting the country&apos;s economy and its globally recognized film industry. New Zealand&apos;s universities emphasize practical, applied learning over purely theoretical coursework, which suits students who want their degree to translate directly into workplace skills.

## Is New Zealand a Good Fit for Students Who Want a Quieter Environment?

Yes — New Zealand&apos;s smaller cities and lower population density genuinely change the day-to-day experience compared to studying in a large UK or Australian metro, offering a calmer pace of life without giving up access to well-ranked universities and English-taught, internationally recognized degrees.

Curious if New Zealand fits your goals and budget better than the more obvious destinations? Book a free consultation with Versa Global.`,
  },
]

export const FAQS: Faq[] = [
  {
    category: "Getting Started",
    question: "How long does the study abroad application process take?",
    answer:
      "Typically 6-12 months from initial consultation to visa approval. We recommend starting at least 12 months before your intended intake date to maximize university options and scholarship opportunities.",
  },
  {
    category: "Visas & Work Rights",
    question: "How long does the visa process take once my documents are ready?",
    answer:
      "It takes about 1 to 1.5 months, if all the documents are in place. Delays usually happen only when documentation is incomplete, so our team reviews everything upfront to keep you on schedule.",
  },
  {
    category: "Applications & Tests",
    question: "Is IELTS or TOEFL compulsory for every university?",
    answer:
      "Not always. There are universities that may waive off the IELTS/TOEFL requirement depending on your academic background and prior medium of instruction. Please discuss this with our consultants during your profile evaluation.",
  },
  {
    category: "Applications & Tests",
    question: "What are the English language requirements for studying abroad?",
    answer:
      "Most universities require IELTS 6.0-7.0 or TOEFL 80-100. Requirements vary by university and program, and some universities waive this requirement altogether. We provide IELTS preparation guidance and can recommend partner coaching centres.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "How much does it cost to study abroad?",
    answer:
      "Costs vary significantly by destination. Germany public universities have zero tuition. Canada costs CAD 15,000-35,000/year. UK costs GBP 12,000-25,000/year. We help you identify scholarships to reduce costs.",
  },
  {
    category: "Visas & Work Rights",
    question: "What is Versa Global&apos;s visa success rate?",
    answer:
      "We maintain a 95%+ visa success rate across all destinations. Our team reviews every document before submission and has deep knowledge of each country&apos;s immigration requirements.",
  },
  {
    category: "Getting Started",
    question: "Do you offer post-arrival support?",
    answer:
      "Yes. Our pre-departure and post-arrival support includes accommodation search, airport pickup coordination, bank account opening guidance, SIM card setup, and connecting you with our alumni network in your destination.",
  },
  {
    category: "Visas & Work Rights",
    question: "Can I work while studying abroad?",
    answer:
      "Yes — most destinations allow part-time work. UK allows 20 hours/week during term. Canada allows 20 hours/week off-campus. Australia allows 48 hours per fortnight. Germany allows 120 full days or 240 half days per year.",
  },
  {
    category: "MBBS Abroad",
    question: "How much does MBBS in Vietnam cost?",
    answer:
      "MBBS in Vietnam through Versa Global starts from ₹31 lakhs for the full 6-year program (tuition, hostel, and administration fees), significantly lower than most private medical colleges in India and competitive with other popular MBBS-abroad destinations.",
  },
  {
    category: "MBBS Abroad",
    question: "Is NEET required for MBBS in Vietnam?",
    answer:
      "Yes. A qualifying NEET score is mandatory for any Indian student pursuing MBBS abroad, including Vietnam, in order to be eligible to practice in India after graduation. This applies regardless of destination country.",
  },
  {
    category: "MBBS Abroad",
    question: "Are Vietnam medical degrees recognized in India?",
    answer:
      "Yes — we place students only at NMC (National Medical Commission) recognized universities in Vietnam. Graduates are eligible to sit the FMGE (Foreign Medical Graduate Examination) to practice in India, the same requirement that applies to graduates from any recognized foreign medical university.",
  },
  {
    category: "MBBS Abroad",
    question: "Where should I study MBBS after NEET?",
    answer:
      "It depends on your budget and priorities. Vietnam and Georgia are Versa Global&apos;s two primary MBBS destinations — Vietnam currently starts from ₹31 lakhs for the full program, while Georgia typically runs $40,000-50,000 total. Both are NMC-recognized with FMGE-eligible degrees. We help you compare both based on your specific budget and timeline in a free consultation.",
  },
  {
    category: "MBBS Abroad",
    question: "How long does an MBBS program in Vietnam take?",
    answer:
      "The MBBS program in Vietnam is typically 6 years total, combining 5 years of academic study with a 1-year clinical internship — comparable in length to MBBS programs in India and most other MBBS-abroad destinations.",
  },
  {
    category: "Dubai IT Program",
    question: "Is the 100% job guarantee on the Dubai IT Infrastructure Engineer Program real?",
    answer:
      "Yes — it&apos;s dedicated placement support that continues until you&apos;re hired in a GCC IT role, backed by MACOB IT Solutions&apos; live employer network, real client site exposure, and a structured 7-stage career-readiness track. It applies to students who complete the full curriculum and actively engage with the placement process; 60+ students have been placed through it so far.",
  },
  {
    category: "Dubai IT Program",
    question: "What if I don&apos;t get placed after completing the IT Infrastructure Engineer Program?",
    answer:
      "Placement support continues past graduation for as long as it takes, provided you completed the training requirements and stay engaged with the process — attending workshops, mock interviews, and employer introductions. It&apos;s a sustained placement commitment, not a one-time job posting forwarded after your certificate is issued.",
  },
  {
    category: "Dubai IT Program",
    question: "Do I need prior IT experience for the Dubai IT Infrastructure Engineer Program?",
    answer:
      "No. The program is open to degree or diploma holders with basic computer literacy — training starts from hardware and networking fundamentals before progressing through Windows Server, CCNA, Azure, and Office 365, so no prior infrastructure or networking background is required.",
  },
  {
    category: "Visas & Work Rights",
    question: "What is the Genuine Student (GS) requirement for an Australian student visa?",
    answer:
      "It&apos;s the assessment Australia uses (replacing the earlier Genuine Temporary Entrant test since 2024) to check that your study plans, course choice, and post-study intentions are genuine. It&apos;s satisfied through a personal statement, which our counsellors help you prepare so it genuinely reflects your own profile rather than a generic template.",
  },
  {
    category: "Visas & Work Rights",
    question: "What are Australia's post-study work rights?",
    answer:
      "Graduates can apply for a Temporary Graduate visa (subclass 485), with the length of stay depending on your qualification level and whether you studied at a regional or metro campus — regional campuses often carry longer post-study work entitlements.",
  },
  {
    category: "Visas & Work Rights",
    question: "What is OPT, and how long can I work in the US after graduating?",
    answer:
      "Optional Practical Training (OPT) lets F-1 graduates work in their field for up to 12 months after completing their degree, extendable by 24 additional months for STEM-designated programs — up to 36 months total for eligible STEM graduates.",
  },
  {
    category: "Visas & Work Rights",
    question: "What is the SEVIS fee for a US student visa?",
    answer:
      "It&apos;s the I-901 SEVIS registration fee, paid after you receive your Form I-20 and before you schedule your F-1 visa interview. Keep the payment receipt — you&apos;ll need to show it at your interview alongside your I-20.",
  },
  {
    category: "Visas & Work Rights",
    question: "What are New Zealand's post-study work rights?",
    answer:
      "Eligible graduates can apply for a Post Study Work Visa to work in New Zealand after completing their qualification. Exact entitlements depend on your qualification level and institution, so we confirm your specific eligibility before you choose a course.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "How does Versa Global's education loan support actually work?",
    answer:
      "We work directly with 20+ banks and NBFCs, handling your loan documentation — collateral paperwork, income proof, and sanction letters — end-to-end, and help you compare offers to find competitive interest rates and faster approvals rather than having you shop around lenders on your own.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "Can international students in Australia, the US, or New Zealand get scholarships?",
    answer:
      "Yes — Australia offers Australia Awards and Endeavour scholarships, the US offers Fulbright and Hubert Humphrey among others, and New Zealand offers NZ Excellence Awards and NZ Aid. Eligibility depends on your academic profile and chosen program; our counsellors identify which scholarships you genuinely qualify for during your free profile evaluation.",
  },
  {
    category: "Visas & Work Rights",
    question: "Which visa do Indian students need to study in South Korea?",
    answer:
      "Degree students apply for the D-2 student visa after receiving an admission letter and Certificate of Admission from a Korean university. Students starting with a Korean language program use the D-4 visa. South Korea's main intakes are March and September.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "What does the Global Korea Scholarship (GKS) cover?",
    answer:
      "For selected students, GKS generally covers tuition, a monthly living allowance, round-trip airfare, and a Korean language course before the degree. Selection is competitive through the embassy and university tracks, and our counsellors assess whether you are a realistic candidate.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "Should I take a secured or unsecured education loan for study abroad?",
    answer:
      "A secured loan (backed by property or deposits) usually offers a lower interest rate and higher amount. An unsecured loan needs no collateral but depends on your university, course, and co-applicant's income and credit score, and typically costs more. We help you compare both with our 20+ bank and NBFC partners.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "What documents are needed for a study abroad education loan?",
    answer:
      "Typically your admission letter, academic records, test scores, passport, cost-of-study breakdown, KYC for you and your co-applicant, the co-applicant's income proof and bank statements, and property or deposit documents for a secured loan. Versa Global prepares and reviews the full set before submission.",
  },
  {
    category: "Applications & Tests",
    question: "How long should a Statement of Purpose (SOP) be?",
    answer:
      "Follow the university's stated limit first. Where none is given, around 800–1,000 words is typical for postgraduate applications. A specific, honest SOP that explains your course choice, university fit, and career plan matters far more than length.",
  },
  {
    category: "Applications & Tests",
    question: "Does Versa Global write my SOP for me?",
    answer:
      "We don't hand out templates. Our counsellors interview you, then help you structure and refine your own story and cross-check it against your documents and the destination's visa expectations, so the statement is genuinely yours and holds up in a visa interview.",
  },
  ...OCTOBER_2026_FAQS,
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
