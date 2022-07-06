export default function Modal({ open, onClose, children }) {
	if (!open) return null;
	return (
		<div
			onClick={onClose}
			className="fixed top-0 left-0 z-50 grid h-screen w-full place-items-center overflow-auto bg-[#000000e1] p-8 text-primary2"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="h-[20rem] w-[40rem] outline"
			>
				{children}
			</div>
		</div>
	);
}
