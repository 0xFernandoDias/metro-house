"use client"
// import { useGlobalContext } from "./context/store"
import {
	useExplorePublications,
	PublicationSortCriteria,
	PublicationTypes,
} from "@lens-protocol/react-web"
import { useEffect } from "react"
import { Publications } from "./components/Publications"
import { CreatePublication } from "./components/CreatePublication"
import { WhenLoggedInWithProfile } from "./components/auth/WhenLoggedInWithProfile"

export default function Home() {
	// const { count, increment } = useGlobalContext()

	const {
		data: publications,
		loading: loadingPublications,
		hasMore,
		next,
	} = useExplorePublications({
		sortCriteria: PublicationSortCriteria.TopMirrored,
		publicationTypes: [PublicationTypes.Post],
	})

	if (loadingPublications) {
		return <div>Loading...</div>
	}

	if (publications) {
		return (
			<>
				<title>Metro House</title>
				<div className="flex flex-col gap-6">
					{/* <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
						<b>Address: {address}</b>
						<b>Active wallet: {wallet?.address}</b>
						<b>Hello {profile?.handle}</b>
						<b>Active profile: {profile?.handle}</b>
						<b>Signer: {signer}</b>
					</div> */}
					<WhenLoggedInWithProfile>
						{() => <CreatePublication />}
					</WhenLoggedInWithProfile>

					<Publications publications={publications} />
				</div>
			</>
		)
	}
}
