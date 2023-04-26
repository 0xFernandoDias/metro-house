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
	useProfile,
	useProfileFollowers,
} from "@lens-protocol/react-web"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"

function ProfilePicture({
	picture,
}: {
	picture: MediaSetFragment | ProfileMedia_NftImage_Fragment | undefined | null
}) {
	if (!picture) return <>Loading...</>

	switch (picture.__typename) {
		case "MediaSet":
			return (
				<MediaRenderer
					className="rounded-full"
					height="48px"
					width="48px"
					src={picture.original.url}
				/>
			)
		default:
			return <>Loading...</>
	}
}

export default function Contacts({ params }: { params: { slug: string } }) {
	const { slug: profileHandle } = params

	const {
		data: profile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	const { data: profileFollowers, loading: loadingFollowers } =
		useProfileFollowers({
			profileId: profile?.id || "",
		})

	if (loading || loadingFollowers || !profile || !profileFollowers)
		return <>Loading...</>

	return (
		<div className="flex flex-col gap-6">
			<ContactsTabs />
			<div className="flex flex-col gap-6">
				<a className="text-xl font-semibold">Contacts</a>

				{profileFollowers.map((profile) => {
					return (
						<>
							{/* Profile Info */}
							<Link
								href={`/Profile/${profile?.wallet?.defaultProfile?.handle}`}
								className="flex items-center space-x-4"
							>
								<ProfilePicture
									picture={profile?.wallet.defaultProfile?.picture}
								/>

								<div className="flex-1 min-w-0">
									<div className="text-xl font-medium text-gray-900 truncate dark:text-white">
										{profile?.wallet?.defaultProfile?.name}
									</div>
									<p className="text-xl text-gray-500 truncate dark:text-gray-400">
										@{profile?.wallet?.defaultProfile?.handle}
									</p>
								</div>

								{/* Follow Button */}
								<WhenLoggedInWithProfile>
									{({ profile: activeProfile }) => (
										<FollowUnfollowButton
											follower={activeProfile}
											followee={profile.wallet.defaultProfile!}
										/>
									)}
								</WhenLoggedInWithProfile>
							</Link>
						</>
					)
				})}
			</div>
		</div>
	)
}
