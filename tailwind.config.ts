import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        main: '#010536',
        header: '#47bec7',
        para: '#848d96',
        highlight: '#CA486d',
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}
export default config
