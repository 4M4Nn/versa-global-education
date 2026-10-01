import type { CareerProgramFaq, Faq, FaqCategory } from "@/types"

export const FAQ_CATEGORIES: { name: FaqCategory; blurb: string }[] = [
  { name: "Getting Started", blurb: "How the process works and what Versa Global does for you." },
  { name: "MBBS Abroad", blurb: "NEET, fees, recognition and the route back to practising in India." },
  { name: "Dubai IT Program", blurb: "The 100% job-assured IT Infrastructure Engineer Program for GCC careers." },
  { name: "Applications & Tests", blurb: "English tests, SOPs, documents and deadlines." },
  { name: "Visas & Work Rights", blurb: "Student visas, part-time work and staying on after you graduate." },
  { name: "Costs, Loans & Scholarships", blurb: "What studying abroad costs and how to fund it." },
]

/** October 2026 additions to the site-wide FAQ list. */
export const OCTOBER_2026_FAQS: Faq[] = [
  {
    category: "Getting Started",
    question: "Is the first consultation with Versa Global free?",
    answer:
      "Yes. The profile evaluation is free. Our counsellors assess your academic profile, career goals and budget and recommend suitable universities and destinations at no cost.",
  },
  {
    category: "Getting Started",
    question: "Where is Versa Global located?",
    answer:
      "Our office is on the 3rd Floor, Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021. Counselling, documentation and visa support are also handled by phone, WhatsApp and video call for students anywhere in India.",
  },
  {
    category: "Getting Started",
    question: "Can I study abroad right after 12th?",
    answer:
      "Yes. Universities assess your Class 10 and 12 marks, English proficiency, statement of purpose and proof of funds. Some destinations add a requirement — for example a foundation year for bachelor's study at public universities in Germany. Start about twelve months before your intended intake.",
  },
  {
    category: "Getting Started",
    question: "When should I start applying for the September 2027 intake?",
    answer:
      "Now. Shortlist countries and universities by the end of 2026, apply between late 2026 and spring 2027, arrange funds and apply for your visa between May and July, and travel in August or September 2027.",
  },
  {
    category: "Getting Started",
    question: "Which country is best for Indian students?",
    answer:
      "It depends on your goal. The UK suits a fast one-year master's, Canada suits students focused on work experience and settlement, Australia balances strong universities with post-study work rights, and Germany offers low or no tuition at public universities. We compare them against your profile and budget.",
  },
  {
    category: "MBBS Abroad",
    question: "How much does MBBS in Georgia cost?",
    answer:
      "Tuition for the 6-year MBBS program in Georgia typically ranges from $40,000 to $50,000 for the entire course — roughly ₹33–42 lakhs — with no capitation fee. Hostel, living costs, visa fees and flights are extra.",
  },
  {
    category: "MBBS Abroad",
    question: "Is NEET compulsory for MBBS abroad?",
    answer:
      "Yes. A qualifying NEET result is mandatory for every Indian student who wants to practise in India after an MBBS in any foreign country. You need to qualify NEET; you do not need a top rank.",
  },
  {
    category: "MBBS Abroad",
    question: "What is the eligibility for MBBS abroad?",
    answer:
      "A qualifying NEET result, 10+2 with Physics, Chemistry, Biology and English, at least 50% aggregate in PCB (relaxed for reserved categories as per NEET norms), and a minimum age of 17 by 31 December of the admission year.",
  },
  {
    category: "MBBS Abroad",
    question: "What is FMGE?",
    answer:
      "The Foreign Medical Graduate Examination is the screening test conducted by NBEMS, usually twice a year, that Indian citizens with a foreign medical degree must pass to register as doctors in India. It has 300 multiple-choice questions and the pass mark is 150.",
  },
  {
    category: "MBBS Abroad",
    question: "Can I study MBBS abroad with a low NEET score?",
    answer:
      "Yes, as long as you have qualified NEET. Admission to MBBS in Vietnam or Georgia depends on NEET qualification and your 10+2 marks, not on achieving a particular rank.",
  },
  {
    category: "MBBS Abroad",
    question: "Is MBBS abroad cheaper than a private medical college in India?",
    answer:
      "Usually by a wide margin. MBBS in Vietnam starts from ₹31 lakhs for the complete program including hostel and MBBS in Georgia costs roughly ₹33–42 lakhs in tuition, against ₹60 lakhs to over ₹1 crore at many private colleges in India.",
  },
  {
    category: "MBBS Abroad",
    question: "What happens after I finish MBBS abroad?",
    answer:
      "You return to India, clear the licensing exam (FMGE today, with NExT planned to replace it), complete a 12-month supervised internship in India and then obtain permanent registration to practise.",
  },
  {
    category: "Dubai IT Program",
    question: "What is the fee for the Dubai IT Infrastructure Engineer Program?",
    answer:
      "AED 23,500, paid as a single payment. It covers 250 hours of training over 4.5–6 months, the full placement and job-assurance track, and all three certification exam fees. Living expenses and visa fees for the Dubai tracks are extra.",
  },
  {
    category: "Dubai IT Program",
    question: "Can I do the Dubai IT program online from India?",
    answer:
      "Yes. The program runs online, hybrid or in a Dubai classroom. All three tracks cover the same 250-hour curriculum and carry the same 100% job assurance.",
  },
  {
    category: "Dubai IT Program",
    question: "Which certifications are included in the Dubai IT program?",
    answer:
      "Three certification exams are included in the program fee: MCSE Azure, Office 365 and CCNA Routing & Switching — a combined AED 6,500 in exam fees at no extra cost.",
  },
  {
    category: "Dubai IT Program",
    question: "What jobs can I get after the IT Infrastructure Engineer Program?",
    answer:
      "Graduates typically move into roles such as IT Administrator, IT Level 1 / Level 2 Administrator, IT System or Network Administrator, IT Coordinator, Microsoft Cloud Administrator and Microsoft Messaging Administrator with GCC employers.",
  },
  {
    category: "Dubai IT Program",
    question: "Who delivers the Dubai IT program?",
    answer:
      "The program is delivered by Versa Global in association with MACOB IT Solutions, Dubai — a corporate IT services provider. Trainers are certified professionals with 10+ years of hands-on industry experience.",
  },
  {
    category: "Dubai IT Program",
    question: "Does Versa Global help with the visa for training in Dubai?",
    answer:
      "Yes. Visa support is provided for students who choose the Dubai classroom or hybrid track. The visa fee and living expenses are not included in the program fee.",
  },
  {
    category: "Dubai IT Program",
    question: "Is there a part-time option for working professionals?",
    answer:
      "Yes. Part-time learners get customised time slots aligned to their work schedule, with the same curriculum depth and hands-on access as full-time learners.",
  },
  {
    category: "Applications & Tests",
    question: "Which English test should I take — IELTS, PTE, TOEFL or Duolingo?",
    answer:
      "Take the test that both your target universities and your visa route accept. IELTS is the most widely accepted, PTE Academic is fully computer-based with fast results, TOEFL is common for the USA, and the Duolingo English Test is a shorter online option accepted by many universities for admission but not always for visas.",
  },
  {
    category: "Applications & Tests",
    question: "Can I study abroad without IELTS?",
    answer:
      "At some universities, yes — through a Medium of Instruction letter, strong Class 12 English marks, an alternative test or the university's own assessment. Check the visa requirement as well, because some visa routes ask for an approved English test regardless.",
  },
  {
    category: "Applications & Tests",
    question: "How many universities should I apply to?",
    answer:
      "Most students apply to between five and eight, spread across ambitious, realistic and safe options. Applying to too few limits your choices; applying to too many dilutes the quality of each application.",
  },
  {
    category: "Applications & Tests",
    question: "What documents do I need to apply to a university abroad?",
    answer:
      "Typically your academic transcripts and certificates, English test score, passport, statement of purpose, CV, letters of recommendation and, for some courses, a portfolio or GRE/GMAT score. Requirements vary by university, and we give you an exact checklist for your shortlist.",
  },
  {
    category: "Visas & Work Rights",
    question: "Do Indian students need an APS certificate for Germany?",
    answer:
      "Yes. Indian applicants need a certificate from the Academic Evaluation Centre (APS) verifying their academic documents before applying for a German student visa. Apply for it early, as it adds time to the process.",
  },
  {
    category: "Visas & Work Rights",
    question: "What are the post-study work rights in the UK?",
    answer:
      "The Graduate Route lets international graduates stay and work in the UK after completing their degree. The UK government has announced that the period will reduce from two years to 18 months for most graduates applying from January 2027, so confirm the current rule on gov.uk before you decide.",
  },
  {
    category: "Visas & Work Rights",
    question: "What happens if my student visa is refused?",
    answer:
      "A refusal is not always the end. Depending on the country and the reason given, you may be able to reapply with stronger evidence, request a review or choose a different intake. We read the refusal reasons with you and advise on the realistic next step.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "Which scholarships are available for Indian students to study abroad?",
    answer:
      "Major awards include Chevening and Commonwealth (UK), DAAD (Germany), Erasmus Mundus (Europe), Fulbright-Nehru (USA), the Global Korea Scholarship and Australia Awards, alongside university merit scholarships and Indian trusts such as the J.N. Tata Endowment and the Inlaks Shivdasani Foundation.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "Can I get an education loan for MBBS abroad or the Dubai IT program?",
    answer:
      "Education loans for MBBS abroad are available through banks and NBFCs on secured or unsecured terms, and we prepare the loan file end-to-end. For the Dubai IT program, talk to our counsellors about the financing options available for your situation.",
  },
  {
    category: "Costs, Loans & Scholarships",
    question: "Is Germany really free for international students?",
    answer:
      "Most public universities in Germany charge no tuition fee, only a semester contribution. The state of Baden-Württemberg charges non-EU students a tuition fee per semester, and private universities charge fees. You must also show funds for living costs through a blocked account.",
  },
]

