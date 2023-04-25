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
									{() => (
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
