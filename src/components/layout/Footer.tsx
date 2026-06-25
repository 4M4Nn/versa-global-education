"use client"
import { siteConfig, services } from "@/lib/data"
export default function Footer() {
  return (
    <footer className="bg-[#0A1628] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-playfair font-bold text-xl text-white mb-3">VERSA <span className="text-[#C49A2E] italic">Global</span></p>
            <p className="text-white/40 text-sm font-inter leading-relaxed">Your international trade partner. Part of Versa Growth Ventures.</p>
          </div>
          <div>
            <p className="label text-[#C49A2E] mb-4">Services</p>
            <ul className="space-y-2">{services.map(s => <li key={s.id}><a href="#services" className="text-sm text-white/40 hover:text-white transition-colors font-inter">{s.short}</a></li>)}</ul>
          </div>
          <div>
            <p className="label text-[#C49A2E] mb-4">Quick Links</p>
            <ul className="space-y-2">{[["Countries","#countries"],["Testimonials","#testimonials"],["Contact","#contact"]].map(([l,h]) => <li key={l}><a href={h} className="text-sm text-white/40 hover:text-white transition-colors font-inter">{l}</a></li>)}</ul>
          </div>
          <div>
            <p className="label text-[#C49A2E] mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-white/40 font-inter"><li>{siteConfig.phone}</li><li>{siteConfig.email}</li><li>{siteConfig.location}</li></ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xs text-white/20 font-inter">© {new Date().getFullYear()} Versa Global | Part of Versa Growth Ventures</p>
          <p className="text-xs text-white/20 font-inter">Designed by Loopgen Technologies</p>
        </div>
      </div>
    </footer>
  )
}
