"use client"
import {
	Profile as ProfileType,
	ProfileOwnedByMe,
	useFollow,
	useUnfollow,
	isProfileOwnedByMe,
} from "@lens-protocol/react-web"
import { Spinner } from "../Spinner"

export function FollowUnfollowButton({
	follower,
	followee,
	onlyIcon = false,
}: {
	follower: ProfileOwnedByMe
	followee: ProfileType
	onlyIcon?: boolean
}) {
	const {
		execute: follow,
		isPending: followLoading,
		error: followError,
	} = useFollow({ follower, followee })
	const {
		execute: unfollow,
		isPending: unfollowLoading,
		error: unfollowError,
	} = useUnfollow({ follower, followee })

	const isMyProfile = isProfileOwnedByMe(followee)

	if (isMyProfile) return null

	if (unfollowLoading || followLoading) return <Spinner />

	if (
		followee?.followStatus?.isFollowedByMe &&
		!unfollowLoading &&
		!followLoading
	) {
		return (
			<button
				type="button"
				className="text-white max-w-min flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
				onClick={unfollow}
				disabled={unfollowLoading || followLoading}
			>
				<svg
					fill="none"
					className="h-6 w-6 fill-white stroke-white"
					stroke="currentColor"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
					></path>
				</svg>
				{onlyIcon ? null : "Unfollow"}
			</button>
		)
	}

	if (
		!followee?.followStatus?.isFollowedByMe &&
		!followLoading &&
		!unfollowLoading
	) {
		return (
			<button
				type="button"
				className="text-white max-w-min flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
				onClick={follow}
				disabled={unfollowLoading || followLoading}
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
				{onlyIcon ? null : "Follow"}
			</button>
		)
	}

	return (
		<div className="flex justify-center items-center text-center max-w-min">
			Sign In to unfollow
		</div>
	)
}
