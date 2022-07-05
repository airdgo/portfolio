import ProjectsDivider from "../assets/sectionDividers/ProjectsDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import Image from "next/image";
import ProjectWraper from "../components/ProjectWraper";
import { projects } from "../constants";

export default function Projects() {
	const renderProjects = (projects) =>
		projects.map((project) => (
			<ProjectWraper key={project.name}>
				<Image alt={project.name} src={project.src} />
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
						{renderProjects(projects)}
					</div>
				</Container>
			</Section>
			<section>
				<ProjectsDivider />
			</section>
		</>
	);
}
