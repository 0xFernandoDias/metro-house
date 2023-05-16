"use client"
import Link from "next/link"
import {
	Profile as ProfileType,
	ProfileId,
	isProfileOwnedByMe,
	useMutualFollowers,
} from "@lens-protocol/react-web"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"
import { ProfilePicture } from "../ProfilePicture"

export function ProfileHeader({
	profile,
	viewingProfileId,
	isComment,
}: {
	profile: ProfileType
	viewingProfileId?: ProfileId
	isComment?: boolean
}) {
	const isMyProfile = isProfileOwnedByMe(profile)

	const { data: mutual } = useMutualFollowers({
		observerId: viewingProfileId!,
		viewingProfileId: profile.id,
	})

	return (
		<div className="flex items-center space-x-4">
			{/* Avatar */}
			<ProfilePicture profile={profile} picture={profile?.picture} />
			{/* Profile Info */}
			<div className="space-y-1 font-medium dark:text-white">
				<div className="flex items-center flex-row gap-3">
					{profile.name && (
						<Link className="text-lg" href={`/Profile/${profile.handle}`}>
							{profile.name}
						</Link>
					)}
					<Link
						className="text-lg font-medium text-gray-900 truncate dark:text-gray-300"
						href={`/Profile/${profile.handle}`}
					>
						@{profile.handle}
					</Link>
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
					{profile.followStatus?.isFollowedByMe && (
						<Link
							className="text-sm font-medium text-gray-500 truncate dark:text-gray-300"
							href={`/Profile/${profile.handle}`}
						>
							is followed by me
						</Link>
					)}
				</div>
				<div className="text-md text-gray-500 dark:text-gray-400">
					<Link href={`/Profile/${profile.handle}/Contacts?tab=followers`}>
						{profile.stats.totalFollowers} followers
					</Link>
					<WhenLoggedInWithProfile>
						{() =>
							isMyProfile ? (
								""
							) : (
								<Link href={`/Profile/${profile.handle}/Contacts?tab=mutual`}>
									{mutual?.length ? `, ${mutual?.length} mutual` : ""}
								</Link>
							)
						}
					</WhenLoggedInWithProfile>
				</div>
			</div>
		</div>
	)
}
