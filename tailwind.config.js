module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(-50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'spin-grow': {
          '0%': {
            transform: 'scale(0.85) rotate(90deg)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1) rotate(0)',
            opacity: 1,
          },
        },
      },

      animation: {
        'slide-up': 'slide-up .7s backwards var(--back-bezier)',
        'slide-right': 'slide-right .7s backwards var(--back-bezier)',
        'slide-left': 'slide-left .7s backwards var(--back-bezier)',
        'spin-grow': 'spin-grow .7s backwards var(--back-bezier)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
