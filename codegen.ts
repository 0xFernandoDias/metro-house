import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://api.lens.dev",
	documents: "./app/**/*.graphql",
	generates: {
		"./app/gql/generated/": {
			preset: "client",
			plugins: [],
			config: {
				dedupeFragments: true,
				mergeFragmentTypes: true,
			},
		},
	},
}

export default config
