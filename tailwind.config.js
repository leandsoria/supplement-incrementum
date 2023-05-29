/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#5E6AD2',
        'primary-gray': '#F4F5F8',
        'primary-dark-gray': '#222326',
        'primary-background': 'rgb(79, 82, 180)',
      },
    },
  },
  plugins: [],
};
