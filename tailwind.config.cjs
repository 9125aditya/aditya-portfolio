module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // 🌌 Cosmic Cyber-Space Theme Colors
      colors: {
        primary: "#0ea5a4", // teal accent (kept)
        accent: "#7c3aed", // purple accent (kept)
        cosmicBg: "#050510", // dark galaxy background
        cosmicBlue: "#00FFFF", // neon cyan glow
        cosmicPurple: "#7C3AED", // neon purple glow
        cosmicMagenta: "#FF00FF", // magenta highlight
        cosmicGray: "#1E1E2E", // dark gray base
      },

      // 💫 Glowing Shadow
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.6)",
      },

      // 🎞️ Floating Animation (from your old config)
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "40px 40px, 40px 40px" },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        gridMove: "gridMove 20s linear infinite",
      },
    },
  },
  plugins: [],
};
