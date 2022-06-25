import MountainScene from "../assets/images/MountainScene";
import AboutDivider from "../assets/sectionDividers/AboutDivider";
import { DownloadIcon } from "../icons/index";

export default function About() {
	return (
		<>
			<section
				id="about"
				className="flex h-screen w-full justify-center bg-primary pt-20 text-primary2"
			>
				<div className="w-[85%]">
					<h1 className="text-center text-4xl font-bold">ABOUT</h1>
					<div className="flex h-full flex-col justify-evenly">
						<div className="my-">
							<MountainScene />
						</div>
						<div>
							<div>
								<h2 className="font-accent text-3xl font-medium">Explorer</h2>
								<p className="mt-4 text-sm text-neutralLight">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aliquam dapibus non elit vitae porttitor. Maecenas sodales
									massa risus, a sollicitudin est condimentum sit amet.
								</p>
							</div>
							<div className="mt-6 flex items-center">
								Download my
								<a
									className="ml-4 flex items-center gap-3 rounded-full bg-accent2 py-1 px-4 font-accent"
									title="Download Resume"
									href="/Vlad-Dragoi-Resume.pdf"
									target="_blank"
								>
									resume
									<DownloadIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<AboutDivider />
			</section>
		</>
	);
}
