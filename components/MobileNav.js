import { navigation, externalLinks } from "../constants";
import { useTransition, animated } from "@react-spring/web";

export default function MobileNav({ isOpen, onClick }) {
	const transitions = useTransition(isOpen, {
		from: { x: 0, y: -500, opacity: 0 },
		enter: { x: 0, y: 0, opacity: 1 },
		leave: { x: 0, y: -500, opacity: 0 },
	});

	return transitions(
		(style, item) =>
			item && (
				<animated.ul
					style={style}
					className="fixed z-[0] flex h-screen w-full flex-col items-center justify-center gap-16 bg-neutral text-3xl lg:hidden"
				>
					{navigation.map((nav) => (
						<li key={nav.title} onClick={onClick}>
							<a href={nav.link} title={nav.title} className={nav.class}>
								{nav.content}
							</a>
						</li>
					))}

					<li className="flex w-full max-w-[10rem] items-center justify-between lg:gap-16">
						{externalLinks.map((nav) => (
							<a
								key={nav.title}
								href={nav.link}
								title={nav.title}
								className={nav.class}
								target={nav?.target}
							>
								{nav.content}
							</a>
						))}
					</li>
				</animated.ul>
			)
	);
}
