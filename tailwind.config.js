module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite steps(1)',
        move: 'move 4s ease-in-out infinite',
      },
      colors: {
        primaryColorOne: '#111',
        primaryColorTwo: '#C24725',
        linkHover: '#9D3215',
        text: '#3e3a3a',
        grey: '#737373',
      },
      boxShadow: {
        custom: '2px 2px 12px #d9d9d9;',
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
      },
    },
  },
  plugins: [],
}
