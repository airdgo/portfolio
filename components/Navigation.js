import { navigation, externalLinks } from "../constants";
import { classNames } from "../utils";

export default function Navigation({ onClick, isOpen }) {
	return (
		<ul
			className={classNames(
				isOpen ? "translate-y-16 opacity-100" : "-translate-y-full opacity-0",
				"absolute left-0 flex h-auto items-center justify-center gap-5 text-sm duration-500 sm:gap-8 lg:static lg:translate-y-0 lg:text-base lg:opacity-100"
			)}
		>
			{[...navigation, ...externalLinks].map((nav) => (
				<li key={nav.title} onClick={onClick}>
					<a
						href={nav.link}
						title={nav.title}
						className={nav.class}
						target={nav?.target}
					>
						{nav.content}
					</a>
				</li>
			))}
		</ul>
	);
}
