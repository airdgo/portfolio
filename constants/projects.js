import weatherApp from "../assets/images/weather-app.png";
import flightEnvelope from "../assets/images/flight-envelope.png";
import birdshouse from "../assets/images/birds-house.png";
import artificialHorizon from "../assets/images/artificial-horizon.png";
import rateAllTheMusic from "../assets/images/rate-all-the-music.png";
import vladDragoi from "../assets/images/vlad-dragoi.png";

export const projects = [
	{
		id: 5,
		name: "BIRDS HOUSE",
		imageSrc: birdshouse,
		demo: "https://www.birdshouse.ro/",
		technologies: ["NextJS", "TailwindCSS"],
		about:
			"Developed a dynamic website from inception to completion using NextJS and Tailwind CSS. Showcasing a mountain cabin with stunning photos of the interior and exterior, the site enables users to explore activities and easily contact the owner for bookings.",
	},
	{
		id: 4,
		name: "RATE ALL THE MUSIC",
		imageSrc: rateAllTheMusic,
		demo: "https://youtu.be/mS93pNN60kQ",
		code: "https://github.com/crstern/Rate-all-the-music",
		technologies: ["ReactJS", "Docker", "CSS"],
		about:
			"Teamed up with a backend developer to bring RATM to life. Led the design and implementation of the user interface/experience using ReactJS and CSS, ensuring a seamless and engaging platform for artist and album evaluations.",
	},
	{
		id: 3,
		name: "WEATHER APP",
		imageSrc: weatherApp,
		demo: "https://airdgo-weather.netlify.app",
		code: "https://github.com/airdgo/Weather-App",
		technologies: ["JavaScript", "SASS", "API"],
		about:
			"This app provides a comprehensive weather forecast, displaying temperature, humidity, wind speed, 'feels-like' temperature, max and min temperatures, UV index, visibility, and pressure for a chosen area over the next eight days. Users can conveniently save favorite locations for quick access without manual input.",
	},
	{
		id: 2,
		name: "FLIGHT ENVELOPE PLOTTER",
		imageSrc: flightEnvelope,
		demo: "https://airdgo.github.io/flight-envelope/",
		code: "https://github.com/airdgo/flight-envelope",
		technologies: ["ReactJS", "TailwindCSS", "PlotlyJS"],
		about:
			"This web app assists students and engineers in plotting the flight envelope for military or civil aircraft. Users can customize the diagram's color and save it to their personal computer for convenience.",
	},
	{
		id: 1,
		name: "ARTIFICIAL HORIZON SIMULATOR",
		imageSrc: artificialHorizon,
		demo: "https://youtu.be/vvVtxxDRwpI",
		code: "https://github.com/airdgo/ArtificialHorizon",
		technologies: ["Python", "Pygame", "Sockets", "FlightGear"],
		about:
			"This Python application showcases the operation of the artificial horizon in an aircraft cockpit. I generated the data using FlightGear Flight Simulator, retrieved it through sockets, and presented it as a flight instrument using Pygame.",
	},
	{
		id: 0,
		name: "VLAD DRAGOI",
		imageSrc: vladDragoi,
		demo: "",
		code: "https://github.com/airdgo/portofolio",
		technologies: ["NextJS", "TailwindCSS"],
		about:
			"This is my personal website, a dynamic showcase of my skills, achievements, and current projects. Crafted as a sleek single-page application, it harnesses the power of NextJS and TailwindCSS for a seamless blend of functionality and design.",
	},
];
