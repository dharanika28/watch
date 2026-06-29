/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C453',
          dark: '#B08E22',
        },
        dark: {
          DEFAULT: '#000000',
          card: '#111111',
          bg: '#080808',
          gray: '#222222',
        },
        light: {
          DEFAULT: '#FFFFFF',
          card: '#F5F5F5',
          gray: '#E0E0E0',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
        'gold-gradient': 'linear-gradient(135deg, #B08E22 0%, #D4AF37 50%, #F5D77F 100%)',
        'dark-glass': 'linear-gradient(rgba(17, 17, 17, 0.7), rgba(0, 0, 0, 0.8))',
      },
      boxShadow: {
        'gold-soft': '0 4px 20px -2px rgba(212, 175, 55, 0.15)',
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.3)',
        'luxury': '0 20px 40px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}

