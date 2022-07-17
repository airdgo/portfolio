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
		class: " focus:outline focus:outline-1 focus:outline-primary2 block w-6",
		target: "_blank",
		content: <LinkedInIcon />,
	},
	{
		link: "https://github.com/airdgo",
		title: "My GitHub Page",
		target: "_blank",
		class: " focus:outline focus:outline-1 focus:outline-primary2 block w-6",
		content: <GithubIcon />,
	},
];
