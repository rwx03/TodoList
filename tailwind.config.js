/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/**/*.scss'],
	theme: {
		extend: {
			colors: {
				darkGray: '#494949',
				lightGray: '#BDBDBD',
			},
			stroke: {
				darkGray: '#494949',
				lightGray: '#BDBDBD',
			},
			border: {
				darkGray: '#494949',
				lightGray: '#BDBDBD',
			},
		},
	},
	plugins: [],
}
