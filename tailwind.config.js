/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-body": "url('../images/background-img.png')",
      },

      fontFamily: {
        title: ["Poppins", "sans-serif"],
      },
      colors: {
        "box-premiere-couleur": " rgba(121,117,131,0.4654236694677871)",
        "box-deuxieme-couleur": "rgba(54,53,103,0.32816876750700286)",
        "box-colors": "rgb(121,117,131)",
        "box-gradient":
          "linear-gradient(71deg, rgba(121,117,131,0.4654236694677871) 0%, rgba(54,53,103,0.32816876750700286) 100%)",
          "color-button": "rgba(21,21,21)"
      },
    },
  },
  plugins: [],
};
