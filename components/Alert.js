import { classNames } from "../utils";

export default function Alert({ visible, children }) {
	return (
		<div
			className={classNames(
				visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
				"pointer-events-none fixed top-20 left-1/2 -translate-x-1/2 rounded-sm bg-dashboard py-4 px-6 font-accent transition-all duration-300 ease-in-out"
			)}
		>
			{children}
		</div>
	);
}
