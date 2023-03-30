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

export default function Home() {
	// const { count, increment } = useGlobalContext()
	const { address } = useAccount()

	const {
		data: publications,
		loading,
		hasMore,
		next,
	} = useExplorePublications({
		sortCriteria: PublicationSortCriteria.TopCommented,
		publicationTypes: [PublicationTypes.Post],
	})

	const { data: wallet } = useActiveWallet()
	const { data: profile, error, loading: profileLoading } = useActiveProfile()

	if (loading) {
		return <div>Loading...</div>
	}

	if (publications) {
		return (
			<>
				<title>Metro House</title>
				<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
					<h1>Address: {address}</h1>
					<h1>Active wallet: {wallet?.address}</h1>
					<h1>Hello {profile?.handle}</h1>
					<h1>Active profile: {profile?.handle}</h1>
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
					<LoginButton />
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
	const { decrypt, data, error, isPending } = useEncryptedPublication({
		publication,
	})

	if (isPending) {
		return <div>Loading...</div>
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
			<b>@{data.profile.handle}</b>
			<p>{data.metadata.content}</p>
		</div>
	)
}
