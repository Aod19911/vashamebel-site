/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

   safelist: [
    'bg-primary',
    'bg-secondary',
    'bg-primary-dark',
    'hover:bg-primary-dark',
    'text-primary',
    // Вы можете добавить сюда любые другие классы, которые пропадают
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a202c',
        primary: '#2dd4bf',
        'primary-dark': '#14b8a6',
        secondary: '#2d3748',
        text: '#edf2f7',
        'text-dark': '#a0aec0',
      },
    },
  },
  plugins: [],
};