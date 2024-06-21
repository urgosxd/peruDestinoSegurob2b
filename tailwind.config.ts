import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");
import defaultTheme from 'tailwindcss/defaultTheme'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-Poppins)', ...defaultTheme.fontFamily.sans],
        monse: ['var(--font-Monserrat)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default withMT(config)
