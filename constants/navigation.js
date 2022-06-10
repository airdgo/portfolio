import { LinkedInIcon, GithubIcon } from "../icons/index";

export const navigation = [
	{ link: "#about", title: "About me", content: "ABOUT" },
	{ link: "#projects", title: "Projects", content: "PROJECTS" },
	{ link: "#contact", title: "Send me an email", content: "CONTACT" },
];

export const externalLinks = [
	{
		link: "https://www.linkedin.com/in/vlad-dragoi/",
		title: "My LinkedIn Profile",
		content: (
			<a target="_blank" className="block w-9 lg:w-6">
				<LinkedInIcon />
			</a>
		),
	},
	{
		link: "https://github.com/airdgo",
		title: "My GitHub Page",
		content: (
			<a target="_blank" className="block w-10 lg:w-7">
				<GithubIcon />
			</a>
		),
	},
];
