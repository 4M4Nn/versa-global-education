import type { Metadata } from "next"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Study Abroad Blog | Versa Global",
  description: "Expert guides on studying abroad from Kerala — visa processes, scholarship tips, destination guides, and more from Versa Global counselors.",
}

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20 bg-[#F8F6F0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">KNOWLEDGE CENTRE</p>
          <h1 className="font-cormorant text-5xl font-bold text-[#1B2A4A] mb-4">Study Abroad Guides</h1>
          <p className="text-[#6B7280]">Expert insights on visas, scholarships, and life abroad from our counselors.</p>
        </div>
        <div className="space-y-5">
          {BLOG_POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="block glass-card rounded-xl p-6 hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <span className="text-xs px-2 py-1 rounded flex-shrink-0" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{p.tag}</span>
                <div>
                  <h2 className="font-cormorant text-2xl font-bold text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors mb-2">{p.title}</h2>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-2">{p.excerpt}</p>
                  <p className="text-[#6B7280] text-xs">{p.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
