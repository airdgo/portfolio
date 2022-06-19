import Link from "next/link";
import { useState } from "react";
import { navigation, externalLinks } from "../constants/index";
import HamburgerMenu from "../components/HamburgerMenu";
import { useTransition, animated } from "@react-spring/web";
import { useScrollPosition } from "../hooks";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const scrollPosition = useScrollPosition();
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

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<header
			className={classNames(
				isOpen ? "opacity-100" : "opacity-95",
				scrollPosition >= 80 ? "lg:bg-neutralDark" : "lg:bg-transparent",
				"fixed top-0 left-0 z-50 w-full bg-neutral font-primary text-primary2 transition-colors duration-[850ms] ease-in-out"
			)}
		>
			<nav className="relative mx-auto my-0 flex h-full w-[80%] max-w-7xl flex-col items-center justify-between font-medium lg:flex-row">
				<div className="relative z-[40] flex h-16 w-full items-center justify-between">
					<div className="text-lg md:text-xl" onClick={hideMenu}>
						<Link href="#landing" title="Home">
							HOME
						</Link>
					</div>
					<HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
				</div>

				{transitions(
					(style, item) =>
						item && (
							<animated.ul
								style={style}
								className="fixed z-[0] flex h-screen w-full flex-col items-center justify-center gap-16 bg-neutral text-3xl lg:hidden"
							>
								{navigation.map((nav) => (
									<li key={nav.title} onClick={hideMenu}>
										<Link href={nav.link} title={nav.title}>
											{nav.content}
										</Link>
									</li>
								))}

								<li className="flex w-full max-w-[10rem] items-center justify-between lg:gap-16">
									{externalLinks.map((nav) => (
										<Link key={nav.title} href={nav.link} title={nav.title}>
											{nav.content}
										</Link>
									))}
								</li>
							</animated.ul>
						)
				)}

				<ul className="hidden h-auto items-center justify-center gap-16 text-lg lg:static lg:flex">
					{[...navigation, ...externalLinks].map((nav) => (
						<li key={nav.title} onClick={hideMenu}>
							<Link href={nav.link} title={nav.title}>
								{nav.content}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
