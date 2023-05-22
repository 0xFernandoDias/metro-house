"use client"
import {
	ContentPublication,
	Profile as ProfileType,
	ReactionType,
	useActiveProfile,
	useEncryptedPublication,
	useWhoReacted,
	useCreateMirror,
	ProfileOwnedByMe,
	useCollect,
	CommentWithFirstComment,
	isProfileOwnedByMe,
	useMutualFollowers,
	ProfileId,
	useReaction,
	PublicationId,
	Post,
	useComments,
	WhoReactedResult,
	Profile,
	usePublication,
} from "@lens-protocol/react-web"
import Link from "next/link"
import { ProfileHeader } from "../ProfileHeader"
import { WhenLoggedOut } from "../auth/WhenLoggedOut"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"
import { ProfilePicture } from "../ProfilePicture"
import { useState } from "react"
import { Spinner } from "../Spinner"
import { MediaRenderer } from "@thirdweb-dev/react"

export const Publication = ({
	publication,
	isComment,
	mirrorHandle,
	mirrorId,
	noHr = false,
	isPage = false,
	mainPost,
}: {
	publication: ContentPublication | CommentWithFirstComment | Post
	isComment?: boolean
	mirrorHandle?: string
	mirrorId?: PublicationId | false
	noHr?: boolean
	isPage?: boolean
	mainPost?: PublicationId
}) => {
	const { data: post, isPending } = useEncryptedPublication({
		publication,
	})

	const { data: mainpost } = usePublication({ publicationId: mainPost! })

	const {
		data: profile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const { data: whoReacted, loading } = useWhoReacted({
		publicationId: post.id,
		observerId: profile?.id,
	})

	const isMyProfile = isProfileOwnedByMe(post.profile)

	const { data: comments, loading: loadingComments } = useComments({
		commentsOf: post.id,
		observerId: profile?.id,
	})

	if (isPending || loading || profileLoading) {
		return <Spinner />
	}

	{
		/* <Link className="font-bold" href={`/profile/${data.profile.handle}`}>
				@{data.profile.handle}
			</Link>
			<span>{data.metadata.content}</span> */
	}

	return (
		<Link
			href={`/publication/${publication.id}`}
			className={`min-w-max flex gap-14 flex-col`}
		>
			<div className={`flex gap-8 ${isComment ? "" : "flex-col"}`}>
				{/* Post Header */}

				{mainpost && (
					<Link
						href={`/profile/${post.profile.handle}`}
						className="text-lg flex gap-2 items-center"
					>
						<svg
							className="h-4 w-4 fill-white stroke-gray-500"
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
						<div className="font-semibold">@{post.profile.handle}</div>
						commented
					</Link>
				)}

				{mirrorHandle && (
					<Link
						href={`/publication/${mirrorId}`}
						className="text-lg flex gap-2 items-center"
					>
						<svg
							className="h-4 w-4 fill-white stroke-gray-500"
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
						<Link className="font-semibold" href={`/profile/${mirrorHandle}`}>
							@{mirrorHandle}
						</Link>
						mirrored
					</Link>
				)}

				{!isComment ? (
					<ProfileHeader
						viewingProfileId={profile?.id}
						profile={post.profile}
						isComment={isComment}
					/>
				) : (
					<div className="flex flex-col items-center">
						<ProfilePicture
							profile={post.profile}
							picture={post.profile.picture}
						/>
						{!noHr && <div className="flex h-full w-[2px] bg-gray-200" />}
					</div>
				)}

				<div className="max-w-max flex flex-col gap-4 py-2">
					{isComment && (
						<div className="space-y-1 font-medium ">
							<div className="flex items-center flex-row gap-3">
								{post.profile.name && (
									<Link
										className="text-lg"
										href={`/profile/${post.profile.handle}`}
									>
										{post.profile.name}
									</Link>
								)}
								<Link
									className="text-lg font-medium text-gray-900 truncate "
									href={`/profile/${post.profile.handle}`}
								>
									@{post.profile.handle}
								</Link>
								{post.profile.onChainIdentity.proofOfHumanity && (
									<div className="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full  ">
										<svg
											aria-hidden="true"
											className="w-3.5 h-3.5"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										<span className="sr-only">Verified</span>
									</div>
								)}
								{post.profile.followStatus?.isFollowedByMe && (
									<Link
										className="text-sm font-medium text-gray-500 truncate "
										href={`/profile/${post.profile.handle}`}
									>
										is followed by me
									</Link>
								)}
							</div>
							<div className="text-md text-gray-500 ">
								<Link
									href={`/profile/${post.profile.handle}/contacts?tab=followers`}
								>
									{post.profile.stats.totalFollowers} followers
								</Link>
								<WhenLoggedInWithProfile>
									{({ profile }) =>
										isMyProfile ? (
											""
										) : (
											<Link
												href={`/profile/${post.profile.handle}/contacts?tab=mutual`}
											>
												<Mutual post={post} profile={profile} />
											</Link>
										)
									}
								</WhenLoggedInWithProfile>
							</div>
						</div>
					)}

					{/* Created At */}
					<time
						dateTime="2020-08-25 19:00"
						className="block text-md text-gray-500 "
					>
						{post.createdAt}
					</time>

					{/* Post Metadata Content */}
					<div className="text-lg  flex flex-col gap-8">
						{post.metadata.content}

						{post.metadata.media.map((media, idx) => {
							if (idx > 0) return null
							return (
								<MediaRenderer
									key={idx}
									width={"390px"}
									src={media.original.url}
									alt=""
								/>
							)
						})}
					</div>

					{/* <Link
				href="#"
				className="block text-md font-medium text-blue-600 hover:underline "
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
									className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 "
									href={`/publication/${publication.id}/whoReacted`}
								>
									+{whoReacted.length - 4}
								</Link>
							)}
						</div>

						{publication.stats.totalAmountOfCollects ||
						publication.stats.totalAmountOfMirrors ||
						publication.stats.totalUpvotes ? (
							<div className="text-md text-gray-500 ">
								<Link href={`/publication/${post.id}/whoReacted`}>
									See who liked, shared or collected the post.
								</Link>
							</div>
						) : profile ? (
							<div className="text-md text-gray-500 ">
								Be the first to react.
							</div>
						) : (
							<div className="text-md text-gray-500 ">
								Sign In and be the first to react.
							</div>
						)}

						<WhenLoggedOut>
							<div className="flex items-center space-x-3">
								{/* Like */}
								<Link
									href={`/publication/${post.id}/whoReacted?tab=likes`}
									className="text-gray-900 bg-white gap-2 flex flex-row  focus:outline-none  font-medium rounded-lg text-md px-2 py-1.5      "
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

									{post.stats.totalUpvotes}
								</Link>

								{/* Comment */}
								<Link
									href={`/publication/${publication.id}`}
									className="text-gray-900 bg-white gap-2 flex flex-row  focus:outline-none  font-medium rounded-lg text-md px-2 py-1.5      "
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
									{post.stats.totalAmountOfComments}
								</Link>

								{/* Mirror */}
								<Link
									href={`/publication/${post.id}/whoReacted?tab=mirrors`}
									className="text-gray-900 bg-white  gap-2 flex flex-row  focus:outline-none font-medium rounded-lg text-md px-2 py-1.5      "
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
								</Link>

								{/* Collect */}
								{!isComment && (
									<Link
										href={`/publication/${post.id}/whoReacted?tab=collects`}
										className="text-gray-900 bg-white  gap-2 flex flex-row  focus:outline-none font-medium rounded-lg text-md px-2 py-1.5      "
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
									</Link>
								)}
							</div>
						</WhenLoggedOut>
						<WhenLoggedInWithProfile>
							{({ profile: activeProfile }) => (
								<div className="flex items-center space-x-3 divide-x divide-gray-200 ">
									{/* Reactions buttons */}
									{/* Like */}

									<LikeUnlikeButton
										profile={activeProfile}
										publication={post}
									/>
									<CommentButton publication={post} />
									<MirrorButton profile={activeProfile} publication={post} />
									{!isComment && (
										<CollectButton profile={activeProfile} publication={post} />
									)}
								</div>
							)}
						</WhenLoggedInWithProfile>
					</aside>
				</div>
				{!isPage &&
					!isComment &&
					comments?.map((comment, idx) => {
						if (idx > 0) return null
						return (
							<CommentComponent
								post={comment}
								whoReacted={whoReacted}
								loading={loading}
								isMyProfile={isMyProfile}
								isPending={isPending}
								key={comment.id}
								profile={profile}
							/>
						)
					})}
			</div>
			{!isPage && <div className="flex w-full h-[1px] bg-gray-200 mb-14" />}
		</Link>
	)
}

function CommentComponent({
	post,
	whoReacted,
	loading,
	isMyProfile,
	isPending,
	profile,
}: {
	post: ContentPublication | CommentWithFirstComment | Post
	whoReacted: WhoReactedResult[] | undefined
	loading: boolean
	isMyProfile: boolean
	isPending: boolean
	profile: ProfileOwnedByMe | null | undefined
}) {
	if (isPending || loading) {
		return <Spinner />
	}

	{
		/* <Link className="font-bold" href={`/profile/${data.profile.handle}`}>
				@{data.profile.handle}
			</Link>
			<span>{data.metadata.content}</span> */
	}

	return (
		<Link href={`/publication/${post.id}`} className={`max-w-max flex gap-8 `}>
			{/* Post Header */}

			<div className="flex flex-col items-center ">
				<ProfilePicture profile={post.profile} picture={post.profile.picture} />
			</div>

			<div className="max-w-max flex flex-col gap-4 py-2">
				<div className="space-y-1 font-medium ">
					<div className="flex items-center flex-row gap-3">
						{post.profile.name && (
							<Link
								className="text-lg"
								href={`/profile/${post.profile.handle}`}
							>
								{post.profile.name}
							</Link>
						)}
						<Link
							className="text-lg font-medium text-gray-900 truncate "
							href={`/profile/${post.profile.handle}`}
						>
							@{post.profile.handle}
						</Link>
						{post.profile.onChainIdentity.proofOfHumanity && (
							<div className="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full  ">
								<svg
									aria-hidden="true"
									className="w-3.5 h-3.5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Verified</span>
							</div>
						)}
						{post.profile.followStatus?.isFollowedByMe && (
							<Link
								className="text-sm font-medium text-gray-500 truncate "
								href={`/profile/${post.profile.handle}`}
							>
								is followed by me
							</Link>
						)}
					</div>
					<div className="text-md text-gray-500 ">
						<Link
							href={`/profile/${post.profile.handle}/contacts?tab=followers`}
						>
							{post.profile.stats.totalFollowers} followers
						</Link>
						<WhenLoggedInWithProfile>
							{({ profile }) =>
								isMyProfile ? (
									""
								) : (
									<Link
										href={`/profile/${post.profile.handle}/contacts?tab=mutual`}
									>
										<Mutual post={post} profile={profile} />
									</Link>
								)
							}
						</WhenLoggedInWithProfile>
					</div>
				</div>

				{/* Created At */}

				<Link href={`/publication/${post.id}`}>
					<time
						dateTime="2020-08-25 19:00"
						className="block text-md text-gray-500 "
					>
						{post.createdAt}
					</time>
				</Link>

				{/* Post Metadata Content */}
				<div className="text-lg  flex flex-col gap-8">
					{post.metadata.content}

					{post.metadata.media.map((media, idx) => {
						if (idx > 0) return null
						return (
							<MediaRenderer
								key={idx}
								width={"530px"}
								src={media.original.url}
								alt=""
							/>
						)
					})}
				</div>

				{/* <Link
				href="#"
				className="block text-md font-medium text-blue-600 hover:underline "
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
								className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 "
								href={`/publication/${post.id}/whoReacted`}
							>
								+{whoReacted.length - 4}
							</Link>
						)}
					</div>

					{post.stats.totalAmountOfCollects ||
					post.stats.totalAmountOfMirrors ||
					post.stats.totalUpvotes ? (
						<div className="text-md text-gray-500 ">
							<Link href={`/publication/${post.id}/whoReacted`}>
								See who liked, shared or collected the post.
							</Link>
						</div>
					) : profile ? (
						<div className="text-md text-gray-500 ">Be the first to react.</div>
					) : (
						<div className="text-md text-gray-500 ">
							Sign In and be the first to react.
						</div>
					)}

					<WhenLoggedOut>
						<div className="flex items-center space-x-3">
							{/* Like */}
							<Link
								href={`/publication/${post.id}/whoReacted?tab=likes`}
								className="text-gray-900 bg-white gap-2 flex flex-row  focus:outline-none  font-medium rounded-lg text-md px-2 py-1.5      "
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

								{post.stats.totalUpvotes}
							</Link>

							{/* Comment */}
							<Link
								href={`/publication/${post.id}`}
								className="text-gray-900 bg-white gap-2 flex flex-row  focus:outline-none  font-medium rounded-lg text-md px-2 py-1.5      "
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
								{post.stats.totalAmountOfComments}
							</Link>

							{/* Mirror */}
							<Link
								href={`/publication/${post.id}/whoReacted?tab=mirrors`}
								className="text-gray-900 bg-white  gap-2 flex flex-row  focus:outline-none font-medium rounded-lg text-md px-2 py-1.5      "
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
							</Link>
						</div>
					</WhenLoggedOut>
					<WhenLoggedInWithProfile>
						{({ profile: activeProfile }) => (
							<div className="flex items-center space-x-3 divide-x divide-gray-200 ">
								{/* Reactions buttons */}
								{/* Like */}

								<LikeUnlikeButton profile={activeProfile} publication={post} />
								<CommentButton publication={post} />
								<MirrorButton profile={activeProfile} publication={post} />
							</div>
						)}
					</WhenLoggedInWithProfile>
				</aside>
			</div>
		</Link>
	)
}

function CommentButton({ publication }: { publication: ContentPublication }) {
	const { totalAmountOfComments } = publication.stats
	return (
		<Link
			href={`/publication/${publication.id}`}
			className="text-gray-900 bg-white border gap-2 flex flex-row border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5      "
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
			{totalAmountOfComments}
		</Link>
	)
}

function CollectButton({
	profile,
	publication,
}: {
	profile: ProfileOwnedByMe
	publication: ContentPublication
}) {
	const { execute, isPending } = useCollect({
		collector: profile,
		publication,
	})

	const { totalAmountOfCollects: collects } = publication.stats

	const [totalAmountOfCollects, setTotalAmountOfCollects] = useState(collects)

	const handleCollect = async () => {
		await execute().then(() => {
			setTotalAmountOfCollects((prevState) => prevState + 1)
		})
	}

	if (isPending) {
		return <Spinner />
	}

	return (
		<button
			type="button"
			className="text-gray-900 bg-white border gap-2 flex flex-row border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5      "
			onClick={handleCollect}
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
			{totalAmountOfCollects}
		</button>
	)
}

function MirrorButton({
	profile,
	publication,
}: {
	profile: ProfileOwnedByMe
	publication: ContentPublication
}) {
	const { execute, isPending } = useCreateMirror({
		publisher: profile,
	})

	const { totalAmountOfMirrors: mirrors } = publication.stats

	const [totalAmountOfMirrors, setTotalAmountOfMirrors] = useState(mirrors)

	const handleMirror = async () => {
		await execute({
			publication,
		}).then(() => {
			setTotalAmountOfMirrors((prevState) => prevState + 1)
		})
	}

	if (isPending) {
		return <Spinner />
	}

	return (
		<button
			type="button"
			className="text-gray-900 bg-white border gap-2 flex flex-row border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5      "
			onClick={handleMirror}
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
			{totalAmountOfMirrors}
		</button>
	)
}

function LikeUnlikeButton({
	profile,
	publication,
}: {
	profile: ProfileType
	publication: ContentPublication
}) {
	const { addReaction, removeReaction, hasReaction, isPending } = useReaction({
		profileId: profile.id,
	})

	const [hasReactionType, setHasReactionType] = useState(
		hasReaction({
			reactionType: ReactionType.UPVOTE,
			publication,
		})
	)

	const { totalUpvotes: upVotes } = publication.stats

	const [totalUpvotes, setTotalUpvotes] = useState(upVotes)

	const toggleReaction = async () => {
		if (hasReactionType) {
			await removeReaction({
				reactionType: ReactionType.UPVOTE,
				publication,
			})

			setHasReactionType(false)
			setTotalUpvotes((prevState) => prevState - 1)
		} else {
			await addReaction({
				reactionType: ReactionType.UPVOTE,
				publication,
			})

			setHasReactionType(true)
			setTotalUpvotes((prevState) => prevState + 1)
		}
	}

	if (isPending) {
		return <Spinner />
	}

	return (
		<button
			type="button"
			className={`text-${hasReactionType ? "white" : "gray-900"} bg-${
				hasReactionType ? "blue-600" : "white"
			} border gap-2 flex flex-row border-gray-300 focus:outline-none hover:bg-${
				hasReactionType ? "blue-800" : "gray-100"
			} focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-2 py-1.5      `}
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

const Mutual = ({
	profile,
	post,
}: {
	profile: ProfileType
	post: ContentPublication | CommentWithFirstComment
}) => {
	const { data: mutual } = useMutualFollowers({
		observerId: profile.id,
		viewingProfileId: post.profile.id,
	})

	return <>{mutual?.length ? `, ${mutual?.length} mutual` : ""}</>
}
