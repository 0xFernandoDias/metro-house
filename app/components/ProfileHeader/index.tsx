import Image from "next/image"
import Link from "next/link"

import { MediaRenderer } from "@thirdweb-dev/react"
import { MediaSetFragment, ProfileFragment } from "@lens-protocol/react-web"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"

export function ProfileHeader({ profile }: { profile: ProfileFragment }) {
	if (!profile) {
		return <>Loading profile</>
	}

	return (
		<Link
			href={`/Profile/${profile.handle}`}
			className="flex items-center space-x-4"
		>
			{/* Avatar */}
			<ProfilePicture picture={profile.picture} />
			{/* Profile Info */}
			<div className="space-y-1 font-medium dark:text-white">
				<div className="text-xl flex flex-row gap-3">
					{profile.name}
					<p
						className="text-lg font-medium text-gray-900 truncate dark:text-gray-300"
						role="none"
					>
						@{profile.handle}
					</p>
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
				</div>
				<div className="text-md text-gray-500 dark:text-gray-400">
					<p>{profile.stats.totalFollowers} followers, 18 mutual</p>
				</div>
			</div>
		</Link>
	)
}

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
