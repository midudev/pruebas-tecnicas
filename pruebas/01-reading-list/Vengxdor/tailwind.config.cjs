/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#5360EA',
				books: '#333',
				white: '#fff',
			},
			fontFamily: {
				'amulya': ["amulya", "sans-serif"]
			},
		},
		
		
	},
	
	plugins: [],
}
