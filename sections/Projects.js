import ProjectsDivider from "../assets/sectionDividers/ProjectsDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import weatherThb from "../assets/images/WeatherProject.png";
import Image from "next/image";
import ProjectWraper from "../components/ProjectWraper";

export default function Projects() {
	const projectsSrc = [weatherThb, weatherThb, weatherThb];

	const renderProjects = (projectsSrc) =>
		projectsSrc.map((projectSrc) => (
			<ProjectWraper>
				<Image alt="tralala" src={projectSrc} />
			</ProjectWraper>
		));

	return (
		<>
			<Section
				id="projects"
				bgColor="bg-primary2"
				addClass="text-primary items-center"
			>
				<Container addClass="flex-col justify-around items-center lg:items-start">
					<h1 className="mb-16 text-4xl font-bold md:mb-20 md:text-6xl lg:mb-40 lg:text-7xl">
						WORK
					</h1>

					<div className="grid justify-items-center gap-4 lg:grid-cols-3">
						{renderProjects(projectsSrc)}
					</div>
				</Container>
			</Section>
			<section>
				<ProjectsDivider />
			</section>
		</>
	);
}
