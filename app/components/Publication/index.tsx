"use client"
import {
	AnyPublicationFragment,
	ContentPublicationFragment,
	MediaSetFragment,
	ProfileFragment,
	ReactionType,
	isMirrorPublication,
	useActiveProfile,
	useEncryptedPublication,
	usePublication,
	useReaction,
	useWhoReacted,
} from "@lens-protocol/react-web"
import { CommentsSection } from "../CommentsSection"
import Link from "next/link"
import Image from "next/image"
import { ProfileHeader } from "../ProfileHeader"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { MediaRenderer } from "@thirdweb-dev/react"
import { WhenLoggedOut } from "../auth/WhenLoggedOut"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"
import { ProfilePicture } from "../ProfilePicture"
import { useState } from "react"

export const Publication = ({
	publication,
	comment,
}: {
	publication: ContentPublicationFragment
	comment?: boolean
}) => {
	const { data: post, isPending } = useEncryptedPublication({
		publication,
	})

	const {
		data: profile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const { data: whoReacted, loading } = useWhoReacted({
		publicationId: post.id,
		observerId: profile?.id,
	})

	if (isPending || loading) {
		return <div>Loading...</div>
	}

	{
		/* <Link className="font-bold" href={`/profile/${data.profile.handle}`}>
				@{data.profile.handle}
			</Link>
			<span>{data.metadata.content}</span> */
	}

	return (
		<article className="max-w-max flex flex-col gap-4 ">
			{/* Post Header */}

			<ProfileHeader viewingProfileId={profile?.id} profile={post.profile} />

			{/* Created At */}
			<time
				dateTime="2020-08-25 19:00"
				className="block text-md text-gray-500 dark:text-gray-400"
			>
				<Link href={`/Publication/${publication.id}`}>{post.createdAt}</Link>
			</time>

			{/* Post Metadata Content */}
			<Link
				href={`/Publication/${publication.id}`}
				className="text-lg dark:text-gray-400"
			>
				{post.metadata.content}
			</Link>

			{/* <Link
				href="#"
				className="block text-md font-medium text-blue-600 hover:underline dark:text-blue-500"
			>
				Read more
			</Link> */}

			<aside className="flex flex-col gap-3">
				{/* Avatars */}
				<div className="flex -space-x-3">
					{whoReacted?.map((profile, idx) => {
						if (idx > 3) return null

						return (
							<ProfilePicture
								design="small"
								profile={profile.profile}
								picture={profile.profile.picture}
								key={profile.profile.id}
							/>
						)
					})}

					{whoReacted && whoReacted.length > 3 && (
						<Link
							className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
							href={`/Publication/${publication.id}/WhoReacted`}
						>
							+{whoReacted.length - 3}
						</Link>
					)}
				</div>

				<div className="text-md text-gray-500 dark:text-gray-400">
					<Link href={`/Publication/${post.id}/WhoReacted`}>
						See who liked, shared or collected the post.
					</Link>
				</div>

				<WhenLoggedOut>
					<div className="flex items-center space-x-3">
						{/* Like */}
						<div className="text-gray-900 bg-white gap-2 flex flex-row  focus:outline-none  font-medium rounded-lg text-md px-2 py-1.5  dark:text-white dark:border-gray-600 dark:hover:bg-gray-70  ">
							<svg
								className="h-6 w-6 fill-white stroke-gray-500"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
								/>
							</svg>
							<Link href={`/Publication/${post.id}/WhoReacted?tab=likes`}>
								{post.stats.totalUpvotes}
							</Link>
						</div>

						{/* Mirror */}
						<div className="text-gray-900 bg-white  gap-2 flex flex-row  focus:outline-none font-medium rounded-lg text-md px-2 py-1.5  dark:text-white dark:border-gray-600 dark:hover:bg-gray-70  ">
							<svg
								className="h-6 w-6 fill-white stroke-gray-500"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
								/>
							</svg>
							<Link href={`/Publication/${post.id}/WhoReacted?tab=mirrors`}>
								{post.stats.totalAmountOfMirrors}
							</Link>
						</div>

						{/* Collect */}
						<div className="text-gray-900 bg-white  gap-2 flex flex-row  focus:outline-none font-medium rounded-lg text-md px-2 py-1.5  dark:text-white dark:border-gray-600 dark:hover:bg-gray-70  ">
							<svg
								className="h-6 w-6 fill-white stroke-gray-500"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
								/>
							</svg>
							<Link href={`/Publication/${post.id}/WhoReacted?tab=collects`}>
								{post.stats.totalAmountOfCollects}
							</Link>
						</div>
					</div>
				</WhenLoggedOut>
				<WhenLoggedInWithProfile>
					{({ profile: activeProfile }) => (
						<div className="flex items-center space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
							{/* Reactions buttons */}
							{/* Like */}

							<LikeUnlikeButton
								profile={activeProfile}
								publicationId={post.id}
							/>

							{/* Comment */}
							{/* <Link
					href="#"
					className="text-gray-900 bg-white border gap-2 flex flex-row border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
				>
					<svg
						className="h-6 w-6 fill-white stroke-gray-500"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
						/>
					</svg>
					23
				</Link> */}

							{/* Mirror */}
							<button
								type="button"
								className="text-gray-900 bg-white border gap-2 flex flex-row border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
							>
								<svg
									className="h-6 w-6 fill-white stroke-gray-500"
									strokeWidth={1.5}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
									/>
								</svg>
								{post.stats.totalAmountOfMirrors}
							</button>

							{/* Collect */}
							<button
								type="button"
								className="text-gray-900 bg-white border gap-2 flex flex-row border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
							>
								<svg
									className="h-6 w-6 fill-white stroke-gray-500"
									strokeWidth={1.5}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
									/>
								</svg>
								{post.stats.totalAmountOfCollects}
							</button>
						</div>
					)}
				</WhenLoggedInWithProfile>
			</aside>
		</article>
	)
}

function LikeUnlikeButton({
	profile,
	publicationId,
}: {
	profile: ProfileFragment
	publicationId: string
}) {
	const {
		data: publication,
		error,
		loading,
	} = usePublication({
		publicationId: publicationId,
		observerId: profile.id,
	})

	if (loading) {
		return <>...loading</>
	}

	if (error) {
		return <>{error}</>
	}

	return (
		<ReactionButton
			publication={
				isMirrorPublication(publication) ? publication.mirrorOf : publication
			}
			profileId={profile.id}
			reactionType={ReactionType.UPVOTE}
		/>
	)
}

function ReactionButton({
	publication,
	profileId,
	reactionType,
}: {
	publication: ContentPublicationFragment
	profileId: string
	reactionType: ReactionType
}) {
	const { addReaction, removeReaction, hasReaction, isPending } = useReaction({
		profileId,
	})

	const [hasReactionType, setHasReactionType] = useState(
		hasReaction({
			reactionType,
			publication,
		})
	)

	const { totalUpvotes: upVotes } = publication.stats

	const [totalUpvotes, setTotalUpvotes] = useState(upVotes)

	const toggleReaction = async () => {
		if (hasReactionType) {
			await removeReaction({
				reactionType,
				publication,
			})

			setHasReactionType(false)
			setTotalUpvotes((prevState) => prevState - 1)
		} else {
			await addReaction({
				reactionType,
				publication,
			})

			setHasReactionType(true)
			setTotalUpvotes((prevState) => prevState + 1)
		}
	}

	if (isPending) {
		return <>...loading</>
	}

	return (
		<button
			type="button"
			className={`text-${hasReactionType ? "white" : "gray-900"} bg-${
				hasReactionType ? "blue-600" : "white"
			} border gap-2 flex flex-row border-gray-300 focus:outline-none hover:bg-${
				hasReactionType ? "blue-800" : "gray-100"
			} focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
			onClick={toggleReaction}
		>
			<svg
				className="h-6 w-6 fill-white stroke-gray-500"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
				/>
			</svg>
			{totalUpvotes}
		</button>
	)
}
