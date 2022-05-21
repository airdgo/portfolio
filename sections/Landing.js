import SkateboardingScene2 from "../assets/images/SkateboardingScene2";

export default function Landing() {
	return (
		<section className="relative flex h-screen w-full snap-start justify-center overflow-x-hidden bg-dashboard lg:items-center">
			<div className="relative mt-32 flex w-[80%] max-w-7xl flex-col text-primary2 lg:mt-10 lg:h-[27rem] lg:flex-row">
				<div>
					<h1 className="text-center text-3xl font-bold lg:text-left lg:text-6xl">
						Hi, I'm a Frontend Web
						<br /> Developer
					</h1>

					<h2 className="mt-32 w-36 text-sm text-primary2 sm:w-full sm:text-2xl lg:mt-56 lg:text-4xl">
						And also a sports enthusiast
					</h2>
				</div>

				<SkateboardingScene2 className="absolute bottom-0 right-0 max-h-80 w-[50rem] lg:top-0 lg:max-h-full lg:w-full" />
			</div>
			{/* <SkateboardingScene2 className="absolute bottom-0 right-[-2rem] max-h-80 w-[50rem]" /> */}
		</section>
	);
}
