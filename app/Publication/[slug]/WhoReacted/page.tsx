"use client"
import Image from "next/image"
import Link from "next/link"
import { WhoReactedTabs } from "../../../components/WhoReactedTabs"
import {
	MediaSetFragment,
	ProfileFragment,
	WalletFragment,
	WhoReactedResultFragment,
	useActiveProfile,
	useEncryptedPublication,
	usePublication,
	useWhoCollectedPublication,
	useWhoMirroredPublication,
	useWhoReacted,
} from "@lens-protocol/react-web"
import { MediaRenderer } from "@thirdweb-dev/react"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"
import { ProfilePicture } from "@/app/components/ProfilePicture"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function WhoReacted({ params }: { params: { slug: string } }) {
	const { slug: publicationId } = params

	const { get } = useSearchParams()

	const tab = get("tab")

	const {
		data: profile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const { data: whoReacted, loading } = useWhoReacted({
		publicationId: publicationId,
		observerId: profile?.id,
	})

	const { data: whoMirrored, loading: whoMirroredLoading } =
		useWhoMirroredPublication({
			publicationId: publicationId,
			observerId: profile?.id,
		})

	const { data: whoCollected, loading: whoCollectedLoading } =
		useWhoCollectedPublication({
			publicationId: publicationId,
			observerId: profile?.id,
		})

	const [reactions, setReactions] = useState(
		whoReacted as (ProfileFragment[] | null) | undefined
	)

	useEffect(() => {
		const reactions = whoReacted?.map((e) => e.profile)
		const mirrors = whoMirrored
		const collects = whoCollected?.map((e) => e.defaultProfile!)

		const query =
			tab === "likes"
				? setReactions(reactions)
				: tab === "mirrors"
				? setReactions(mirrors)
				: tab === "collects"
				? setReactions(collects)
				: setReactions(reactions)
	}, [tab, whoCollected, whoMirrored, whoReacted])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className="flex flex-col gap-6 mb-8">
			<WhoReactedTabs publicationId={publicationId} />
			<div className="flex flex-col gap-6">
				<a className="text-xl font-semibold">Who Reacted</a>

				{/* Profiles */}
				<ul className="max-w-md gap-6 flex flex-col">
					{reactions?.map((profile) => (
						<div
							className="flex items-center justify-between space-x-4"
							key={profile.id}
						>
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
									<FollowUnfollowButton
										follower={activeProfile}
										followee={profile}
									/>
								)}
							</WhenLoggedInWithProfile>
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}
