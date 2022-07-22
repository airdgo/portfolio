import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import { useScrollPosition } from "../hooks";
import Navigation from "../components/Navigation";
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
		<header className="fixed top-0 left-0 z-[110] w-full font-primary text-primary2 transition-colors duration-[850ms] ease-in-out">
			<div
				className={classNames(
					isOpen ? "translate-y-0" : "-translate-y-14",
					scrollPosition >= 700 && "bg-[#0f1922cc] backdrop-blur",
					"absolute h-28 w-full duration-[400ms] ease-in-out lg:-translate-y-14"
				)}
			/>
			<nav className="relative mx-auto my-0 flex h-full w-[85%] max-w-[90rem] flex-col items-center justify-between font-medium lg:flex-row">
				<div className="relative z-40 flex h-14 w-full items-center justify-between">
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
				<Navigation onClick={hideMenu} isOpen={isOpen} />
			</nav>
		</header>
	);
}
