import ProjectsDivider from "../assets/sectionDividers/ProjectsDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import Image from "next/image";
import ProjectWraper from "../components/ProjectWraper";
import { projects } from "../constants";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Projects() {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState({});

	const renderProjects = (projects) =>
		projects.map((project) => (
			<ProjectWraper
				key={project.name}
				onClick={() => {
					setModalContent(project);
					setIsOpen(true);
				}}
			>
				<Image
					alt={project.name}
					src={project.imageSrc}
					layout="fill"
					objectFit="cover"
				/>
				<div className="absolute inset-0 grid h-full w-full cursor-pointer place-items-center bg-[#1d1d1fb3] px-2 text-center font-primary text-primary2 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100">
					<div className="text-3xl font-medium md:font-bold lg:text-4xl">
						{project.name}
					</div>
				</div>
			</ProjectWraper>
		));

	return (
		<>
			<Section
				id="projects"
				bgColor="bg-primary2"
				addClass="text-primary items-center"
			>
				<Container addClass="flex-col justify-between">
					<h1 className="mb-16 text-center text-5xl font-bold md:mb-20 md:text-6xl lg:mb-40 lg:text-left lg:text-7xl">
						WORK
					</h1>

					<div className="grid h-full justify-items-center gap-4 lg:grid-cols-3">
						{renderProjects(projects)}
					</div>
					<Modal
						open={isOpen}
						content={modalContent}
						onClose={() => setIsOpen(false)}
					/>
				</Container>
			</Section>
			<section>
				<ProjectsDivider />
			</section>
		</>
	);
}
