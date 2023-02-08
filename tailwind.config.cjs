/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
				'emoji': ["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
			},
			colors: {
				'brand-green': '#005D5F',
				'brand-green-dark': '#004E50',
			},
		},
	},
	plugins: [],
}
