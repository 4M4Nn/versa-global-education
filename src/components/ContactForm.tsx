"use client"
import { useState } from "react"
import { submitLead } from "@/lib/supabase"
import { SOURCE } from "@/lib/data"

const DESTINATIONS = ["UK","Canada","Australia","Germany","USA","Ireland","New Zealand","Dubai","Other"]

type FormState = { name: string; email: string; phone: string; destination: string; message: string }
type Errors = Partial<FormState>

function validate(f: FormState): Errors {
  const e: Errors = {}
  if (!f.name.trim()) e.name = "Name is required"
  if (!f.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required"
  if (!f.phone.match(/^\d{10}$/)) e.phone = "10-digit mobile number required"
  if (!f.destination) e.destination = "Select a destination"
  return e
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name:"", email:"", phone:"", destination:"", message:"" })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle")

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus("loading")
    try {
      await submitLead({ name: form.name, email: form.email, phone: form.phone, message: `Destination: ${form.destination}. ${form.message}`, source: SOURCE })
      setStatus("success")
    } catch { setStatus("error") }
  }

  if (status === "success") return (
    <div className="glass-card rounded-2xl p-10 text-center">
      <p className="text-5xl mb-4">✈️</p>
      <h2 className="font-cormorant text-3xl font-bold text-[#1B2A4A] mb-2">Consultation Booked!</h2>
      <p className="text-[#6B7280]">Our counselor will contact you within 24 hours to schedule your free consultation.</p>
    </div>
  )

  const inp = "w-full bg-white border border-[#1B2A4A]/15 px-4 py-3 text-[#1B2A4A] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <input placeholder="Full Name *" value={form.name} onChange={set("name")} className={inp} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input placeholder="Email Address *" value={form.email} onChange={set("email")} className={inp} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <input placeholder="Mobile Number *" value={form.phone} onChange={set("phone")} className={inp} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <select value={form.destination} onChange={set("destination")} className={`${inp} text-[#6B7280]`}>
            <option value="">Select Destination *</option>
            {DESTINATIONS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
        </div>
      </div>
      <textarea placeholder="Tell us about your academic background and goals..." value={form.message} onChange={set("message")} rows={4} className={inp} />
      <button type="submit" disabled={status === "loading"}
        className="w-full py-4 bg-[#C9A84C] text-white font-bold text-sm tracking-widest hover:bg-[#E8C96A] transition-colors disabled:opacity-60">
        {status === "loading" ? "BOOKING..." : "BOOK FREE CONSULTATION"}
      </button>
      {status === "error" && <p className="text-red-500 text-xs text-center">Something went wrong. Please try again or WhatsApp us directly.</p>}
    </form>
  )
}
