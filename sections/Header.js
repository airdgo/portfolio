import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import { useScrollPosition } from "../hooks";
import DesktopNav from "../components/DesktopNav";
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
				isOpen ? "opacity-100" : "opacity-95 backdrop-blur",
				"fixed top-0 left-0 z-50 w-full font-primary text-primary2 transition-colors duration-[850ms] ease-in-out"
			)}
		>
			<div
				className={classNames(
					isOpen ? "translate-y-0" : "-translate-y-16",
					scrollPosition >= 50 && "bg-[#0f1922cc]",
					"absolute h-32 w-full backdrop-blur duration-[400ms] ease-in-out lg:-translate-y-16"
				)}
			/>
			<nav className="relative mx-auto my-0 flex h-full w-[85%] max-w-[90rem] flex-col items-center justify-between font-medium lg:flex-row">
				<div className="relative z-40 flex h-16 w-full items-center justify-between">
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

				{/* <MobileNav isOpen={isOpen} onClick={hideMenu} /> */}
				<DesktopNav onClick={hideMenu} isOpen={isOpen} />
			</nav>
		</header>
	);
}
