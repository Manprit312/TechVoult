/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // App Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
    "./pages/**/*.{js,ts,jsx,tsx}",    // (Optional if using Pages Router)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
