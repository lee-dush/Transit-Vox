// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        tv: {
          navy: '#0B1B3F',
          indigo: '#1E3A8A',
          teal: '#14B8A6',
          aqua: '#2DD4BF',
          slate: '#475569',
        },
      },
    },
  },
  plugins: [],
};
