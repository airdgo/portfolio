import HomeDivider from "../assets/sectionDividers/HomeDivider";
import SkateboardingScene from "../assets/images/SkateboardingScene";
import Section from "../components/Section";
import Container from "../components/Container";

export default function Home() {
	return (
		<>
			<Section
				id="home"
				addClass="sticky top-0 lg:items-center"
				bgColor="bg-dashboard"
			>
				<Container addClass="flex-col items-center justify-around lg:justify-between lg:flex-row">
					<div className="lg:min-w-[30rem]">
						<div className="text-center text-3xl font-bold sm:text-4xl md:text-6xl md:leading-normal lg:text-left">
							<h1>Hi, I'm Vlad.</h1>
							<h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-normal">
								A <span className="text-accent1"> Full Stack </span>
								Developer
							</h2>
						</div>

						<h2 className="mt-32 mb-8 hidden text-center text-lg text-primary2 sm:w-full sm:text-center sm:text-2xl lg:block lg:text-left lg:text-3xl xl:mt-44">
							And also a sports enthusiast
						</h2>
					</div>

					<div className="relative mt-14 w-11/12 max-w-xl lg:mt-0 lg:w-[70%] lg:self-end xl:max-w-2xl">
						<SkateboardingScene
							className="relative z-10 h-full w-full"
							hLine="lg:hidden"
						/>
					</div>
					<hr className="absolute bottom-[0.8rem] left-0 hidden w-full border-2 bg-primary2 lg:block xl:bottom-[1.3rem]" />
				</Container>
			</Section>
			<section className="relative z-[2]">
				<HomeDivider />
			</section>
		</>
	);
}
