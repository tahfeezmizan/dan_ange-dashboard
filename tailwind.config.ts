import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9AB7F",
        secondary: "#373744",
      },
      container: {
        screens: {
          DEFAULT: "1440px",
        },
        center: true,
        padding: {
          DEFAULT: "5%",
          sm: "1rem",
        },
      },
      fontFamily: {
        museomoderno: ["MuseoModerno", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
} satisfies Config;
