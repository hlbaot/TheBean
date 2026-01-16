import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#faf8f6',
          100: '#f5f1eb',
          200: '#e8ded0',
          300: '#d4c4b0',
          400: '#b89d83',
          500: '#9d7a5f',
          600: '#7d614a',
          700: '#5c4a38',
          800: '#3d3126',
          900: '#1f1814',
        },
        cream: {
          50: '#fefcfb',
          100: '#fdf9f5',
          200: '#faf3ea',
          300: '#f5ead9',
          400: '#eed9c1',
          500: '#e5c5a3',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
