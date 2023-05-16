"use client"
import Link from "next/link"
import { WhoReactedTabs } from "../../../components/WhoReactedTabs"
import {
	Profile as ProfileType,
	PublicationId,
	useActiveProfile,
	useWhoCollectedPublication,
	useWhoMirroredPublication,
	useWhoReacted,
} from "@lens-protocol/react-web"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"
import { ProfilePicture } from "@/app/components/ProfilePicture"
import { useSearchParams } from "next/navigation"
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll"

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
		return <div>Loading...</div>
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
									<p ref={observeReactionsRef}>Loading more...</p>
								)}
							</>
						) : tab === "mirrors" ? (
							<>
								{whoMirrored?.map((profile) => (
									<Profile profile={profile} key={profile.id} />
								))}
								{hasMoreMirrors && (
									<p ref={observeMirrorsRef}>Loading more...</p>
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
									<p ref={observeCollectsRef}>Loading more...</p>
								)}
							</>
						) : (
							<>
								{whoReacted?.map((profile) => (
									<Profile profile={profile.profile} key={profile.profile.id} />
								))}
								{hasMoreReactions && (
									<p ref={observeReactionsRef}>Loading more...</p>
								)}
							</>
						)}
					</ul>
				</div>
			</div>
		</>
	)
}

function Profile({ profile }: { profile: ProfileType }) {
	return (
		<div className="flex items-center justify-between space-x-4">
			<div className="flex items-center gap-1 space-x-4">
				<ProfilePicture profile={profile} picture={profile.picture} />

				<div className="flex flex-col min-w-0">
					<Link
						href={`/Profile/${profile.handle}`}
						className="text-xl font-medium text-gray-900 truncate dark:text-white"
					>
						{profile.name}
					</Link>
					<Link
						href={`/Profile/${profile.handle}`}
						className="text-xl text-gray-500 truncate dark:text-gray-400"
					>
						@{profile.handle}
					</Link>
				</div>
			</div>

			{/* Follow Button */}
			<WhenLoggedInWithProfile>
				{({ profile: activeProfile }) => (
					<FollowUnfollowButton follower={activeProfile} followee={profile} />
				)}
			</WhenLoggedInWithProfile>
		</div>
	)
}
