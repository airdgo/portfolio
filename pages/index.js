import Layout from "../layout/Layout";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
	return (
		<Layout>
			<Landing />
			<About />
			<Projects />
			<Contact />
		</Layout>
	);
}
