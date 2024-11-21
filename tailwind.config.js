module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure it scans all your JSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: '#3b82f6',  // Primary color, can be changed
      },
    },
  },
  plugins: [],
}
