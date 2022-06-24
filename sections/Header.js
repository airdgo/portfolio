import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import { useScrollPosition } from "../hooks";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";

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
			<nav className="relative mx-auto my-0 flex h-full w-[85%] max-w-7xl flex-col items-center justify-between font-medium lg:flex-row">
				<div className="relative z-[40] flex h-16 w-full items-center justify-between">
					<div className="text-lg md:text-xl" onClick={hideMenu}>
						<Link href="#home" title="Home">
							HOME
						</Link>
					</div>
					<HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
				</div>

				<MobileNav isOpen={isOpen} onClick={hideMenu} />
				<DesktopNav onClick={hideMenu} />
			</nav>
		</header>
	);
}
