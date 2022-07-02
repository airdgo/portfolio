import { LinkedInIcon, GithubIcon } from "../icons/index";
import { classNames } from "../utils";

const focusStyle = "focus:outline focus:outline-1 focus:outline-primary2";

export const navigation = [
	{
		link: "#about",
		title: "About me",
		content: (
			<a title="About me" className={focusStyle}>
				ABOUT
			</a>
		),
	},
	{
		link: "#projects",
		title: "Projects",
		content: (
			<a title="Projects" className={focusStyle}>
				PROJECTS
			</a>
		),
	},
	{
		link: "#contact",
		title: "Send me an email",
		content: (
			<a title="Send me an email" className={focusStyle}>
				CONTACT
			</a>
		),
	},
];

export const externalLinks = [
	{
		link: "https://www.linkedin.com/in/vlad-dragoi/",
		title: "My LinkedIn Profile",
		content: (
			<a
				target="_blank"
				title="My LinkedIn Profile"
				className={classNames(focusStyle, "block w-9 lg:w-6")}
			>
				<LinkedInIcon />
			</a>
		),
	},
	{
		link: "https://github.com/airdgo",
		title: "My GitHub Page",
		content: (
			<a
				target="_blank"
				title="My GitHub Page"
				className={classNames(focusStyle, "block w-9 lg:w-6")}
			>
				<GithubIcon />
			</a>
		),
	},
];
