import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        snow: '#fafafa',
        ink: '#000000',
        near: '#262626',
        stone: '#737373',
        silver: '#a3a3a3',
        line: '#e5e5e5'
      },
      borderRadius: {
        soft: '12px',
        pill: '9999px'
      }
    }
  },
  plugins: []
};

export default config;
