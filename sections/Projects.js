import ProjectsDivider from "../assets/sectionDividers/ProjectsDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import Image from "next/image";
import ProjectWraper from "../components/ProjectWraper";
import { projects } from "../constants";
import Modal from "../components/Modal";
import { useState, useRef } from "react";

export default function Projects() {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState({});
	const triggerRef = useRef(null);

	function openModal(project, e) {
		triggerRef.current = e.currentTarget;
		setModalContent(project);
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
		triggerRef.current?.focus();
	}

	const renderProjects = (projects) =>
		projects.map((project) => (
			<ProjectWraper
				key={project.id}
				role="button"
				tabIndex="0"
				aria-label={`View ${project.name}`}
				onClick={(e) => openModal(project, e)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						openModal(project, e);
					}
				}}
			>
				<Image
					alt={project.name}
					src={project.imageSrc}
					placeholder="blur"
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full cursor-pointer place-items-center bg-[#1d1d1fb3] px-2 text-center font-primary text-primary2 opacity-0 transition-all duration-500 ease-in-out hover:opacity-100 focus-within:opacity-100">
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
				<Container addClass="flex-col justify-between mt-8">
					<h1 className="mb-16 text-center text-5xl font-bold md:mb-20 md:text-6xl lg:mb-40 lg:text-left lg:text-7xl">
						PROJECTS
					</h1>

					<div className="grid h-full justify-items-center gap-4 lg:grid-cols-3">
						{renderProjects(projects)}
					</div>
					<Modal
						open={isOpen}
						content={modalContent}
						onClose={closeModal}
					/>
				</Container>
			</Section>
			<section className="relative z-[2]">
				<ProjectsDivider />
			</section>
		</>
	);
}
