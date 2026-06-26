import Link from "next/link"
import { WA_URL, PHONE, EMAIL, ADDRESS, PARENT_URL } from "@/lib/data"
export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-cormorant text-2xl font-bold text-white mb-3">Versa <span className="text-[#C9A84C]">Global</span></p>
            <p className="text-[#A8B89A] text-sm leading-relaxed">Study Abroad Consultancy. 60+ Countries. 95% Visa Success.</p>
            <p className="text-[#A8B89A] text-xs mt-3">{ADDRESS}</p>
            <a href={PARENT_URL} className="text-[#C9A84C] text-xs mt-2 inline-block hover:underline">A Versa Growth Ventures company</a>
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Destinations</p>
            {[["UK","/destinations/uk"],["Canada","/destinations/canada"],["Australia","/destinations/australia"],["Germany","/destinations/germany"],["USA","/destinations/usa"],["Dubai","/destinations/dubai"]].map(([n,h]) => (
              <Link key={n} href={h} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C] transition-colors">{n}</Link>
            ))}
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Services</p>
            {[["Courses","/courses"],["Process","/process"],["About","/about"],["Blog","/blog"],["FAQ","/faq"],["Schemes","/schemes"]].map(([n,h]) => (
              <Link key={n} href={h} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C] transition-colors">{n}</Link>
            ))}
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Contact</p>
            <a href={`tel:${PHONE}`} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C]">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C]">{EMAIL}</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="block text-[#A8B89A] text-sm hover:text-[#C9A84C]">WhatsApp Us</a>
          </div>
        </div>
        <div className="border-t border-[#C9A84C]/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A8B89A] text-xs">© {new Date().getFullYear()} Versa Global Education. All rights reserved.</p>
          <p className="text-[#A8B89A] text-xs">Part of Versa Growth Ventures</p>
        </div>
      </div>
    </footer>
  )
}
