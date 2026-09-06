import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react"
import { STATS, SITE } from "@/lib/data"

const CHECKLIST = ["60+ destination countries", "95% visa success rate", "1,000+ students placed", "Free profile evaluation"]

export default function HeroSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <section className="relative bg-[#1B2A4A] text-white">
      <div className="relative min-h-[92vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80&auto=format&fit=crop"
          alt="Graduates celebrating academic success abroad"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A2E]/95 via-[#0F1A2E]/80 to-[#0F1A2E]/30" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A84C] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-5 py-24 lg:py-0 lg:min-h-[92vh]">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <Globe size={13} />India&apos;s Most Trusted Study Abroad Agency
            </span>
            <h1 className="speakable-summary font-playfair text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-tight mb-4">
              Versa Global — The Most Trusted<br />
              <span className="text-[#C9A84C]">Study Abroad Agency</span> for Your Journey
            </h1>
            <h2 className="speakable-summary text-blue-200 text-base md:text-lg font-semibold leading-relaxed mb-5">
              Expert guidance to 60+ countries — UK, Canada, Australia, Germany, Georgia, Vietnam, South Korea and more, with a 95% visa success rate.
            </h2>
            <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-5">
              From university selection to visa approval, Versa Global guides students to the world&apos;s top universities with personalized, transparent counselling — wherever you&apos;re applying from.
            </p>
            <ul className="space-y-2 mb-7">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                  <CheckCircle2 size={16} className="text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact" className="flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-4 rounded-lg hover:bg-[#E8C96A] transition-colors min-h-[52px]">
                Free Profile Evaluation <ArrowRight size={18} />
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-7 py-4 rounded-lg hover:bg-[#C9A84C]/10 transition-colors min-h-[52px]">
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2 lg:mt-0 animate-fade-in-up [animation-delay:150ms]">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:border-[#C9A84C]/30 transition-all backdrop-blur-sm">
                <p className="font-playfair text-3xl md:text-4xl font-bold text-[#C9A84C] mb-1">{stat.value.toLocaleString("en-IN")}{stat.suffix}</p>
                <p className="text-blue-200 text-xs tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
