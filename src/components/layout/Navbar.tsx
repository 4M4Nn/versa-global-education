"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, WHATSAPP } from "@/lib/data"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#C9A84C]/15" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="font-cormorant text-2xl font-bold text-[#1B2A4A]">
            Versa <span className="text-[#C9A84C]">Global</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="text-xs tracking-widest text-[#6B7280] hover:text-[#1B2A4A] transition-colors uppercase">{l.label}</Link>
            ))}
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="text-xs px-4 py-2 bg-[#C9A84C] text-white hover:bg-[#E8C96A] transition-colors tracking-widest">FREE CONSULTATION</a>
          </div>
          <button className="md:hidden text-[#1B2A4A]" onClick={() => setOpen(true)}><Menu size={22} /></button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F8F6F0] flex flex-col items-center justify-center gap-7">
            <button className="absolute top-5 right-6 text-[#1B2A4A]" onClick={() => setOpen(false)}><X size={24} /></button>
            {NAV_LINKS.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={l.href} className="font-cormorant text-3xl text-[#1B2A4A] hover:text-[#C9A84C] transition-colors" onClick={() => setOpen(false)}>{l.label}</Link>
              </motion.div>
            ))}
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-3 bg-[#C9A84C] text-white text-sm tracking-widest">Free Consultation</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
