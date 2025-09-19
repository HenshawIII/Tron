/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Switzer', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        'manrope': ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}