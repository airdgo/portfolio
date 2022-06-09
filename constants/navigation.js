import { LinkedInIcon, GithubIcon } from "../icons/index";

export const desktopNavigation = [
	{ link: "#about", title: "About me", content: "ABOUT" },
	{ link: "#projects", title: "Projects", content: "PROJECTS" },
	{ link: "#contact", title: "Send me an email", content: "CONTACT" },
	{
		link: "https://www.linkedin.com/in/vlad-dragoi/",
		title: "My LinkedIn Profile",
		content: (
			<a target="_blank" className="block w-6">
				<LinkedInIcon />
			</a>
		),
	},
	{
		link: "https://github.com/airdgo",
		title: "My GitHub Page",
		content: (
			<a target="_blank" className="block w-7">
				<GithubIcon />
			</a>
		),
	},
];
