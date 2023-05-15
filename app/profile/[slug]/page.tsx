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
	isProfileOwnedByMe,
	useMutualFollowers,
	useActiveProfile,
	useFeed,
} from "@lens-protocol/react-web"
import { Publications } from "../../components/Publications"
import Image from "next/image"
import Link from "next/link"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import {
	MediaRenderer,
	ThirdwebNftMedia,
	useContract,
	useOwnedNFTs,
} from "@thirdweb-dev/react"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"
import { ProfilePicture } from "@/app/components/ProfilePicture"
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll"

function ProfileCover({
	picture,
}: {
	picture: MediaSetFragment | ProfileMedia_NftImage_Fragment | null
}) {
	if (!picture) return null

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
			return <></>
	}
}

// export default function Profile({ params }: { params: { slug: string } }) {
export default function Profile({ params }: { params: { slug: string } }) {
	const { slug: profileHandle } = params

	const {
		data: myProfile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const {
		data: profile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	const {
		data: publications,
		loading: loadingPublications,
		hasMore,
		observeRef,
	} = useInfiniteScroll(
		usePublications({
			profileId: profile?.id || "",
			observerId: myProfile?.id,
		})
	)

	const profileAddress = profile?.ownedBy

	const contractAddress = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"
	// const contractAddress = "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82"

	const { contract, isLoading: contractLoading } = useContract(contractAddress)

	const { data: nfts, isLoading } = useOwnedNFTs(contract, profileAddress)

	// const {} = useFeed({ profileId: profile?.id || "" })

	if (
		loading ||
		loadingPublications ||
		isLoading ||
		contractLoading ||
		!profile ||
		!publications
	) {
		return <div>Loading profile...</div>
	}

	return (
		<>
			<title>
				{profile.name} (@{profile.handle}) / Metro House
			</title>
			<div className="flex flex-col">
				<div className="md:flex-row gap-8 flex flex-col justify-between">
					{/* Left Side */}
					<div className="flex flex-col gap-4 md:max-w-[50%]">
						{/* Avatar */}

						<ProfilePicture
							design="profileLarge"
							profile={profile}
							picture={profile.picture}
						/>

						{/* Name */}
						<div className="text-3xl font-semibold leading-none items-center text-gray-900 dark:text-white gap-2 flex">
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
						</div>

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
						<ProfileContacts
							viewingProfileId={myProfile?.id}
							profile={profile}
						/>

						{/* Profile NFTs */}
						{nfts?.map((nft, idx) => {
							return (
								<ThirdwebNftMedia
									key={idx}
									metadata={nft.metadata}
									height="200px"
									width="200px"
								/>
							)
						})}
					</div>

					{/* Right Side */}
					<div className="flex flex-col gap-4 md:w-[50%]">
						{/* Cover */}
						<ProfileCover picture={profile.coverPicture} />
						<Publications
							isProfile
							profile={profile}
							publications={publications}
							hasMore={hasMore}
							observeRef={observeRef}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

function ProfileContacts({
	profile,
	viewingProfileId,
}: {
	profile: ProfileFragment
	viewingProfileId?: string
}) {
	const { data: followers, loading: loadingFollowers } = useProfileFollowers({
		profileId: profile.id,
	})

	const isMyProfile = isProfileOwnedByMe(profile)

	const { data: mutual } = useMutualFollowers({
		observerId: viewingProfileId || "",
		viewingProfileId: profile.id,
	})

	return (
		<ul className="flex text-xl flex-col gap-4">
			<div className="flex flex-row gap-4">
				<Link
					href={`/Profile/${profile.handle}/Contacts?tab=followers`}
					className="font-semibold hover:underline text-gray-900 dark:text-white"
				>
					{profile.stats.totalFollowers} Followers
				</Link>
				<Link
					href={`/Profile/${profile.handle}/Contacts?tab=following`}
					className="font-semibold hover:underline text-gray-900 dark:text-white"
				>
					{profile.stats.totalFollowing} Following
				</Link>
			</div>

			<WhenLoggedInWithProfile>
				{() =>
					isMyProfile ? (
						<></>
					) : (
						<Link
							href={`/Profile/${profile.handle}/Contacts?tab=mutual`}
							className="font-semibold hover:underline text-gray-900 dark:text-white"
						>
							{isMyProfile
								? ""
								: `${mutual?.length ? `${mutual?.length} mutual` : ""}`}
						</Link>
					)
				}
			</WhenLoggedInWithProfile>

			<div className="flex -space-x-3">
				{mutual?.map((mutual, idx) => {
					if (idx > 3) return null

					return (
						<ProfilePicture
							picture={mutual.picture}
							profile={mutual}
							key={mutual.id}
						/>
					)
				})}
				{mutual && mutual.length > 4 && (
					<Link
						className="flex items-center justify-center w-12 h-12 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
						href={`/Profile/${profile.handle}/Contacts?=mutual`}
					>
						+{mutual.length - 4}
					</Link>
				)}
			</div>
		</ul>
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
