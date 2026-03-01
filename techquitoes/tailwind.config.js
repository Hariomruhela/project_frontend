/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#8B5CF6",
        darkBg: "#05040D",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(60% 60% at 50% 40%, rgba(139,92,246,0.25), rgba(5,4,13,0.95) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.25)",
      },
    },
  },
  plugins: [],
}

