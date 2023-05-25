"use client"
import { useSearchParams } from "next/navigation"
import {
	useActiveProfile,
	useMutualFollowers,
	useProfile,
	useProfileFollowers,
	useProfileFollowing,
} from "@lens-protocol/react-web"
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll"
import { Spinner } from "@/app/components/Spinner"
import { ContactsTabs } from "@/app/components/ContactsTabs"
import { Profile } from "@/app/components/Profile"

export default function Contacts({ params }: { params: { slug: string } }) {
	const { slug: profileHandle } = params

	const { get } = useSearchParams()

	const tab = get("tab")

	const {
		data: activeProfile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const {
		data: profile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	const {
		data: profileFollowers,
		loading: loadingFollowers,
		hasMore: hasMoreFollowers,
		observeRef: observeFollowersRef,
	} = useInfiniteScroll(
		useProfileFollowers({
			profileId: profile?.id!,
		})
	)

	const {
		data: profileFollowing,
		loading: loadingFollowing,
		hasMore: hasMoreFollowing,
		observeRef: observeFollowingRef,
	} = useInfiniteScroll(
		useProfileFollowing({
			walletAddress: profile?.ownedBy || "",
		})
	)

	const {
		data: mutualFollowers,
		loading: loadingMutualFollowers,
		hasMore: hasMoreMutualFollowers,
		observeRef: observeMutualFollowersRef,
	} = useInfiniteScroll(
		useMutualFollowers({
			viewingProfileId: profile?.id!,
			observerId: activeProfile?.id!,
		})
	)

	if (
		loading ||
		loadingFollowers ||
		loadingFollowing ||
		loadingMutualFollowers ||
		!profile ||
		!profileFollowers ||
		profileLoading
	)
		return (
			<>
				<title>Profile Contacts / Metro House</title>
				<Spinner />
			</>
		)

	return (
		<>
			<title>
				{`@${profile?.handle}`}
				{"'"}s Contacts / Metro House
			</title>
			<div className="flex flex-col gap-6 mb-8">
				<ContactsTabs profile={profile} />
				<div className="flex flex-col gap-6">
					<a className="text-xl font-semibold">Contacts</a>
					<ul className="max-w-md gap-6 flex flex-col">
						{tab === "followers" ? (
							<>
								{profileFollowers?.map((e) => (
									<Profile
										key={e.wallet.defaultProfile?.id}
										profile={e.wallet.defaultProfile!}
									/>
								))}
								{hasMoreFollowers && (
									<div ref={observeFollowersRef}>
										<Spinner />
									</div>
								)}
							</>
						) : tab === "following" ? (
							<>
								{profileFollowing?.map((e) => (
									<Profile key={e.profile!.id} profile={e.profile} />
								))}
								{hasMoreFollowing && (
									<div ref={observeFollowingRef}>
										<Spinner />
									</div>
								)}
							</>
						) : tab === "mutual" ? (
							<>
								{mutualFollowers?.map((e) => (
									<Profile key={e.id} profile={e} />
								))}
								{hasMoreMutualFollowers && (
									<div ref={observeMutualFollowersRef}>
										<Spinner />
									</div>
								)}
							</>
						) : (
							<>
								{profileFollowers?.map((e) => (
									<Profile
										key={e.wallet.defaultProfile?.id}
										profile={e.wallet.defaultProfile!}
									/>
								))}
							</>
						)}
					</ul>
				</div>
			</div>
		</>
	)
}
