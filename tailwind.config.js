/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'home': "url('/images/Home/BGHOME.png')",
      'service': "url('/images/Service/gb_02_short.png')",
      'portfolio': "url('/images/Portfolio/gb_03.png')",
      'about': "url('/images/About/gb_02_short.png')",
      'contact': "url('/images/Contact/Contact_BG.png')",
      'partner': "url('/images/Partner/gb_04.png')",
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Georgia', 'Cambria', 'serif'],
      'mono': ['Menlo', 'Monaco', 'monospace'],
      'custom-font': ['Custom Font', 'sans-serif'],
    },
  },
  plugins: [],
}