import Link from "next/link";
import { useState } from "react";
import { desktopNavigation } from "../constants/index";
import HamburgerMenu from "../components/HamburgerMenu";
import { useTransition, animated } from "@react-spring/web";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const transitions = useTransition(isOpen, {
		from: { x: 0, y: -500, opacity: 0 },
		enter: { x: 0, y: 0, opacity: 1 },
		leave: { x: 0, y: -500, opacity: 0 },
	});

	function toggleMenu() {
		setIsOpen((prevState) => !prevState);
	}

	function hideMenu() {
		if (isOpen === false) return;
		setIsOpen(false);
	}

	return (
		<header
			className={
				"fixed top-0 left-0 z-30 w-full bg-neutral font-primary text-primary2 transition-colors ease-out lg:bg-transparent " +
				(isOpen ? "opacity-100" : "opacity-95")
			}
		>
			<nav className="mx-auto my-0 flex h-full w-[80%] max-w-7xl flex-col items-center justify-between font-medium lg:flex-row">
				<div className="flex h-16 w-full items-center justify-between">
					<div className="text-lg md:text-xl" onClick={hideMenu}>
						<Link href="#landing" title="Home">
							Home
						</Link>
					</div>
					<HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
				</div>

				{/* {isOpen && (
					<ul className="fixed flex h-screen flex-col items-center justify-center gap-16 bg-neutral pb-40 text-3xl lg:hidden">
						{desktopNavigation.map((nav) => (
							<li key={nav.title} onClick={hideMenu}>
								<Link href={nav.link} title={nav.title}>
									{nav.content}
								</Link>
							</li>
						))}
					</ul>
				)} */}

				{transitions(
					(style, item) =>
						item && (
							<animated.ul
								style={style}
								className="fixed flex h-screen flex-col items-center justify-center gap-16 bg-neutral pb-40 text-3xl lg:hidden"
							>
								{desktopNavigation.map((nav) => (
									<li key={nav.title} onClick={hideMenu}>
										<Link href={nav.link} title={nav.title}>
											{nav.content}
										</Link>
									</li>
								))}
							</animated.ul>
						)
				)}

				<ul className="hidden h-auto items-center justify-center gap-16 text-lg lg:static lg:flex">
					{desktopNavigation.map((nav) => (
						<li key={nav.title} onClick={hideMenu}>
							<Link href={nav.link} title={nav.title}>
								{nav.content}
							</Link>
						</li>
					))}

					{/* <li className="flex w-full items-center justify-between lg:gap-16">
						<Link
							href="https://www.linkedin.com/in/vlad-dragoi/"
							title="My LinkedIn Profile"
						>
							<a target="_blank" className="w-9 lg:w-6">
								<LinkedInIcon />
							</a>
						</Link>
						<Link href="https://github.com/airdgo" title="My GitHub Page">
							<a target="_blank" className="w-10 lg:w-7">
								<GithubIcon />
							</a>
						</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
}
