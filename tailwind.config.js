/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      colors: {
        pizza: '#123456',
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};

// we put colors in the extend so we can keep all the colors from tailwind and extend the pizza color so we can use it in our project but in the case of fontFamily we replace the the fontFamily properties with sans 'Roboto Mono, monospace'.

// theme; overites everything in that category
// extend: keep the original things of tailwind and add a new one
