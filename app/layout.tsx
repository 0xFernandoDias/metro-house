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
import "./global.css"
import { LoginButton } from "./components/auth/LoginButton"

const { provider, webSocketProvider } = configureChains(
	[polygonMumbai, polygon],
	[publicProvider()]
)

const wagmiClient = createClient({
	autoConnect: true,
	webSocketProvider,
	provider,
})

const lensConfig: LensConfig = {
	bindings: wagmiBindings(),
	environment: staging,
}

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
								<LoginButton />
								{children}
							</GlobalContextProvider>
						</LensProvider>
					</ThirdwebProvider>
				</WagmiConfig>
			</body>
		</html>
	)
}
