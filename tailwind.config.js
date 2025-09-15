/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "PT Sans", "ui-sans-serif", "system-ui"],
        heading: ["Savate", "Handjet", "Nerko One", "sans-serif"],
        mono: ["Roboto Mono", "Intel One Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
