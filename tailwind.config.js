const brandColors = {
  primary: '#EBE0DC',
  'primary-light': '#EEE6E4',
  secondary: '#5D5D5D',
  accent: '#FF7797',
};

module.exports = {
  theme: {
    extend: {
      colors: {
        ...brandColors,
      },
      borderRadius: {
        custom: '1rem',
      },
      boxShadow: {
        'md-reverse':
          '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
};
