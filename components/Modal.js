import Image from "next/image";
import { DemoIcon, CodeIcon, CloseModalIcon } from "../icons";

export default function Modal({ open, onClose, content }) {
	if (!open) return null;
	return (
		<div
			onClick={onClose}
			className="fixed top-0 left-0 z-[200] grid h-screen w-full place-items-center overflow-auto bg-[#1d1d1fb3] text-primary2"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative my-16 grid w-[85%] max-w-5xl bg-primaryDark px-4 py-4 font-primary sm:px-12 sm:py-8 lg:grid-cols-2 lg:px-20 lg:py-12"
			>
				<div>
					<h1 className="mb-4 mr-8 text-2xl font-semibold xl:text-3xl">
						{content.name}
					</h1>
					<div className="max-w-sm">
						<Image
							src={content.imageSrc}
							alt={content.name}
							className="rounded-md"
						/>
					</div>
					<div className="mt-2 flex items-center gap-4">
						{
							content.demo && <a
								title="Live Site"
								href={content.demo}
								target="_blank"
								rel="noreferrer"
								className="flex items-center text-neutralLighter hover:text-inherit focus:outline focus:outline-1 focus:outline-primary2"
							>
								<DemoIcon />
								Demo
							</a>
						}
						{
							content.code && <a
								title="Code"
								href={content.code}
								target="_blank"
								rel="noreferrer"
								className="flex items-center text-neutralLighter hover:text-inherit focus:outline focus:outline-1 focus:outline-primary2"
							>
								<CodeIcon />
								Code
							</a>
						}
					</div>
				</div>

				<div className="lg:ml-8">
					<h1 className="mb-4 mt-8 text-2xl font-semibold lg:mt-0 xl:text-3xl">
						TECHNOLOGIES
					</h1>
					<ul className="flex w-full flex-wrap gap-4 text-sm text-primaryDark">
						{content.technologies.map((technologie) => (
							<li
								key={technologie}
								className="rounded-full bg-neutralLighter py-1 px-4"
							>
								{technologie}
							</li>
						))}
					</ul>
				</div>
				<div className="lg:col-span-2">
					<h1 className="mb-4 mt-8 text-2xl font-semibold xl:text-3xl">
						ABOUT
					</h1>
					<p className="fontlight text-sm text-neutralLighter sm:text-base">
						{content.about}
					</p>
				</div>
				<button
					className="absolute right-4 top-4 focus:outline focus:outline-1 focus:outline-primary2 sm:right-12 sm:top-8 lg:top-12 lg:right-20"
					onClick={onClose}
				>
					<CloseModalIcon />
				</button>
			</div>
		</div>
	);
}
