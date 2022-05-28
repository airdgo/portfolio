module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
		"./sections/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Roboto", "sans-serif"],
				accent: ["Roboto Mono", "monospace"],
			},
			colors: {
				dashboard: "#6219FA",
				primary: "#11171E",
				primary2: "#FFFEFA",
				accent1: "#FFAE63",
				neutral: "#1C1942",
			},
		},
	},
	plugins: [],
};
