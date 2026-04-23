import "../styles/globals.css";
import Head from "next/head";

const URL = "https://vladdragoi.com";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Vlad Dragoi</title>
				<meta name="description" content="Software engineer building across web, mobile, and cloud." />
				<meta name="author" content="Vlad Dragoi" />
				<link rel="icon" href="/skatePark.ico" />

				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={URL} />
				<meta property="og:title" content="Vlad Dragoi — Full Stack Developer" />
				<meta property="og:description" content="Software engineer building across web, mobile, and cloud." />
				<meta property="og:image" content={`${URL}/og-image.png`} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Vlad Dragoi — Full Stack Developer" />
				<meta name="twitter:description" content="Software engineer building across web, mobile, and cloud." />
				<meta name="twitter:image" content={`${URL}/og-image.png`} />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
