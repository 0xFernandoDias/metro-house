import Link from "next/link"
import Image from "next/image"

export default function Logo() {
	return (
		<Link href="/" className="flex items-center justify-center sm:ml-10 gap-3">
			<Image src="/logo.png" alt="" height={60} width={60} />
		</Link>
	)
}
