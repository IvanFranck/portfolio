/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ['./src/**/*.vue'],
	theme: {
		fontFamily: {
			roboto: ['"Roboto Mono"'],
			inter: ['"Inter"'],
			aurore: ['"La Belle Aurore"'],
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "var(--color-blue)",
					light: "var(--color-light-blue)",
					lightest: "var(--color-lightest-blue)",
					dark: "var(--color-dark-blue)"
				},
				secondary: {
					DEFAULT: "var(--color-red)",
				},
				layout: {
					DEFAULT: "#F2F2F2",
					bg: "var(--bg)"
				},
			},
			// width: {
			// 	100: "30rem",
			// 	105: "35rem",
			// 	112: "42rem",
			// 	120: "50rem",
			// 	132: "62rem",
			// 	140: "70rem",

			// },
		},
	},
	plugins: [],
};