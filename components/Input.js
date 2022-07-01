import { classNames } from "../utils";

export default function Input({ label, ...props }) {
	const inputClass =
		"mb-2 mt-1 block rounded font-accent bg-primaryLight px-2 py-1 focus:outline focus:outline-1 focus:outline-neutralLight sm:mb-8 sm:py-2 lg:mb-14 lg:mt-2";

	return (
		<>
			{label && (
				<label htmlFor={props?.name} className="md:text-lg">
					{label}
				</label>
			)}
			{props?.name === "message" ? (
				<textarea
					{...props}
					className={classNames(inputClass, "resize-none sm:h-24")}
				></textarea>
			) : (
				<input {...props} className={inputClass} />
			)}
		</>
	);
}
