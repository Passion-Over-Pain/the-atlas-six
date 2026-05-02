import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0d0b09",
        charcoal: "#111010",
        surface: "#201d19",

        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c87a",
          dim: "#8a6e32",
        },
        parchment: {
          DEFAULT: "#f0e6cc",
          dim: "#c4b48a",
        },
        bronze: "#7a5c2e",
        amber: "#b8872a",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-cormorant)", "serif"],
        ui: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #0a0806 0%, #100e0b 40%, #0d0b09 100%)",
        "blue-gold-gradient":
          "radial-gradient(ellipse 60% 80% at 30% 50%, rgba(180, 120, 40, 0.05) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 80% 60%, rgba(100, 60, 20, 0.04) 0%, transparent 50%), linear-gradient(180deg, #0b0c10, rgba(26, 20, 12, 0.95), #0b0c10)",
      },
    },
  },
  plugins: [],
};
export default config;
