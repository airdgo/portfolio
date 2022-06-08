import SkateboardingScene from "../assets/images/SkateboardingScene";

export default function Landing() {
	return (
		<section
			id="landing"
			className="relative flex h-screen w-full snap-start justify-center overflow-hidden bg-dashboard xl:items-center"
		>
			<div className="relative mt-40 flex max-h-[60rem] w-[80%] max-w-7xl flex-col items-center justify-between text-primary2 sm:mt-60 xl:mt-32 xl:flex-row xl:items-start">
				<div>
					<h1 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl xl:text-left">
						Hi, I'm a <span className="text-accent1">Frontend</span> Web
						Developer
					</h1>

					<h2 className="mt-32 mb-8 text-center text-lg text-primary2 sm:w-full sm:text-center sm:text-2xl lg:text-3xl xl:mt-44 xl:text-left">
						And also a sports enthusiast
					</h2>
				</div>
				<div className="relative w-full max-w-xl">
					<SkateboardingScene className="relative z-10 h-full w-full" />
				</div>
				<hr className="absolute bottom-3 left-0 w-full sm:bottom-5 sm:border" />
			</div>
		</section>
	);
}
