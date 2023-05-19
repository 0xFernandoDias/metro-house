"use client"
// import { useGlobalContext } from "./context/store"
import {
	useExplorePublications,
	PublicationSortCriteria,
	PublicationTypes,
	useActiveProfile,
	Profile as ProfileType,
	useFeed,
	FeedItem,
	isMirrorPublication,
} from "@lens-protocol/react-web"
import { RefCallback, useEffect, useState } from "react"
import { Publications } from "./components/Publications"
import { CreatePublication } from "./components/CreatePublication"
import { WhenLoggedInWithProfile } from "./components/auth/WhenLoggedInWithProfile"
import { useSearchParams } from "next/navigation"
import { useInfiniteScroll } from "./hooks/useInfiniteScroll"
import { Spinner } from "./components/Spinner"
import { WhenLoggedOut } from "./components/auth/WhenLoggedOut"
import Link from "next/link"
import { Publication } from "./components/Publication"

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
		return <Spinner />
	}

	return (
		<>
			<title>Metro House</title>

			{/* <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
						<b>Address: {address}</b>
						<b>Active wallet: {wallet?.address}</b>
						<b>Hello {profile?.handle}</b>
						<b>Active profile: {profile?.handle}</b>
						<b>Signer: {signer}</b>
					</div> */}
			<WhenLoggedInWithProfile>
				{({ profile }) => (
					<div className="flex flex-col gap-12">
						<CreatePublication publisher={profile} />
						<Feed profile={profile} />
					</div>
				)}
			</WhenLoggedInWithProfile>

			{!profile && (
				<div className="flex flex-col gap-6">
					<Publications
						publications={publications}
						observeRef={observeRef}
						hasMore={hasMore}
						isLoading={loadingPublications || profileLoading}
					/>
				</div>
			)}
		</>
	)
}

function Feed({ profile }: { profile: ProfileType }) {
	const { data, hasMore, loading, observeRef } = useInfiniteScroll(
		useFeed({
			profileId: profile.id,
			observerId: profile.id,
		})
	)

	if (!data || loading) {
		return <Spinner />
	}

	return (
		<FeedItems
			publications={data}
			observeRef={observeRef}
			hasMore={hasMore}
			isLoading={loading}
		/>
	)
}

function FeedItems({
	publications,
	isLoading,
	observeRef,
	hasMore,
}: {
	publications: FeedItem[]
	isLoading: boolean
	observeRef?: RefCallback<unknown>
	hasMore?: boolean
}) {
	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className="flex flex-col gap-6">
			{/* Publications */}
			<div className="flex flex-col gap-16 mb-6">
				{publications.map((publication: FeedItem) => {
					return (
						<Publication
							key={publication.root.id}
							publication={publication.root}
						/>
					)
				})}

				{hasMore && (
					<div ref={observeRef}>
						<Spinner />
					</div>
				)}
			</div>
		</div>
	)
}
