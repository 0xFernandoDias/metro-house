"use client"
import Link from "next/link"
import Logo from "../Logo"
import { LeftSidebar } from "../LeftSidebar"
import { usePathname, useRouter } from "next/navigation"
import {
	MediaSetFragment,
	ProfileFragment,
	useActiveProfile,
	useActiveWallet,
	useExploreProfiles,
	useProfilesToFollow,
} from "@lens-protocol/react-web"
import { MediaRenderer } from "@thirdweb-dev/react"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { LoginButton } from "../auth/LoginButton"
import { ChangeEvent, useEffect, useState } from "react"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"
import { WhenLoggedOut } from "../auth/WhenLoggedOut"
import { FollowUnfollowButton } from "../FollowUnfollowButton"
import { ProfilePicture } from "../ProfilePicture"

export function NavbarWithSidebars({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col">
			<TopNavbar />
			<div className="flex flex-col gap-6 mx-4 lg:mx-96">
				{/* I'll use this on Mobile too */}
				<LeftSidebar />
				<BottomNavbar />
				{children}
				<RightSidebar />
			</div>
		</div>
	)
}

function TopNavbar() {
	return (
		<nav className="sticky p-3 lg:p-6 top-0 z-50 w-full bg-white dark:bg-gray-800">
			<div className="flex flex-col gap-6 sm:flex-row items-center justify-between">
				<Logo />

				{/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
						Hello @fernando.dias
				</span> */}

				{/* User Avatar and Menu */}
				<div className="flex items-center">
					{/* Avatar */}
					{/* <button
						type="button"
						className="flex text-lg bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
						aria-expanded="false"
						data-dropdown-toggle="dropdown-user"
					>
						<span className="sr-only">Open user menu</span>
						<Image
							className="rounded-full"
							width={48}
							height={48}
							src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							alt="user photo"
						/>
					</button> */}

					<LoginButton />

					{/* User Menu */}
					{/* <UserMenu /> */}
				</div>
			</div>
		</nav>
	)
}

function BottomNavbar() {
	const pathname = usePathname()

	return (
		<div className="flex flex-col">
			<nav className="flex max-w-min text-gray-700" aria-label="Breadcrumb">
				<ol className="inline-flex items-center space-x-1 md:space-x-3">
					{/* <a className="inline-flex items-center gap-3 text-2xl font-semibold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
						<svg
							aria-hidden="true"
							className="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
						</svg>
						{pathname === "/" ? "Home" : pathname.substring(1)}
					</a> */}

					{/* <li>
								<div className="flex items-center">
									<svg
										aria-hidden="true"
										className="w-6 h-6 text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<a
										href="#"
										className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
									>
										Templates
									</a>
								</div>
							</li>
							<li aria-current="page">
								<div className="flex items-center">
									<svg
										aria-hidden="true"
										className="w-6 h-6 text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
										Flowbite
									</span>
								</div>
							</li> */}
				</ol>
			</nav>
		</div>
	)
}

export function RightSidebar() {
	const { push } = useRouter()
	const [inputValue, setInputValue] = useState("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		push(`/Discovery/${inputValue}`)
	}

	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 right-0 z-40 w-96 h-screen pt-28 transition-transform translate-x-full bg-white lg:translate-x-0 "
			aria-label="Sidebar"
		>
			<div className="h-full items-end px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800 justify-between  flex flex-col">
				{/* Search */}
				<form className="flex flex-col max-w-max gap-6" onSubmit={handleSubmit}>
					<label htmlFor="discovery-search" className="sr-only">
						Search
					</label>
					<div className="relative w-full">
						{/* Icon */}
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<input
							type="text"
							id="discovery-search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search"
							required
							onChange={handleChange}
						/>
					</div>
					<SuggestedProfiles />
				</form>
				<Footer />
			</div>
		</aside>
	)
}

