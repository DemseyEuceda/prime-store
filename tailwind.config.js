/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#112460",
        "purple-1": "#32336A",
        "purple-2": "#2D2C53",
        "aqua-1": "#35848D",
        "aqua-2": "#28A7A5",
        "magenta-1": "#6F1E50",
        "pink-1": "#D74764",
        "pink-2": "#EF8B9F",
        "gray-1": "#ECF0F1",
        "red": "#FF4D4D",
        "yellow": "#FFFA65",
        "green": "#3AE374",
        "white": "#FFFFFF",
        "orange": "#FF9F1A",
      },
    },
  },
  plugins: [],
}

