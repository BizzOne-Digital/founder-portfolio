import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        void: "#07070a",
        ink: "#0a0a0d",
        "ink-90": "#111114",
        paper: "#f5f1e8",
        "paper-70": "rgba(245,241,232,0.7)",
        "paper-50": "rgba(245,241,232,0.5)",
        "paper-30": "rgba(245,241,232,0.3)",
        "paper-15": "rgba(245,241,232,0.15)",
        "paper-10": "rgba(245,241,232,0.1)",
        "paper-06": "rgba(245,241,232,0.06)",
        gold: "#e0a856",
        "gold-soft": "#c99a5e",
        "gold-10": "rgba(224,168,86,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
