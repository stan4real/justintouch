/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'iphone13mini' : {'max':'375px'}
    },
    extend: {},
  },
  plugins: [],
}

