/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*.{html,js}"],
  theme: {
    extend: {
    height: {
      lil: '2px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      bar: '500px',
      nar: '250px',
      far:'1440px'
     },
     dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
    },
    
  },
  plugins: [],
}

