/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html",
    "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        favorite: '#FFF3E3', 
        secondary: '#B88E2F',
        third: '#a5812c',
        cardbg:'#F4F5F7',
        cardtt: '#898989',
        cardlt: '#B0B0B0', 
        cardh: '#3A3A3A',
        adbg: '#FCF8F3',
        bodybg: '#F5F5F5',    
      },    
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

