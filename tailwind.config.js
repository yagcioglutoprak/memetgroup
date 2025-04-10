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
        primary: {
          DEFAULT: "rgb(213, 17, 42)",
          hover: "rgb(193, 15, 38)",
        },
        secondary: {
          DEFAULT: "rgb(255, 255, 255)",
        },
        dark: {
          DEFAULT: "rgb(32, 12, 0)",
          light: "rgb(62, 42, 30)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 