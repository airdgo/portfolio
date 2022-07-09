import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Vlad Dragoi</title>
				<meta name="my personal webiste" content="Created using NextJS" />
				<link rel="icon" href="/skatePark.ico" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
