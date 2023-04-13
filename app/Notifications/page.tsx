"use client"

export default function Notifications({
	params,
}: {
	params: { slug: string }
}) {
	return (
		<div>
			<div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
				<time className="text-xl font-semibold text-gray-900 dark:text-white">
					January 13th, 2022
				</time>
				<ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
					<li>
						<a
							href="#"
							className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<div className="flex-shrink-0">
								<img
									className="rounded-full mx-3 sm:mb-0 "
									width={48}
									height={48}
									src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									alt="Bonnie image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
									<svg
										className="w-3 h-3 text-white"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								<div className="text-base font-normal">
									<span className="font-medium text-gray-900 dark:text-white">
										Jese Leos
									</span>{" "}
									likes{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										Bonnie Greens
									</span>{" "}
									post in{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										{" "}
										How to start with Flowbite library
									</span>
								</div>
								<div className="text-lg font-normal">
									I wanted to share a webinar zeroheight.
								</div>
								<span className="inline-flex items-center text-md font-normal text-gray-500 dark:text-gray-400">
									<svg
										aria-hidden="true"
										className="w-3 h-3 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
											clip-rule="evenodd"
										></path>
									</svg>
									Public
								</span>
							</div>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<div className="flex-shrink-0">
								<img
									className="rounded-full mx-3 sm:mb-0 "
									width={48}
									height={48}
									src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									alt="Bonnie image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
									<svg
										className="w-3 h-3 text-white"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<div className="text-base font-normal text-gray-600 dark:text-gray-400">
									<span className="font-medium text-gray-900 dark:text-white">
										Bonnie Green
									</span>{" "}
									react to{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										Thomas Leans
									</span>{" "}
									comment
								</div>
								<span className="inline-flex items-center text-md font-normal text-gray-500 dark:text-gray-400">
									<svg
										aria-hidden="true"
										className="w-3 h-3 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
											clip-rule="evenodd"
										></path>
										<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
									</svg>
									Private
								</span>
							</div>
						</a>
					</li>
				</ol>
			</div>
			<div className="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
				<time className="text-xl font-semibold text-gray-900 dark:text-white">
					January 12th, 2022
				</time>
				<ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
					<li>
						<a
							href="#"
							className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<div className="flex-shrink-0">
								<img
									className="rounded-full mx-3 sm:mb-0 "
									width={48}
									height={48}
									src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									alt="Bonnie image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
									<svg
										className="w-3 h-3 text-white"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								<div className="text-base font-normal">
									<span className="font-medium text-gray-900 dark:text-white">
										Laura Romeros
									</span>{" "}
									likes{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										Bonnie Greens
									</span>{" "}
									post in{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										{" "}
										How to start with Flowbite library
									</span>
								</div>
								<div className="text-lg font-normal">
									I wanted to share a webinar zeroheight.
								</div>
								<span className="inline-flex items-center text-md font-normal text-gray-500 dark:text-gray-400">
									<svg
										aria-hidden="true"
										className="w-3 h-3 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
											clip-rule="evenodd"
										></path>
										<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
									</svg>
									Private
								</span>
							</div>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<div className="flex-shrink-0">
								<img
									className="rounded-full mx-3 sm:mb-0 "
									width={48}
									height={48}
									src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									alt="Bonnie image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
									<svg
										className="w-3 h-3 text-white"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<div className="text-base font-normal text-gray-600 dark:text-gray-400">
									<span className="font-medium text-gray-900 dark:text-white">
										Mike Willi
									</span>{" "}
									react to{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										Thomas Leans
									</span>{" "}
									comment
								</div>
								<span className="inline-flex items-center text-md font-normal text-gray-500 dark:text-gray-400">
									<svg
										aria-hidden="true"
										className="w-3 h-3 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
											clip-rule="evenodd"
										></path>
									</svg>
									Public
								</span>
							</div>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<div className="flex-shrink-0">
								<img
									className="rounded-full mx-3 sm:mb-0 "
									width={48}
									height={48}
									src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									alt="Bonnie image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
									<svg
										className="w-3 h-3 text-white"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								<div className="text-base font-normal">
									<span className="font-medium text-gray-900 dark:text-white">
										Jese Leos
									</span>{" "}
									likes{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										Bonnie Greens
									</span>{" "}
									post in{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										{" "}
										How to start with Flowbite library
									</span>
								</div>
								<div className="text-lg font-normal">
									I wanted to share a webinar zeroheight.
								</div>
								<span className="inline-flex items-center text-md font-normal text-gray-500 dark:text-gray-400">
									<svg
										aria-hidden="true"
										className="w-3 h-3 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
											clip-rule="evenodd"
										></path>
									</svg>
									Public
								</span>
							</div>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<div className="flex-shrink-0">
								<img
									className="rounded-full mx-3 sm:mb-0 "
									width={48}
									height={48}
									src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									alt="Bonnie image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
									<svg
										className="w-3 h-3 text-white"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								<div className="text-base font-normal">
									<span className="font-medium text-gray-900 dark:text-white">
										Bonnie Green
									</span>{" "}
									likes{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										Bonnie Greens
									</span>{" "}
									post in{" "}
									<span className="font-medium text-gray-900 dark:text-white">
										{" "}
										Top figma designs
									</span>
								</div>
								<div className="text-lg font-normal">
									I wanted to share a webinar zeroheight.
								</div>
								<span className="inline-flex items-center text-md font-normal text-gray-500 dark:text-gray-400">
									<svg
										aria-hidden="true"
										className="w-3 h-3 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
											clip-rule="evenodd"
										></path>
										<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
									</svg>
									Private
								</span>
							</div>
						</a>
					</li>
				</ol>
			</div>
		</div>
	)
}

// AUTHENTICATED
// filters
// https://flowbite.com/docs/components/badge/#notification-badge
// https://flowbite.com/docs/components/dropdowns/#notification-bell
// https://flowbite.com/docs/components/timeline/#grouped-timeline
// https://flowbite.com/docs/components/toast/#push-notification
// typename: new follower notification, collect, comment, mention, mirror, reaction
// created at
// wallet. address, default profile. handle, id, name, on chain identity, picture
