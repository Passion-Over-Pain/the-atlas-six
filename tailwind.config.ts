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
      },
    },
  },
  plugins: [],
};
export default config;
