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
	FollowerFragment,
	FollowingFragment,
	MediaSetFragment,
	ProfileFragment,
	isProfileOwnedByMe,
	useActiveProfile,
	useMutualFollowers,
	useProfile,
	useProfileFollowers,
	useProfileFollowing,
} from "@lens-protocol/react-web"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"
import { ProfilePicture } from "@/app/components/ProfilePicture"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Contacts({ params }: { params: { slug: string } }) {
	const { slug: profileHandle } = params

	const { get } = useSearchParams()

	const tab = get("tab")

	const {
		data: profile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	const {
		data: activeProfile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const { data: profileFollowers, loading: loadingFollowers } =
		useProfileFollowers({
			profileId: profile?.id || "",
		})

	const { data: profileFollowing, loading: loadingFollowing } =
		useProfileFollowing({
			walletAddress: profile?.ownedBy || "",
		})

	const { data: mutualFollowers, loading: loadingMutualFollowers } =
		useMutualFollowers({
			viewingProfileId: profile?.id || "",
			observerId: activeProfile?.id || "",
		})

	const [contacts, setContacts] = useState(
		profileFollowers as (ProfileFragment[] | null) | undefined
	)

	useEffect(() => {
		const followers = profileFollowers?.map((e) => e.wallet.defaultProfile!)
		const following = profileFollowing?.map((e) => e.profile)
		const mutual = mutualFollowers

		const query =
			tab === "followers"
				? setContacts(followers)
				: tab === "following"
				? setContacts(following)
				: tab === "mutual"
				? setContacts(mutual)
				: setContacts(followers)
	}, [tab, profileFollowers, profileFollowing, mutualFollowers])

	if (
		loading ||
		loadingFollowers ||
		loadingFollowing ||
		loadingMutualFollowers ||
		!profile ||
		!profileFollowers
	)
		return <>Loading...</>

	return (
		<div className="flex flex-col gap-6 mb-8">
			<ContactsTabs profile={profile} />
			<div className="flex flex-col gap-6">
				<a className="text-xl font-semibold">Contacts</a>
				<ul className="max-w-md gap-6 flex flex-col">
					{contacts?.map((profile) => {
						return <Follower key={profile.id} profile={profile} />
					})}
				</ul>
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
