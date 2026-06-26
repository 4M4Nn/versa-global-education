import { SCHEMES, WA_URL } from "@/lib/data"
export default function SchemesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">OFFERS</p>
          <h2 className="font-cormorant text-4xl font-bold text-[#1B2A4A]">Consultation Packages</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {SCHEMES.map(s => (
            <div key={s.title} className="glass-card rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-all">
              <span className="text-xs tracking-widest px-3 py-1 rounded-full self-start" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{s.tag}</span>
              <h3 className="font-cormorant text-2xl font-bold text-[#1B2A4A]">{s.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{s.desc}</p>
              <a href={`${WA_URL}?text=${encodeURIComponent(s.cta)}`} target="_blank" rel="noopener noreferrer"
                className="block text-center py-3 bg-[#C9A84C] text-white text-sm font-bold tracking-widest hover:bg-[#E8C96A] transition-colors">{s.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
