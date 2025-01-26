import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: {
            DEFAULT: "var(--theme-primary)",
            50: "var(--theme-primary-50)",
            70: "var(--theme-primary-70)",
          },
          secondary: {
            DEFAULT: "var(--theme-secondary)",
          },
          light: {
            DEFAULT: "var(--theme-light)",
          },
          accent: {
            DEFAULT: "var(--theme-accent)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        dropdown: "dropdown 0.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)" },
        },
        dropdown: {
          "0%": { transform: "scale(0.95) translateY(-10px)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [forms],
};
