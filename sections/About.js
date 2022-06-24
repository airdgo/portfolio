import MountainScene from "../assets/images/MountainScene";
import AboutDivider from "../assets/sectionDividers/AboutDivider";

export default function About() {
	return (
		<>
			<section
				id="about"
				className="flex h-screen w-full justify-center bg-primary pt-20 text-primary2"
			>
				<div className="w-[85%]">
					<h1 className="text-center text-4xl font-bold">ABOUT</h1>

					<div>
						<MountainScene />
					</div>
				</div>
			</section>

			<section>
				<AboutDivider />
			</section>
		</>
	);
}
