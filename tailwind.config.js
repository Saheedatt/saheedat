/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pinkish: "#f26a8d",
        rose: "#880d1e",
        snow: "#f8f5f5",
      },
      fontFamily: {
        'pt-serif': ['"PT Serif"', 'serif'],
    },
  },
  plugins: [],
}
}

