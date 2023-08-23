/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baseWhite: "#f5f5f5",
        base: "#f8f4e8",
        main: "#eac987",
        accent: "#aa5426",
        food: "#B0E57C",
        dailyNecessities: "#FFD5B8",
        traffic: "#A7DFFC",
        companionship: "#FFD1E3",
        clothes: "#E8E3FA",
        beauty: "#FFFACD",
        medical: "#FFC6A0",
        special: "#FCE197",
        hobby: "#BFFAB9",
        miscellaneous: "#A0917F",
        residence: "#C0C0C0",
        lifeLine: "#C9EAB7",
        communication: "#B0E2FF",
        insurance: "#D1D1D1",
        car: "#FF9999",
        education: "#FFD8E6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        top: "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      zIndex: {
        nav: "7777",
        blackOut: "8888",
        modal: "9999",
      },
      animation: {
        "slide-top":
          "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-bottom":
          "slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        "slide-bottom": {
          "0%": {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
