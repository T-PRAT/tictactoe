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
      'pink': '#F2458D',
      'green': '#D2E038',
      'black': '#000000',
    },
    extend: {
      fontFamily: {
        'default': ['Lilita One', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        appear: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        animation: {
          'pop': 'pop 1s ease-in-out',
          'appear': 'appear 3s',
        },
      },
    },
    plugins: [],
  }
}
