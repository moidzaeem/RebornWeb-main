/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
      colors: {
        green: "var(--green-color)",
        secondary: "var(--secondary-color)",
        white: "var(--white-color)",
        dark: "var(--dark)",
        "earthy-brown": "var(--earthy-brown)",
        "sky-blue": "var(--sky-blue)",
        "sunshine-yellow": "var(--sunshine-yellow)",
        "soft-gray": "var(--soft-gray)",
        "black-text": "var(--black-text)",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        12.5: "3.125rem",
        13: "3.25rem",
        18: "4.5rem",
        25: "6.25rem",
        45: "11.25rem",
        63: "15.75rem",
        91: "22.75rem",
        122: "30.5rem",
      },
      gridTemplateColumns: {
        "3f": "repeat(3, 1fr)",
        "2f": "repeat(2,1fr)",
        "1f": "repeat(1,1fr)",
      },
      screens: {
        ssm: "310px",
        xsm: "462px",
        mdd: "862px",
        xlg: "1162px",
        xlb: "1280px",
        xll: "1362px",
        "2xl": "1536px",
      },
      backgroundImage: {
        apiIntegrationBg: "url('/Background-Calculator.png')",
        userDashboardBG: "url('/assets/images/62760231.webp')",
        treesPlantedBG: "url('/assets/images/Tree-Planted.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
