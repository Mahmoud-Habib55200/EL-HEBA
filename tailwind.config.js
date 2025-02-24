/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
   screens: {
    xs: "320px",
    sm: "375px",
    sml: "500px",
    md: "667px",
    mdl: "768px",
    lg: "660px",
    lgl: "1024px",
    xl: "1280px",
  },
    extend: {
     colors: {
        main_Color: "#165A33",
    
      },
   
    },
  },
  plugins: [],
}