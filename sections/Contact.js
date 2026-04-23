import ContactDivider from "../assets/sectionDividers/ContactDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import { EmailIcon } from "../icons";

export default function Contact() {
	return (
		<>
			<Section id="contact" addClass="" bgColor="bg-primary">
				<Container addClass="flex-col justify-around lg:justify-center">
					<h1 className="mb-16 text-4xl font-bold md:mb-20 md:text-6xl lg:text-7xl xl:mb-24">
						CONTACT
					</h1>
					<div>
						<h2 className="font-accent text-2xl font-medium md:text-4xl">
							Let's create something amazing
						</h2>
						<p className="mt-4 max-w-xl text-sm text-neutralLight md:mt-6 md:text-base lg:mt-8">
							Do you want to collaborate, ask a question, or simply want to
							say hello? I'm just a click away!
						</p>
						<a
							href="mailto:hello@vladdragoi.com"
							className="mt-4 flex items-center gap-2 lg:mt-8 hover:text-neutralLight transition-colors"
						>
							<EmailIcon />
							hello@vladdragoi.com
						</a>
					</div>
				</Container>
			</Section>
			<section className="relative z-[2]">
				<ContactDivider />
			</section>
		</>
	);
}
