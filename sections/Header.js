import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import { useScrollPosition } from "../hooks";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import { classNames } from "../utils/index";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const scrollPosition = useScrollPosition();

	function toggleMenu() {
		setIsOpen((prevState) => !prevState);
	}

	function hideMenu() {
		if (isOpen === false) return;
		setIsOpen(false);
	}

	return (
		<header
			className={classNames(
				isOpen ? "opacity-100" : "opacity-95",
				scrollPosition >= 3600
					? "lg:bg-primary"
					: scrollPosition >= 2200
					? "lg:bg-neutralDark"
					: scrollPosition >= 1000
					? "lg:bg-primary"
					: scrollPosition >= 80
					? "lg:bg-primaryDark"
					: "lg:bg-dashboard",
				"fixed top-0 left-0 z-50 w-full bg-neutral font-primary text-primary2 transition-colors duration-[850ms] ease-in-out"
			)}
		>
			<nav className="relative mx-auto my-0 flex h-full w-[85%] max-w-[90rem] flex-col items-center justify-between font-medium lg:flex-row">
				<div className="relative z-[40] flex h-16 w-full items-center justify-between">
					<div className="text-lg md:text-xl" onClick={hideMenu}>
						<a
							href="#home"
							title="Home"
							className="focus:outline focus:outline-1 focus:outline-primary2"
						>
							HOME
						</a>
					</div>
					<HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
				</div>

				<MobileNav isOpen={isOpen} onClick={hideMenu} />
				<DesktopNav onClick={hideMenu} />
			</nav>
		</header>
	);
}
