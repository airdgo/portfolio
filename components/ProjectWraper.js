export default function ProjectWraper({ children }) {
	return (
		<div className="relative aspect-video max-h-[15rem] min-h-[10rem] w-full max-w-[28rem]">
			{children}
		</div>
	);
}
