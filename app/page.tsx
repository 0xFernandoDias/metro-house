"use client"
// import { useGlobalContext } from "./context/store"
import { useAccount, useDisconnect } from "wagmi"
import {
	useExplorePublications,
	PublicationSortCriteria,
	PublicationTypes,
	useActiveWallet,
	useActiveProfile,
	useWalletLogout,
	PublicationMainFocus,
} from "@lens-protocol/react-web"
import { useEffect } from "react"
import { Publications } from "./components/Publications"
import { CreatePublication } from "./components/CreatePublication"

export default function Home() {
	// const { count, increment } = useGlobalContext()
	const { address } = useAccount()

	const {
		data: publications,
		loading: loadingPublications,
		hasMore,
		next,
	} = useExplorePublications({
		sortCriteria: PublicationSortCriteria.Latest,
		publicationTypes: [PublicationTypes.Post],
	})

	const { data: wallet } = useActiveWallet()
	const { data: profile } = useActiveProfile()
	const { isConnected } = useAccount()
	const { execute: logout, isPending: isLogoutPending } = useWalletLogout()
	const { disconnectAsync, isLoading: isDisconnectLoading } = useDisconnect()

	useEffect(() => {
		if (!isConnected && wallet) {
			logout()
			disconnectAsync()
		}
	}, [isConnected, wallet, logout, disconnectAsync])

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
					</div> */}
					<CreatePublication />
					<Publications publications={publications} />
				</div>
			</>
		)
	}
}
