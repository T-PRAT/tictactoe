/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'default': ['Lilita One', 'Roboto', 'sans-serif'],
    },
    colors: {
      'text': '#EAE9FC',
      'background': {
        'primary': '#0A072C',
        'secondary': '#100B45',
      },
      'black': '#000000',
    },
  },
  plugins: [],
}

