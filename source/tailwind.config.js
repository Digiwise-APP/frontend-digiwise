/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rowdies: ['Rowdies'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [require('daisyui')],
};
