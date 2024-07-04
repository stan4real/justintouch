/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'mini-laptop' : {'max':'1366px'},
      'tablet': {'max':'769px'},
      'mobileL':{'max': '520px'},
      'iphone13mini' : {'max':'376px'}
    },
    extend: {},
  },
  plugins: [],
}

