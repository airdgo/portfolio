import MountainScene from "../assets/images/MountainScene";
import AboutDivider from "../assets/sectionDividers/AboutDivider";
import { DownloadIcon } from "../icons/index";
import Section from "../components/Section";
import Container from "../components/Container";
import Typewriter from "typewriter-effect";

export default function About() {
	return (
		<>
			<Section id="about" addClass="xl:items-center" bgColor="bg-primary">
				<Container addClass="flex-col items-center justify-around lg:justify-between lg:flex-row">
					<div className="lg:min-w-[30rem]">
						<h1 className="mb-16 text-4xl font-bold md:mb-20 md:text-6xl lg:text-7xl xl:mb-24">
							ABOUT
						</h1>
						<div className="mb-6 md:mb-12 xl:mb-16">
							<Typewriter
								options={{
									strings: [
										"Explorer",
										"Problem solver",
										"Tea lover",
										"Polymath",
									],
									autoStart: true,
									pauseFor: 1000,
									loop: true,
									deleteSpeed: 100,
									wrapperClassName:
										"font-accent text-2xl font-medium md:text-4xl lg:text-5xl",
									cursorClassName: "opacity-0",
								}}
							/>

							<p className="mt-4 max-w-xl text-sm text-neutralLight md:mt-6 md:text-base lg:mt-8">
								I am a solution oriented Frontend Web Developer based in
								Cluj-Napoca, Romania. Being a lifelong learner, I am eager to
								take on programming and design challenges that will provide a
								lasting impact on user experience.
							</p>
						</div>
						<div className="flex items-center md:text-lg">
							Download my
							<a
								className="ml-4 flex items-center gap-3 rounded-full bg-accent2 py-1 px-4 font-accent text-primary transition-colors duration-300 hover:bg-primary2 focus:outline focus:outline-1 focus:outline-primary2"
								title="Download Resume"
								href="/Vlad-Dragoi-Resume.pdf"
								target="_blank"
							>
								resume
								<DownloadIcon />
							</a>
						</div>
					</div>

					<div className="mt-16 max-w-xl lg:mt-0 xl:w-[50%] xl:max-w-2xl">
						<MountainScene />
					</div>
				</Container>
			</Section>

			<section className="relative z-[2]">
				<AboutDivider />
			</section>
		</>
	);
}
