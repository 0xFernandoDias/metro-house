"use client"
import { ChangeEvent, useEffect, useState } from "react"
import Link from "next/link"
import {
	useActiveProfile,
	useSearchProfiles,
	useSearchPublications,
} from "@lens-protocol/react-web"
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll"
import { Spinner } from "@/app/components/Spinner"
import { Profile } from "@/app/components/Profile"
import { Publication } from "@/app/components/Publication"

export default function Discovery({ params }: { params: { slug: string } }) {
	const { slug } = params

	const [inputValue, setInputValue] = useState(slug)
	const [selectedQuery, setSelectedQuery] = useState<string>(inputValue)

	useEffect(() => {
		setSelectedQuery(inputValue)
	}, [inputValue])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	return (
		<>
			<title>Discovery / Metro House</title>
			<div className="flex flex-col gap-6 mb-8">
				<div className="flex flex-col gap-6">
					<a className="text-xl font-semibold">Discovery</a>

					{/* Search */}
					<form className="flex items-center gap-2">
						<label htmlFor="simple-search" className="sr-only">
							Search
						</label>

						<div className="relative w-full">
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
								id="simple-search"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
								placeholder="Search"
								required
								onChange={handleChange}
								value={inputValue}
							/>
						</div>

						<Link
							type="submit"
							className="p-2.5 text-lg font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
							href={`/discovery/${selectedQuery}`}
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
						</Link>
					</form>

					{selectedQuery && <SearchResult query={selectedQuery} />}
				</div>
			</div>
		</>
	)
}

function SearchResult({ query }: { query: string }) {
	const { data: profile, loading: profileLoading } = useActiveProfile()

	const {
		data: profiles,
		error: profilesError,
		loading: profilesLoading,
		hasMore: hasMoreProfiles,
		observeRef: observeProfilesRef,
	} = useInfiniteScroll(useSearchProfiles({ query, observerId: profile?.id }))

	const {
		data: publications,
		error: publicationsError,
		loading: publicationsLoading,
		hasMore: hasMorePublications,
		observeRef: observePublicationsRef,
	} = useInfiniteScroll(
		useSearchPublications({ query, observerId: profile?.id })
	)

	if (profilesLoading || publicationsLoading || profileLoading) {
		return <Spinner />
	}

	return (
		<div className="flex flex-col gap-6 mb-8">
			{/* Profiles */}
			<ul className="max-w-md gap-6 flex flex-col">
				<a className="text-xl font-semibold">Profiles</a>
				{profiles?.length ? (
					profiles?.map((profile) => (
						<Profile key={profile.id} profile={profile} />
					))
				) : (
					<p>No profiles found</p>
				)}
				{hasMoreProfiles && (
					<div ref={observeProfilesRef}>
						<Spinner />
					</div>
				)}
			</ul>

			{/* Publications */}
			<ul className="max-w-md gap-6 flex flex-col">
				<a className="text-xl font-semibold">Publications</a>
				{publications?.length ? (
					publications?.map((publication) => (
						<Publication key={publication.id} publication={publication} />
					))
				) : (
					<p>No publications found</p>
				)}
				{hasMorePublications && (
					<div ref={observePublicationsRef}>
						<Spinner />
					</div>
				)}
			</ul>
		</div>
	)
}
