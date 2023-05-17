// https://flowbite.com/docs/components/rating/#rating-comment
// https://flowbite.com/docs/components/timeline/#vertical-timeline
// https://flowbite.com/docs/typography/lists/#advanced-layout
// (publication id)
// typename
// created At
// hidden?
// id
// profile - @handle
// 	Contacts (Followers, Following, Mutual)
// 	picture
// 	Follow AUTHENTICATE AT LEAST WITH METAMASK hash
// 	Name
// 	Proof of humanity
// useEncryptedPublication
// LOGIN TO DECRYPT - https://testnet.lenster.xyz/posts/0x1b-0x0133
// canObserverDecrypt?
// can COMMENT, can MIRROR, Has Collected by me? AUTHENTICATED
// Metadata
// mirrors
// reaction AUTHENTICATED
// Comments count, total amount of collects, total amount of mirrors, total upvotes, total downvotes
// Comments
// use Who react
// use who collected publication
// use who mirrored publication
// use who reacted
// use Reaction AUTHENTICATED
// use Hide Publication AUTHENTICATED
// https://flowbite.com/docs/components/card/#card-with-list
// ancora no comentario

"use client"
import {
	AnyPublication,
	Profile as ProfileType,
	isMirrorPublication,
} from "@lens-protocol/react-web"
import { Publication } from "../Publication"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { RefCallback } from "react"

