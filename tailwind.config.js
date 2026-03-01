/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/*.liquid",
    "./templates/*.json",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111111',       // High contrast black (Uniqlo)
          light: '#F4F4F5',      // Minimalist grey-white (Futuristic)
          primary: '#E63946',    // Bold Red (Lindo Hogar / Normal)
          secondary: '#FFB703',  // Colombian Warm Yellow (Cozy)
          accent: '#06D6A0'      // Vibrant Cyan/Green (Agile/Normal)
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
