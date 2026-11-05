import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: { colors: { navy: "#0A1030", electric: "#2F6BFF", violet: "#7C3AED" } } },
  plugins: [],
};
export default config;
