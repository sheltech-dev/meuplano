/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./privacy-policy.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-blue': '#455E91',
      }
    },
  },
  plugins: [],
}

