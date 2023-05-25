import Link from "next/link"

export default function Logo() {
	return (
		<Link
			href="/"
			className="flex items-center justify-center ml-2 md:mr-24 gap-3"
		>
			<svg
				className="h-12 w-12 fill-white stroke-gray-500"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
				/>
			</svg>
			<span className="self-center text-2xl font-semibold sm:text-2xl whitespace-nowrap ">
				Metro House
			</span>
		</Link>
	)
}
