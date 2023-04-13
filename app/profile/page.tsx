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
				<div>
					<div className="flex items-center justify-between mb-8 space-x-4">
						<a href="#">
							<img
								className="rounded-full"
								width={144}
								height={144}
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt="Jese Leos"
							/>
						</a>
						<div></div>
					</div>
					<p className="text-3xl font-semibold leading-none items-center text-gray-900 dark:text-white">
						<a href="#">Jese Leos</a>{" "}
						<span className=" text-blue-800 text-3xl font-medium inline-flex items-center px-0.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400">
							<svg
								aria-hidden="true"
								className="w-4 h-4"
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
					</p>
					<p className="mb-3 text-xl font-normal">
						<a href="#" className="hover:underline">
							@jeseleos
						</a>
					</p>
					<p className="mb-3 text-xl font-normal">
						<a href="#" className="hover:underline">
							0x798989678DfF778D6e6957761f0d9A4ccc36E559
						</a>
					</p>
					<button
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Follow
					</button>
					<p className="mb-4 text-xl">
						Open-source contributor. Building{" "}
						<a
							href="#"
							className="text-blue-600 dark:text-blue-500 hover:underline"
						>
							flowbite.com
						</a>
						.
					</p>
					<ul className="flex text-xl flex-col">
						<div className="flex flex-row gap-4">
							<li className="mr-2">
								<a href="#" className="hover:underline">
									<span className="font-semibold text-gray-900 dark:text-white">
										799
									</span>
									<span>Following</span>
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									<span className="font-semibold text-gray-900 dark:text-white">
										3,758
									</span>
									<span>Followers</span>
								</a>
							</li>
						</div>
						<li>
							<a href="#" className="hover:underline">
								<span className="font-semibold text-gray-900 dark:text-white">
									18
								</span>
								<span>Mutual</span>
							</a>
						</li>
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

				<div className="col-span-1 mt-10 md:mt-0">
					<img
						className="w-full rounded-lg"
						src="https://i0.wp.com/www.bestcoverpix.com/wp-content/uploads/2013/12/ilovemyfriends.jpg?ssl=1"
						alt="image description"
					/>
					<div className="mt-2 text-3xl text-black dark:text-gray-400">
						Jese Leos
					</div>
					<Publications publications={publications} />
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
