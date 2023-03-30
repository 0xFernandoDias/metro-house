"use client"
// import { useGlobalContext } from "./context/store"
import { useAccount } from "wagmi"
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
} from "@lens-protocol/react-web"
import { LoginButton } from "./components/auth/LoginButton"
import { Alert } from "flowbite-react"

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

	if (loadingPublications) {
		return <div>Loading...</div>
	}

	if (publications) {
		return (
			<>
				<title>Metro House</title>
				<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
					<LoginButton />
					<div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
						<b>Address: {address}</b>
						<b>Active wallet: {wallet?.address}</b>
						<b>Hello {profile?.handle}</b>
						<b>Active profile: {profile?.handle}</b>
					</div>
					{publications.map((publication: AnyPublicationFragment, idx) => {
						return (
							<Content
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

const Content = ({
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
			<b>@{data.profile.handle}</b>
			<span>{data.metadata.content}</span>
		</div>
	)
}
