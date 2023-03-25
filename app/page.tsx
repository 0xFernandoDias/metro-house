"use client"
// import { useGlobalContext } from "./context/store"
import { ConnectWallet } from "@thirdweb-dev/react"
import {
	useExplorePublications,
	PublicationSortCriteria,
	PublicationTypes,
	AnyPublicationFragment,
	isMirrorPublication,
	ContentPublicationFragment,
	useEncryptedPublication,
} from "@lens-protocol/react-web"
import { Flex, Text } from "@chakra-ui/react"

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

export default function Home() {
	// const { count, increment } = useGlobalContext()

	const {
		data: publications,
		loading,
		hasMore,
		next,
	} = useExplorePublications({
		sortCriteria: PublicationSortCriteria.TopCommented,
		publicationTypes: [PublicationTypes.Post],
	})

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<title>Metro House</title>
			{/* @ts-ignore */}
			<Flex direction="column" gap="24px">
				{publications?.map((publication: AnyPublicationFragment) => {
					return (
						<div key={publication?.id}>
							<Content
								publication={
									isMirrorPublication(publication)
										? publication.mirrorOf
										: publication
								}
							/>
						</div>
					)
				})}
				<ConnectWallet />
			</Flex>
		</>
	)
}
