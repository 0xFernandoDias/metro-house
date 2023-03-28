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
	useActiveProfile,
} from "@lens-protocol/react-web"
import { Flex, Text } from "@chakra-ui/react"
import LoginButton from "./components/auth/LoginButton"

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

	const { data: profile, error, loading: profileLoading } = useActiveProfile()

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<title>Metro House</title>
			{/* @ts-ignore */}
			<Flex direction="column" gap="24px">
				<h1>Hello {profile?.handle}</h1>
				{publications?.map((publication: AnyPublicationFragment) => {
					return (
						<div key={publication.id + 1}>
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
				<LoginButton />
			</Flex>
		</>
	)
}
