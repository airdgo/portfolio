import Link from "next/link";
import { navigation, externalLinks } from "../constants";

export default function DesktopNav({ onClick }) {
	return (
		<ul className="hidden h-auto items-center justify-center gap-16 text-lg lg:static lg:flex">
			{[...navigation, ...externalLinks].map((nav) => (
				<li key={nav.title} onClick={onClick}>
					<Link href={nav.link} title={nav.title}>
						{nav.content}
					</Link>
				</li>
			))}
		</ul>
	);
}
