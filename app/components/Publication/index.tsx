"use client"
import {
	ContentPublicationFragment,
	useEncryptedPublication,
} from "@lens-protocol/react-web"
import { Comment } from "../Comments"
import Link from "next/link"

export const Publication = ({
	publication,
}: {
	publication: ContentPublicationFragment
}) => {
	const { data, isPending } = useEncryptedPublication({
		publication,
	})

	if (isPending) {
		return <div>Loading...</div>
	}

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
						width={40}
						height={40}
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>
					<div className="space-y-1 font-medium dark:text-white">
						<Link href="/Profile">
							Jese Leos{" "}
							<span className=" text-blue-800 text-xs font-medium inline-flex items-center px-0.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
								<svg
									aria-hidden="true"
									className="w-3 h-3"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</span>
						</Link>
						<div className="text-sm text-gray-500 dark:text-gray-400">
							<p>257 followers, 18 mutual</p>
						</div>
					</div>
				</div>
				<time
					dateTime="2020-08-25 19:00"
					className="block text-sm text-gray-500 dark:text-gray-400"
				>
					Created At August 25
				</time>
				<p className="mb-2  dark:text-gray-400">
					This is my third Invicta Pro Diver. They are just fantastic value for
					money. This one arrived yesterday and the first thing I did was set
					the time, popped on an identical strap from another Invicta and went
					in the shower with it to test the waterproofing.... No problems.
				</p>
				<p className="mb-3  dark:text-gray-400">
					It is obviously not the same build quality as those very expensive
					watches. But that is like comparing a Citroën to a Ferrari. This watch
					was well under £100! An absolute bargain.
				</p>
				<a
					href="#"
					className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
				>
					Read more
				</a>
				<aside>
					<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
						19 people found this helpful
					</p>
					<div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Like
						</a>
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Dislike
						</a>
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Comment
						</a>
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Mirror
						</a>
						<a
							href="#"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Collect
						</a>
					</div>
				</aside>
				{/* <Comment /> */}
			</article>
		</div>
	)
}
