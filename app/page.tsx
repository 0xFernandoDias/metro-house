"use client"
// import { useGlobalContext } from "./context/store"
import {
	useExplorePublications,
	PublicationSortCriteria,
	PublicationTypes,
	useActiveProfile,
} from "@lens-protocol/react-web"
import { useEffect, useState } from "react"
import { Publications } from "./components/Publications"
import { CreatePublication } from "./components/CreatePublication"
import { WhenLoggedInWithProfile } from "./components/auth/WhenLoggedInWithProfile"
import { useSearchParams } from "next/navigation"
import { useInfiniteScroll } from "./hooks/useInfiniteScroll"

export default function Home() {
	// const { count, increment } = useGlobalContext()

	const { get } = useSearchParams()

	const tab = get("tab")

	const [sortCriteria, setSortCriteria] = useState(
		PublicationSortCriteria.Latest
	)

	useEffect(() => {
		const query =
			tab === "topcollected"
				? PublicationSortCriteria.TopCollected
				: tab === "topcommented"
				? PublicationSortCriteria.TopCommented
				: tab === "topmirrored"
				? PublicationSortCriteria.TopMirrored
				: PublicationSortCriteria.Latest

		setSortCriteria(query)
	}, [tab])

	const {
		data: profile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const {
		data: publications,
		loading: loadingPublications,
		hasMore,
		observeRef,
		next,
	} = useInfiniteScroll(
		useExplorePublications({
			sortCriteria: sortCriteria,
			publicationTypes: [PublicationTypes.Post],
			observerId: profile ? profile.id : undefined,
		})
	)

	if (!publications || loadingPublications || profileLoading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<title>Metro House</title>
			<div className="flex flex-col gap-6 sm:max-w-max">
				{/* <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
						<b>Address: {address}</b>
						<b>Active wallet: {wallet?.address}</b>
						<b>Hello {profile?.handle}</b>
						<b>Active profile: {profile?.handle}</b>
						<b>Signer: {signer}</b>
					</div> */}
				<WhenLoggedInWithProfile>
					{({ profile }) => <CreatePublication publisher={profile} />}
				</WhenLoggedInWithProfile>

				<Publications
					publications={publications}
					observeRef={observeRef}
					hasMore={hasMore}
					isLoading={loadingPublications || profileLoading}
				/>
			</div>
		</>
	)
}
