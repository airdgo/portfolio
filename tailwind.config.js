module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				nav: ["Roboto Mono", "monospace"],
			},
			colors: {
				primary: "#11171e",
				whiteish: "#fffefa",
			},
		},
	},
	plugins: [],
};
