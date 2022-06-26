export default function Section({ id, addClass, bgColor, children }) {
	return (
		<section
			id={id}
			className={
				"relative flex min-h-screen w-full justify-center overflow-auto xl:items-center " +
				addClass +
				" " +
				bgColor
			}
		>
			{children}
		</section>
	);
}
