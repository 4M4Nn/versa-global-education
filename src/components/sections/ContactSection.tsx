"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { SITE, OFFER } from "@/lib/data"
import { saveLead } from "@/lib/supabase"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", destination: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Valid 10-digit phone required"
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required"
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await saveLead({ ...form, source: "versa-global-contact" })
      setSubmitted(true)
    } catch {
      setErrors({ form: "Submission failed. Please call us directly." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#1B2A4A]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Get Started</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">{OFFER.title}</h2>
          <p className="text-blue-200 mt-3">{OFFER.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-xl font-bold text-white mb-6">Reach Us Directly</h3>
            <ul className="space-y-5 mb-8">
              {[
                { Icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
                { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { Icon: MapPin, label: "Address", value: SITE.address, href: undefined },
              ].map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm hover:text-[#C9A84C] transition-colors">{value}</a>
                    ) : (
                      <p className="text-white text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-2">Enquiry Received!</h3>
                <p className="text-[#6B7280] text-sm">Our counsellor will call you within 24 hours for your free profile evaluation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.form && <p className="text-red-600 text-sm">{errors.form}</p>}
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "10-digit mobile number" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { id: "destination", label: "Preferred Destination (optional)", type: "text", placeholder: "e.g. UK, Canada, Germany" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-xs font-semibold text-[#1B2A4A] mb-1">{label}</label>
                    <input
                      type={type}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      placeholder={placeholder}
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${errors[id] ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-[#1B2A4A] mb-1">Message (optional)</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your goals..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A84C] text-white font-bold py-3 rounded-lg hover:bg-[#E8C96A] hover:text-[#1B2A4A] transition-all disabled:opacity-60"
                >
                  {loading ? "Submitting..." : OFFER.cta}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
