"use client"

import Link from "next/link"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"

export function ContactsTabs() {
	return (
		<ul
			className="flex gap-2 flex-wrap text-lg font-medium text-center border-b border-gray-200 dark:border-gray-700"
			id="myTab"
			data-tabs-toggle="#myTabContent"
			role="tablist"
		>
			<Link
				className="inline-block p-4 border-b-2 rounded-t-lg"
				id="followers-tab"
				data-tabs-target={"/Contacts?tab=followers" || "/Contacts"}
				href="/Contacts?tab=followers"
				role="tab"
				aria-controls="followers"
				aria-selected="false"
			>
				<div className="flex flex-row gap-2 items-center">Followers</div>
			</Link>

			<Link
				className="inline-block p-4 border-b-2 rounded-t-lg"
				id="following-tab"
				data-tabs-target={"/Contacts?tab=following"}
				href="/Contacts?tab=following"
				role="tab"
				aria-controls="following"
				aria-selected="false"
			>
				<div className="flex flex-row gap-2 items-center">Following</div>
			</Link>

			<WhenLoggedInWithProfile>
				{() => (
					<Link
						className="inline-block p-4 border-b-2 rounded-t-lg"
						id="mutual-tab"
						data-tabs-target={"/Contacts?tab=mutual"}
						href="/Contacts?tab=mutual"
						role="tab"
						aria-controls="mutual"
						aria-selected="false"
					>
						<div className="flex flex-row gap-2 items-center">Mutual</div>
					</Link>
				)}
			</WhenLoggedInWithProfile>
		</ul>
	)
}

// https://flowbite.com/docs/components/tabs/#tabs-with-icons
// https://flowbite.com/docs/components/tabs/#pills-tabs
// https://flowbite.com/docs/components/gallery/
// https://flowbite.com/docs/components/timeline/#vertical-timeline
// useFeed (profileId, observerId, metadataFilter)
// Profile Posts, Collects, Mirrors, NFTS, Media
// Home Latest, Top Collected, Top Commented, Top Mirrored,             (PublicationTypes.Post && PublicationSortCriteria.Mirror && PublicationSortCriteria.Comment)
// Both Audio, Image, Text Only, Video
