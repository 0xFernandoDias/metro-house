"use client"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import {
	ProfileFragment,
	ProfileOwnedByMeFragment,
	PublicationSortCriteria,
	PublicationTypes,
	useExplorePublications,
	useFollow,
	useProfile,
	useUnfollow,
} from "@lens-protocol/react-web"
import { Publications } from "../components/Publications"

// export default function Profile({ params }: { params: { slug: string } }) {
export default function Profile() {
	const {
		data: publications,
		loading: loadingPublications,
		hasMore,
		next,
	} = useExplorePublications({
		sortCriteria: PublicationSortCriteria.TopCommented,
		publicationTypes: [PublicationTypes.Post],
	})
	// const { slug: profileHandle } = params
	// const {
	// 	data: profile,
	// 	error,
	// 	loading,
	// } = useProfile({ handle: profileHandle })

	if (!publications) {
		return <div>Loading pubs...</div>
	}

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div className="md:gap-8 md:grid md:grid-cols-2">
				<div className="flex flex-col gap-4">
					<div className="flex items-center justify-between space-x-4">
						<a href="#">
							<img
								className="rounded-full"
								width={144}
								height={144}
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt="Jese Leos"
							/>
						</a>
					</div>
					<p className="text-3xl font-semibold leading-none items-center text-gray-900 dark:text-white">
						<a href="#">Jese Leos</a>{" "}
						<span className="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
							<svg
								aria-hidden="true"
								className="w-3.5 h-3.5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span className="sr-only">Icon description</span>
						</span>
					</p>
					<p className="text-xl font-normal">
						<a href="#" className="hover:underline">
							@jeseleos
						</a>
					</p>
					<p className="text-xl font-normal">
						<a href="#" className="hover:underline">
							0x798989678DfF778D6e6957761f0d9A4ccc36E559
						</a>
					</p>
					<button
						type="button"
						className="flex-row max-w-min flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
					<p className="text-xl">
						Open-source contributor. Building{" "}
						<a
							href="#"
							className="text-blue-600 dark:text-blue-500 hover:underline"
						>
							flowbite.com
						</a>
						.
					</p>
					<ul className="flex text-xl flex-col gap-4">
						<div className="flex flex-row gap-4">
							<a href="#" className="hover:underline">
								<span className="font-semibold text-gray-900 dark:text-white">
									799
								</span>
								<span>Following</span>
							</a>

							<a href="#" className="hover:underline">
								<span className="font-semibold text-gray-900 dark:text-white">
									3,758
								</span>
								<span>Followers</span>
							</a>
						</div>

						<a href="#" className="hover:underline">
							<span className="font-semibold text-gray-900 dark:text-white">
								18
							</span>
							<span>Mutual</span>
						</a>

						<div className="flex mb-3 -space-x-3">
							<img
								className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt=""
							/>
							<img
								className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt=""
							/>
							<img
								className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt=""
							/>
							<a
								className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
								href="#"
							>
								+3
							</a>
						</div>
					</ul>
				</div>

				<div className="flex flex-col gap-4">
					<img
						className="w-full rounded-lg"
						src="https://i0.wp.com/www.bestcoverpix.com/wp-content/uploads/2013/12/ilovemyfriends.jpg?ssl=1"
						alt="image description"
					/>
					<Publications isProfile publications={publications} />
				</div>
			</div>
		</div>
	)
}

// function FollowButton({
// 	followee,
// 	follower,
// }: {
// 	followee: ProfileFragment
// 	follower: ProfileOwnedByMeFragment
// }) {
// 	const {
// 		execute: follow,
// 		error: followError,
// 		isPending: isFollowPending,
// 	} = useFollow({ follower, followee })
// 	const {
// 		execute: unfollow,
// 		error: unfollowError,
// 		isPending: isUnfollowPending,
// 	} = useUnfollow({ follower, followee })

// 	if (followee.followStatus === null) {
// 		return null
// 	}

// 	if (followee.followStatus.isFollowedByMe) {
// 		return (
// 			<>
// 				<button onClick={unfollow} disabled={isUnfollowPending}>
// 					Unfollow
// 				</button>
// 				{unfollowError && <p>{unfollowError.message}</p>}
// 			</>
// 		)
// 	}

// 	return (
// 		<>
// 			<button onClick={follow} disabled={isFollowPending}>
// 				Follow
// 			</button>
// 			{followError && <p>{followError.message}</p>}
// 		</>
// 	)
// }

// https://flowbite.com/docs/components/rating/#review-content
// https://flowbite.com/docs/components/skeleton/#card-placeholder
// https://flowbite.com/docs/components/popover/#user-profile
// @handle - switch
// Contacts (Followers, Following, Mutual)
// Feed https://flowbite.com/docs/components/tabs/#tabs-with-icons https://flowbite.com/docs/components/tabs/#pills-tabs
// (CREATE POST) IF ITS MINE https://flowbite.com/docs/forms/textarea/#wysiwyg-editor
// address
// bio
// picture - https://flowbite.com/docs/components/avatar/
// cover picture - https://flowbite.com/docs/typography/images/#image-caption
// Follow AUTHENTICATE AT LEAST WITH METAMASK hash  - https://flowbite.com/docs/components/buttons/#default-button
// View on Opensea
// Attributes - https://flowbite.com/docs/typography/lists/#list-with-icons
// Name
// Proof of humanity - https://flowbite.com/docs/components/badge/#badges-with-icon
// (id)
// Edit things IF ITS MINE AUTHENTICATED
// Profile price
// Member since??
// Transfer cash
// STATUS
