"use client"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import {
	LensConfig,
	LensProvider,
	production,
	staging,
} from "@lens-protocol/react-web"
import { bindings as wagmiBindings } from "@lens-protocol/wagmi"
import { GlobalContextProvider } from "./context/store"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { WagmiConfig, configureChains, createClient } from "wagmi"
import { polygon, polygonMumbai } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

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
				<ThirdwebProvider activeChain="mumbai">
					<WagmiConfig client={wagmiClient}>
						<LensProvider config={lensConfig}>
							<GlobalContextProvider>
								<CacheProvider>
									<ChakraProvider theme={theme}>{children}</ChakraProvider>
								</CacheProvider>
							</GlobalContextProvider>
						</LensProvider>
					</WagmiConfig>
				</ThirdwebProvider>
			</body>
		</html>
	)
}
