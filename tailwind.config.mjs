/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
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
