/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#A9A9A9",
          base: "#D3D3D3",
          light: "#F5F5F5",
        },
        secondary: {
          dark: "#AEDFF7",
          base: "#007ACC",
          light: "#005B99",
        },
        accent: {
          dark: "#5B6143",
          base: "#8A9A5B",
          light: "#C3D9B0",
        },
        "bg-color": "#E0E0E0",
      },
    },
  },
  plugins: [],
};
