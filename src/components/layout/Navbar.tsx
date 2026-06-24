"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Courses", href: "#courses" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-white/95 border-b border-[#C9A84C]/20 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B2A4A] to-[#2D4A7A] flex items-center justify-center">
            <span className="text-white font-bold text-xs">VG</span>
          </div>
          <div>
            <p className="font-playfair text-[#1B2A4A] font-bold">Versa Global</p>
            <p className="text-[#C9A84C] text-xs">Study Abroad Consultancy</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-[#6B7280] hover:text-[#1B2A4A] transition-colors text-sm font-medium">{link.label}</a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-[#C9A84C] hover:bg-[#B8973B] text-white rounded-full text-sm font-bold transition-all duration-300">Free Consultation</a>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-[#1B2A4A] p-2"><Menu size={24} /></button>
          </SheetTrigger>
          <SheetContent className="bg-white border-[#C9A84C]/20 w-[280px]">
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-[#6B7280] hover:text-[#1B2A4A] text-lg">{link.label}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-3 bg-[#C9A84C] text-white rounded-full text-center font-bold">Free Consultation</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
