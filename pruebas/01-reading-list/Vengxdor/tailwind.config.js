/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html', './src/**/*.js'],
    theme: {
        extend: {
            colors: {
                primary: '#5360EA',
                books: '#333',
                white: '#fff',
            },
            fontFamily: {
                'amulya': ['amulya', 'sans-serif']
            },
        },
		
		
    },
	
    plugins: []
}
