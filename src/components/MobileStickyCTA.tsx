"use client"
import { motion } from "framer-motion"
import { MessageCircle, Globe } from "lucide-react"
export default function MobileStickyCTA() {
  return (
    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 2 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-[#C9A84C]/30 p-4 shadow-xl">
      <div className="flex gap-3">
        <a href="https://wa.me/918891129111" target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium text-sm">
          <MessageCircle size={18} />WhatsApp
        </a>
        <a href="#contact"
          className="flex-1 flex items-center justify-center gap-2 bg-[#C9A84C] text-white py-3 rounded-xl font-bold text-sm">
          <Globe size={18} />Free Consultation
        </a>
      </div>
    </motion.div>
  )
}
