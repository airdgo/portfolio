import Link from "next/link";
import { GithubIcon, LinkedInIcon, ToggleMenuIcon } from "../icons/index";

export default function Header() {
	const toggledMenuClass = "";

	return (
		<header className="fixed top-0 left-0 z-10 w-full bg-neutral fill-primary2 font-primary text-primary2">
			<nav className="mx-auto my-0 flex h-full w-[80%] max-w-7xl flex-col items-center justify-between font-medium">
				<div className="flex h-16 w-full items-center justify-between">
					<div className="text-xl">
						<Link href="/" title="Home">
							PLACEHOLDER
						</Link>
					</div>
					<button className="lg:hidden">
						<ToggleMenuIcon />
					</button>
				</div>

				<ul className="flex h-screen flex-col items-center justify-center gap-16 bg-red-300 text-3xl">
					<li>
						<Link href="/about" title="About me">
							ABOUT
						</Link>
					</li>
					<li>
						<Link href="/projects" title="Projects">
							PROJECTS
						</Link>
					</li>
					<li>
						<Link href="/contact" title="Send me an email">
							CONTACT
						</Link>
					</li>
					<li className="flex w-full justify-between">
						<Link
							href="https://www.linkedin.com/in/vlad-dragoi/"
							title="My LinkedIn Profile"
							target="_blank"
						>
							<a>
								<LinkedInIcon />
							</a>
						</Link>
						<Link
							href="https://github.com/airdgo"
							title="My GitHub Page"
							target="_blank"
						>
							<a>
								<GithubIcon />
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
