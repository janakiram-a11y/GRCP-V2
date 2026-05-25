/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:       '#a41425',   // primary – navbar, headings, buttons
          'red-2':   '#d31329',   // secondary red – dividers, hover
          'red-dark':'#8c0f1e',   // deep hover state
          green:     '#00883e',   // ticker bar
          navy:      '#002a6f',   // secondary links bar
          footer:    '#222222',   // footer bg
          body:      '#f2f4f8',   // page background
          topbar:    '#f8f9fa',   // very top bar bg
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        logoScroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker:      'ticker 30s linear infinite',
        logoScroll:  'logoScroll 28s linear infinite',
      },
    },
  },
  plugins: [],
}
