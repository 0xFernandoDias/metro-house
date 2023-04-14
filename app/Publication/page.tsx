"use client"
import Link from "next/link"
import { Comment } from "../components/Comments"

export default function Publication({ params }: { params: { slug: string } }) {
	return (
		<div
			style={{ display: "flex", flexDirection: "column", gap: "14px" }}
			className="max-w-5xl"
		>
			{/* <Link className="font-bold" href={`/profile/${data.profile.handle}`}>
		@{data.profile.handle}
	</Link>
	<span>{data.metadata.content}</span> */}

			<article>
				<div className="flex items-center mb-4 space-x-4">
					<img
						className="rounded-full"
						width={48}
						height={48}
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>
					<div className="space-y-1 font-medium dark:text-white">
						<Link className="text-xl flex flex-row gap-3" href="/Profile">
							Jese Leos{" "}
							<p
								className="text-lg font-medium text-gray-900 truncate dark:text-gray-300"
								role="none"
							>
								@neil.sims
							</p>
							<span className=" text-blue-800 text-md font-medium inline-flex items-center px-0.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
								<svg
									aria-hidden="true"
									className="w-3 h-3"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</span>
						</Link>

						<div className="text-md text-gray-500 dark:text-gray-400">
							<p>257 followers, 18 mutual</p>
						</div>
					</div>
				</div>
				<time
					dateTime="2020-08-25 19:00"
					className="block text-md text-gray-500 dark:text-gray-400"
				>
					Created At August 25
				</time>
				<p className="mb-2 text-lg  dark:text-gray-400">
					This is my third Invicta Pro Diver. They are just fantastic value for
					money. This one arrived yesterday and the first thing I did was set
					the time, popped on an identical strap from another Invicta and went
					in the shower with it to test the waterproofing.... No problems.
				</p>
				<p className="mb-3 text-lg  dark:text-gray-400">
					It is obviously not the same build quality as those very expensive
					watches. But that is like comparing a Citroën to a Ferrari. This watch
					was well under £100! An absolute bargain.
				</p>
				<a
					href="#"
					className="block mb-5 text-md font-medium text-blue-600 hover:underline dark:text-blue-500"
				>
					Read more
				</a>
				<aside>
					<div className="flex mb-3 -space-x-3">
						<img
							className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt=""
						/>
						<img
							className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt=""
						/>
						<img
							className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt=""
						/>
						<a
							className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
							href="#"
						>
							+3
						</a>
					</div>
					<p className="mt-1 text-md text-gray-500 dark:text-gray-400">
						19 people found this helpful
					</p>
					<div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Like
						</a>
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Dislike
						</a>
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Comment
						</a>
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Mirror
						</a>
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Collect
						</a>
					</div>
				</aside>
				<Comment />
			</article>
		</div>
	)
}

// https://flowbite.com/docs/components/rating/#rating-comment
// (publication id)
// typename
// created At
// hidden?
// id
// profile - @handle
// 	Contacts (Followers, Following, Mutual)
// 	picture
// 	Follow AUTHENTICATE AT LEAST WITH METAMASK hash
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
// use Who react
// use who collected publication
// use who mirrored publication
// use who reacted
// use Reaction AUTHENTICATED
// use Hide Publication AUTHENTICATED IF ITS MINE
// https://flowbite.com/docs/components/card/#card-with-list
