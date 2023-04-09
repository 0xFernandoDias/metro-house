"use client"
// import { useGlobalContext } from "./context/store"
import { useAccount, useDisconnect } from "wagmi"
import {
	useExplorePublications,
	PublicationSortCriteria,
	PublicationTypes,
	useActiveWallet,
	useActiveProfile,
	AnyPublicationFragment,
	isMirrorPublication,
	ContentPublicationFragment,
	useEncryptedPublication,
	useWalletLogout,
	PublicationMainFocus,
} from "@lens-protocol/react-web"
import { LoginButton } from "./components/auth/LoginButton"
import { Alert } from "flowbite-react"
import Link from "next/link"
import { useEffect } from "react"

export default function Home() {
	// const { count, increment } = useGlobalContext()
	const { address } = useAccount()

	const {
		data: publications,
		loading: loadingPublications,
		hasMore,
		next,
	} = useExplorePublications({
		sortCriteria: PublicationSortCriteria.TopCommented,
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
				<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
					<div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
						<b>Address: {address}</b>
						<b>Active wallet: {wallet?.address}</b>
						<b>Hello {profile?.handle}</b>
						<b>Active profile: {profile?.handle}</b>
					</div>
					{publications.map((publication: AnyPublicationFragment, idx) => {
						return (
							<Publication
								key={parseFloat(publication.id) + idx}
								publication={
									isMirrorPublication(publication)
										? publication.mirrorOf
										: publication
								}
							/>
						)
					})}
				</div>
			</>
		)
	}
}

const Publication = ({
	publication,
}: {
	publication: ContentPublicationFragment
}) => {
	const { data, isPending } = useEncryptedPublication({
		publication,
	})

	if (isPending) {
		return <div>Loading...</div>
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
			<Link className="font-bold" href={`/profile/${data.profile.handle}`}>
				@{data.profile.handle}
			</Link>
			<span>{data.metadata.content}</span>
		</div>
	)
}
