import HomeDivider from "../assets/images/HomeDivider";
import SkateboardingScene from "../assets/images/SkateboardingScene";

export default function Home() {
	return (
		<>
			<section
				id="home"
				className="relative flex min-h-screen w-full justify-center overflow-auto bg-dashboard xl:items-center"
			>
				<div className="relative mt-28 flex max-h-[60rem] w-[85%] max-w-[90rem] flex-col items-center justify-around text-primary2 lg:justify-between xl:mt-32 xl:flex-row">
					<div className="xl:w-[70%]">
						<div className="text-center text-3xl font-bold sm:text-4xl md:text-6xl md:leading-normal xl:text-left">
							<h1>Hi, I'm Vlad.</h1>
							<h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-normal">
								A <span className="text-accent1"> Frontend </span>
								<span className="inline-block">Web Developer</span>
							</h2>
						</div>

						<h2 className="mt-32 mb-8 text-center text-lg text-primary2 sm:w-full sm:text-center sm:text-2xl lg:text-3xl xl:mt-44 xl:text-left">
							And also a sports enthusiast
						</h2>
					</div>
					<div className="relative mt-14 max-w-xl xl:mt-0 xl:w-[70%] xl:max-w-2xl xl:self-end">
						<SkateboardingScene
							className="relative z-10 h-full w-full"
							hLine="xl:hidden"
						/>
					</div>
					<hr className="absolute bottom-3 left-0 hidden w-full border-2 bg-primary2 sm:bottom-[1.35rem] xl:block" />
				</div>
			</section>
			<section>
				<HomeDivider />
			</section>
		</>
	);
}
