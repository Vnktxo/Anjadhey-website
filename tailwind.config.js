/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New "Earthy & Hopeful" palette, inspired by your logo
        "primary-dark": "#1E4620", // Deep Forrest Green (for text and headlines)
        "primary-light": "#2A633B", // Lighter Leaf Green (for accents)
        "accent-warm": "#D4A017", // Sunbeam Gold (for CTAs and highlights)
        "accent-light": "#F5F5DC", // Warm Sand (for background panels)
        background: "#FFFEFC", // Clean Off-White (for main backgrounds)
        foreground: "#1E4620", // Using primary-dark for text to ensure consistency
      },
      boxShadow: {
        custom:
          "0 10px 25px -5px rgba(30, 70, 32, 0.08), 0 8px 10px -6px rgba(30, 70, 32, 0.08)",
        "custom-hover":
          "0 20px 30px -10px rgba(30, 70, 32, 0.25), 0 10px 15px -8px rgba(30, 70, 32, 0.2)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #1E4620, #2A633B)",
      },

      /* Gradient animation for animated gradient text/backgrounds */
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        bounce: "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
