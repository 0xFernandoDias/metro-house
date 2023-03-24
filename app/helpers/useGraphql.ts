import { type TypedDocumentNode } from "@graphql-typed-document-node/core"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import request from "graphql-request"

// import { print, type ExecutionResult } from "graphql"

/** Your custom fetcher function */
// async function customFetcher<TResult, TVariables>(
// 	url: string,
// 	document: TypedDocumentNode<TResult, TVariables>,
// 	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
// ): Promise<TResult> {
// 	const response = await fetch(url, {
// 		method: "POST",
// 		headers: {
// 			"content-type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			query: print(document),
// 			variables,
// 		}),
// 	})
// 	if (response.status !== 200) {
// 		throw new Error(
// 			`Failed to fetch: ${response.statusText}. Body: ${await response.text()}`
// 		)
// 	}

// 	return await response.json()
// }

// export function useGraphQL<TResult, TVariables>(
// 	document: TypedDocumentNode<TResult, TVariables>,
// 	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
// ): UseQueryResult<ExecutionResult<TResult>> {
// 	return useQuery(
// 		[(document.definitions[0] as any).name.value, variables],
// 		() =>
// 			customFetcher(
// 				"https://swapi-graphql.netlify.app/.netlify/functions/index",
// 				document,
// 				//@ts-ignore
// 				variables
// 			)
// 	)
// }

const URL = "https://swapi-graphql.netlify.app/.netlify/functions/index"

export function useGraphQL<TResult, TVariables>(
	document: TypedDocumentNode<TResult, TVariables>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
	return useQuery(
		[(document.definitions[0] as any).name.value, variables],
		async ({ queryKey }) =>
			request(URL, document, queryKey[1] ? queryKey[1] : undefined)
	)
}
