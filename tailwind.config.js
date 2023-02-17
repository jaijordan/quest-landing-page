/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura': ['"Futura"', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'custom-black': '#444444',
        'custom-blue': '#5080DE',
      },
      letterSpacing: {
        customSpace: '0.2em'
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
    },    
    },
  },
  plugins: [],
}
