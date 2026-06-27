import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { SITE, NAV_LINKS, DESTINATIONS } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-4">
            <p className="font-playfair text-xl font-bold text-[#C9A84C] leading-tight">Versa Global</p>
            <p className="text-xs tracking-widest uppercase text-blue-200">Study Abroad Consultancy</p>
          </div>
          <p className="text-sm text-blue-200 leading-relaxed mb-5">
            Kerala&apos;s trusted study abroad consultancy. 60+ countries. 95% visa success rate.
          </p>
          <div className="flex items-center gap-2">
            {["f", "in", "yt"].map((s) => (
              <a key={s} href="#" aria-label={s} className="w-8 h-8 rounded-full border border-blue-400/40 flex items-center justify-center text-xs font-bold text-blue-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors uppercase">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C9A84C]">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-blue-200 hover:text-white transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C9A84C]">Top Destinations</h4>
          <ul className="space-y-2">
            {DESTINATIONS.slice(0, 6).map((d) => (
              <li key={d.id}>
                <Link href={`/destinations/${d.id}`} className="text-sm text-blue-200 hover:text-white transition-colors">
                  {d.flag} {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#C9A84C]">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-blue-200">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#C9A84C]" />{SITE.address}
            </li>
            <li>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-sm text-blue-200 hover:text-white transition-colors">
                <Phone size={16} className="shrink-0 text-[#C9A84C]" />{SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-sm text-blue-200 hover:text-white transition-colors">
                <Mail size={16} className="shrink-0 text-[#C9A84C]" />{SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} Versa Global. All rights reserved.</p>
          <p>A <a href="https://versagrowthventures.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:text-white transition-colors">Versa Growth Ventures</a> initiative</p>
        </div>
      </div>
    </footer>
  )
}
