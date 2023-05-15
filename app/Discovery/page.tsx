"use client"

import {
	PublicationSortCriteria,
	PublicationTypes,
	useActiveProfile,
	useExplorePublications,
} from "@lens-protocol/react-web"
import { Publications } from "../components/Publications"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"

export default function Discovery() {
	const { get } = useSearchParams()

	const tab = get("tab")

	const [sortCriteria, setSortCriteria] = useState(
		PublicationSortCriteria.Latest
	)

	useEffect(() => {
		const query =
			tab === "topcollected"
				? PublicationSortCriteria.TopCollected
				: tab === "topcommented"
				? PublicationSortCriteria.TopCommented
				: tab === "topmirrored"
				? PublicationSortCriteria.TopMirrored
				: PublicationSortCriteria.Latest

		setSortCriteria(query)
	}, [tab])

	const {
		data: profile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const {
		data: publications,
		loading: loadingPublications,
		hasMore,
		observeRef,
		next,
	} = useInfiniteScroll(
		useExplorePublications({
			sortCriteria: sortCriteria,
			publicationTypes: [PublicationTypes.Post],
		})
	)

	if (loadingPublications || !publications || profileLoading) {
		return <div>Loading...</div>
	}

	if (publications) {
		return (
			<>
				<title>Discovery / Metro House</title>
				<div className="flex flex-col gap-6">
					{/* Search */}
					<form className="flex items-center gap-2">
						<label htmlFor="simple-search" className="sr-only">
							Search
						</label>

						<div className="relative w-full">
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
								id="simple-search"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search"
								required
							/>
						</div>

						<button
							type="submit"
							className="p-2.5 text-lg font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
							<span className="sr-only">Search</span>
						</button>
					</form>

					<Publications
						publications={publications}
						isDiscovery
						hasMore={hasMore}
						observeRef={observeRef}
					/>
				</div>
			</>
		)
	}
}

// when searchbar filled:
// profiles
// publications, mirrors
// search profiles, search publications

// when searchbar empty:
// use explore profiles, suggested component, use explore publications, feed
// SUGGESTED
// Trending
