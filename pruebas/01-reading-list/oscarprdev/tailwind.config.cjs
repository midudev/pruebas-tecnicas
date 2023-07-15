/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        colors: {
            primary: {
                light: '#FFCDD2',
                dark: '#E57373',
            },
            secondary: {
                light: '#81D4FA',
                dark: '#29B6F6',
            },
        },
        backgroundColor: {
            light: '#F5EFE7',
            dark: '#161617cc',
            bookItem: '#F5F5F5',
            bootkItemHover: "#4F709C",
            pagBtn: "#D8C4B6",
            overlayBtn: "#F5F5F5",
            overlayBtnHover: "#E8E2E2"
        },
        textColor: {
            light: '#000000',
            dark: '#FFFFFF',
        },
        extend: {
            maxHeight: {
                '400': '400px',
                '800': '800px',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
