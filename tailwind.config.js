/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        Hero: "url('assets/1.jpg')",
        Kids: "url('assets/2.jpg')",
        Ladies: "url('assets/3.jpg')",
        Men: "url('assets/4.jpg')"
      },
      screens: {
        sm: '640px',
        md: '960px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
