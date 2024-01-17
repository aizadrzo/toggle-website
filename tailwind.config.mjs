/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: {
					100: '#141414',
					200: '#131313',
					300: '#0E0E0E',
				},
				gray: {
					100: '#F5F5F5',
					200: '#e0e0e0',
					300: '#929292',
				},
				yolk: {
					100: '#ffbb36',
					200: '#ecb451',
				},
				random: {
					sun: '#ff772b',
					teal: '#2d525b',
					egg: '#f9f9f9',
					cream: '#e1ded4',
				}
			}
		},
		fontFamily: {
			'sans': ['Satoshi'],
			'serif': ['"Cabinet Grotesk"'],
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [],
		styled: true,
		utils: true,
	}
}
