import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#171621", plum: "#5A2473", peach: "#FF7A66", lime: "#C6EF5A", cream: "#FFF9F3" },
      boxShadow: { float: "0 18px 60px rgba(35, 20, 48, .13)" },
      fontFamily: { sans: ["Inter", "Avenir Next", "Avenir", "Helvetica Neue", "Arial", "sans-serif"], display: ["Arial Rounded MT Bold", "Avenir Next", "Avenir", "Helvetica Neue", "Arial", "sans-serif"] },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } }, spinSlow: { to: { transform: "rotate(360deg)" } } },
      animation: { float: "float 5s ease-in-out infinite", "spin-slow": "spinSlow 20s linear infinite" },
    },
  },
  plugins: [],
};

export default config;
