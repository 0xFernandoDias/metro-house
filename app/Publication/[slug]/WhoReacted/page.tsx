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
								<button
									type="button"
									className="text-white flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
								>
									<svg
										className="h-6 w-6 fill-white stroke-white"
										strokeWidth={1.5}
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
										/>
									</svg>
									Follow
								</button>
							</Link>
						</>
					))}
				</ul>
			</div>
		</div>
	)
}
