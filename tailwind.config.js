/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#004567",
				secondary: "#C98B27",
				appBlue: "#004567",
			},
			fontFamily: {
				custom: "Raleway, sans-serif",
			},
			dropShadow: {
				custom: "10px 10px 50px 0px rgba(0, 0, 0, 0.10)",
			},
			boxShadow: {
				custom: "10px 10px 50px 0px rgba(0, 0, 0, 0.10)",
				customB: "10px 10px 3px 0px rgba(0, 0, 0, 0.10)",
				customInset: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
			},
		},
	},
	plugins: [],
};
