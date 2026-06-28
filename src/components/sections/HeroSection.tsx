import Link from "next/link"
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react"
import { STATS, SITE } from "@/lib/data"

export default function HeroSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <section className="bg-[#1B2A4A] text-white py-16 md:py-24 px-5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A84C] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <Globe size={13} />Kerala&apos;s Study Abroad Experts
          </span>
          <h1 className="font-playfair text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-tight mb-5">
            Your Dream University.<br />
            <span className="text-[#C9A84C]">We Make It Happen.</span>
          </h1>
          <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-5">
            From university selection to visa approval — Versa Global guides Kerala students to the world&apos;s top universities in 60+ countries with a 95% visa success rate.
          </p>
          <ul className="space-y-2 mb-7">
            {["60+ destination countries", "95% visa success rate", "1,000+ students placed", "Free profile evaluation"].map((item) => (
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

        <div className="grid grid-cols-2 gap-4 mt-2 lg:mt-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:border-[#C9A84C]/30 transition-all">
              <p className="font-playfair text-3xl md:text-4xl font-bold text-[#C9A84C] mb-1">{stat.value.toLocaleString("en-IN")}{stat.suffix}</p>
              <p className="text-blue-200 text-xs tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
