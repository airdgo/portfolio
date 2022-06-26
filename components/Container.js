import { classNames } from "../utils";

export default function Container({ addClass, children }) {
	return (
		<div
			className={classNames(
				"relative flex max-h-[60rem] min-h-full w-[85%] max-w-[90rem]",
				addClass
			)}
		>
			{children}
		</div>
	);
}
