import Image from "next/image"
import Link from "next/link"

export function ProfileHeader() {
	return (
		<div className="flex items-center space-x-4">
			{/* Avatar */}
			<Image
				className="rounded-full"
				width={48}
				height={48}
				src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
				alt=""
			/>
			{/* Profile Info */}
			<div className="space-y-1 font-medium dark:text-white">
				<Link className="text-xl flex flex-row gap-3" href="/Profile">
					Jese Leos
					<p
						className="text-lg font-medium text-gray-900 truncate dark:text-gray-300"
						role="none"
					>
						@neil.sims
					</p>
					<div className="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
						<svg
							aria-hidden="true"
							className="w-3.5 h-3.5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							></path>
						</svg>
						<span className="sr-only">Verified</span>
					</div>
				</Link>
				<div className="text-md text-gray-500 dark:text-gray-400">
					<p>257 followers, 18 mutual</p>
				</div>
			</div>
		</div>
	)
}
