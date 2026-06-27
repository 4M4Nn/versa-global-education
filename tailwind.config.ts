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
    },
  },
  plugins: [],
} satisfies Config
