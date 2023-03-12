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
	const [error, setError] = useState(false);
	const alertMessage = error ? "Ups! Something went wrong!" : "Thank you!";

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
			setError(false);
			await emailjs.sendForm(
				SERVICE_ID,
				TEMPLATE_ID,
				formRef.current,
				PUBLIC_KEY
			);
			formRef.current.reset();
		} catch (error) {
			console.error(error.text);
			setError(true);
		}
		displayAlert();
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
								Let's create something amazing
							</h2>
							<p className="mt-4 max-w-xl text-sm text-neutralLight md:mt-6 md:text-base lg:mt-8">
								Do you want to collaborate, ask a question, or simply want to
								say hello? I'm just a click away!
							</p>

							<a
								href="mailto:vladdragoi1@gmail.com"
								className="mt-4 flex items-center lg:mt-8"
							>
								<EmailIcon className="mr-2" />
								vladdragoi1@gmail.com
							</a>
						</div>
					</div>
					<div className="mt-12 flex w-full items-center justify-center lg:mt-0 lg:justify-end">
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
								className="mx-auto mt-4 block border bg-primary2 bg-[url('../assets/button-dark.svg')] bg-[length:140%] bg-[position:400%] bg-no-repeat px-6 py-1 font-semibold text-primary transition-all duration-500 hover:bg-[position:50%] hover:text-primary2 focus:outline focus:outline-1 focus:outline-neutralLight active:scale-105 lg:mr-auto lg:ml-0 lg:px-8 lg:py-2"
							>
								HIT ME UP
							</button>
						</form>
					</div>
					<Alert visible={isVisible} error={error}>
						{alertMessage}
					</Alert>
				</Container>
			</Section>
			<section className="relative z-[2]">
				<ContactDivider />
			</section>
		</>
	);
}
