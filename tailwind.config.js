/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          ...defaultTheme.colors.neutral,
          1000: "#2D2B32",
          1200: "#0A090B"
        }
      }
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}
