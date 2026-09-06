import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1B2A4A",
        "navy-dark": "#0F1A2E",
        "navy-light": "#EEF2FF",
        gold: "#C9A84C",
        "gold-light": "#FBF5E6",
        muted: "#6B7280",
        light: "#F8F9FA",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config
