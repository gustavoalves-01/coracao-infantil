import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brownPrimary: '#553733',
        redPrimary: '#f1352e',
        greenPrimary: '#c1ff72',
      },
    },
  },
  plugins: [],
};
export default config;
