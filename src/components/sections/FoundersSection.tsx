import { FOUNDERS } from "@/lib/data"

export default function FoundersSection() {
  return (
    <section id="about" className="py-14 md:py-20 px-5 bg-[#EEF2FF]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">About Us</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">The Team Behind Versa Global</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">Three Kerala professionals who turned their passion for global education into a mission.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-5"
                style={{ backgroundColor: f.color }}
              >
                {f.monogram}
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#1B2A4A] mb-1">{f.name}</h3>
              <p className="text-[#C9A84C] text-xs font-semibold mb-4">{f.role}</p>
              <p className="text-[#6B7280] text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

