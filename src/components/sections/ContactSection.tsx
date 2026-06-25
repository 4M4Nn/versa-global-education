"use client"
import { useState } from "react"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { serviceInterests, siteConfig } from "@/lib/data"
export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", country: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    await saveLead({ name: form.name, phone: form.phone, email: form.email, service_interested: form.service, source_website: "versa-global", message: `Country: ${form.country}. ${form.message}` })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.service })
    setSent(true); setLoading(false)
  }
  const inp = "w-full bg-transparent border-b border-[#0A1628]/20 focus:border-[#C49A2E] outline-none text-[#0A1628] placeholder-[#0A1628]/30 py-3 font-inter text-base transition-colors"
  return (
    <section id="contact" className="py-32 bg-[#FAFBFF] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="label text-[#C49A2E] mb-4" style={{ letterSpacing: "3px" }}>/ Get In Touch</p>
          <h2 className="font-playfair font-bold text-[#0A1628]" style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1 }}>Ready to go global?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            {[{ label: "Phone", val: siteConfig.phone }, { label: "Email", val: siteConfig.email }, { label: "Location", val: siteConfig.location }].map(item => (
              <div key={item.label}>
                <p className="label text-[#4A5568]/60 mb-1">{item.label}</p>
                <p className="font-inter text-[#0A1628] text-base">{item.val}</p>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 mt-4">
              {["IEC", "DGFT", "FSSAI", "Customs", "Logistics"].map(tag => (
                <span key={tag} className="px-3 py-1.5 border border-[#C49A2E]/30 text-[#C49A2E] text-xs font-inter rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          {sent ? (
            <div className="flex flex-col justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0A1628] flex items-center justify-center text-[#C49A2E] text-xl">✓</div>
              <h3 className="font-playfair text-2xl text-[#0A1628]">Enquiry received!</h3>
              <p className="font-inter text-[#4A5568]">Our trade consultant will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-6">
              <input required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inp} />
              <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inp} />
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inp} />
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className={inp + " bg-transparent"}>
                <option value="" className="bg-white">Service Needed</option>
                {serviceInterests.map(s => <option key={s} value={s} className="bg-white">{s}</option>)}
              </select>
              <input placeholder="Target Country / Region" value={form.country} onChange={e => setForm({...form, country: e.target.value})} className={inp} />
              <textarea placeholder="Tell us about your trade requirement" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className={inp + " resize-none"} />
              <button type="submit" disabled={loading} className="w-full h-14 bg-[#0A1628] hover:bg-[#1E3A5F] text-white font-playfair font-bold text-base transition-colors disabled:opacity-70 rounded-sm">
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
