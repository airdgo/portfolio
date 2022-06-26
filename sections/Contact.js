import ContactDivider from "../assets/sectionDividers/ContactDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import { EmailIcon } from "../icons";

export default function Contact() {
	return (
		<>
			<Section id="contact" addClass="" bgColor="bg-primary">
				<Container addClass="flex-col">
					<div>
						<h1 className="mb-16 text-4xl font-bold md:mb-20 md:text-6xl lg:text-7xl xl:mb-24">
							CONTACT
						</h1>
						<div className="mb-6 md:mb-12 xl:mb-16">
							<h2 className="font-accent text-2xl font-medium md:text-4xl lg:text-5xl">
								Doler ipsum sit amet
							</h2>
							<p className="mt-4 max-w-xl text-sm text-neutralLight md:mt-6 md:text-base lg:mt-8">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								dapibus non elit vitae porttitor.
							</p>
							<div className="mt-4 flex items-center">
								<EmailIcon className="mr-2" /> vladdragoi1@gmail.com
							</div>
						</div>
					</div>
					<form className="flex flex-col">
						<label for="name">NAME</label>
						<input type="text" id="name" name="name" />
						<label for="email">EMAIL</label>
						<input type="email" id="email" name="email" />
						<label for="message">MESSAGE</label>
						<textarea></textarea>
					</form>
				</Container>
			</Section>
			<section>
				<ContactDivider />
			</section>
		</>
	);
}
