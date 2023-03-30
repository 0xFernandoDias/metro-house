"use client"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { polygon, polygonMumbai } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import {
	LensConfig,
	LensProvider,
	production,
	staging,
} from "@lens-protocol/react-web"
import { bindings as wagmiBindings } from "@lens-protocol/wagmi"
import { GlobalContextProvider } from "./context/store"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { CacheProvider } from "@chakra-ui/next-js"

const { provider } = configureChains(
	[polygonMumbai, polygon],
	[publicProvider()]
)

const wagmiClient = createClient({
	autoConnect: true,
	provider,
})

const lensConfig: LensConfig = {
	bindings: wagmiBindings(),
	environment: staging,
}

const theme = extendTheme({})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<WagmiConfig client={wagmiClient}>
					<ThirdwebProvider activeChain="mumbai">
						<LensProvider config={lensConfig}>
							<GlobalContextProvider>
								<CacheProvider>
									<ChakraProvider theme={theme}>{children}</ChakraProvider>
								</CacheProvider>
							</GlobalContextProvider>
						</LensProvider>
					</ThirdwebProvider>
				</WagmiConfig>
			</body>
		</html>
	)
}
