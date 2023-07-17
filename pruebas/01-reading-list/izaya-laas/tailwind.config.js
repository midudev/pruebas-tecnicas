/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mystery: ['Mystery Quest', 'cursive'],
				tilt: ['Tilt Neon', 'cursive'],
			},
		},
	},
	plugins: [],
};
