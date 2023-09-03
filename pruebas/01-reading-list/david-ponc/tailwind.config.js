const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter var, Inter, sans-serif',
					{
						fontFeatureSettings: '"ss01", "ss03", "cv05", "cv06", "cv08", "cv10", "cv11"'
					}
				]
			},
			gridTemplateColumns: {
				books: 'repeat(auto-fill, minmax(16rem, 1fr))'
			},
			textShadow: {
				sm: '0 1px 4px var(--tw-shadow-color)',
				md: '0 2px 8px var(--tw-shadow-color)'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			);
		}),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.text-balance': {
					'text-wrap': 'balance'
				}
			});
		})
	]
};
