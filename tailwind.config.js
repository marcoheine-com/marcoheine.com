module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './slices/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite steps(1)',
        move: 'move 4s ease-in-out infinite',
        wave: 'wave 0.7s linear 1',
      },
      colors: {
        primaryColorOne: '#111',
        primaryColorTwo: '#C24725',
        linkHover: '#9D3215',
        text: '#3e3a3a',
        grey: '#737373',
        yellowredgrey: '#faf6f5',
      },
      boxShadow: {
        custom: '2px 2px 12px #d9d9d9;',
        customHover: '6px 6px 12px #d9d9d9;',
        customDark: '10px 10px 12px #d9d9d9;',
        header: '-2px 2px 5px #ccc',
      },
      gridTemplateColumns: {
        'auto-grid-200-1fr': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      keyframes: {
        blink: {
          '50%': {
            opacity: '0',
          },
        },
        move: {
          '0%': {
            transform: 'translateY(4px)',
          },
          '50%': {
            transform: 'translateY(-1px)',
            transform: 'scale(1.3)',
          },
          '100%': {
            transform: 'translateY(4px)',
          },
        },
        wave: {
          '0%': {
            transform: 'rotate(-20deg)',
          },
          '25%': {
            transform: 'rotate(60deg) scale(2)',
          },
          '50%': {
            transform: 'rotate(-20deg) scale(2)',
          },
          '75%': {
            transform: 'rotate(60deg) scale(2)',
          },
          '100%': {
            transform: 'rotate(-20deg) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
