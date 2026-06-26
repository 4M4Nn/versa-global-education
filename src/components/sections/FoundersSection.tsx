import { FOUNDERS } from "@/lib/data"
export default function FoundersSection() {
  return (
    <section className="py-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">LEADERSHIP</p>
          <h2 className="font-cormorant text-4xl font-bold text-[#1B2A4A]">Our Founders</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FOUNDERS.map(f => (
            <div key={f.name} className="glass-card rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4" style={{ background:`linear-gradient(135deg,${f.color},${f.color}88)` }}>{f.monogram}</div>
              <h3 className="font-cormorant text-2xl font-bold text-[#1B2A4A] mb-1">{f.name}</h3>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color:f.color }}>{f.role}</p>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{f.bio}</p>
              <blockquote className="border-l-2 border-[#C9A84C] pl-3 italic text-sm text-[#C9A84C]">&ldquo;{f.quote}&rdquo;</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
