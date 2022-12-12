/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			spacing: {
				78: "19rem",
				82: "21rem",
			},
			minHeight: {
				12: '3rem',
			},
			screens: {
				"large-monitor": { min: "2560px" },
				monitor: { min: "2223.98px" },
				laptop: { max: "1535.98px" },
				"small-laptop": { max: "1279.98px" },
				"wide-tablet": { max: "1023.98px" },
				tablet: { max: "768.98px" },
				"wide-mobile": { max: "640.98px" },
				mobile: { max: "479.98px" },
			},
		},
	},
	plugins: [],
};
