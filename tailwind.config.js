/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        serif: ['EB Garamond', 'Georgia', 'serif'],
        display: ['EB Garamond', 'Georgia', 'serif'],
      },
      colors: {
        atlas: {
          primary: '#f7f3ed',
          dark: '#0d1926',
          secondary: '#ebe7e0',
          gold: '#d4af37',
        },
      },
    },
  },
  plugins: [],
}
