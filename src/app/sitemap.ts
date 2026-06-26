import { MetadataRoute } from "next"
import { DESTINATIONS, BLOG_POSTS } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://versaglobal.in"
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/destinations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/courses`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/process`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/schemes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...DESTINATIONS.map(d => ({ url: `${base}/destinations/${d.id}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...BLOG_POSTS.map(p => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
  ]
}
