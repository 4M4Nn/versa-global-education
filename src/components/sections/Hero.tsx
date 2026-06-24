"use client"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const GlobeScene = dynamic(() => import("@/components/three/GlobeScene"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full"><div className="w-16 h-16 border-2 border-[#C9A84C] rounded-full animate-spin border-t-transparent" /></div>,
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B2A4A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-16 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
          <span className="text-[#C9A84C] text-xs tracking-widest font-medium uppercase">Trusted Study Abroad Partner · Kerala</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-[#1B2A4A] leading-tight mb-6">
          Your Dream University.<br />
          <span className="gold-gradient">Any Country.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="text-[#6B7280] text-lg leading-relaxed mb-10 max-w-lg">
          Expert guidance for studying abroad in 60+ countries. 500+ university partnerships. 95% visa success rate. Your journey starts here.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="px-8 py-4 bg-[#1B2A4A] hover:bg-[#2D4A7A] text-white rounded-full font-bold transition-all duration-300 text-center">Explore Destinations</a>
          <a href="#contact" className="px-8 py-4 border-2 border-[#C9A84C] hover:bg-[#C9A84C] text-[#1B2A4A] hover:text-white rounded-full font-medium transition-all duration-300 text-center">Free Consultation</a>
        </motion.div>
      </div>
      <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full">
        <GlobeScene />
      </div>
    </section>
  )
}
