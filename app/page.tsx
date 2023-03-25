"use client"
// @ts-ignore
import { useGlobalContext } from "./context/store"
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
import { Button } from "@chakra-ui/react"

export default function Home() {
	const { count, increment } = useGlobalContext()
	const {
		data: publications,
		loading,
		hasMore,
		next,
	} = useExplorePublications({
		sortCriteria: PublicationSortCriteria.Latest,
		publicationTypes: [PublicationTypes.Post],
	})

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<title>Metro House</title>
			<div>
				<h1>Metro House</h1>
				<p>Count: {count}</p>
				{/* @ts-ignore */}
				<Button colorScheme="blue" onClick={increment}>
					Increment
				</Button>
			</div>
			<div>
				{publications?.map((publication: AnyPublicationFragment) => {
					return (
						<Content
							key={publication.id}
							publication={
								isMirrorPublication(publication)
									? publication.mirrorOf
									: publication
							}
						/>
					)
				})}
				<ConnectWallet />
			</div>
		</>
	)
}

const Content = ({
	publication,
}: {
	publication: ContentPublicationFragment
}) => {
	const { decrypt, data, error, isPending } = useEncryptedPublication({
		publication,
	})

	return <p>{data.metadata.content}</p>
}
