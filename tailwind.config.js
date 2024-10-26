/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  // darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    // require('tailwind-scrollbar-hide'),
  ],
  corePlugins: {
    preflight: true,
  },
};
