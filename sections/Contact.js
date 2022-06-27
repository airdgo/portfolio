import ContactDivider from "../assets/sectionDividers/ContactDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import { EmailIcon } from "../icons";
import Input from "../components/Input";

export default function Contact() {
	return (
		<>
			<Section id="contact" addClass="" bgColor="bg-primary">
				<Container addClass="flex-col justify-around items-center lg:justify-between lg:flex-row">
					<div className="lg:mr-8 lg:w-full lg:min-w-[30rem]">
						<h1 className="mb-16 text-4xl font-bold md:mb-20 md:text-6xl lg:text-7xl xl:mb-24">
							CONTACT
						</h1>
						<div>
							<h2 className="font-accent text-2xl font-medium md:text-4xl">
								Doler ipsum sit amet
							</h2>
							<p className="mt-4 max-w-xl text-sm text-neutralLight md:mt-6 md:text-base lg:mt-8">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								dapibus non elit vitae porttitor.
							</p>
							<div className="mt-4 flex items-center lg:mt-8">
								<EmailIcon className="mr-2" /> vladdragoi1@gmail.com
							</div>
						</div>
					</div>
					<div className="flex w-full items-center justify-center lg:justify-end">
						<form className="flex w-full max-w-sm flex-col justify-center sm:max-w-md lg:max-w-lg">
							<Input type="text" id="name" name="name" label="NAME" />
							<Input type="email" id="email" name="email" label="EMAIL" />
							<Input id="message" name="message" label="MESSAGE" />
							<button className="mx-auto mt-4 block border px-6 py-1 font-semibold focus:outline focus:outline-1 focus:outline-neutralLight lg:mr-auto lg:ml-0 lg:px-8 lg:py-2">
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
