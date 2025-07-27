/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ЯВНО УКАЗЫВАЕМ КЛАССЫ, КОТОРЫЕ НЕЛЬЗЯ УДАЛЯТЬ
  safelist: [
    'bg-primary',
    'bg-secondary',
    'bg-primary-dark',
    'hover:bg-primary-dark',
    'text-primary',
    'text-text',
    'text-text-dark',
    'bg-background',
    // Добавьте сюда любые другие классы, которые могут пропадать
    // Например, для прозрачного хэдера:
    'bg-white/20',
    'hover:bg-white/30',
    'backdrop-blur-sm',
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