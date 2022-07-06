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
				className="relative grid w-[85%] max-w-5xl bg-primaryDark px-4 py-4 font-primary sm:px-12 sm:py-8 lg:grid-cols-2 lg:px-20 lg:py-12"
			>
				<div>
					<h1 className="mb-4 text-2xl font-semibold xl:text-3xl">
						WEATHER APP
					</h1>
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
							className="flex items-center text-neutralLighter hover:text-inherit"
						>
							<LiveSiteIcon />
							Live
						</a>
						<a
							title="Code"
							href="/"
							target="_blank"
							className="ml-4 flex items-center text-neutralLighter hover:text-inherit"
						>
							<CodeIcon />
							Code
						</a>
					</div>
				</div>

				<div className="lg:ml-8">
					<h1 className="mb-4 mt-8 text-2xl font-semibold lg:mt-0 xl:text-3xl">
						TECHNOLOGIES
					</h1>
					<ul className="flex gap-4 text-sm text-primaryDark">
						<li className="rounded-full bg-neutralLighter py-1 px-4">
							JavaScript
						</li>
						<li className="rounded-full bg-neutralLighter py-1 px-4">SASS</li>
						<li className="rounded-full bg-neutralLighter py-1 px-4">API</li>
					</ul>
				</div>
				<div className="lg:col-span-2">
					<h1 className="mb-4 mt-8 text-2xl font-semibold xl:text-3xl">
						ABOUT
					</h1>
					<p className="fontlight text-sm text-neutralLighter sm:text-base">
						This is an app which displays the weather for a given location for
						the next 8 days and the temperature for the next 6 hours as well as
						the humidity, wind speed, what the tempereture feels like, maximum
						and minimum temperature, UV index, the visibility and pressure.
					</p>
				</div>
				<button
					className="absolute right-4 top-4 sm:right-12 sm:top-8 lg:top-12 lg:right-20"
					onClick={onClose}
				>
					<CloseModalIcon />
				</button>
			</div>
		</div>
	);
}
