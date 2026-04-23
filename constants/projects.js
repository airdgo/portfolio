import flightEnvelope from "../assets/images/flight-envelope.png";
import birdshouse from "../assets/images/birds-house.png";
import artificialHorizon from "../assets/images/artificial-horizon.png";
import plantkeeper from "../assets/images/plantkeeper.png";
import gatadezbor from "../assets/images/gata-de-zbor.png";
import skiro from "../assets/images/skiro.png";

export const projects = [
	{
		id: 6,
		name: "SKIRO",
		imageSrc: skiro,
		appStore: "https://apps.apple.com/gb/app/skiro/id6756579006",
		playStore: "https://play.google.com/store/apps/details?id=com.straja.app",
		technologies: ["React Native", "Expo", "FastAPI", "PostgreSQL", "Mapbox", "ESP32"],
		about:
			"Real-time ski resort app serving Straja and Pasul Vulcan with 3,000+ downloads on iOS and Android. Features interactive Mapbox trail maps, offline-first architecture, and multi-language support. Designed and deployed 15 custom ESP32 IoT devices on ski lifts for live status monitoring with heartbeat tracking and OTA firmware updates.",
	},
	{
		id: 5,
		name: "GATA DE ZBOR",
		imageSrc: gatadezbor,
		code: "https://github.com/airdgo/gata-de-zbor",
		appStore: "https://apps.apple.com/ro/app/gata-de-zbor/id6762507279",
		technologies: ["React Native", "Expo", "TypeScript", "Zustand", "NativeWind"],
		about:
			"An offline-first exam prep app for Romanian paragliding pilots. Full exam simulations, category practice, and flashcard review — built with React Native and Expo.",
	},
	{
		id: 4,
		name: "PLANTKEEPER",
		imageSrc: plantkeeper,
		code: "https://github.com/airdgo/plantkeeper",
		technologies: ["FastAPI", "React", "PostgreSQL", "Docker"],
		about:
			"Developed a smart irrigation system powered by a Raspberry Pi, designed to optimize water usage and enhance plant care. The system monitors real-time environmental conditions including soil moisture, temperature, humidity, pressure, and UV index using integrated sensors. With an intuitive web interface, users can remotely control irrigation, visualize data trends, and ensure optimal plant health.",
	},
	{
		id: 3,
		name: "BIRDS HOUSE",
		imageSrc: birdshouse,
		demo: "https://www.birdshouse.ro/",
		technologies: ["NextJS", "TailwindCSS"],
		about:
			"Developed a dynamic website from inception to completion using NextJS and Tailwind CSS. Showcasing a mountain cabin with stunning photos of the interior and exterior, the site enables users to explore activities and easily contact the owner for bookings.",
	},
	{
		id: 2,
		name: "ARTIFICIAL HORIZON SIMULATOR",
		imageSrc: artificialHorizon,
		demo: "https://youtu.be/vvVtxxDRwpI",
		code: "https://github.com/airdgo/ArtificialHorizon",
		technologies: ["Python", "Pygame", "Sockets", "FlightGear"],
		about:
			"This Python application showcases the operation of the artificial horizon in an aircraft cockpit. I generated the data using FlightGear Flight Simulator, retrieved it through sockets, and presented it as a flight instrument using Pygame.",
	},
	{
		id: 1,
		name: "FLIGHT ENVELOPE PLOTTER",
		imageSrc: flightEnvelope,
		demo: "https://airdgo.github.io/flight-envelope/",
		code: "https://github.com/airdgo/flight-envelope",
		technologies: ["ReactJS", "TailwindCSS", "PlotlyJS"],
		about:
			"This web app assists students and engineers in plotting the flight envelope for military or civil aircraft. Users can customize the diagram's color and save it to their personal computer for convenience.",
	},
];
