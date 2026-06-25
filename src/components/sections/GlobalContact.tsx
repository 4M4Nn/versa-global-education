"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { Phone, Mail, MapPin } from "lucide-react"

export default function GlobalContact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", country: "", course: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    await saveLead({ ...form, service_interested: `Study Abroad — ${form.country} — ${form.course}`, source_website: "versa-global" })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: `Study in ${form.country}` })
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Start Your Journey Today</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Free consultation with our expert counselors. No obligation, just clarity.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {sent ? (
              <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-3xl p-12 text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-2">We&apos;ll Contact You Soon!</h3>
                <p className="text-blue-200">Our counselor will reach you within 24 hours. Check WhatsApp too.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-4">
                <input required placeholder="Your Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-[#C9A84C]" />
                <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-[#C9A84C]" />
                <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-[#C9A84C]" />
                <select value={form.country} onChange={e => setForm({...form, country: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#C9A84C]">
                  <option value="">Preferred Country</option>
                  {["United Kingdom","United States","Canada","Australia","Germany","New Zealand","Ireland","Dubai / UAE"].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select value={form.course} onChange={e => setForm({...form, course: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#C9A84C]">
                  <option value="">Course of Interest</option>
                  {["MBA / Business","Computer Science","Data Science & AI","Engineering","Medicine & Healthcare","Finance & Banking","Architecture","Other"].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <button type="submit" className="py-4 bg-[#C9A84C] hover:bg-[#F5D78E] text-[#1B2A4A] rounded-xl font-bold transition-all duration-300">
                  Book Free Consultation →
                </button>
              </form>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
            {[
              { icon: Phone, label: "Call Us", value: "+91 8891129111" },
              { icon: Mail, label: "Email", value: "global@versagrowthventures.com" },
              { icon: MapPin, label: "Office", value: "Kochi, Kerala, India" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-blue-300 text-xs uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </div>
            ))}
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl p-6">
              <p className="text-[#C9A84C] font-bold text-lg mb-2">95% Visa Success Rate</p>
              <p className="text-blue-200 text-sm">Our expert counselors have helped 1,000+ students get into their dream universities across 60+ countries.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
