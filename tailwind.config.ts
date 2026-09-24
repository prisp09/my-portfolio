import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#07080C",
          900: "#0C0E14",
          850: "#10131A",
          800: "#151922",
          700: "#1E2330",
        },
        fg: {
          DEFAULT: "#ECEDF1",
          muted: "#A0A5B2",
          dim: "#6B7180",
        },
        accent: {
          DEFAULT: "#FF9F4A",
          soft: "#FFC38A",
          deep: "#F46737",
        },
        cool: {
          DEFAULT: "#7C95FF",
          soft: "#AAB9FF",
        },
      },
      maxWidth: {
        shell: "72rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        dash: {
          to: { strokeDashoffset: "-24" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        marquee: "marquee 40s linear infinite",
        "pulse-dot": "pulseDot 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
        dash: "dash 1.2s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
