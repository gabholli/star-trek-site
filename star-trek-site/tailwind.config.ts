import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        lato: ["Lato", "sans-serif"]
      },
      flex: {
        "30": "0 1 30%"
      },
      backgroundImage: {
        "stars": "url('/milky way.jpg')",
        "stars2": "url('/galaxy.webp')",
        "stars3": "url('/stars3.png')"
      },
    },
  },
  plugins: [],
} satisfies Config;
