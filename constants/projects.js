import weatherApp from "../assets/images/weather-app.png";
import flightEnvelope from "../assets/images/flight-envelope.png";
import truyou from "../assets/images/truyou.png";
import artificialHorizon from "../assets/images/artificial-horizon.png";
import rateAllTheMusic from "../assets/images/rate-all-the-music.png";
import vladDragoi from "../assets/images/vlad-dragoi.png";

export const projects = [
	{
		id: 4,
		name: "TRUYOU",
		imageSrc: truyou,
		demo: "https://main.dsi65lfef110r.amplifyapp.com/",
		code: "https://github.com/airdgo/truyou",
		technologies: ["ReactJS", "TailwindCSS", "Redux", "AWS", "ChartJS"],
		about:
			"Alongside a web designer and a project manager, I am now working on a full stack social media web application called TruYou. Users can register, publish their feelings once every day, and after a week, a visual representation of the user’s emotions will show up.",
	},
	{
		id: 3,
		name: "RATE ALL THE MUSIC",
		imageSrc: rateAllTheMusic,
		demo: "https://youtu.be/mS93pNN60kQ",
		code: "https://github.com/crstern/Rate-all-the-music",
		technologies: ["ReactJS", "Docker"],
		about:
			"RATM is a web application that allows users to evaluate artists and their albums, provide comments, and import new artists after creating an account. I collaborated on this project with a backend developer, and my role was to create and implement the UI/UX using ReactJS and CSS.",
	},
	{
		id: 2,
		name: "WEATHER APP",
		imageSrc: weatherApp,
		demo: "https://airdgo-weather.netlify.app",
		code: "https://github.com/airdgo/Weather-App",
		technologies: ["JavaScript", "SASS"],
		about:
			"This app shows the temperature for the next six hours as well as the humidity, wind speed, how the temperature feels, maximum and lowest temperatures, UV index, visibility, and pressure for a specified area over the next eight days. Additionally, the user has the option to store a favorite place and view it without having to type its name.",
	},
	{
		id: 1,
		name: "FLIGHT ENVELOPE PLOTTER",
		imageSrc: flightEnvelope,
		demo: "https://airdgo.github.io/flight-envelope/",
		code: "https://github.com/airdgo/flight-envelope",
		technologies: ["ReactJS", "TailwindCSS", "PlotlyJS"],
		about:
			"This is a web app that aims to help students and engineers by plotting the flight envelope for a military or civil aircaft. Furthermore, the user has the option to alter the diagram's color and save it to their personal computer.",
	},
	{
		id: 0,
		name: "VLAD DRAGOI",
		imageSrc: vladDragoi,
		demo: "",
		code: "https://github.com/airdgo/portofolio",
		technologies: ["NextJS", "TailwindCSS", "react-spring"],
		about:
			"This is my personal website where I showcase my skills and accomplishments as well as the projects I have been working on. It was developed as a single-page application using NextJS with TailwindCSS.",
	},
];
