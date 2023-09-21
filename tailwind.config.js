/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          'dark-gray': '#363535',
          'light-gray': '#F9F9F9',
          100: '#F7F7FB',
          500: '#8A8A89',
          'rgba-18-20-23-50': 'rgba(18, 20, 23, 0.50)',
          'rgba-138-138-137-20': 'rgba(138, 138, 137, 0.20)',
        },
        black: '#121417',
        white: '#FFF',
        blue: {
          500: '#3470FF',
        },
        indigo: {
          500: '#0B44CD',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        text: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '18px'],
        sl: ['14px', '18px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        ls: ['18px', '20px'],
        l: ['18px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      spacing: {
        // Визначте відступи (margins та paddings) для вашого проекту
        // 1: '8px',
        // 2: '16px',
        // 3: '24px',
        // Додайте інші значення відступів за потребою
      },
      // Додайте інші налаштування теми за потребою
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
