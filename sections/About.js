import MountainScene from "../assets/images/MountainScene";
import AboutDivider from "../assets/sectionDividers/AboutDivider";
import { DownloadIcon } from "../icons/index";

export default function About() {
	return (
		<>
			<section
				id="about"
				className="flex min-h-screen w-full justify-center bg-primary pt-16 text-primary2 xl:items-center"
			>
				<div className="flex min-h-full w-[85%] max-w-[90rem] flex-col xl:max-h-[30rem] xl:flex-row xl:justify-between">
					<div className="flex min-h-full flex-col items-center justify-around xl:items-start xl:justify-between">
						<h1 className="text-center text-4xl font-bold sm:text-4xl md:text-7xl">
							ABOUT
						</h1>
						<div className="my-4 w-full max-w-xl xl:hidden">
							<MountainScene />
						</div>
						<div>
							<div className="mb-6 md:mb-12 xl:mb-16">
								<h2 className="font-accent text-3xl font-medium md:text-4xl lg:text-5xl">
									Explorer
								</h2>
								<p className="mt-4 max-w-xl text-sm text-neutralLight md:mt-6 md:text-base lg:mt-8">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aliquam dapibus non elit vitae porttitor. Maecenas sodales
									massa risus, a sollicitudin est condimentum sit amet.
								</p>
							</div>
							<div className="flex items-center md:text-lg">
								Download my
								<a
									className="ml-4 flex items-center gap-3 rounded-full bg-accent2 py-1 px-4 font-accent text-primary transition-colors duration-300 hover:bg-primary2"
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

					<div className="hidden w-full max-w-2xl xl:block">
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
