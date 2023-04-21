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
import Image from "next/image"
import Link from "next/link"

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
		<div className="flex flex-col">
			<div className="md:flex-row gap-8 flex flex-col justify-between">
				{/* Left Side */}
				<div className="flex flex-col gap-4 md:max-w-[50%]">
					{/* Avatar */}
					<Image
						className="rounded-full"
						width={144}
						height={144}
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt="Jese Leos"
					/>

					{/* Name */}
					<p className="text-3xl font-semibold leading-none items-center text-gray-900 dark:text-white gap-2 flex">
						Jese Leos
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
					</p>

					{/* Handle */}
					<p className="text-xl font-normal">@jeseleos</p>

					{/* Wallet address */}
					<p className="text-xl font-normal">0x798...E559</p>

					{/* Follow */}
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

					{/* Bio */}
					<p className="text-xl max-w-[80%]">
						This is my third Invicta Pro Diver. They are just fantastic value
						for money. This one arrived yesterday and the first thing I did was
						set the time, popped on an identical strap from another Invicta and
						went in the shower with it to test the waterproofing
					</p>

					{/* Contacts */}
					<ul className="flex text-xl flex-col gap-4">
						<div className="flex flex-row gap-4">
							<Link
								href="#"
								className="font-semibold hover:underline text-gray-900 dark:text-white"
							>
								3,758 Followers
							</Link>
							<Link
								href="#"
								className="font-semibold hover:underline text-gray-900 dark:text-white"
							>
								799 Following
							</Link>
						</div>

						<Link
							href="#"
							className="font-semibold hover:underline text-gray-900 dark:text-white"
						>
							18 Mutual
						</Link>

						<div className="flex -space-x-3">
							<Image
								width={40}
								height={40}
								className="border-2 border-white rounded-full dark:border-gray-800"
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt=""
							/>
							<Image
								width={40}
								height={40}
								className="border-2 border-white rounded-full dark:border-gray-800"
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt=""
							/>
							<Image
								width={40}
								height={40}
								className="border-2 border-white rounded-full dark:border-gray-800"
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt=""
							/>
							<Link
								className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
								href="#"
							>
								+3
							</Link>
						</div>
					</ul>
				</div>

				{/* Right Side */}
				<div className="flex flex-col gap-4 md:max-w-[50%]">
					{/* Cover */}
					<Image
						width={650}
						height={100}
						className="rounded-lg"
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
