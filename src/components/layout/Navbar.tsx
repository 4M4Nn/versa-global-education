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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-gold px-4 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-white text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {SITE.address}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              {SITE.phone}
            </span>
          </div>
          <span className="text-white text-xs">{SITE.email}</span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
                <span className="text-gold font-bold text-sm font-playfair">V</span>
              </div>
              <div>
                <span className="text-navy font-bold text-lg font-playfair leading-none block">
                  Versa
                </span>
                <span className="text-gold text-xs font-medium leading-none block">Global</span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy text-sm font-medium hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/#contact"
                className="bg-navy text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-navy-dark transition-colors duration-200"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-navy"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            <div className="flex flex-col gap-1 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy text-sm font-medium py-2.5 border-b border-gray-50 hover:text-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-3 bg-navy text-white text-sm font-medium px-5 py-2.5 rounded-md text-center hover:bg-navy-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
