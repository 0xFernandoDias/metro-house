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
