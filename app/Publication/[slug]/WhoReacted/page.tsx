"use client"
import Image from "next/image"
import Link from "next/link"
import { WhoReactedTabs } from "../../../components/WhoReactedTabs"
import {
	MediaSetFragment,
	useEncryptedPublication,
	usePublication,
	useWhoReacted,
} from "@lens-protocol/react-web"
import { MediaRenderer } from "@thirdweb-dev/react"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"
import { ProfilePicture } from "@/app/components/ProfilePicture"

export default function WhoReacted({ params }: { params: { slug: string } }) {
	const { slug: publicationId } = params

	const { data: whoReacted, loading } = useWhoReacted({
		publicationId: publicationId,
	})

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className="flex flex-col gap-6">
			<WhoReactedTabs />
			<div className="flex flex-col gap-6">
				<a className="text-xl font-semibold">Who Reacted</a>

				{/* Profiles */}
				<ul className="max-w-md gap-6 flex flex-col">
					{whoReacted?.map((profile) => (
						<div
							className="flex items-center justify-between space-x-4"
							key={profile.profile.id}
						>
							<div className="flex items-center gap-1 space-x-4">
								<ProfilePicture
									profile={profile.profile}
									picture={profile.profile.picture}
								/>

								<div className="flex flex-col min-w-0">
									<Link
										href={`/Profile/${profile.profile.handle}`}
										className="text-xl font-medium text-gray-900 truncate dark:text-white"
									>
										{profile.profile.name}
									</Link>
									<Link
										href={`/Profile/${profile.profile.handle}`}
										className="text-xl text-gray-500 truncate dark:text-gray-400"
									>
										@{profile.profile.handle}
									</Link>
								</div>
							</div>

							{/* Follow Button */}
							<WhenLoggedInWithProfile>
								{({ profile: activeProfile }) => (
									<FollowUnfollowButton
										follower={activeProfile}
										followee={profile.profile}
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
