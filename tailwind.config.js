/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        body: ['"Satoshi"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        midnight: {
          50: "#f0f4ff",
          100: "#e0e8ff",
          200: "#c7d4fe",
          300: "#a4b8fc",
          400: "#8093f8",
          500: "#6370f2",
          600: "#4f4ce6",
          700: "#433ecb",
          800: "#3835a4",
          900: "#323382",
          950: "#0a0a1f",
        },
        accent: {
          cyan: "#22d3ee",
          violet: "#a78bfa",
          rose: "#fb7185",
          amber: "#fbbf24",
          emerald: "#34d399",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "gradient-x": "gradient-x 15s ease infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(167, 139, 250, 0.4)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(99, 112, 242, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 112, 242, 0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
