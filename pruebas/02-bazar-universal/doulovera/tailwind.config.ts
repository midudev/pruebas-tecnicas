import type { Config } from 'tailwindcss'
import tailwindColors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        title: ['var(--font-title)'],
      },
      colors: {
        ...tailwindColors,
        brand: {
          DEFAULT: '#c3d8e3',
          light: '#ebf3f7',
          dark: '#5668cd',
          darker: '#45508b',
        },
      },
    },
  },
  plugins: [],
}
export default config
