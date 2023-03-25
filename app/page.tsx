"use client"
// @ts-ignore
import { Button } from "@chakra-ui/react"
import { useGlobalContext } from "./context/store"
// import { graphql } from "./gql"
// import { useGraphQL } from "./helpers/useGraphql"
import { ConnectWallet } from "@thirdweb-dev/react"

// const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
// 	query allFilmsWithVariablesQuery($first: Int!) {
// 		allFilms(first: $first) {
// 			edges {
// 				node {
// 					title
// 				}
// 			}
// 		}
// 	}
// `)

export default function Home() {
	const { count, increment } = useGlobalContext()

	// const { data, isLoading } = useGraphQL(
	// 	allFilmsWithVariablesQueryDocument,
	// 	// variables are also properly type-checked.
	// 	{ first: 10 }
	// )

	// if (isLoading) return <>...loading</>

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
				<>
					Map
					{/* {data?.allFilms?.edges?.map((edge) => (
						<div key={edge?.node?.title}>{edge?.node?.title}</div>
					))} */}
				</>
				<ConnectWallet />
			</div>
		</>
	)
}
