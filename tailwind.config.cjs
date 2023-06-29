const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", 
  "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        title: ["Fraunces", ...defaultTheme.fontFamily.serif],
        playfair: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out ",
      }
    },
  },
  plugins: [],
});
