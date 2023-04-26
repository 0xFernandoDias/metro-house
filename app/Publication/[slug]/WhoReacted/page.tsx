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

function ProfilePicture({
	picture,
}: {
	picture: MediaSetFragment | ProfileMedia_NftImage_Fragment | null
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
						<>
							{/* Profile Info */}
							<Link
								href={`/Profile/${profile.profile.handle}`}
								className="flex items-center space-x-4"
							>
								<ProfilePicture picture={profile.profile.picture} />

								<div className="flex-1 min-w-0">
									<div className="text-xl font-medium text-gray-900 truncate dark:text-white">
										{profile.profile.name}
									</div>
									<p className="text-xl text-gray-500 truncate dark:text-gray-400">
										@{profile.profile.handle}
									</p>
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
							</Link>
						</>
					))}
				</ul>
			</div>
		</div>
	)
}
