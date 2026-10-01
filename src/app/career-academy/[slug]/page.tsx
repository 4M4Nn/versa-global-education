import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock,
  Globe2,
  GraduationCap,
  Laptop,
  MapPin,
  MessageCircle,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react"
import { SITE, CAREER_PROGRAMS } from "@/lib/data"
import { getAllBlogPosts } from "@/lib/content"
import PlacementsShowcase from "@/components/sections/PlacementsShowcase"

export async function generateStaticParams() {
  return CAREER_PROGRAMS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const program = CAREER_PROGRAMS.find((p) => p.slug === slug)
  if (!program) return { title: "Program Not Found" }
  return {
    title: `${program.title} | AED ${program.fee.amount.toLocaleString()} | 100% Job Assurance`,
    description: program.metaDescription,
    alternates: { canonical: `/career-academy/${program.slug}` },
    keywords: program.keywords,
  }
}

export default async function CareerProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = CAREER_PROGRAMS.find((p) => p.slug === slug)
  if (!program) notFound()

  const waMessage = `Hi Versa Global, I'm interested in the ${program.shortName}. Can you share the full details and next steps?`
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}?text=${encodeURIComponent(waMessage)}`

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.metaDescription,
    provider: { "@type": "Organization", name: "Versa Global", sameAs: "https://www.versaglobal.in" },
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: program.fee.amount,
      priceCurrency: program.fee.currency,
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: program.modes.map((mode) => ({
      "@type": "CourseInstance",
      courseMode: mode,
      courseWorkload: program.durationHours,
      location: mode === "Classroom in Dubai" ? { "@type": "Place", name: "Dubai, UAE" } : undefined,
    })),
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: program.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.replace(/&apos;/g, "'"),
      acceptedAnswer: { "@type": "Answer", text: faq.answer.replace(/&apos;/g, "'") },
    })),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.versaglobal.in/" },
      { "@type": "ListItem", position: 2, name: "Career Academy", item: "https://www.versaglobal.in/career-academy" },
      { "@type": "ListItem", position: 3, name: program.shortName, item: `https://www.versaglobal.in/career-academy/${program.slug}` },
    ],
  }

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable-answer", ".speakable-summary"] },
  }

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to enrol in the ${program.shortName}`,
    step: program.enrolmentSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  }

  const guides = getAllBlogPosts().filter((post) => post.category === "Career Academy")

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <Image src={program.heroImage} alt={program.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A2E]/95 via-[#1B2A4A]/92 to-[#1B2A4A]/95" />
        <div className="relative max-w-5xl mx-auto text-white">
          <nav className="text-xs text-blue-200 mb-6 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/career-academy" className="hover:text-white transition-colors">Career Academy</Link>
            <span>/</span>
            <span className="text-white">{program.shortName}</span>
          </nav>

          <span className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <ShieldCheck size={14} /> 100% Job Assurance
          </span>

          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-4 max-w-3xl">{program.title}</h1>
          <p className="speakable-summary text-blue-200 text-lg max-w-2xl mb-8">
            {program.tagline.replace(/&apos;/g, "'")} — a program delivered by Versa Global, in association with{" "}
            {program.associationPartner}.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-9 max-w-3xl">
            {[
              { Icon: Clock, label: "Duration", value: program.durationMonths },
              { Icon: Server, label: "Total Hours", value: program.durationHours },
              { Icon: Globe2, label: "Mode", value: "3-in-1" },
              { Icon: Users, label: "Placed in GCC", value: program.studentsPlaced },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="bg-white/10 border border-white/10 rounded-xl p-4">
                <Icon size={18} className="text-[#C9A84C] mb-2" />
                <p className="text-xs text-blue-200">{label}</p>
                <p className="text-sm font-bold">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
            >
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Book Free Evaluation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#F8F9FA] rounded-2xl p-7">
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-4">Program Snapshot</h2>
            <ul className="space-y-2.5 text-sm text-[#374151]">
              <li><strong className="text-[#1B2A4A]">Focus:</strong> {program.focus}</li>
              <li><strong className="text-[#1B2A4A]">Target audience:</strong> {program.targetAudience}</li>
              <li><strong className="text-[#1B2A4A]">Prerequisites:</strong> {program.prerequisites}</li>
              <li><strong className="text-[#1B2A4A]">Delivered by:</strong> Versa Global, in association with {program.associationPartner}</li>
            </ul>
          </div>
          <div className="bg-[#F8F9FA] rounded-2xl p-7">
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-4">Learning Objectives</h2>
            <ul className="space-y-2.5">
              {program.learningObjectives.map((obj) => (
                <li key={obj} className="flex items-start gap-2.5 text-sm text-[#374151]">
                  <CheckCircle2 size={16} className="text-[#C9A84C] mt-0.5 shrink-0" /> {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">Curriculum & Hands-On Training</h2>
          <p className="text-[#6B7280] mb-8 max-w-2xl">
            {program.durationHours} of training across {program.modules.length} modules — theory backed by live,
            hands-on experience with real servers, routers, switches and cloud environments.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {program.modules.map((mod) => (
              <div key={mod.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-3">{mod.title}</h3>
                <ul className="space-y-1.5">
                  {mod.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-[#374151]">
                      <span className="text-[#C9A84C] mt-1.5 shrink-0">▪</span> {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Exposure */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">Beyond the Classroom: Real-World Industry Exposure</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {program.industryExposure.map((item) => (
              <div key={item.title} className="bg-[#EEF2FF] rounded-xl p-6">
                <h3 className="font-semibold text-[#1B2A4A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Readiness */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">Placement & Interview Preparation</h2>
          <p className="text-blue-200 mb-9 max-w-2xl">
            Every learner completes a structured, end-to-end placement track — not a one-off resume review.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {program.careerReadinessSteps.map((step, i) => (
              <div key={step} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-[#C9A84C] text-[#1B2A4A] font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <p className="text-xs font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">Where This Takes You: Career Roles</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {program.careerOutcomes.map((role) => (
              <div key={role} className="flex items-center gap-3 bg-[#F8F9FA] rounded-xl p-4">
                <GraduationCap size={18} className="text-[#C9A84C] shrink-0" />
                <span className="text-sm font-semibold text-[#1B2A4A]">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlacementsShowcase />

      {/* Training & Assessment */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-4">Training Materials</h2>
            <ul className="space-y-2.5">
              {program.trainingMaterials.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#374151]">
                  <CheckCircle2 size={16} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-4">Assessment Plan</h2>
            <ul className="space-y-2.5">
              {program.assessmentPlan.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#374151]">
                  <CheckCircle2 size={16} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Job Assurance */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Our Commitment</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">100% Job Assurance</h2>
          <p className="italic text-[#C9A84C] text-lg mb-5">&ldquo;A job that&apos;s earned — not granted.&rdquo;</p>
          <p className="speakable-answer text-blue-200 leading-relaxed max-w-3xl mb-10">
            {program.jobAssuranceStatement}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Real Projects", desc: "Live client & lab work, not simulations" },
              { title: "Structured Prep", desc: "CV clinic, mock interviews, ATS & HR prep" },
              { title: "Certified Trainers", desc: "10+ years of hands-on industry experience" },
              { title: "Continued Support", desc: `Placement assistance until you're hired` },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-[#C9A84C]/15 border border-[#C9A84C]/20 rounded-xl p-5">
                <p className="font-bold text-sm mb-1.5">{pillar.title}</p>
                <p className="text-xs text-blue-200">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee & Certification */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#1B2A4A] text-white rounded-2xl p-8 text-center">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Program Fee</p>
            <p className="font-playfair text-4xl md:text-5xl font-bold mb-2">
              {program.fee.currency} {program.fee.amount.toLocaleString()}
            </p>
            <p className="text-blue-200 text-sm mb-6">Duration: {program.fee.durationRange}</p>
            <div className="border-t border-white/10 pt-5 mb-6">
              <p className="text-xs text-blue-200 uppercase tracking-wide">Payment Mode</p>
              <p className="font-semibold">{program.fee.paymentMode}</p>
            </div>
            <span className="inline-block bg-[#C9A84C] text-[#1B2A4A] font-bold px-6 py-3 rounded-lg">
              100% Job Assurance Included
            </span>
            <p className="text-xs text-blue-200 mt-5">
              Excludes living expenses and visa fees in Dubai; visa support is provided for the classroom and hybrid tracks.
            </p>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-4">Certification Exams — Included</h2>
            <div className="space-y-3 mb-4">
              {program.certificationExams.map((exam) => (
                <div key={exam.code} className="flex items-center justify-between bg-[#F8F9FA] rounded-xl p-4">
                  <span className="text-sm font-semibold text-[#1B2A4A]">{exam.name}</span>
                  <span className="text-sm font-bold text-[#C9A84C]">
                    {exam.currency} {exam.fee.toLocaleString()} <span className="text-[10px] font-semibold text-green-600 uppercase ml-1">Included</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6B7280]">
              All three certification exam fees — a combined {program.certificationExams[0].currency}{" "}
              {program.certificationExams.reduce((sum, e) => sum + e.fee, 0).toLocaleString()} in value — are
              included in your {program.fee.currency} {program.fee.amount.toLocaleString()} program fee at no
              extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* Study in Dubai / Schedule */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">Study in Dubai — Class Schedule & Modes</h2>
          <p className="text-[#6B7280] mb-8 max-w-2xl">
            {program.location.replace(/&apos;/g, "'")}. Choose the mode that fits your circumstances — all three
            carry the identical curriculum and job assurance.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {program.tracks.map((track) => (
              <div key={track.mode} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <Laptop size={20} className="text-[#C9A84C] mb-3" />
                <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-3">{track.mode}</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">Best for</dt>
                    <dd className="text-[#374151]">{track.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">How it works</dt>
                    <dd className="text-[#374151]">{track.howItWorks}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">Visa</dt>
                    <dd className="text-[#374151]">{track.visa}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-[#1B2A4A] mb-3">Full-Time Students</h3>
              <ul className="space-y-2">
                {program.schedule.fullTime.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <CheckCircle2 size={15} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-[#1B2A4A] mb-3">Part-Time Students</h3>
              <ul className="space-y-2">
                {program.schedule.partTime.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <CheckCircle2 size={15} className="text-[#C9A84C] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex items-start gap-3 bg-[#EEF2FF] rounded-xl p-5">
            <MapPin size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
            <p className="text-sm text-[#374151]">
              <strong className="text-[#1B2A4A]">Visa support</strong> is provided by Versa Global for students
              choosing the Dubai classroom or hybrid track. Living expenses and the visa fee itself are excluded
              from the program fee and should be budgeted for separately.
            </p>
          </div>
        </div>
      </section>

      {/* How to enrol */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">How to Enrol — From First Call to GCC Placement</h2>
          <p className="text-[#6B7280] mb-9 max-w-2xl">Six steps, starting with a free consultation.</p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {program.enrolmentSteps.map((step, i) => (
              <li key={step.title} className="bg-[#F8F9FA] rounded-xl p-6">
                <span className="w-9 h-9 rounded-full bg-[#C9A84C] text-[#1B2A4A] font-bold flex items-center justify-center text-sm mb-4">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-[#1B2A4A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Instructor Profile */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-6">Who Will Train You</h2>
          <div className="bg-[#F8F9FA] rounded-2xl p-7">
            <p className="text-sm text-[#374151] leading-relaxed mb-5">{program.instructorProfile.summary}</p>
            <div className="flex flex-wrap gap-2">
              {program.instructorProfile.certifications.map((cert) => (
                <span key={cert} className="bg-[#C9A84C]/15 text-[#1B2A4A] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {program.faqs.map((faq) => (
              <details key={faq.question} className="group bg-white border border-gray-100 rounded-xl shadow-sm p-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-[#1B2A4A] text-sm">
                  {faq.question.replace(/&apos;/g, "'")}
                  <ChevronDown size={18} className="text-[#C9A84C] shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="speakable-answer text-sm text-[#6B7280] leading-relaxed mt-4 pt-4 border-t border-gray-100">
                  {faq.answer.replace(/&apos;/g, "'")}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      {guides.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-8">Dubai & GCC IT Career Guides</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {guides.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4 bg-[#F8F9FA] rounded-xl p-4 hover:bg-[#EEF2FF] transition-colors">
                  <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <h3 className="font-playfair font-bold text-[#1B2A4A] text-sm self-center group-hover:text-[#C9A84C] transition-colors">{post.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <BriefcaseBusiness size={32} className="mx-auto mb-4 text-[#C9A84C]" />
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">Ready to Build Your IT Career in the GCC?</h2>
          <p className="text-blue-200 mb-7">
            A program delivered by Versa Global, in association with {program.associationPartner}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
            >
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <Link href="/career-academy" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors">
          ← All Career Academy Programs
        </Link>
      </div>
    </div>
  )
}
