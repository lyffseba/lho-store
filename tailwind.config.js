/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a1a1a',
          light: '#f5f5f5',
          accent: '#e63946'
        }
      }
    },
  },
  plugins: [],
}
