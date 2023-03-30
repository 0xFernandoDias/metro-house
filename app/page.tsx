"use client"
// import { useGlobalContext } from "./context/store"
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
// import { useAddress } from "@thirdweb-dev/react"
import { LoginButton } from "./components/auth/LoginButton"
import { Flex, Text } from "@chakra-ui/react"
import { useAccount } from "wagmi"

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
				{/* @ts-ignore */}
				<Flex direction="column" gap="24px">
					<p>Address: {address}</p>
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
				</Flex>
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
		<Flex direction="column" gap="14px">
			<Text fontWeight="bold">@{data.profile.handle}</Text>
			<Text>{data.metadata.content}</Text>
		</Flex>
	)
}
