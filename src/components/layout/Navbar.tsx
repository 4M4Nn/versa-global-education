"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/data"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-gold px-5 py-1.5 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 text-white text-xs">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{SITE.address}</span>
              <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{SITE.phone}</span>
            </div>
            <span className="text-white text-xs">{SITE.email}</span>
          </div>
        </div>

        <nav className={`bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 flex-shrink-0">
                <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
                  <span className="text-gold font-bold text-sm font-playfair">V</span>
                </div>
                <div>
                  <span className="text-navy font-bold text-lg font-playfair leading-none block">Versa</span>
                  <span className="text-gold text-xs font-medium leading-none block">Global</span>
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="text-navy text-sm font-medium hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-3">
                <Link href="/#contact" className="bg-navy text-white text-sm font-medium px-5 py-2 rounded-md hover:opacity-90 transition-opacity">
                  Free Consultation
                </Link>
              </div>

              <button className="md:hidden p-2.5 rounded-lg text-navy hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-white md:hidden flex flex-col transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
              <span className="text-gold font-bold text-sm font-playfair">V</span>
            </div>
            <div>
              <span className="text-navy font-bold text-lg font-playfair leading-none block">Versa</span>
              <span className="text-gold text-xs font-medium leading-none block">Global</span>
            </div>
          </Link>
          <button className="p-2.5 rounded-lg text-navy hover:bg-gray-100" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-4 text-lg font-semibold text-navy hover:text-gold hover:bg-amber-50 rounded-xl transition-all min-h-[56px]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-5 py-6 border-t border-gray-100 space-y-3 shrink-0">
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full bg-navy text-white font-bold py-4 rounded-xl text-base hover:opacity-90 transition-opacity min-h-[56px]">
            Free Consultation
          </Link>
          <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 w-full border-2 border-navy text-navy font-bold py-4 rounded-xl text-base hover:bg-gray-50 transition-colors min-h-[56px]">
            <Phone size={18} /> {SITE.phone}
          </a>
        </div>
      </div>
    </>
  )
}
