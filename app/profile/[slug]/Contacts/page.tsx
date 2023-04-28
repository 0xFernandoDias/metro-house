// https://flowbite.com/docs/typography/lists/#advanced-layout
// @handle
// Contacts (Followers, Following, Mutual)
// bio
// picture - https://flowbite.com/docs/components/avatar/
// Follow AUTHENTICATE AT LEAST WITH METAMASK hash  - https://flowbite.com/docs/components/buttons/#default-button
// Name
// Proof of humanity - https://flowbite.com/docs/components/badge/#badges-with-icon

"use client"
import Image from "next/image"
import Link from "next/link"
import { ContactsTabs } from "../../../components/ContactsTabs"
import { MediaRenderer } from "@thirdweb-dev/react"
import {
	MediaSetFragment,
	ProfileFragment,
	isProfileOwnedByMe,
	useProfile,
	useProfileFollowers,
} from "@lens-protocol/react-web"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"
import { ProfilePicture } from "@/app/components/ProfilePicture"

export default function Contacts({ params }: { params: { slug: string } }) {
	const { slug: profileHandle } = params

	const {
		data: profile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	const { data: profileFollowers, loading: loadingFollowers } =
		useProfileFollowers({
			profileId: profile?.id,
		} as { profileId: string })

	if (loading || loadingFollowers || !profile || !profileFollowers)
		return <>Loading...</>

	return (
		<div className="flex flex-col gap-6 mb-8">
			<ContactsTabs profile={profile} />
			<div className="flex flex-col gap-6">
				<a className="text-xl font-semibold">Contacts</a>

				{profileFollowers.map((profile) => {
					if (!profile.wallet.defaultProfile) return null

					return (
						<Follower
							key={profile.wallet.defaultProfile.id}
							profile={profile.wallet.defaultProfile}
						/>
					)
				})}
			</div>
		</div>
	)
}

function Follower({ profile }: { profile: ProfileFragment }) {
	return (
		<div className="flex justify-between items-center space-x-4">
			<div className="flex items-center gap-1 space-x-4">
				<ProfilePicture profile={profile} picture={profile.picture} />

				<div className="flex flex-col min-w-0">
					<Link
						href={`/Profile/${profile.handle}`}
						className="text-xl font-medium text-gray-900 truncate dark:text-white"
					>
						{profile.name}
					</Link>
					<Link
						href={`/Profile/${profile.handle}`}
						className="text-xl text-gray-500 truncate dark:text-gray-400"
					>
						@{profile.handle}
					</Link>
				</div>
			</div>

			{/* Follow Button */}
			<WhenLoggedInWithProfile>
				{({ profile: activeProfile }) => (
					<FollowUnfollowButton follower={activeProfile} followee={profile!} />
				)}
			</WhenLoggedInWithProfile>
		</div>
	)
}
