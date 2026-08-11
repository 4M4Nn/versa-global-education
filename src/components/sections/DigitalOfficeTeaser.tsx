import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function DigitalOfficeTeaser() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1B2A4A] to-[#0F1A2E] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none" />
        <span className="relative inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
          <Sparkles size={13} /> New: Digital Office
        </span>
        <h2 className="relative font-playfair text-3xl md:text-4xl font-bold mb-4">
          Not Sure Where to Start? Answer 3 Questions.
        </h2>
        <p className="relative text-blue-200 max-w-xl mx-auto mb-7">
          Tell us your budget, interest, and qualification — our Digital Office instantly matches you to the
          right course and country, then connects you to a real counsellor on WhatsApp.
        </p>
        <Link
          href="/digital-office"
          className="relative inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] font-bold px-7 py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors"
        >
          Visit the Digital Office <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
