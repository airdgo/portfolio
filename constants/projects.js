import weatherApp from "../assets/images/weather-app.png";
import flightEnvelope from "../assets/images/flight-envelope.png";
import truyou from "../assets/images/truyou.png";

export const projects = [
	{
		id: 0,
		name: "WEATHER APP",
		imageSrc: weatherApp,
		liveSite: "https://airdgo-weather.netlify.app",
		code: "https://github.com/airdgo/Weather-App",
		technologies: ["JavaScript", "SASS"],
		about:
			"This app shows the temperature for the next six hours as well as the humidity, wind speed, how the temperature feels, maximum and lowest temperatures, UV index, visibility, and pressure for a specified area over the next eight days.",
	},
	{
		id: 1,
		name: "FLIGHT ENVELOPE PLOTTER",
		imageSrc: flightEnvelope,
		liveSite: "https://airdgo.github.io/flight-envelope/",
		code: "https://github.com/airdgo/flight-envelope",
		technologies: ["ReactJS", "TailwindCSS", "PlotlyJS"],
		about:
			"This is a web app that aims to help students and engineers by plotting the flight envelope for a military or civil aircaft.",
	},
	{
		id: 2,
		name: "TRUYOU -demo-",
		imageSrc: truyou,
		liveSite: "https://main.dsi65lfef110r.amplifyapp.com/",
		code: "https://github.com/airdgo/truyou",
		technologies: ["ReactJS", "TailwindCSS", "Redux", "AWS", "ChartJS"],
		about:
			"Alongside a web designer and a project manager, I am now working on a full stack social media web application called TruYou, using ReactJS and AWS. Users can register, publish their feelings once every day, and after a week, a visual representation of the user’s emotions will show up.",
	},
];
