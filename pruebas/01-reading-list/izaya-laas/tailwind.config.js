/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mystery: ['Mystery Quest', 'cursive'],
				tilt: ['Tilt Neon', 'cursive'],
				handlee: ['Handlee', 'cursive'],
			},
			backgroundImage: {
				'grated-pattern': "url('public/grated-pattern.gif')",
			},
		},
	},
	plugins: [],
};
