/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#FFF3E8", 
          75: "#FFCC9F", 
          100: "#FEB777",
          200: "#FE983D",
          300: "#FE8315",
          400: "#B25C0F",
          500: "#9B500D",
        },
        secondary: {
          50: "#FFFBE6", 
          75: "#FFEF96", 
          100: "#FEE86B",
          200: "#FEDE2B",
          300: "#FED700",
          400: "#B29700",
          500: "#9B8300",
        },
        black: {
          50: "#E9E9E9", 
          75: "#A6A6A6", 
          100: "#818282",
          200: "#4B4C4C",
          300: "#262727",
          400: "#1B1B1B",
          500: "#171818",
        },
        white: {
          50: "#FFFFFF", 
          75: "#FFFFFF", 
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#B3B3B3",
          500: "#9C9C9C",
        },
        success: {
          50: "#E7F5ED", 
          75: "#9BD6B6", 
          100: "#71C598",
          200: "#34AC6B",
          300: "#0B9B4D",
          400: "#086D36",
          500: "#075F2F",
        },
        error: {
          50: "#F7E6E7", 
          75: "#E0969B", 
          100: "#D36B71",
          200: "#C02B34",
          300: "#B3000B",
          400: "#7D0008",
          500: "#6D0007",
        },
      },
    },
  },
  darkMode: "class",

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
          // ... rest of the colors
        },
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};