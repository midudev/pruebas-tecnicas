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
			keyframes: {
				heightdown: {
					'0%': { height: '100%' },
					'33%': { height: '70%' },
					'66%': { height: '33%' },
					'100%': { height: '0' },
				},
			},
			animation: {
				heightdown: 'heightdown 1s ease-in-out',
			},
		},
	},
	plugins: [],
};
