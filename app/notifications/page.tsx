"use client"
import { useEffect } from "react"
import Link from "next/link"
import {
	ProfileOwnedByMe,
	useNotifications,
	useUnreadNotificationCount,
	Notification as NotificationType,
	NewFollowerNotification,
	NewCollectNotification,
	NewCommentNotification,
	NewMentionNotification,
	NewMirrorNotification,
	NewReactionNotification,
	MediaSet,
	Profile as ProfileType,
	ProfileMedia,
} from "@lens-protocol/react-web"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"
import { WhenLoggedInWithProfile } from "../components/auth/WhenLoggedInWithProfile"
import { Spinner } from "../components/Spinner"
import { ProfilePicture } from "../components/ProfilePicture"
import moment from "moment"

export default function Notifications({
	params,
}: {
	params: { slug: string }
}) {
	return (
		<>
			<title>Notifications / Metro House</title>
			<a className="text-xl font-semibold">Notifications</a>
			<WhenLoggedInWithProfile>
				{({ profile }) => <NotificationsComponent profile={profile} />}
			</WhenLoggedInWithProfile>
		</>
	)
}

function NotificationsComponent({ profile }: { profile: ProfileOwnedByMe }) {
	const {
		data: notifications,
		hasMore,
		loading,
		observeRef,
	} = useInfiniteScroll(useNotifications({ profileId: profile.id }))

	const {
		loading: loadingCount,
		unreadNotificationCount,
		clear,
	} = useUnreadNotificationCount({ profileId: profile.id })

	useEffect(() => {
		if (clear && unreadNotificationCount) clear()
	}, [clear, unreadNotificationCount])

	if (loading || loadingCount) return <Spinner />

	return (
		<div className="flex flex-col min-w-full gap-8">
			<ol className="divide-y divider-gray-200 ">
				{notifications?.map((notification) => (
					<Notification
						notification={notification}
						key={notification.notificationId}
					/>
				))}
			</ol>

			{hasMore && (
				<div ref={observeRef}>
					<Spinner />
				</div>
			)}
		</div>
	)
}

function NotificationItemWrapper({
	text,
	picture,
	profile,
	notificationLink,
	date,
	children,
}: {
	text: string
	picture: MediaSet | ProfileMedia | null
	profile: ProfileType
	notificationLink: string
	date: string
	children: React.ReactNode
}) {
	return (
		<Link
			href={notificationLink}
			className="items-center block justify-between p-4 sm:flex hover:bg-gray-100 "
		>
			<div className="flex gap-4 items-center">
				<div className="flex">{children}</div>
				{/* Notification */}
				<div className="flex-shrink-0">
					<ProfilePicture picture={picture} profile={profile} />
				</div>
				<div className="text-gray-600 ">{text}</div>
			</div>
			<div className="text-gray-600 ">{date}</div>
		</Link>
	)
}

function NewReactionNotification({
	notification,
}: {
	notification: NewReactionNotification
}) {
	const postDate = moment(notification.createdAt).format(
		"MMMM Do YYYY, h:mm:ss a"
	)

	return (
		<NotificationItemWrapper
			notificationLink={`/publication/${notification.publication.id}`}
			picture={notification.profile.picture}
			profile={notification.profile}
			text={`${notification.profile.handle} reacted ${notification.reaction} to
		publication ${notification.publication.id}`}
			date={postDate}
		>
			<svg
				className="h-10 w-10 fill-white stroke-gray-500"
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
		</NotificationItemWrapper>
	)
}
function NewMirrorNotification({
	notification,
}: {
	notification: NewMirrorNotification
}) {
	const postDate = moment(notification.createdAt).format(
		"MMMM Do YYYY, h:mm:ss a"
	)

	return (
		<NotificationItemWrapper
			notificationLink={`/publication/${notification.publication.id}`}
			picture={notification.profile.picture}
			profile={notification.profile}
			text={`Publication ${notification.publication.id} collected by${" "}
		${notification.profile.handle}`}
			date={postDate}
		>
			<svg
				className="h-10 w-10 fill-white stroke-gray-500"
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
		</NotificationItemWrapper>
	)
}

