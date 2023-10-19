/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes:{
				float:{
					'0%': {transform: 'translatey(0px);'},
					'50%':{transform: 'translatey(-20px);'},
					'100%':{transform: 'translatey(0px);'},
				}	
			}
		},
	},
	plugins: [],
}
