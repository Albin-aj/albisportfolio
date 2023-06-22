/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

    extend: {
      colors: {
        'whitee': '#ffffff',
        white: '#fff',
        graydark: '#343a40',
        primary: '#007bff',
        secondary: '#6c757d',
        light: '#f8f9fa',
      },
    },
  },
  plugins: [],
}

