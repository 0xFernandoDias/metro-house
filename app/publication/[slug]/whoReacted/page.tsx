"use client"
import { useSearchParams } from "next/navigation"
import {
	PublicationId,
	useActiveProfile,
	useWhoCollectedPublication,
	useWhoMirroredPublication,
	useWhoReacted,
} from "@lens-protocol/react-web"
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll"
import { Spinner } from "@/app/components/Spinner"
import { WhoReactedTabs } from "@/app/components/WhoReactedTabs"
import { Profile } from "@/app/components/Profile"

export default function WhoReacted({
	params,
}: {
	params: { slug: PublicationId }
}) {
	const { slug: publicationId } = params

	const { get } = useSearchParams()

	const tab = get("tab")

	const {
		data: profile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const {
		data: whoReacted,
		loading,
		hasMore: hasMoreReactions,
		observeRef: observeReactionsRef,
	} = useInfiniteScroll(
		useWhoReacted({
			publicationId,
			observerId: profile?.id,
		})
	)

	const {
		data: whoMirrored,
		loading: whoMirroredLoading,
		hasMore: hasMoreMirrors,
		observeRef: observeMirrorsRef,
	} = useInfiniteScroll(
		useWhoMirroredPublication({
			publicationId: publicationId,
			observerId: profile?.id,
		})
	)

	const {
		data: whoCollected,
		loading: whoCollectedLoading,
		hasMore: hasMoreCollects,
		observeRef: observeCollectsRef,
	} = useInfiniteScroll(
		useWhoCollectedPublication({
			publicationId: publicationId,
			observerId: profile?.id,
		})
	)

	if (loading || profileLoading || whoMirroredLoading || whoCollectedLoading) {
		return <Spinner />
	}

	return (
		<>
			<title>Publication Reactions / Metro House</title>
			<div className="flex flex-col gap-6 mb-8">
				<WhoReactedTabs publicationId={publicationId} />
				<div className="flex flex-col gap-6">
					<a className="text-xl font-semibold">Who Reacted</a>

					{/* Profiles */}
					<ul className="max-w-md gap-6 flex flex-col">
						{tab === "likes" ? (
							<>
								{whoReacted?.map((profile) => (
									<Profile profile={profile.profile} key={profile.profile.id} />
								))}
								{hasMoreReactions && (
									<div ref={observeReactionsRef}>
										<Spinner />
									</div>
								)}
							</>
						) : tab === "mirrors" ? (
							<>
								{whoMirrored?.map((profile) => (
									<Profile profile={profile} key={profile.id} />
								))}
								{hasMoreMirrors && (
									<div ref={observeMirrorsRef}>
										<Spinner />
									</div>
								)}
							</>
						) : tab === "collects" ? (
							<>
								{whoCollected?.map((profile, idx) => (
									<Profile
										profile={profile.defaultProfile!}
										key={profile.defaultProfile?.id}
									/>
								))}
								{hasMoreCollects && (
									<div ref={observeCollectsRef}>
										<Spinner />
									</div>
								)}
							</>
						) : (
							<>
								{whoReacted?.map((profile) => (
									<Profile profile={profile.profile} key={profile.profile.id} />
								))}
								{hasMoreReactions && (
									<div ref={observeReactionsRef}>
										<Spinner />
									</div>
								)}
							</>
						)}
					</ul>
				</div>
			</div>
		</>
	)
}
