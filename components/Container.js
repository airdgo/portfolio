import { classNames } from "../utils";

export default function Container({ addClass, children }) {
	return (
		<div
			className={classNames(
				"relative flex min-h-full w-[85%] max-w-[80rem]",
				addClass
			)}
		>
			{children}
		</div>
	);
}
