import { classNames } from "../utils";

export default function Section({ id, addClass, bgColor, children }) {
	return (
		<section
			id={id}
			className={classNames(
				"relative flex min-h-screen w-full justify-center overflow-auto pt-16 text-primary2",
				addClass,
				bgColor
			)}
		>
			{children}
		</section>
	);
}
