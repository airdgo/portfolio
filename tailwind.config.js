module.exports = {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
		"./sections/**/*.{js,ts,jsx,tsx}",
		"./constants/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Roboto", "sans-serif"],
				accent: ["Roboto Mono", "monospace"],
			},
			colors: {
				dashboard: "#5619BD",
				primary: "#11171E",
				primary2: "#FFFEFA",
				primaryLight: "#1C222A",
				primaryDark: "#1D1D1F",
				accent1: "#FFAE63",
				accent2: "#FF6584",
				neutral: "#1C1942",
				neutralDark: "#2d3338",
				neutralLight: "#808080",
				neutralLighter: "#BFBFBF",
			},
		},
	},
	plugins: [],
};
