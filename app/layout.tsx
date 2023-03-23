"use client"
import "./globals.css"
import { GlobalContextProvider } from "./context/store"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
}

const theme = extendTheme({ colors })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const queryClient = new QueryClient()

	return (
		<html lang="en">
			<body>
				<QueryClientProvider client={queryClient}>
					<GlobalContextProvider>
						<CacheProvider>
							<ChakraProvider theme={theme}>{children}</ChakraProvider>
						</CacheProvider>
					</GlobalContextProvider>
				</QueryClientProvider>
			</body>
		</html>
	)
}
