"use client"
import { RefCallback, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { MediaRenderer, useContract, useNFT } from "@thirdweb-dev/react"
import {
	AnyPublication,
	Profile as ProfileType,
	isCommentPublication,
	isMirrorPublication,
} from "@lens-protocol/react-web"
import { Nft } from "@ankr.com/ankr.js"
import { getNfts } from "@/app/apis"
import { Spinner } from "../Spinner"
import { Publication } from "../Publication"

export function Publications({
	publications,
	collectedPublications,
	isLoading,
	isProfile = false,
	profile,
	isDiscovery = false,
	observeRef,
	observeCollectedPublicationsRef,
	hasMore,
	hasMoreCollectedPublications,
}: {
	publications: AnyPublication[] | undefined
	collectedPublications?: AnyPublication[] | undefined
	isLoading: boolean
	isProfile?: boolean
	profile?: ProfileType
	isDiscovery?: boolean
	observeRef?: RefCallback<unknown>
	observeCollectedPublicationsRef?: RefCallback<unknown>
	hasMore?: boolean
	hasMoreCollectedPublications?: boolean
}) {
	const { get } = useSearchParams()
	const tab = get("tab")

	const [profileNfts, setProfileNfts] = useState([] as Nft[])
	const profileAddress = profile?.ownedBy || ""

	useEffect(() => {
		returnednfts()
	})

	const returnednfts = async () => {
		const { nfts } = await getNfts(profileAddress)

		setProfileNfts(nfts.filter((nft) => nft.imageUrl !== ""))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className="flex flex-col gap-6">
			{/* Tabs */}
			<ul
				className="flex gap-2 flex-wrap text-lg font-medium text-center border-b border-gray-200 "
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
							? `profile/${profile?.handle}`
							: isDiscovery
							? "/discovery"
							: ""
					}
					href={
						isProfile
							? {
									pathname: `profile/${profile?.handle}`,
							  }
							: isDiscovery
							? {
									pathname: "discovery",
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
						tab === "collected" || tab === "topcommented"
							? "border-b-2 border-blue-700"
							: ""
					} rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
					id={
						isProfile
							? "profilecollected-tab"
							: isDiscovery
							? "discoverytopcommented-tab"
							: "topcommented-tab"
					}
					href={
						isProfile
							? {
									pathname: `profile/${profile?.handle}`,
									query: { tab: "collected" },
							  }
							: isDiscovery
							? {
									pathname: "discovery",
									query: { tab: "topcommented" },
							  }
							: {
									pathname: "/",
									query: { tab: "topcommented" },
							  }
					}
					data-tabs-target={
						isProfile
							? `Profile/${profile?.handle}?tab=collected`
							: isDiscovery
							? "/discovery?tab=topcommented"
							: "?tab=topcommented"
					}
					role="tab"
					aria-controls={
						isProfile
							? "profilecollected"
							: isDiscovery
							? "discoverytopcommented"
							: "topcommented"
					}
					aria-selected="false"
				>
					{!isProfile ? (
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
							Top Commented
						</div>
					) : (
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
							Collected
						</div>
					)}
				</Link>

				<Link
					className={`inline-block p-4 ${
						tab === "nfts" || tab === "topcollected"
							? "border-b-2 border-blue-700"
							: ""
					} rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
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
									pathname: `profile/${profile?.handle}`,
									query: { tab: "nfts" },
							  }
							: isDiscovery
							? {
									pathname: "discovery",
									query: { tab: "topcollected" },
							  }
							: {
									pathname: "/",
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
					{!isProfile ? (
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
					) : (
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
									d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
								/>
							</svg>
							NFTS
						</div>
					)}
				</Link>

				<Link
					className={`inline-block p-4 ${
						tab === "topmirrored" && "border-b-2 border-blue-700"
					} rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
					id={isDiscovery ? "discoverytopmirrored-tab" : "topmirrored-tab"}
					href={
						isDiscovery
							? {
									pathname: "/discovery",
									query: { tab: "topmirrored" },
							  }
							: {
									pathname: "/",
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

			{/* Publications */}
			{tab === "nfts" ? (
				profileNfts.length ? (
					profileNfts.map((nft, idx) => {
						return <NftItem key={idx} nft={nft} />
					})
				) : (
					<>No NFTS.</>
				)
			) : tab === "collected" ? (
				<div className="flex flex-col mb-6">
					{collectedPublications?.length ? (
						collectedPublications.map(
							(collectedPublication: AnyPublication) => {
								return (
									<Publication
										key={collectedPublication.id}
										publication={
											isMirrorPublication(collectedPublication)
												? collectedPublication.mirrorOf
												: collectedPublication
										}
										mirrorHandle={
											isMirrorPublication(collectedPublication)
												? collectedPublication.profile.handle
												: ""
										}
										mirrorId={
											isMirrorPublication(collectedPublication) &&
											collectedPublication.id
										}
										mainPost={
											isCommentPublication(collectedPublication)
												? collectedPublication.mainPost.id
												: undefined
										}
									/>
								)
							}
						)
					) : (
						<>No collected publications.</>
					)}

					{hasMoreCollectedPublications && (
						<div ref={observeCollectedPublicationsRef}>
							<Spinner />
						</div>
					)}
				</div>
			) : (
				<div className="flex flex-col mb-6">
					{publications?.length ? (
						publications.map((publication: AnyPublication) => {
							return (
								<Publication
									key={publication.id}
									publication={
										isMirrorPublication(publication)
											? publication.mirrorOf
											: publication
									}
									mirrorHandle={
										isMirrorPublication(publication)
											? publication.profile.handle
											: ""
									}
									mirrorId={isMirrorPublication(publication) && publication.id}
									mainPost={
										isCommentPublication(publication)
											? publication.mainPost.id
											: undefined
									}
								/>
							)
						})
					) : (
						<>No posts.</>
					)}

					{hasMore && (
						<div ref={observeRef}>
							<Spinner />
						</div>
					)}
				</div>
			)}
		</div>
	)
}

function NftItem({ nft }: { nft: Nft }) {
	const {
		data: contract,
		isFetching: fetchingContract,
		isLoading: loadingContract,
	} = useContract(nft.contractAddress)

	const { data: nftItem, isLoading } = useNFT(contract, nft.tokenId)

	return (
		<div className={`min-w-max flex gap-8 flex-col`}>
			<div className="text-base font-semibold">{nftItem?.metadata.name}</div>
			<div className="text-base">{nftItem?.metadata.description}</div>
			<MediaRenderer width="400px" src={nft.imageUrl} />
			<div className="text-base">{nft.collectionName}</div>
			<div className="text-base">{nft.contractAddress}</div>
			<div className="flex w-full h-[1px] bg-gray-200 mb-8" />
		</div>
	)
}
