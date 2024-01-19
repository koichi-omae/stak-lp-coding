import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
        bebas: ['Bebas Neue'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
