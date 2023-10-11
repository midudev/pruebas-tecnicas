/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'roboto': 'roboto'
			},
			colors: {
				"primary": "rgb(3,3,3)",
				"secondary": "rgb(2,2,2)",
				"text": "rgb(230,230,230)"
			},
			dropShadow: {
				"text": "0px 0px 0.05em white",
				"input": "0px 0px 0.6em white"
			},
			borderColor: {
				"primary": "rgb(25,25,25)"
			}
		},
	},
	plugins: [],
}
