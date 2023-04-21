"use client"
import Image from "next/image"
import Link from "next/link"
import { WhoReactedTabs } from "../components/WhoReactedTabs"

export default function WhoReacted() {
	return (
		<div className="flex flex-col gap-6">
			<WhoReactedTabs />
			<div className="flex flex-col gap-6">
				<a className="text-xl font-semibold">Suggested</a>

				{/* Profiles */}
				<ul className="max-w-md gap-6 flex flex-col">
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
					{/* Profile Info */}
					<li className="flex items-center space-x-4">
						<Image
							className="rounded-full flex-shrink-0"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="Neil image"
						/>

						<div className="flex-1 min-w-0">
							<Link
								href={"/Profile"}
								className="text-xl font-medium text-gray-900 truncate dark:text-white"
							>
								Neil Sims
							</Link>
							<p className="text-xl text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>

						{/* Follow Button */}
						<button
							type="button"
							className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							<svg
								className="h-6 w-6 fill-white stroke-white"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
								/>
							</svg>
							Follow
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
