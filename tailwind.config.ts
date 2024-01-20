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
        sans: ['Noto Sans'],
        'sans-jp': ['var(--font-noto-sans-jp)'],
        bebas: ['Bebas Neue'],
        condensed: ['DIN Condensed'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-bg.png')",
        'card-menu-pattern1': "url('/img/menu-card-1.png')",
        'card-menu-pattern2': "url('/img/menu-card-2.png')",
        'pickup-pattern': "url('/img/bg-pick-up.png')",
      },
    },
  },
  plugins: [],
};
export default config;
