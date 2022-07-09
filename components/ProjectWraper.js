export default function ProjectWraper({ children, ...props }) {
	return (
		<div
			{...props}
			className="relative aspect-video max-h-[15rem] min-h-[10rem] w-full max-w-[28rem] shadow-xl"
		>
			{children}
		</div>
	);
}
