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
            light: '#FFFFFF',
            dark: '#000000',
        },
        textColor: {
            light: '#000000',
            dark: '#FFFFFF',
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
