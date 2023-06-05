"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import {
	useExplorePublications,
	PublicationSortCriteria,
	PublicationTypes,
	useActiveProfile,
	Profile as ProfileType,
	useFeed,
	FeedItem,
	useRecentPosts,
} from "@lens-protocol/react-web"
import { useInfiniteScroll } from "./hooks/useInfiniteScroll"
import { WhenLoggedInWithProfile } from "./components/auth/WhenLoggedInWithProfile"
import { Spinner } from "./components/Spinner"
import { CreatePublication } from "./components/CreatePublication"
import { Publications } from "./components/Publications"
import { Publication } from "./components/Publication"

export default function Home() {
	const { get } = useSearchParams()

	const tab = get("tab")

	const [sortCriteria, setSortCriteria] = useState(
		PublicationSortCriteria.Latest
	)

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
			sortCriteria,
			publicationTypes: [
				PublicationTypes.Comment,
				PublicationTypes.Post,
				PublicationTypes.Mirror,
			],
		})
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

	if (!publications || loadingPublications) {
		return <Spinner />
	}

	return (
		<>
			<title>Metro House</title>
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
	const {
		data: publications,
		hasMore,
		loading,
		observeRef,
	} = useInfiniteScroll(
		useFeed({
			profileId: profile.id,
			observerId: profile.id,
		})
	)

	const recentPosts = useRecentPosts()

	if (!publications || loading) {
		return <Spinner />
	}

	return (
		<div className="flex flex-col gap-6">
			{/* Publications */}
			<div className="flex flex-col mb-6">
				{recentPosts?.map(
					(publication) =>
						publication.__typename !== "PendingPost" && (
							<Publication key={publication.id} publication={publication} />
						)
				)}

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
