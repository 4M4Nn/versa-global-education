import type { Metadata } from "next"
import { FOUNDERS, WA_URL } from "@/lib/data"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Versa Global | Kerala Study Abroad Consultancy",
  description: "Versa Global was founded by three Keralites who believed every student from the state deserves access to a global education. Meet our founders and learn our story.",
}

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 bg-[#F8F6F0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">OUR STORY</p>
          <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A] mb-4">About Versa Global</h1>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
            Versa Global was born from a simple observation: too many brilliant Kerala students were missing out on world-class education because they didn&apos;t have the right guidance.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-8 mb-10">
          <h2 className="font-cormorant text-3xl font-bold text-[#1B2A4A] mb-4">Why We Started</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">Kerala has one of India&apos;s highest rates of students studying abroad — yet for every student who makes it, there are ten who don&apos;t, simply because they were misguided, received incorrect information, or couldn&apos;t navigate the complex application processes alone.</p>
          <p className="text-[#6B7280] leading-relaxed">Versa Global was created to change that. We are not just a consultancy — we are advocates for every Kerala student who wants more from their education than what they can access locally. We speak their language, we understand their budgets, and we have helped over 1,000 of them reach universities in 60+ countries.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[["1,000+","Students Placed"],["60+","Countries"],["95%","Visa Success"],["2019","Founded"]].map(([v,l]) => (
            <div key={l} className="glass-card rounded-xl p-5 text-center">
              <p className="font-cormorant text-3xl font-bold text-[#C9A84C]">{v}</p>
              <p className="text-[#6B7280] text-xs mt-1">{l}</p>
            </div>
          ))}
        </div>
        <h2 className="font-cormorant text-3xl font-bold text-[#1B2A4A] mb-8 text-center">Our Founders</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {FOUNDERS.map(f => (
            <div key={f.name} className="glass-card rounded-2xl p-7 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white mb-4" style={{ background:`linear-gradient(135deg,${f.color},${f.color}88)` }}>{f.monogram}</div>
              <h3 className="font-cormorant text-xl font-bold text-[#1B2A4A] mb-1">{f.name}</h3>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color:f.color }}>{f.role}</p>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-3">{f.bio}</p>
              <blockquote className="border-l-2 border-[#C9A84C] pl-3 italic text-xs text-[#C9A84C]">&ldquo;{f.quote}&rdquo;</blockquote>
            </div>
          ))}
        </div>
        <div className="navy-card rounded-2xl p-10 text-center">
          <h2 className="font-cormorant text-3xl font-bold text-white mb-3">Ready to Start Your Journey?</h2>
          <p className="text-[#A8B89A] mb-6">The first conversation is free. Let&apos;s find out which university is the right fit for you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#C9A84C] text-white text-sm font-bold tracking-widest hover:bg-[#E8C96A] transition-colors">WhatsApp Us</a>
            <Link href="/contact" className="px-8 py-3 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-widest">Book Appointment</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
