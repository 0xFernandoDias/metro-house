"use client"
// https://flowbite.com/docs/components/timeline/#grouped-timeline

// (comment id)
// first comment AUTHENTICATED
// comment On AUTHENTICATED
// use Who react
// use who collected publication??
// use who mirrored publication??
// use who reacted??
// created At
// hidden?
// id
// Author - profile - @handle
// 	Contacts (Followers, Following, Mutual)
// 	picture
// 	Follow - AUTHENTICATE AT LEAST WITH METAMASK hash
// 	Name
// 	Proof of humanity
// useEncryptedPublication
// LOGIN TO DECRYPT - https://testnet.lenster.xyz/posts/0x1b-0x0133
// canObserverDecrypt?
// can COMMENT, can MIRROR, Has Collected by me? AUTHENTICATED
// Metadata
// mirrors
// reaction
// Comments count, total amount of collects, total amount of mirrors, total upvotes, total downvotes
// Comments
// useCreateComment AUTHENTICATED https://flowbite.com/docs/forms/textarea/#comment-box (publicationId, profileId, Content, ContentFocus, locale, collect, reference)
// use Reaction?? AUTHENTICATED

export function Comment() {
	return (
		<div className="my-5">
			<form>
				<div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
					<div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
						<label htmlFor="comment" className="sr-only">
							Your comment
						</label>
						<textarea
							id="comment"
							rows={4}
							className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
							placeholder="Write a comment..."
							required
						></textarea>
					</div>
					<div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
						<button
							type="submit"
							className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
						>
							Post comment
						</button>
						<div className="flex pl-0 space-x-1 sm:pl-2">
							<button
								type="button"
								className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Attach file</span>
							</button>
							<button
								type="button"
								className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Set location</span>
							</button>
							<button
								type="button"
								className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Upload image</span>
							</button>
						</div>
					</div>
				</div>
			</form>
			<p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
				Remember, contributions to this topic should follow our{" "}
				<a
					href="#"
					className="text-blue-600 dark:text-blue-500 hover:underline"
				>
					Community Guidelines
				</a>
				.
			</p>

			<ol className="relative border-l border-gray-200 dark:border-gray-700 m-4">
				<li className="mb-10 ml-6">
					<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<img
							className="rounded-full"
							width={40}
							height={40}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt=""
						/>
					</span>
					<div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
						<time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
							just now
						</time>
						<div className="text-sm font-normal text-gray-500 dark:text-gray-300">
							Bonnie moved{" "}
							<a
								href="#"
								className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
							>
								Jese Leos
							</a>{" "}
							to{" "}
							<span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
								Funny Group
							</span>
						</div>
					</div>
				</li>
				<li className="mb-10 ml-6">
					<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<img
							className="rounded-full"
							width={40}
							height={40}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt=""
						/>
					</span>
					<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
						<div className="items-center justify-between mb-3 sm:flex">
							<time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
								2 hours ago
							</time>
							<div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
								Thomas Lean commented on{" "}
								<a
									href="#"
									className="font-semibold text-gray-900 dark:text-white hover:underline"
								>
									Flowbite Pro
								</a>
							</div>
						</div>
						<div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
							Hi yall! I wanted to share a webinar zeroheight is having
							regarding how to best measure your design system! This is the
							second session of our new webinar series on #DesignSystems
							discussions where well be speaking about Measurement.
						</div>
					</div>
				</li>
				<li className="ml-6">
					<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<img
							className="rounded-full"
							width={40}
							height={40}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt=""
						/>
					</span>
					<div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
						<time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
							1 day ago
						</time>
						<div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
							Jese Leos has changed{" "}
							<a
								href="#"
								className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
							>
								Pricing page
							</a>{" "}
							task status to{" "}
							<span className="font-semibold text-gray-900 dark:text-white">
								Finished
							</span>
						</div>
					</div>
				</li>
			</ol>
		</div>
	)
}
