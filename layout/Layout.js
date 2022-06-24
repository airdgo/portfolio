import Header from "../sections/Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
