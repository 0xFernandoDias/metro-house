"use client"
import Link from "next/link"
import { WhenLoggedInWithProfile } from "../components/auth/WhenLoggedInWithProfile"
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
import { ProfilePicture } from "../components/ProfilePicture"
import { useEffect } from "react"

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

	if (loading || loadingCount) return <p>Loading...</p>

	return (
		<div className="flex flex-col min-w-full gap-8">
			<ol className="divide-y divider-gray-200 dark:divide-gray-700">
				{notifications?.map((notification) => (
					<Notification
						notification={notification}
						key={notification.notificationId}
					/>
				))}
			</ol>

			{hasMore && <p ref={observeRef}>Loading more...</p>}
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
			className="items-center block justify-between p-4 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
		>
			<div className="flex gap-4 items-center">
				<div className="flex">{children}</div>
				{/* Notification */}
				<div className="flex-shrink-0">
					<ProfilePicture picture={picture} profile={profile} />
					{/* <div className="absolute items-center justify-center w-5 h-5 ml-10 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
			<svg
				className="w-3 h-3 text-white"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 10"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
					clipRule="evenodd"
				></path>
			</svg>
		</div> */}
				</div>
				{/* Notification */}
				<div className="text-gray-600 dark:text-gray-400">
					{text}
					{/* <span className="inline-flex items-center text-md font-normal text-gray-500 dark:text-gray-400">
		<svg
			aria-hidden="true"
			className="w-3 h-3 mr-1"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
				clipRule="evenodd"
			></path>
		</svg>
		Public
	</span> */}
				</div>
			</div>
			<div className="text-gray-600 dark:text-gray-400">{date}</div>
		</Link>
	)
}

function NewReactionNotification({
	notification,
}: {
	notification: NewReactionNotification
}) {
	return (
		<NotificationItemWrapper
			notificationLink={`/Publication/${notification.publication.id}`}
			picture={notification.profile.picture}
			profile={notification.profile}
			text={`${notification.profile.handle} reacted ${notification.reaction} to
		publication ${notification.publication.id}`}
			date={notification.createdAt}
		>
			<></>
		</NotificationItemWrapper>
	)
}
function NewMirrorNotification({
	notification,
}: {
	notification: NewMirrorNotification
}) {
	return (
		<NotificationItemWrapper
			notificationLink={`/Publication/${notification.publication.id}`}
			picture={notification.profile.picture}
			profile={notification.profile}
			text={`Publication ${notification.publication.id} collected by${" "}
		${notification.profile.handle}`}
			date={notification.createdAt}
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
	return (
		<NotificationItemWrapper
			notificationLink={`/Publication/${notification.mentionPublication.id}`}
			picture={notification.mentionPublication.profile.picture}
			profile={notification.mentionPublication.profile}
			text={`Mentioned ${`"`}
		${notification.mentionPublication.metadata.content}
		${`"`} by ${notification.mentionPublication.profile.handle}`}
			date={notification.createdAt}
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
	return (
		<NotificationItemWrapper
			notificationLink={`/Publication/${notification.comment.id}`}
			picture={notification.profile.picture}
			profile={notification.profile}
			text={`Comment ${`"`}
		${notification.comment.metadata.content}
		${`"`} by ${notification.comment.profile.handle} on${" "}
		${notification.comment.mainPost.id}`}
			date={notification.createdAt}
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
	return (
		<NotificationItemWrapper
			notificationLink={`/Publication/${notification.collectedPublication.id}`}
			picture={notification.collectedPublication.profile.picture}
			profile={notification.collectedPublication.profile}
			text={`Publication ${
				notification.collectedPublication.id
			} collected by${" "}
		${notification.wallet.defaultProfile?.handle}`}
			date={notification.createdAt}
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
	return (
		<NotificationItemWrapper
			notificationLink={`/Profile/${notification.wallet.defaultProfile
				?.handle!}`}
			picture={notification.wallet.defaultProfile?.picture!}
			profile={notification.wallet.defaultProfile!}
			text={`Followed by ${notification.wallet.defaultProfile?.handle}`}
			date={notification.createdAt}
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

function DaySection() {
	return <></>
}

// AUTHENTICATED
// filters
// https://flowbite.com/docs/components/badge/#notification-badge
// https://flowbite.com/docs/components/dropdowns/#notification-bell
// https://flowbite.com/docs/components/timeline/#grouped-timeline
// https://flowbite.com/docs/components/toast/#push-notification
// typename: new follower notification, collect, comment, mention, mirror, reaction
// created at
// wallet. address, default profile. handle, id, name, on chain identity, picture
