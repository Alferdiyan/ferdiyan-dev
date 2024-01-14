/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        // colors: {
        //     color: {
        //         primary: "#eeeeee",
        //         secondary: "#393e46",
        //         tertiary:"#6243e3
        //         accent: "#ffc639",
        //         dark: "#222831",

        //     },
        // },
    },

    plugins: [require("daisyui"), require("flowbite/plugin")],
};
