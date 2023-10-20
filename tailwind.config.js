/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#918E9B",
        "gray-500": "#5E0000",
        "primary-100": "#00D8FF",
        "primary-300": "#FFFFFF",
        "secondary-400": "#282D35",
        "secondary-500": "#F55A5A",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
