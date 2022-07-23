export default function HamburgerMenu({ onClick, isOpen }) {
	return (
		<button
			className="h-7 w-7 lg:hidden flex justify-center items-center focus:outline focus:outline-1 focus:outline-primary2"
			onClick={onClick}
			aria-label="Toggle Menu"
		>
			<span
				aria-hidden="true"
				className={
					"absolute block h-[0.1rem] w-6 transform bg-current transition duration-500 ease-in-out " +
					(isOpen ? "rotate-45" : "-translate-y-2")
				}
			></span>
			<span
				aria-hidden="true"
				className={
					"absolute block h-[0.1rem] w-6 transform bg-current transition duration-500 ease-in-out " +
					(isOpen && "opacity-0")
				}
			></span>
			<span
				aria-hidden="true"
				className={
					"absolute block h-[0.1rem] w-6 transform bg-current transition duration-500 ease-in-out " +
					(isOpen ? "-rotate-45" : "translate-y-2")
				}
			></span>
		</button>
	);
}
