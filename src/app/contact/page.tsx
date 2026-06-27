import type { Metadata } from "next"
import ContactSection from "@/components/sections/ContactSection"
import { SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact Us — Free Study Abroad Consultation",
  description: "Book your free study abroad consultation with Versa Global Kerala. Call, WhatsApp, or fill the form.",
}

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Get in Touch</h1>
          <p className="text-blue-200 text-lg">Book your free profile evaluation or just ask us anything.</p>
        </div>
      </section>
      <ContactSection />
    </div>
  )
}
