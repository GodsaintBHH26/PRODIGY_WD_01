/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}", "main.js"
  ],
  theme: {
    extend: {
      width:{
        'laptop':'1440px',
      }, 
      dropShadow:{
        'basic':'0 0 3px black',
        'glow':'0 0 1px white'
      }
    },
  },
  plugins: [],
}

