"use client"

import { openWhatsApp } from "@/lib/supabase"
import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-24 right-5 md:bottom-8 md:right-6 z-50 bg-[#25D366] text-white rounded-full p-3.5 shadow-lg hover:bg-[#1ebe57] transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </button>
  )
}
