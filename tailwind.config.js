/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#153e6a",
        "secondary": "#3b9dd4",
      }
    },
  },
  plugins: [],
}

