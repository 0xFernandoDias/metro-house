import Link from "next/link"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"
import { WhenLoggedOut } from "../auth/WhenLoggedOut"
import { ProfilePicture } from "../ProfilePicture"

export function ApplicationBar() {
	return (
		<div className="fixed sm:invisible px-4 sm:opacity-0 z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 ">
			<div className="flex h-full max-w-lg justify-between items-center mx-auto">
				<Link
					href="/"
					className="inline-flex flex-col items-center justify-center px-2 rounded-l-full hover:bg-gray-50 group"
				>
					<svg
						className="w-6 h-6 text-gray-500 fill-gray-500 group-hover:text-blue-600 "
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
					</svg>
					<span className="sr-only">Home</span>
				</Link>

				<Link
					href="/discovery"
					className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 group"
				>
					<svg
						className="w-6 h-6 stroke-gray-500 fill-white text-gray-500 group-hover:text-blue-600 "
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
					<span className="sr-only">Discover</span>
				</Link>

				<WhenLoggedInWithProfile>
					{({ profile }) => (
						<>
							<div className="flex items-center justify-center">
								<Link
									href="/"
									data-tooltip-target="tooltip-newpost"
									type="button"
									className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none "
								>
									<svg
										className="w-6 h-6 text-white fill-white"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											clipRule="evenodd"
											fillRule="evenodd"
											d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
										></path>
									</svg>
									<span className="sr-only">New Post</span>
								</Link>
							</div>

							<Link
								data-tooltip-target="tooltip-notifications"
								href="/notifications"
								className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 group"
							>
								<svg
									className="w-6 h-6 group-hover:stroke-blue-600 stroke-gray-500 fill-white"
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
								<span className="sr-only">Notifications</span>
							</Link>
							<ProfilePicture
								picture={profile.picture}
								profile={profile}
								design={"small"}
							/>
						</>
					)}
				</WhenLoggedInWithProfile>

				<WhenLoggedOut>
					<button
						data-tooltip-target="tooltip-more"
						type="button"
						className="inline-flex flex-col items-center justify-center px-2 rounded-r-full hover:bg-gray-50 group"
					>
						<svg
							className="w-6 h-6 group-hover:stroke-blue-600 stroke-gray-500 fill-white"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
							></path>
						</svg>
						<span className="sr-only">More</span>
					</button>
				</WhenLoggedOut>
			</div>
		</div>
	)
}
