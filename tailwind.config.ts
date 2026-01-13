import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bumble: {
          yellow: '#FFC629',
          'yellow-light': '#FFF8E1',
          black: '#1A1A1A',
          gray: '#666666',
          'light-gray': '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      fontSize: {
        'display': ['clamp(4rem, 15vw, 12rem)', { lineHeight: '0.9', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};

export default config;
