import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Versa Global | Free Study Abroad Consultation",
  description: "Book your free study abroad consultation with Versa Global. Talk to our expert counselors about UK, Canada, Australia, Germany, USA study options.",
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20 bg-[#F8F6F0]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">GET IN TOUCH</p>
          <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A] mb-4">Book Your Free Consultation</h1>
          <p className="text-[#6B7280]">Fill out the form below and our counselors will contact you within 24 hours.</p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}
