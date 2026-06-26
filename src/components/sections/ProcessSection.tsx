import { PROCESS_STEPS } from "@/lib/data"
export default function ProcessSection() {
  return (
    <section className="py-20 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">HOW WE WORK</p>
          <h2 className="font-cormorant text-4xl font-bold text-white">9-Step Journey from Kerala to Your University</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-xl border border-[#C9A84C]/15 hover:border-[#C9A84C]/35 transition-all" style={{ background:"rgba(255,255,255,0.04)" }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-cormorant font-bold text-lg" style={{ background:"rgba(201,168,76,0.2)", color:"#C9A84C" }}>{step.num}</div>
              <div>
                <h3 className="font-cormorant text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-[#A8B89A] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
