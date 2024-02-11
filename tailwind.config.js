/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      navBackground: "#221f20",
      yellowGold: "#ffcc01",
      darkGray: "#333",
      lightGray: "#4c4c4c",
      darkBg: "#030000",
      snow: "#fff",
      black: "#000",
      bannerColor: "#666",
      dateColor: "#999",
      dimSnow: "#f7f7f7",
      aboutGold: "#fec325",
      blue: "#0071bb",
      gray: "#ccc",
      borderGray: "#8a8a8a",
    },
    extend: {
      "banner-bg": "url('/banner-bg.jpg')",
    },
  },
  plugins: [],
};
