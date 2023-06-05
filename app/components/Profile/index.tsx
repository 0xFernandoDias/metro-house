"use client"
import Link from "next/link"
import { Profile } from "@lens-protocol/react-web"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"
import { ProfilePicture } from "../ProfilePicture"
import { FollowUnfollowButton } from "../FollowUnfollowButton"

export function Profile({
	profile,
	onlyIcon,
}: {
	profile: Profile
	onlyIcon?: boolean
}) {
	return (
		<div className="flex items-center justify-between space-x-4">
			<div className="flex items-center gap-1 space-x-4">
				<ProfilePicture profile={profile} picture={profile.picture} />

				<div className="flex flex-col min-w-0">
					<Link
						href={`/profile/${profile.handle}`}
						className="text-xl font-medium text-gray-900 truncate "
					>
						{profile.name}
					</Link>
					<Link
						href={`/profile/${profile.handle}`}
						className="text-xl text-gray-500 truncate"
					>
						@{profile.handle}
					</Link>
				</div>
			</div>

			<WhenLoggedInWithProfile>
				{({ profile: activeProfile }) => (
					<FollowUnfollowButton
						follower={activeProfile}
						followee={profile}
						onlyIcon={onlyIcon}
					/>
				)}
			</WhenLoggedInWithProfile>
		</div>
	)
}
