import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          90: '#1b6d6d',
          80: '#1f7f7f',
          60: '#29a4a4',
          50: '#2db6b6',
        },
        neutral: {
          60: '#2e2e2e',
          50: '#333333',
          40: '#474747',
          30: '#5c5c5c'
        },
        red: {
          main: '#f5442d'
        }
      },
    },
  },
  plugins: [],
};
export default config;
