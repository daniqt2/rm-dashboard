/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      "rm-primary": "#5E6AD2",
      "rm-secondary": "#222326",
      "secondary-light": "#414246",
      "rm-tertiary": "#F4F5F8",
      "rm-background": "#E9E9EC",
    },
  },
  plugins: [],
};
