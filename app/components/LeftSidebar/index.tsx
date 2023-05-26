"use client"
import Link from "next/link"
import {
	ProfileOwnedByMe,
	useActiveProfile,
	useUnreadNotificationCount,
} from "@lens-protocol/react-web"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"
import { ProfilePicture } from "../ProfilePicture"

export function LeftSidebar() {
	const { data: profile, error, loading: profileLoading } = useActiveProfile()

	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 left-0 z-40 w-80 h-screen pt-28 transition-transform -translate-x-full lg:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="h-full px-4 pb-4 overflow-y-auto bg-white justify-between flex flex-col items-center">
				{/* Menu Buttons */}
				<WhenLoggedInWithProfile>
					{({ profile }) => (
						<ul className="space-y-2 font-medium flex flex-col justify-between">
							{["Contacts", "Discovery", "Notifications", "Profile"].map(
								(item, idx) => {
									return (
										<Link
											key={idx}
											className="flex p-2 text-xl items-center rounded-lg hover:bg-gray-100 "
											href={
												item === "Profile"
													? `/profile/${profile.handle}`
													: item === "Contacts"
													? `/profile/${profile.handle}/contacts`
													: item === "Discovery"
													? "/discovery"
													: item === "Notifications"
													? "/notifications"
													: "/"
											}
										>
											{item === "Contacts" ? (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
											) : item === "Discovery" ? (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
														d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
													/>
												</svg>
											) : item === "Profile" ? (
												<ProfilePicture
													picture={profile.picture}
													profile={profile}
													design={"small"}
												/>
											) : (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
														d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
													/>
												</svg>
											)}
											<div className="ml-3">
												{item}
												{item === "Notifications" && (
													<NotificationsCount profile={profile} />
												)}
											</div>
										</Link>
									)
								}
							)}
						</ul>
					)}
				</WhenLoggedInWithProfile>

				{!profile && (
					<ul className="space-y-2 font-medium flex flex-col justify-between">
						{[
							"Discovery",
							"Latest",
							"Top Collected",
							"Top Commented",
							"Top Mirrored",
						].map((item, idx) => {
							return (
								<Link
									key={idx}
									className="flex p-2 text-xl items-center rounded-lg hover:bg-gray-100 "
									href={
										item === "Discovery"
											? "/discovery"
											: item === "Latest"
											? "/"
											: item === "Top Collected"
											? "/?tab=topcollected"
											: item === "Top Commented"
											? "/?tab=topcommented"
											: item === "Top Mirrored"
											? "/?tab=topmirrored"
											: "/"
									}
								>
									{item === "Discovery" ? (
										<svg
											className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
												d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
											/>
										</svg>
									) : item === "Latest" ? (
										<svg
											className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
												d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
											/>
										</svg>
									) : item === "Top Collected" ? (
										<svg
											className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
												d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
											/>
										</svg>
									) : item === "Top Commented" ? (
										<svg
											className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
												d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
											/>
										</svg>
									) : item === "Top Mirrored" ? (
										<svg
											className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
												d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
											/>
										</svg>
									) : (
										<svg
											className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
												d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
											/>
										</svg>
									)}
									<div className="ml-3">{item}</div>
								</Link>
							)
						})}
					</ul>
				)}
			</div>
		</aside>
	)
}

function NotificationsCount({ profile }: { profile: ProfileOwnedByMe }) {
	const { loading: loadingCount, unreadNotificationCount } =
		useUnreadNotificationCount({ profileId: profile.id })

	if (unreadNotificationCount === 0 || loadingCount) return null

	return (
		<span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-md font-semibold text-blue-800 bg-blue-200 rounded-full">
			{unreadNotificationCount}
		</span>
	)
}
