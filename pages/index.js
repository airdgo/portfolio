import Layout from "../layout/Layout";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function App() {
	return (
		<Layout>
			<Home />
			<About />
			<Projects />
			<Contact />
		</Layout>
	);
}