export function Publications({
	publications,
	isLoading,
	isProfile = false,
	profile,
	isDiscovery = false,
	observeRef,
	hasMore,
}: {
	publications: AnyPublication[]
	isLoading: boolean
	isProfile?: boolean
	profile?: ProfileType
	isDiscovery?: boolean
	observeRef?: RefCallback<unknown>
	hasMore?: boolean
}) {
	// const { query } = useRouter()

	const { get } = useSearchParams()

	// const profileAddress = profile?.ownedBy || ""

	// const contractAddress = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"

	// const { contract } = useContract(contractAddress)

	// const { data: nfts, isLoading } = useOwnedNFTs(contract, profileAddress)

	const tab = get("tab")

	// const isNftsTab = tab === "nfts"

	if (isLoading) {
		return <>...loading</>
	}

	return (
		<div className="flex flex-col gap-6">
			{/* Tabs */}
			<ul
				className="flex gap-2 flex-wrap text-lg font-medium text-center border-b border-gray-200 dark:border-gray-700"
				id="myTab"
				data-tabs-toggle="#myTabContent"
				role="tablist"
			>
				<Link
					className={`inline-block p-4 ${
						!tab && "border-b-2 border-blue-700"
					} rounded-t-lg`}
					id={
						isProfile
							? "profileposts-tab"
							: isDiscovery
							? "discoverylatest-tab"
							: "latest-tab"
					}
					data-tabs-target={
						isProfile
							? `Profile/${profile?.handle}`
							: isDiscovery
							? "/discovery"
							: ""
					}
					href={
						isProfile
							? {
									pathname: `Profile/${profile?.handle}`,
							  }
							: isDiscovery
							? {
									pathname: "Discovery",
							  }
							: ""
					}
					role="tab"
					aria-controls={
						isProfile
							? "profileposts"
							: isDiscovery
							? "discoverylatest"
							: "latest"
					}
					aria-selected="false"
				>
					{isProfile ? (
						<div className="flex flex-row gap-2 items-center">
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
									d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
								/>
							</svg>
							Posts
						</div>
					) : (
						<div className="flex flex-row gap-2 items-center">
							<svg
								className="h-6 w-6 fill-white stroke-gray-500"
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
							Latest
						</div>
					)}
				</Link>

				<Link
					className={`inline-block p-4 ${
						tab === "nfts" || tab === "topcollected"
							? "border-b-2 border-blue-700"
							: ""
					} rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
					id={
						isProfile
							? "profilenfts-tab"
							: isDiscovery
							? "discoverytopcollected-tab"
							: "topcollected-tab"
					}
					href={
						isProfile
							? {
									pathname: `Profile/${profile?.handle}`,
									// query: { ...query, tab: "collects" },
									query: { tab: "nfts" },
							  }
							: isDiscovery
							? {
									pathname: "Discovery",
									query: { tab: "topcollected" },
							  }
							: {
									pathname: "/",
									// query: { ...query, tab: "topcollected" },
									query: { tab: "topcollected" },
							  }
					}
					data-tabs-target={
						isProfile
							? `Profile/${profile?.handle}?tab=nfts`
							: isDiscovery
							? "/discovery?tab=topcollected"
							: "?tab=topcollected"
					}
					role="tab"
					aria-controls={
						isProfile
							? "profilenfts"
							: isDiscovery
							? "discoverytopcollected"
							: "topcollected"
					}
					aria-selected="false"
				>
					{!isProfile && (
						<div className="flex flex-row gap-2 items-center">
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
							Top Collected
						</div>

						// <div className="flex flex-row gap-2 items-center">
						// 	<svg
						// 		className="h-6 w-6 fill-white stroke-gray-500"
						// 		strokeWidth={1.5}
						// 		viewBox="0 0 24 24"
						// 		xmlns="http://www.w3.org/2000/svg"
						// 		aria-hidden="true"
						// 	>
						// 		<path
						// 			strokeLinecap="round"
						// 			strokeLinejoin="round"
						// 			d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
						// 		/>
						// 	</svg>
						// 	NFTS
						// </div>
					)}
				</Link>

				<Link
					className={`inline-block p-4 ${
						tab === "topcommented" && "border-b-2 border-blue-700"
					} rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
					id={isDiscovery ? "Discovery/topcommented-tab" : "topcommented-tab"}
					data-tabs-target={
						isDiscovery ? "/discovery?tab=topcommented" : "?tab=topcommented"
					}
					href={
						isDiscovery
							? {
									pathname: "Discovery",
									query: { tab: "topcommented" },
							  }
							: {
									pathname: "/",
									// query: { ...query, tab: "topcommented" },
									query: { tab: "topcommented" },
							  }
					}
					role="tab"
					aria-controls={isDiscovery ? "discoverytopcommented" : "topcommented"}
					aria-selected="false"
				>
					{!isProfile && (
						<div className="flex flex-row gap-2 items-center">
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
									d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
								/>
							</svg>
							Top Commented
						</div>
					)}
				</Link>

				<Link
					className={`inline-block p-4 ${
						tab === "topmirrored" && "border-b-2 border-blue-700"
					} rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
					id={isDiscovery ? "discoverytopmirrored-tab" : "topmirrored-tab"}
					href={
						isDiscovery
							? {
									pathname: "/discovery",
									query: { tab: "topmirrored" },
							  }
							: {
									pathname: "/",
									// query: { ...query, tab: "topmirrored" },
									query: { tab: "topmirrored" },
							  }
					}
					data-tabs-target={
						isDiscovery ? "/discovery?tab=topmirrored" : "?tab=topmirrored"
					}
					role="tab"
					aria-controls={isDiscovery ? "discoverytopmirrored" : "topmirrored"}
					aria-selected="false"
				>
					{!isProfile && (
						<div className="flex flex-row gap-2 items-center">
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
							Top Mirrored
						</div>
					)}
				</Link>
			</ul>

			{/* Button tabs */}
			{/* 
				<ul className="flex flex-wrap text-lg font-medium text-center text-gray-500 dark:text-gray-400 gap-2">
				<Link
					// href={{ query: { ...query, format: "" } }}
					href={{ query: { format: "" } }}
					className="inline-block px-4 py-3 bg-blue-600 rounded-lg active"
					aria-current="page"
				>
					<svg
						className="h-6 w-6 fill-blue-600 stroke-white"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
						/>
					</svg>
				</Link>

				<Link
					// href={{ query: { ...query, format: "audio" } }}
					href={{ query: { format: "audio" } }}
					className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-white"
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
							d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
						/>
					</svg>
				</Link>

				<Link
					// href={{ query: { ...query, format: "image" } }}
					href={{ query: { format: "image" } }}
					className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
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
							d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
				</Link>

				<Link
					// href={{ query: { ...query, format: "text" } }}
					href={{ query: { format: "text" } }}
					className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
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
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
						/>
					</svg>
				</Link>

				<Link
					// href={{ query: { ...query, format: "video" } }}
					href={{ query: { format: "video" } }}
					className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
				>
					<svg
						className="h-6 w-6 fill-gray-500 stroke-gray-500"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
						/>
					</svg>
				</Link>

				{/* <li>
					<a className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">
						Tab 5
					</a>
				</li>
			</ul> */}

			{/* Dropdown radio */}
			{isProfile ? (
				<>
					{/* <button
						id="dropdownRadioButton"
						data-dropdown-toggle="dropdownDefaultRadio"
						className="text-black max-w-max bg-white gap-2 flex hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:bg-gray-700"
						type="button"
					>
						Latest
						<svg
							className="w-4 h-4"
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</button> */}

					{/* <div
						id="dropdownDefaultRadio"
						className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
					>
						<ul
							className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownRadioButton"
						>
							<li>
								<div className="flex items-center">
									<input
										id="default-radio-1"
										type="radio"
										value=""
										name="default-radio"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
									/>
									<label
										htmlFor="default-radio-1"
										className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Default radio
									</label>
								</div>
							</li>
							<li>
								<div className="flex items-center">
									<input
										checked
										id="default-radio-2"
										type="radio"
										value=""
										name="default-radio"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
									/>
									<label
										htmlFor="default-radio-2"
										className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Checked state
									</label>
								</div>
							</li>
							<li>
								<div className="flex items-center">
									<input
										id="default-radio-3"
										type="radio"
										value=""
										name="default-radio"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
									/>
									<label
										htmlFor="default-radio-3"
										className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Default radio
									</label>
								</div>
							</li>
						</ul>
					</div> */}
				</>
			) : null}

			{/* Publications */}
			<div className="flex flex-col gap-16 mb-6">
				{publications.map((publication: AnyPublication) => {
					return (
						<Publication
							key={publication.id}
							publication={
								isMirrorPublication(publication)
									? publication.mirrorOf
									: publication
							}
						/>
					)
				})}

				{hasMore && <p ref={observeRef}>Loading more...</p>}
			</div>
		</div>
	)
}
