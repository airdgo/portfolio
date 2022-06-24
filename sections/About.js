import AboutDivider from "../assets/sectionDividers/AboutDivider";

export default function About() {
	return (
		<>
			<section
				id="about"
				className="h-screen w-full bg-primary pt-20 text-primary2"
			>
				<h1 className="text-center text-4xl font-bold">ABOUT</h1>
			</section>

			<section>
				<AboutDivider />
			</section>
		</>
	);
}
