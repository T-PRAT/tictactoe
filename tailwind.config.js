/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text': '#EAE9FC',
      'background': {
        'primary': '#0A072C',
        'secondary': '#100B45',
      },
      'black': '#000000',
    },
    extend: {
      fontFamily: {
        'default': ['Roboto', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },

  },
  plugins: [],
}

