import Link from "next/link"
import { BLOG_POSTS } from "@/lib/data"
export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">INSIGHTS</p>
            <h2 className="font-cormorant text-3xl font-bold text-[#1B2A4A]">Study Abroad Guides</h2>
          </div>
          <Link href="/blog" className="hidden md:block text-xs tracking-widest text-[#C9A84C] border border-[#C9A84C]/30 px-4 py-2">VIEW ALL</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {BLOG_POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group glass-card rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-all">
              <span className="text-xs px-2 py-1 rounded self-start" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{p.tag}</span>
              <h3 className="font-cormorant text-xl font-bold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors leading-snug">{p.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>
              <span className="text-[#C9A84C] text-xs tracking-widest mt-auto">READ MORE →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
