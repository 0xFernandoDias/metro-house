"use client"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import { GlobalContextProvider } from "./context/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const queryClient = new QueryClient()

	return (
		<html lang="en">
			<body>
				<ThirdwebProvider activeChain="mumbai">
					<QueryClientProvider client={queryClient}>
						<GlobalContextProvider>
							<CacheProvider>
								<ChakraProvider theme={theme}>{children}</ChakraProvider>
							</CacheProvider>
						</GlobalContextProvider>
					</QueryClientProvider>
				</ThirdwebProvider>
			</body>
		</html>
	)
}
