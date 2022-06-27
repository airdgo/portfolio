import Link from "next/link";
import { navigation, externalLinks } from "../constants";

export default function DesktopNav({ onClick }) {
	return (
		<ul className="hidden h-auto items-center justify-center gap-16 text-lg lg:static lg:flex">
			{[...navigation, ...externalLinks].map((nav) => (
				<li key={nav.title} onClick={onClick}>
					<Link href={nav.link} title={nav.title}>
						<a className="focus:outline focus:outline-1 focus:outline-primary2">
							{nav.content}
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
}