function NewMentionNotification({
	notification,
}: {
	notification: NewMentionNotification
}) {
	const postDate = moment(notification.createdAt).format(
		"MMMM Do YYYY, h:mm:ss a"
	)

	return (
		<NotificationItemWrapper
			notificationLink={`/publication/${notification.mentionPublication.id}`}
			picture={notification.mentionPublication.profile.picture}
			profile={notification.mentionPublication.profile}
			text={`Mentioned ${`"`}
		${notification.mentionPublication.metadata.content}
		${`"`} by ${notification.mentionPublication.profile.handle}`}
			date={postDate}
		>
			<svg
				className="h-10 w-10 fill-white stroke-gray-500"
				fill="none"
				stroke="currentColor"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
				/>
			</svg>
		</NotificationItemWrapper>
	)
}

function NewCommentNotification({
	notification,
}: {
	notification: NewCommentNotification
}) {
	const postDate = moment(notification.createdAt).format(
		"MMMM Do YYYY, h:mm:ss a"
	)

	return (
		<NotificationItemWrapper
			notificationLink={`/publication/${notification.comment.id}`}
			picture={notification.profile.picture}
			profile={notification.profile}
			text={`Comment ${`"`}
		${notification.comment.metadata.content}
		${`"`} by ${notification.comment.profile.handle} on${" "}
		${notification.comment.mainPost.id}`}
			date={postDate}
		>
			<svg
				className="h-10 w-10 fill-white stroke-gray-500"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
				/>
			</svg>
		</NotificationItemWrapper>
	)
}

function NewCollectNotification({
	notification,
}: {
	notification: NewCollectNotification
}) {
	const postDate = moment(notification.createdAt).format(
		"MMMM Do YYYY, h:mm:ss a"
	)

	return (
		<NotificationItemWrapper
			notificationLink={`/publication/${notification.collectedPublication.id}`}
			picture={notification.collectedPublication.profile.picture}
			profile={notification.collectedPublication.profile}
			text={`Publication ${
				notification.collectedPublication.id
			} collected by${" "}
		${notification.wallet.defaultProfile?.handle}`}
			date={postDate}
		>
			<svg
				className="h-10 w-10 fill-white stroke-gray-500"
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
		</NotificationItemWrapper>
	)
}

function NewFollowerNotification({
	notification,
}: {
	notification: NewFollowerNotification
}) {
	const postDate = moment(notification.createdAt).format(
		"MMMM Do YYYY, h:mm:ss a"
	)

	return (
		<NotificationItemWrapper
			notificationLink={`/profile/${notification.wallet.defaultProfile
				?.handle!}`}
			picture={notification.wallet.defaultProfile?.picture!}
			profile={notification.wallet.defaultProfile!}
			text={`Followed by ${notification.wallet.defaultProfile?.handle}`}
			date={postDate}
		>
			<svg
				className="h-10 w-10 fill-white stroke-gray-500"
				fill="none"
				stroke="currentColor"
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
				/>
			</svg>
		</NotificationItemWrapper>
	)
}

function Notification({ notification }: { notification: NotificationType }) {
	switch (notification.__typename) {
		case "NewFollowerNotification":
			return <NewFollowerNotification notification={notification} />
		case "NewCollectNotification":
			return <NewCollectNotification notification={notification} />
		case "NewCommentNotification":
			return <NewCommentNotification notification={notification} />
		case "NewMentionNotification":
			return <NewMentionNotification notification={notification} />
		case "NewMirrorNotification":
			return <NewMirrorNotification notification={notification} />
		case "NewReactionNotification":
			return <NewReactionNotification notification={notification} />
	}
}
