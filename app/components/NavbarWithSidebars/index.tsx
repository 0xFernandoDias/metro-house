"use client"
import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useActiveProfile, useProfilesToFollow } from "@lens-protocol/react-web"
import { WhenLoggedInWithProfile } from "../auth/WhenLoggedInWithProfile"
import { LoginButton } from "../auth/LoginButton"
import { Spinner } from "../Spinner"
import Logo from "../Logo"
import { LeftSidebar } from "../LeftSidebar"
import { ProfilePicture } from "../ProfilePicture"
import { FollowUnfollowButton } from "../FollowUnfollowButton"

const ENVIRONMENT = process.env.ENVIRONMENT as "development" | "production"

export function NavbarWithSidebars({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col overflow-x-hidden">
			<TopNavbar />
			<div className="flex flex-col gap-6 mx-4 mt-32 lg:mx-96">
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
		<nav className="fixed p-3 lg:p-6 top-0 z-50 w-full bg-white ">
			<div className="flex flex-col gap-6 sm:flex-row items-center justify-between">
				<Logo />

				{/* User Avatar and Menu */}
				<div className="flex items-center">
					{/* Avatar */}
					{/* <button
						type="button"
						className="flex text-lg bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
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
	return (
		<div className="flex flex-col">
			<nav className="flex max-w-min text-gray-700" aria-label="Breadcrumb">
				<ol className="inline-flex items-center space-x-1 md:space-x-3"></ol>
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
		push(`/discovery/${inputValue}`)
	}

	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 right-0 z-40 w-96 h-screen pt-28 transition-transform translate-x-full bg-white lg:translate-x-0 "
			aria-label="Sidebar"
		>
			<div className="h-full items-end px-4 pb-4 overflow-y-auto bg-white justify-between flex flex-col">
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
								className="w-5 h-5 text-gray-500 "
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
							className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
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
			className="my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
			id="dropdown-user"
		>
			<div className="px-4 py-3" role="none">
				<p className="text-lg text-gray-900 " role="none">
					Neil Sims
				</p>
				<p className="text-lg font-medium text-gray-900 truncate " role="none">
					@neil.sims
				</p>
			</div>

			<ul className="py-1" role="none">
				<button
					type="button"
					className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 "
					role="menuitem"
				>
					Wrong Network
				</button>

				<button
					type="button"
					className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 "
					role="menuitem"
				>
					Switch Profile
				</button>

				<Link
					href="/settings"
					className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 "
					role="menuitem"
				>
					Settings
				</Link>

				<button
					type="button"
					className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 "
					role="menuitem"
				>
					Logout
				</button>
			</ul>
		</div>
	)
}

function SuggestedProfiles() {
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

	if (loading || profileLoading) return <Spinner />

	return (
		<div className="flex flex-col items-center gap-6">
			<a className="text-xl font-semibold">Who To Follow</a>

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
										href={`/profile/${profile.handle}`}
										className="text-xl font-medium text-gray-900 truncate "
									>
										{profile.name}
									</Link>
									<Link
										href={`/profile/${profile.handle}`}
										className="text-xl text-gray-500 truncate "
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
	const { data: activeWallet, loading: activeWalletLoading } =
		useActiveProfile()

	return (
		<footer className="w-full bg-white rounded-lg mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex-col">
			<ul className="flex flex-wrap gap-2 items-center justify-center mt-3 text-md font-medium text-gray-500 sm:mt-0">
				<Link href="/" className="hover:underline">
					Home
				</Link>

				<Link href="/about" className="hover:underline">
					About
				</Link>

				{activeWallet && ENVIRONMENT === "development" && (
					<Link href="/createProfile" className="hover:underline">
						Create Profile
					</Link>
				)}

				<Link href="/discovery" className="hover:underline">
					Discovery
				</Link>

				<WhenLoggedInWithProfile>
					{() => (
						<Link href="/settings" className="hover:underline">
							Settings
						</Link>
					)}
				</WhenLoggedInWithProfile>

				<Link href="/termsAndPrivacy" className="hover:underline">
					Learn Blockchain
				</Link>
			</ul>
		</footer>
	)
}
