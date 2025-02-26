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
        billowy: "#F7F0E8",
        winthrop: "#FDE5D7",
        gray50: "#E9E9E9",
        gray100: "#BABABA",
        gray200: "#999999",
        gray300: "#6B6B6B",
        gray400: "#4E4E4E",
        gray500: "#222222",
        gray600: "#1F1F1F",
        gray700: "#181818",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1920px",
          xl: "1440px",
          lg: "1024px",
          md: "100%",
          sm: "100%",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "7rem",
          "2xl": "7.5rem",
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
