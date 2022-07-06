import Image from "next/image";
import weatherAppProjectSrc from "../assets/images/WeatherProject.png";
import { LiveSiteIcon, CodeIcon, CloseModalIcon } from "../icons";

export default function Modal({ open, onClose, children }) {
	if (!open) return null;
	return (
		<div
			onClick={onClose}
			className="fixed top-0 left-0 z-50 grid h-screen w-full place-items-center overflow-auto bg-[#1d1d1fb3] text-primary2"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative grid w-[85%] bg-primaryDark px-4 py-4 font-primary"
			>
				<div>
					<h1 className="mb-4 text-2xl font-semibold">WEATHER APP</h1>
					<div className="max-w-sm">
						<Image
							src={weatherAppProjectSrc}
							alt="tralala"
							className="rounded-md"
						/>
					</div>
					<div className="mt-2 flex items-center">
						<a
							title="Live Site"
							href="/"
							target="_blank"
							className="flex items-center"
						>
							<LiveSiteIcon />
							Live
						</a>
						<a
							title="Code"
							href="/"
							target="_blank"
							className="ml-4 flex items-center"
						>
							<CodeIcon />
							Code
						</a>
					</div>
				</div>
				<div>
					<h1 className="mb-4 mt-8 text-2xl font-semibold">TECHNOLOGIES</h1>
					<ul className="flex gap-4 text-sm text-primaryDark">
						<li className="rounded-full bg-neutralLighter py-1 px-4">
							JavaScript
						</li>
						<li className="rounded-full bg-neutralLighter py-1 px-4">SASS</li>
						<li className="rounded-full bg-neutralLighter py-1 px-4">API</li>
					</ul>
				</div>
				<div>
					<h1 className="mb-4 mt-8 text-2xl font-semibold">ABOUT</h1>
					<p className=" fontlight text-neutralLighter">
						This is an app which displays the weather for a given location for
						the next 8 days and the temperature for the next 6 hours as well as
						the humidity, wind speed, what the tempereture feels like, maximum
						and minimum temperature, UV index, the visibility and pressure.
					</p>
				</div>
				<button className="absolute right-4 top-4" onClick={onClose}>
					<CloseModalIcon />
				</button>
			</div>
		</div>
	);
}
