import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#030712",
        surface: "#07111f",
        line: "rgba(148, 163, 184, 0.18)",
        cyan: "#43e7ff",
        azure: "#5b8cff",
        mint: "#6effc6",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(110,255,198,0.18), 0 24px 80px rgba(67,231,255,0.12)",
        neon: "0 0 60px rgba(67,231,255,0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        pulsegrid: "pulsegrid 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulsegrid: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
