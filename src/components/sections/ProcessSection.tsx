import { PROCESS_STEPS } from "@/lib/data"

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Your Journey Abroad — Step by Step</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-[calc(100%-8px)] w-full h-0.5 bg-gradient-to-r from-[#C9A84C]/40 to-transparent z-0" />
              )}
              <div className="relative z-10 text-center p-6 bg-[#F8F9FA] rounded-2xl border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-[#1B2A4A] text-[#C9A84C] font-playfair text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#1B2A4A] mb-2 text-sm">{step.title}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