/** Destination-specific FAQs rendered on /destinations/[country] with FAQPage schema. */
export const DESTINATION_FAQS: Record<string, CareerProgramFaq[]> = {
  uk: [
    {
      question: "How long is a master's degree in the UK?",
      answer:
        "Most taught master's degrees in the UK take one year, which keeps the total cost lower than two-year programs elsewhere.",
    },
    {
      question: "When are the UK university intakes?",
      answer:
        "September is the main intake. Many universities also offer a smaller January intake, and a few courses start in May.",
    },
    {
      question: "Can I work in the UK after my degree?",
      answer:
        "Yes, through the Graduate Route. The UK government has announced that its length will reduce from two years to 18 months for most graduates applying from January 2027 — confirm the current rule on gov.uk.",
    },
    {
      question: "What is a CAS?",
      answer:
        "A Confirmation of Acceptance for Studies is the reference your university issues once you accept an unconditional offer and pay any deposit. You need it to apply for the UK Student visa.",
    },
  ],
  canada: [
    {
      question: "What is the PGWP in Canada?",
      answer:
        "The Post-Graduation Work Permit is an open work permit for graduates of eligible programs at Designated Learning Institutions. It lasts from eight months up to three years, depending on your program length.",
    },
    {
      question: "When are the intakes in Canada?",
      answer:
        "September (Fall) is the main intake, followed by January (Winter). Some institutions offer a May (Summer) intake with fewer programs.",
    },
    {
      question: "What is a Provincial Attestation Letter?",
      answer:
        "Most study permit applicants need an attestation letter from the province or territory where they plan to study, issued through the institution. We confirm whether it applies to your program and help you obtain it.",
    },
    {
      question: "Does studying in Canada lead to permanent residency?",
      answer:
        "It can. Skilled work experience gained on a PGWP makes many graduates eligible for Express Entry or a Provincial Nominee Program, though selection criteria change regularly.",
    },
  ],
  australia: [
    {
      question: "When are the intakes in Australia?",
      answer: "February and July are the main intakes, with a smaller November intake at some universities.",
    },
    {
      question: "What is the Genuine Student requirement?",
      answer:
        "It is the assessment Australia uses to check that your study plans, course choice and intentions are genuine. You address it through written responses in your Subclass 500 visa application.",
    },
    {
      question: "Can I stay and work in Australia after graduating?",
      answer:
        "Eligible graduates can apply for the Temporary Graduate visa (subclass 485), with the length of stay depending on your qualification and where you studied.",
    },
  ],
  germany: [
    {
      question: "Is it free to study in Germany?",
      answer:
        "Most public universities charge no tuition fee, only a semester contribution. Baden-Württemberg charges non-EU students a fee per semester, and private universities charge tuition.",
    },
    {
      question: "What is a blocked account?",
      answer:
        "A blocked account (Sperrkonto) holds the funds that prove you can cover your living costs in Germany. The required amount is set by the German government and revised periodically, and you withdraw a fixed sum each month after arrival.",
    },
    {
      question: "Do Indian students need an APS certificate?",
      answer:
        "Yes. Indian applicants need an APS certificate verifying their academic documents before applying for a German student visa.",
    },
    {
      question: "Can I stay in Germany after my degree?",
      answer:
        "Graduates can apply for an 18-month residence permit to look for a job related to their qualification.",
    },
  ],
  usa: [
    {
      question: "When are the intakes in the USA?",
      answer: "Fall (August–September) is the main intake, with a smaller Spring intake in January.",
    },
    {
      question: "What is Form I-20?",
      answer:
        "The certificate of eligibility issued by a SEVP-certified institution after admission. You need it to pay the SEVIS fee and apply for the F-1 student visa.",
    },
    {
      question: "How long can I work in the USA after graduating?",
      answer:
        "Optional Practical Training allows up to 12 months of work in your field, with a 24-month extension for STEM-designated degrees — up to 36 months in total.",
    },
    {
      question: "Is the GRE or GMAT required?",
      answer:
        "It depends on the university and program. Many programs have made these tests optional, while competitive programs may still require or recommend them.",
    },
  ],
  ireland: [
    {
      question: "Is Ireland free for Indian students?",
      answer:
        "No. Ireland's free-fees scheme covers EU/EEA students only. International students pay full tuition, with scholarships available to offset part of the cost.",
    },
    {
      question: "Can I stay in Ireland after graduating?",
      answer:
        "The Third Level Graduate Programme lets eligible graduates stay to seek work — up to 12 months after an honours bachelor's degree and up to 24 months after a master's.",
    },
    {
      question: "Can I work part-time while studying in Ireland?",
      answer:
        "Yes. International students on a recognised program can work up to 20 hours a week during term and up to 40 hours a week during scheduled holidays.",
    },
  ],
  "new-zealand": [
    {
      question: "When are the intakes in New Zealand?",
      answer: "February and July are the main intakes.",
    },
    {
      question: "Can I work in New Zealand after my studies?",
      answer:
        "Eligible graduates can apply for a Post Study Work Visa. Its length depends on your qualification, so we confirm your eligibility before you choose a course.",
    },
    {
      question: "Which courses is New Zealand strong in?",
      answer:
        "Agriculture, engineering, business, tourism and film and media, with an emphasis on practical, applied learning.",
    },
  ],
  georgia: [
    {
      question: "How much does MBBS in Georgia cost?",
      answer:
        "Tuition for the 6-year program typically ranges from $40,000 to $50,000 in total — roughly ₹33–42 lakhs — with no capitation fee.",
    },
    {
      question: "Is NEET required to study MBBS in Georgia?",
      answer:
        "Yes. A qualifying NEET result is mandatory for Indian students who want to practise in India after graduating. No further entrance exam is required.",
    },
    {
      question: "When are the intakes in Georgia?",
      answer: "September is the main intake, with a February intake at many universities.",
    },
  ],
  "south-korea": [
    {
      question: "Which visa do I need to study in South Korea?",
      answer:
        "Degree students apply for the D-2 student visa. Students starting with a Korean language program use the D-4 visa.",
    },
    {
      question: "Do I need to know Korean?",
      answer:
        "Not for English-taught programs, but basic Korean makes daily life, part-time work and job hunting much easier, and a TOPIK score strengthens scholarship applications.",
    },
    {
      question: "What does the Global Korea Scholarship cover?",
      answer:
        "For selected students it generally covers tuition, a monthly living allowance, round-trip airfare and a Korean language course before the degree.",
    },
  ],
  vietnam: [
    {
      question: "How much does MBBS in Vietnam cost?",
      answer:
        "Through Versa Global, MBBS in Vietnam starts from ₹31 lakhs for the complete 6-year program, including tuition, hostel and administration fees.",
    },
    {
      question: "Is NEET required to study MBBS in Vietnam?",
      answer:
        "Yes. A qualifying NEET result is mandatory for Indian students who want to practise in India after graduating.",
    },
    {
      question: "When are the intakes in Vietnam?",
      answer: "September and January.",
    },
  ],
}

/** Blog categories that count as "related guides" for each destination page. */
export const DESTINATION_BLOG_CATEGORIES: Record<string, string[]> = {
  uk: ["UK"],
  canada: ["Canada"],
  australia: ["Australia"],
  germany: ["Germany"],
  usa: ["United States"],
  ireland: ["Ireland"],
  "new-zealand": ["New Zealand"],
  georgia: ["Georgia", "MBBS Abroad"],
  "south-korea": ["South Korea"],
  vietnam: ["Vietnam", "MBBS Abroad"],
}
