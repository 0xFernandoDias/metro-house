"use client"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import {
	MediaSetFragment,
	ProfileFragment,
	ProfileOwnedByMeFragment,
	PublicationSortCriteria,
	PublicationTypes,
	useExplorePublications,
	useFollow,
	useProfile,
	useUnfollow,
	usePublications,
	useProfileFollowers,
	useActiveWalletSigner,
} from "@lens-protocol/react-web"
import { Publications } from "../../components/Publications"
import Image from "next/image"
import Link from "next/link"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { MediaRenderer } from "@thirdweb-dev/react"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"

function ProfileFollower({
	picture,
}: {
	picture: MediaSetFragment | ProfileMedia_NftImage_Fragment | null | undefined
}) {
	if (!picture)
		return (
			<div className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800" />
		)

	switch (picture.__typename) {
		case "MediaSet":
			return (
				<MediaRenderer
					className="rounded-full"
					height="40px"
					width="40px"
					src={picture.original.url}
				/>
			)
		default:
			return (
				<div className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800" />
			)
	}
}

function ProfilePicture({
	picture,
}: {
	picture: MediaSetFragment | ProfileMedia_NftImage_Fragment | null
}) {
	if (!picture) return <>Loading...</>

	switch (picture.__typename) {
		case "MediaSet":
			return (
				// eslint-disable-next-line react/jsx-no-undef
				<MediaRenderer
					className="rounded-full"
					height="144px"
					width="144px"
					src={picture.original.url}
				/>
			)
		default:
			return <>Loading...</>
	}
}

function ProfileCover({
	picture,
}: {
	picture: MediaSetFragment | ProfileMedia_NftImage_Fragment | null
}) {
	if (!picture) return <>Loading...</>

	switch (picture.__typename) {
		case "MediaSet":
			return (
				// eslint-disable-next-line react/jsx-no-undef
				<MediaRenderer
					className="rounded-full"
					height="100px"
					width="650px"
					src={picture.original.url}
				/>
			)
		default:
			return <>Loading...</>
	}
}

// export default function Profile({ params }: { params: { slug: string } }) {
export default function Profile({ params }: { params: { slug: string } }) {
	const { slug: profileHandle } = params

	const {
		data: profile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	const { data: publications, loading: loadingPublications } = usePublications({
		profileId: profile?.id || "",
	})

	const { data: followers, loading: loadingFollowers } = useProfileFollowers({
		profileId: profile?.id || "",
	})

	if (
		loading ||
		loadingPublications ||
		loadingFollowers ||
		!profile ||
		!publications ||
		!followers
	) {
		return <div>Loading profile...</div>
	}

	return (
		<div className="flex flex-col">
			<div className="md:flex-row gap-8 flex flex-col justify-between">
				{/* Left Side */}
				<div className="flex flex-col gap-4 md:max-w-[50%]">
					{/* Avatar */}

					<ProfilePicture picture={profile.picture} />

					{/* Name */}
					<p className="text-3xl font-semibold leading-none items-center text-gray-900 dark:text-white gap-2 flex">
						{profile.name}
						{profile.onChainIdentity.proofOfHumanity && (
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
						)}
					</p>

					{/* Handle */}
					<p className="text-xl font-normal">@{profile.handle}</p>

					{/* Wallet address */}
					{/* <p className="text-xl font-normal">0x798...E559</p> */}

					{/* Follow */}
					<WhenLoggedInWithProfile>
						{({ profile: activeProfile }) => (
							<FollowUnfollowButton
								follower={activeProfile}
								followee={profile}
							/>
						)}
					</WhenLoggedInWithProfile>

					{/* Bio */}
					<p className="text-xl max-w-[80%]">{profile.bio}</p>

					{/* Contacts */}
					<ul className="flex text-xl flex-col gap-4">
						<div className="flex flex-row gap-4">
							<Link
								href={`Profile/${profile.handle}/Contacts?=followers`}
								className="font-semibold hover:underline text-gray-900 dark:text-white"
							>
								{profile.stats.totalFollowers} Followers
							</Link>
							<Link
								href={`Profile/${profile.handle}/Contacts?=following`}
								className="font-semibold hover:underline text-gray-900 dark:text-white"
							>
								{profile.stats.totalFollowing} Following
							</Link>
						</div>

						<WhenLoggedInWithProfile>
							{() => (
								<Link
									href={`Profile/${profile.handle}/Contacts?=mutual`}
									className="font-semibold hover:underline text-gray-900 dark:text-white"
								>
									18 Mutual
								</Link>
							)}
						</WhenLoggedInWithProfile>

						<div className="flex -space-x-3">
							{followers.map((follower, idx) => {
								if (idx > 3) return null

								return (
									<ProfileFollower
										picture={follower.wallet.defaultProfile?.picture}
										key={idx}
									/>
								)
							})}
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
					<ProfileCover picture={profile.coverPicture} />
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
