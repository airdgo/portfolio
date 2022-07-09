import { navigation, externalLinks } from "../constants";

export default function DesktopNav({ onClick }) {
	return (
		<ul className="hidden h-auto items-center justify-center gap-16 text-lg lg:static lg:flex">
			{[...navigation, ...externalLinks].map((nav) => (
				<li key={nav.title} onClick={onClick} className={nav.class}>
					<a href={nav.link}>{nav.content}</a>
				</li>
			))}
		</ul>
	);
}
