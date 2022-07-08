import ContactDivider from "../assets/sectionDividers/ContactDivider";
import Section from "../components/Section";
import Container from "../components/Container";
import { EmailIcon } from "../icons";
import Input from "../components/Input";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Alert from "../components/Alert";

export default function Contact() {
	const formRef = useRef();
	const [isVisible, setIsVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	function displayAlert() {
		setIsVisible(true);

		setTimeout(() => {
			setIsVisible(false);
		}, 2000);
	}

	async function sendEmail(e) {
		e.preventDefault();

		const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
		const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

		try {
			setLoading(true);
			await emailjs.sendForm(
				SERVICE_ID,
				TEMPLATE_ID,
				formRef.current,
				PUBLIC_KEY
			);
			formRef.current.reset();
			displayAlert();
		} catch (error) {
			console.log(error.text);
		}
		setLoading(false);
	}

	return (
		<>
			<Section id="contact" addClass="" bgColor="bg-primary">
				<Container addClass="flex-col justify-around items-center lg:justify-between lg:flex-row">
					<div className="lg:mr-16 lg:w-full lg:min-w-[30rem] xl:mr-32">
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
						<form
							ref={formRef}
							onSubmit={sendEmail}
							className="flex w-full max-w-sm flex-col justify-center sm:max-w-md lg:max-w-xl"
						>
							<Input required type="text" id="name" name="name" label="NAME" />
							<Input
								required
								type="email"
								id="email"
								name="email"
								label="EMAIL"
							/>
							<Input required id="message" name="message" label="MESSAGE" />
							<button
								disabled={loading}
								className="mx-auto mt-4 block border px-6 py-1 font-semibold focus:outline focus:outline-1 focus:outline-neutralLight active:scale-105 lg:mr-auto lg:ml-0 lg:px-8 lg:py-2"
							>
								HIT ME UP
							</button>
						</form>
					</div>
					<Alert visible={isVisible}>Thank you!</Alert>
				</Container>
			</Section>
			<section>
				<ContactDivider />
			</section>
		</>
	);
}
