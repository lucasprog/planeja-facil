/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend:{
      backgroundImage: {
        'icon-caret-right': "url('/img/icon-caret-right.svg')"
      },
      colors:{
          'plf-blue-dark':'#2051B0',
          'plf-blue-light':'#3979F4'
      }
    }
  },
  plugins: [],
}

