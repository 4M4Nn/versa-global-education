import type { Metadata } from "next"
import DigitalOfficeWizard from "@/components/sections/DigitalOfficeWizard"

export const metadata: Metadata = {
  title: "Digital Office — Find Your Course & Country Match",
  description:
    "Versa Global's Digital Office matches you to the right study abroad course and country based on your budget, interests, and qualifications — then connects you directly to a counsellor on WhatsApp.",
  alternates: { canonical: "/digital-office" },
}

export default function DigitalOfficePage() {
  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Digital Office</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">
            Your Course & Country Match, In 3 Questions
          </h1>
          <p className="text-blue-200 text-lg">
            No branch visit needed. Tell us what you want to study, your budget, and your qualification — we&apos;ll
            match you to the right destinations and connect you to a counsellor on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FA]">
        <DigitalOfficeWizard />
      </section>
    </div>
  )
}
