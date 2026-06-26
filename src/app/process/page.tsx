import type { Metadata } from "next"
import { PROCESS_STEPS, WA_URL } from "@/lib/data"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Study Abroad Process | Versa Global — 9 Steps to Your Dream University",
  description: "Versa Global's proven 9-step process guides Kerala students from profile assessment to arriving at their dream university abroad.",
}

export default function ProcessPage() {
  return (
    <main className="pt-24 pb-20 bg-[#F8F6F0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">HOW IT WORKS</p>
          <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A] mb-4">Our 9-Step Process</h1>
          <p className="text-[#6B7280] max-w-xl mx-auto">Every student who walks into Versa Global gets the same meticulous end-to-end support — from the very first conversation to landing in their destination country.</p>
        </div>
        <div className="space-y-4 mb-14">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex gap-5 p-6 glass-card rounded-xl hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-cormorant font-bold text-xl" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{step.num}</div>
              <div>
                <h2 className="font-cormorant text-xl font-bold text-[#1B2A4A] mb-1">{step.title}</h2>
                <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="navy-card rounded-2xl p-10 text-center">
          <h2 className="font-cormorant text-3xl font-bold text-white mb-3">Start Step 1 Today — It&apos;s Free</h2>
          <p className="text-[#A8B89A] mb-6">Your free profile evaluation costs nothing and takes 30 minutes. Most students leave knowing exactly which universities to target.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#C9A84C] text-white text-sm font-bold tracking-widest hover:bg-[#E8C96A] transition-colors">Book Free Evaluation</a>
            <Link href="/contact" className="px-8 py-3 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-widest">Schedule Appointment</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
