/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'body-text': '#252b37',
        'body-bg': '#fae4fc',
      },
    },
  },
  content: [
    // paths to your HTML files or components
    "./dist/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  // ... other configurations
}
