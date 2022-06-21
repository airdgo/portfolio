import Header from "../sections/Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="h-full scroll-smooth">{children}</main>
		</>
	);
}
