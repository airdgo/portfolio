import Link from "next/link";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full px-4 font-nav">
			<div className="mx-auto my-0 flex h-12 max-w-7xl items-center justify-between">
				<div className=" text-xl">Placeholder</div>
				<nav className="flex items-center">
					<ul className="flex items-center gap-4">
						<li>
							<Link href="/" title="Home">
								.is()
							</Link>
						</li>
						<li>
							<Link href="/projects" title="Projects">
								.projects()
							</Link>
						</li>
						<li>
							<Link href="/about" title="About me">
								.about()
							</Link>
						</li>
						<li>
							<Link href="/contact" title="Send me an email">
								.contact()
							</Link>
						</li>
						<li>
							<Link
								href="https://www.linkedin.com/in/vlad-dragoi/"
								title="My LinkedIn Profile"
							>
								linkedin
							</Link>
						</li>
						<li>
							<Link href="https://github.com/airdgo" title="My GitHub Page">
								github
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
