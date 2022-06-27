import ContactDivider from "../assets/sectionDividers/ContactDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import { EmailIcon } from "../icons";
import Input from "../components/Input";

export default function Contact() {
	return (
		<>
			<Section id="contact" addClass="" bgColor="bg-primary">
				<Container addClass="flex-col">
					<div className="">
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
					<div className="flex w-full items-center justify-center">
						<form className="flex w-full max-w-md flex-col justify-center">
							<label for="name">NAME</label>
							<Input type="text" id="name" name="name" />
							<label for="email">EMAIL</label>
							<Input type="email" id="email" name="email" />
							<label for="message">MESSAGE</label>
							<textarea
								id="message"
								name="message"
								className="mb-2 mt-1 block resize-none rounded bg-primaryLight px-2 py-1 focus:outline focus:outline-1 focus:outline-neutralLight"
							></textarea>
							<button className="mx-auto mt-4 block border-2 px-6 py-1 font-semibold focus:outline focus:outline-1 focus:outline-neutralLight">
								HIT ME UP
							</button>
						</form>
					</div>
				</Container>
			</Section>
			<section>
				<ContactDivider />
			</section>
		</>
	);
}
