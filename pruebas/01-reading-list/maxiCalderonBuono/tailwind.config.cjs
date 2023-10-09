/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	theme: {
		extend: {
   
        animation: {
        'shake': 'shake 2s linear infinite',
      },
      keyframes: {
        shake: {
          
             "0%": { transform: "translateX(0)" },
    "25%" : { transform: "translateX(-2px) rotate(-2deg)" },
    "50%" : { transform: "translateX(2px) rotate(2deg)" },
    "75%" : { transform: "translateX(-2px) rotate(-2deg)" },
    "100%" : { transform: "translateX(0) rotate(0)" },





        }},
    },
	},
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}
