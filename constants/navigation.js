import { LinkedInIcon, GithubIcon } from "../icons/index";
import { classNames } from "../utils";

const focusStyle = "focus:outline-none focus:underline hover:underline";

export const navigation = [
	{
		link: "#about",
		title: "About me",
		class: focusStyle,
		content: "ABOUT",
	},
	{
		link: "#projects",
		title: "Projects",
		class: focusStyle,
		content: "PROJECTS",
	},
	{
		link: "#contact",
		title: "Send me an email",
		class: focusStyle,
		content: "CONTACT",
	},
];

export const externalLinks = [
	{
		link: "https://www.linkedin.com/in/vlad-dragoi/",
		title: "My LinkedIn Profile",
		class:
			"focus:outline focus:outline-1 focus:outline-primary2 w-6 h-6 flex items-center justify-center",
		target: "_blank",
		content: (
			<LinkedInIcon className="h-5 w-5 transition-all duration-300 hover:h-6 hover:w-6" />
		),
	},
	{
		link: "https://github.com/airdgo",
		title: "My GitHub Page",
		target: "_blank",
		class:
			"focus:outline focus:outline-1 focus:outline-primary2 w-7 h-7 flex items-center justify-center",
		content: (
			<GithubIcon className="h-6 w-6 transition-all duration-300 hover:h-7 hover:w-7" />
		),
	},
];
