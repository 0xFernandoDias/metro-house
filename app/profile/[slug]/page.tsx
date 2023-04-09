"use client"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import {
	ProfileFragment,
	ProfileOwnedByMeFragment,
	useFollow,
	useProfile,
	useUnfollow,
} from "@lens-protocol/react-web"

export default function Profile({ params }: { params: { slug: string } }) {
	const { slug: profileHandle } = params
	const {
		data: profile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	if (loading) {
		return <div>Loading profile...</div>
	}

	return (
		<div>
			Hello {profile?.handle}{" "}
			{/* <WhenLoggedInWithProfile>
				{({ profile: activeProfile }) => (
					<FollowButton followee={profile!} follower={activeProfile} />
				)}
			</WhenLoggedInWithProfile> */}
			{/* <UnauthenticatedFallback message="Log in to follow or unfollow profiles" /> */}
		</div>
	)
}

function FollowButton({
	followee,
	follower,
}: {
	followee: ProfileFragment
	follower: ProfileOwnedByMeFragment
}) {
	const {
		execute: follow,
		error: followError,
		isPending: isFollowPending,
	} = useFollow({ follower, followee })
	const {
		execute: unfollow,
		error: unfollowError,
		isPending: isUnfollowPending,
	} = useUnfollow({ follower, followee })

	if (followee.followStatus === null) {
		return null
	}

	if (followee.followStatus.isFollowedByMe) {
		return (
			<>
				<button onClick={unfollow} disabled={isUnfollowPending}>
					Unfollow
				</button>
				{unfollowError && <p>{unfollowError.message}</p>}
			</>
		)
	}

	return (
		<>
			<button onClick={follow} disabled={isFollowPending}>
				Follow
			</button>
			{followError && <p>{followError.message}</p>}
		</>
	)
}

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
