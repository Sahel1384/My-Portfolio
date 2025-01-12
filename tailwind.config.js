/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple1: "#5454D4",
        body: "#1A1A1E",
        card: "#303443",
        iconBG: "#3B3B3F",
        react: "#61DAFB",
        tailwind: "#38BDF8",
        linkedin: "#0A66C2",
        instagram: "#DD2A7B",
        footer: "#1C1B1D",
      },
    },
  },
  plugins: [],
};
