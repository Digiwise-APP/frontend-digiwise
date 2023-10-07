/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rowdies: ["Rowdies"],
        inter: ["Inter"],
      },
      colors: {
        bgSidebar: "#232686",
        bgSidebarButton: "#4B4D88",
        fgSidebarButton: "#8D8EBA",
        "bgFocus-SidebarButton": "#FFFFFF",
        "fgFocus-SidebarButton": "#232686",
      },
    },
  },
  plugins: [require("daisyui")],
};