function UserMenu() {
	return (
		<div
			className="my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
			id="dropdown-user"
		>
			<div className="px-4 py-3" role="none">
				<p className="text-lg text-gray-900 dark:text-white" role="none">
					Neil Sims
				</p>
				<p
					className="text-lg font-medium text-gray-900 truncate dark:text-gray-300"
					role="none"
				>
					@neil.sims
				</p>
			</div>

			<ul className="py-1" role="none">
				<button
					type="button"
					className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					Wrong Network
				</button>

				<button
					type="button"
					className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					Switch Profile
				</button>

				<Link
					href="/Settings"
					className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					Settings
				</Link>

				<button
					type="button"
					className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					Logout
				</button>
			</ul>
		</div>
	)
}

function SuggestedProfiles() {
	// const { data: profiles } = useExploreProfiles({ limit: 5 })
	const {
		data: profile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const {
		data: profiles,
		error,
		loading,
	} = useProfilesToFollow({ observerId: profile?.id || undefined })

	return (
		<div className="flex flex-col items-center gap-6">
			<a className="text-xl font-semibold">Suggested</a>

			{/* Profiles */}
			<ul className="max-w-md gap-6 flex flex-col">
				{profiles?.map((profile, idx) => {
					if (idx > 4) return null
					return (
						<div
							className="flex items-center gap-1 justify-between"
							key={profile.id}
						>
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
									<FollowUnfollowButton
										follower={activeProfile}
										followee={profile}
										onlyIcon
									/>
								)}
							</WhenLoggedInWithProfile>
						</div>
					)
				})}
			</ul>
		</div>
	)
}

function Footer() {
	const { data: activeWallet, loading: activeWalletLoading } = useActiveWallet()

	return (
		<footer className="w-full bg-white rounded-lg dark:bg-gray-800 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex-col">
			<ul className="flex flex-wrap gap-2 items-center justify-center mt-3 text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
				<Link href="/" className="hover:underline">
					Home
				</Link>

				<Link href="/About" className="hover:underline">
					About
				</Link>

				{activeWallet && (
					<Link href="/CreateProfile" className="hover:underline">
						Create Profile
					</Link>
				)}

				<Link href="/Discovery" className="hover:underline">
					Discovery
				</Link>

				<WhenLoggedInWithProfile>
					{() => (
						<Link href="/Settings" className="hover:underline">
							Settings
						</Link>
					)}
				</WhenLoggedInWithProfile>

				<Link href="/TermsAndPrivacy" className="hover:underline">
					Learn Blockchain
				</Link>
			</ul>
		</footer>
	)
}

{
	/*
            Desktop and Mobile
            Ref. Twitter

            useUnreadNotificationsCount AUTHENTICATED
            
            Metro House PAGE NAME Login/Profile (dark mode)/Settings/ Switch Profile/ Create Profile/ Wrong Network (https://flowbite.com/docs/components/avatar/) https://flowbite.com/docs/components/sidebar/#sidebar-with-navbar
            Latest Top Collected Top Commented Top Mirrored AUTHENTICATED https://flowbite.com/docs/components/tabs/#interactive-tabs
            (Audio) (Image) (Text) (Only) (Video) with icons https://flowbite.com/docs/components/tabs/#pills-tabs
            
            LEFT
            @handle AUTHENTICATED
            Contacts  AUTHENTICATED
            Discovery
            Latest
            Top Collected
            Top Commented
            Top Mirrored
            Notifications (count) AUTHENTICATED https://flowbite.com/docs/components/badge/#button-with-badge
            Profile AUTHENTICATED
            (CREATE POST) AUTHENTICATED
            Login/Profile (dark mode)/Settings/ Switch Profile/ Create Profile/ Wrong Network https://flowbite.com/docs/components/avatar/

            RIGHT
            Search
            Suggested
			TRENDING like Lenster
            Footer https://flowbite.com/docs/components/footer/#Follow-footer

            */
}

{
	/*
            MOBILE
            https://flowbite.com/docs/components/bottom-navigation/#application-bar-example
            https://flowbite.com/docs/components/sidebar/#off-canvas-sidebar
            https://flowbite.com/docs/components/dropdowns/#menu-icon
            Home Discovery (CREATE POST) AUTHENTICATED (LOGIN) Notifications  ...More 
				invisible transition-opacity opacity-0
			*/
}
