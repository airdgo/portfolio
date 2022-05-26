import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "../icons/index";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 z-10 w-full fill-primary2 font-primary text-primary2">
			<div className="mx-auto my-0 flex h-16 w-[80%] max-w-7xl items-center justify-between">
				<div className="text-xl">PLACEHOLDER</div>
				<nav className="flex items-center font-medium">
					<ul className="flex items-center gap-8">
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
						<li>
							<Link
								href="https://www.linkedin.com/in/vlad-dragoi/"
								title="My LinkedIn Profile"
								target="_blank"
							>
								<a>
									<LinkedInIcon />
								</a>
							</Link>
						</li>
						<li>
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
			</div>
		</header>
	);
}
