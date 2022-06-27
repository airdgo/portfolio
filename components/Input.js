export default function Input({ ...props }) {
	return (
		<input
			{...props}
			className="mb-2 mt-1 block rounded bg-primaryLight px-2 py-1 focus:outline focus:outline-1 focus:outline-neutralLight"
		/>
	);
}
