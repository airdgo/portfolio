import Header from "../sections/Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="max-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
				{children}
			</main>
		</>
	);
}
