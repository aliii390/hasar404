/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-body': "url('../images/background-img.png')",
      },

      fontFamily:{
        title:["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

