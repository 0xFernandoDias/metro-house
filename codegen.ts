import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
	schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
	documents: ["app/**/*.tsx"],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"./app/gql/": {
			preset: "client",
		},
	},
}

export default config
