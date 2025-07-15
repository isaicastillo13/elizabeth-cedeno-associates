/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
  extend: {
    colors: {
      primario: '#4B001E',
      secundario: '#686C6D',
    },
    keyframes: {
      'slide-left': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-66.666%)' }, // mueve solo un tercio del loop
      },
    },
    animation: {
      'slide-left': 'slide-left 25s linear infinite', // ajusta tiempo según cantidad
    },
  },
},

  plugins: [],
}