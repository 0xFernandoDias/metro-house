"use client"
import Link from "next/link"
import Logo from "../Logo"
import { LeftSidebar } from "../LeftSidebar"
import { usePathname } from "next/navigation"
import { MediaSetFragment, useExploreProfiles } from "@lens-protocol/react-web"
import { MediaRenderer } from "@thirdweb-dev/react"
import { ProfileMedia_NftImage_Fragment } from "@lens-protocol/client/dist/declarations/src/graphql/fragments.generated"
import { LoginButton } from "../auth/LoginButton"
import { useEffect } from "react"

export function NavbarWithSidebars({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col">
			<TopNavbar />
			<div className="flex flex-col min-w-min gap-6 mx-4 lg:mx-96">
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
			<div className="flex items-center justify-between">
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
	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 right-0 z-40 w-80 h-screen pt-28 transition-transform translate-x-full bg-white lg:translate-x-0 "
			aria-label="Sidebar"
		>
			<div className="h-full px-4 pb-4 overflow-y-auto bg-white items-center dark:bg-gray-800 justify-between flex flex-col">
				{/* Search */}
				<form className="flex flex-col items-center gap-6">
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

function ProfilePicture({
	picture,
}: {
	picture: MediaSetFragment | ProfileMedia_NftImage_Fragment | undefined | null
}) {
	if (!picture) return <>Loading...</>

	switch (picture.__typename) {
		case "MediaSet":
			return (
				<MediaRenderer
					className="rounded-full"
					height="48px"
					width="48px"
					src={picture.original.url}
				/>
			)
		default:
			return <>Loading...</>
	}
}

function SuggestedProfiles() {
	const { data: profiles } = useExploreProfiles({ limit: 5 })

	return (
		<div className="flex flex-col items-center gap-6">
			<a className="text-xl font-semibold">Suggested</a>

			{/* Profiles */}
			<ul className="max-w-md gap-6 flex flex-col">
				{profiles?.map((profile, idx) => {
					return (
						<Link
							href={`/Profile/${profile.handle}`}
							className="flex items-center space-x-4"
							key={idx}
						>
							<ProfilePicture picture={profile.picture} />

							<div className="flex-1 min-w-0">
								<p className="text-xl font-medium text-gray-900 truncate dark:text-white">
									{profile.name}
								</p>
								<p className="text-xl text-gray-500 truncate dark:text-gray-400">
									@{profile.handle}
								</p>
							</div>

							{/* Follow Button */}
							<button
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							>
								<svg
									className="h-6 w-6 fill-white stroke-white"
									strokeWidth={1.5}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
									/>
								</svg>
							</button>
						</Link>
					)
				})}
			</ul>
		</div>
	)
}

function Footer() {
	return (
		<footer className="w-full bg-white rounded-lg dark:bg-gray-800 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex-col">
			<ul className="flex flex-wrap gap-2 items-center justify-center mt-3 text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
				<Link href="/" className="hover:underline">
					Home
				</Link>

				<Link href="/About" className="hover:underline">
					About
				</Link>

				<Link href="/CreateProfile" className="hover:underline">
					Create Profile
				</Link>

				<Link href="/Discovery" className="hover:underline">
					Discovery
				</Link>

				<Link href="/Settings" className="hover:underline">
					Settings
				</Link>

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
