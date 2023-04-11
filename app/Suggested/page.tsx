"use client"

export default function Suggested({ params }: { params: { slug: string } }) {
	return (
		<div>
			<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
				<li className="pb-3 sm:pb-4">
					<div className="flex items-center space-x-4">
						<div className="flex-shrink-0">
							<img
								className="rounded-full"
								width={44}
								height={44}
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt="Neil image"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
								Neil Sims
							</p>
							<p className="text-sm text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							Follow
						</button>
					</div>
				</li>
				<li className="py-3 sm:py-4">
					<div className="flex items-center space-x-4">
						<div className="flex-shrink-0">
							<img
								className="rounded-full"
								width={44}
								height={44}
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt="Neil image"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
								Bonnie Green
							</p>
							<p className="text-sm text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							Follow
						</button>
					</div>
				</li>
				<li className="py-3 sm:py-4">
					<div className="flex items-center space-x-4">
						<div className="flex-shrink-0">
							<img
								className="rounded-full"
								width={44}
								height={44}
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt="Neil image"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
								Michael Gough
							</p>
							<p className="text-sm text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							Follow
						</button>
					</div>
				</li>
				<li className="py-3 sm:py-4">
					<div className="flex items-center space-x-4">
						<div className="flex-shrink-0">
							<img
								className="rounded-full"
								width={44}
								height={44}
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt="Neil image"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
								Thomas Lean
							</p>
							<p className="text-sm text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							Follow
						</button>
					</div>
				</li>
				<li className="pt-3 pb-0 sm:pt-4">
					<div className="flex items-center space-x-4">
						<div className="flex-shrink-0">
							<img
								className="rounded-full"
								width={44}
								height={44}
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt="Neil image"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
								Lana Byrd
							</p>
							<p className="text-sm text-gray-500 truncate dark:text-gray-400">
								@neil.sims
							</p>
						</div>
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							Follow
						</button>
					</div>
				</li>
			</ul>
		</div>
	)
}

// https://flowbite.com/docs/typography/lists/#advanced-layout
// @handle
// Contacts (Followers, Following, Mutual)
// bio
// picture - https://flowbite.com/docs/components/avatar/
// Follow AUTHENTICATE AT LEAST WITH METAMASK hash  - https://flowbite.com/docs/components/buttons/#default-button
// Name
// Proof of humanity - https://flowbite.com/docs/components/badge/#badges-with-icon
