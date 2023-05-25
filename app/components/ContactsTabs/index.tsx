"use client"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
	Profile as ProfileType,
	isProfileOwnedByMe,
} from "@lens-protocol/react-web"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"

export function ContactsTabs({ profile }: { profile: ProfileType }) {
	const { get } = useSearchParams()
	const tab = get("tab")
	const isMyProfile = isProfileOwnedByMe(profile)

	return (
		<ul
			className="flex gap-2 flex-wrap text-lg font-medium text-center border-b border-gray-200 "
			id="myTab"
			data-tabs-toggle="#myTabContent"
			role="tablist"
		>
			<Link
				className={`inline-block p-4 ${
					tab === "followers" || !tab ? "border-b-2 border-blue-700" : ""
				} rounded-t-lg`}
				id="followers-tab"
				data-tabs-target={
					`/profile/${profile.handle}/contacts?tab=followers` ||
					`/profile/${profile.handle}/contacts`
				}
				href={`/profile/${profile.handle}/contacts?tab=followers`}
				role="tab"
				aria-controls="followers"
				aria-selected="false"
			>
				<div className="flex flex-row gap-2 items-center">Followers</div>
			</Link>

			<Link
				className={`inline-block p-4 ${
					tab === "following" && "border-b-2 border-blue-700"
				} rounded-t-lg`}
				id="following-tab"
				data-tabs-target={`/profile/${profile.handle}/contacts?tab=following`}
				href={`/profile/${profile.handle}/contacts?tab=following`}
				role="tab"
				aria-controls="following"
				aria-selected="false"
			>
				<div className="flex flex-row gap-2 items-center">Following</div>
			</Link>

			<WhenLoggedInWithProfile>
				{() =>
					isMyProfile ? (
						<></>
					) : (
						<Link
							className={`inline-block p-4 ${
								tab === "mutual" && "border-b-2 border-blue-700"
							} rounded-t-lg`}
							id="mutual-tab"
							data-tabs-target={`/profile/${profile.handle}/contacts?tab=mutual`}
							href={`/profile/${profile.handle}/contacts?tab=mutual`}
							role="tab"
							aria-controls="mutual"
							aria-selected="false"
						>
							<div className="flex flex-row gap-2 items-center">Mutual</div>
						</Link>
					)
				}
			</WhenLoggedInWithProfile>
		</ul>
	)
}
