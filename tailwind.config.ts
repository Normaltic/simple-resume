import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      keyframes: {
        rise: {
          "0%": {
            transform: "rotate(180deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        set: {
          "0%": {
            transform: "rotate(0)"
          },
          "100%": {
            transform: "rotate(180deg)"
          }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
