// https://testnet.lenster.xyz/ + https://lenster.xyz/ + https://www.lensfrens.xyz/ + https://lens-do-it.vercel.app/ +
"use client"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { polygon, polygonMumbai } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import {
	appId,
	LensConfig,
	LensProvider,
	production,
	staging,
} from "@lens-protocol/react-web"
import { bindings as wagmiBindings } from "@lens-protocol/wagmi"
import { GlobalContextProvider } from "./context/store"
import "./global.css"
import { LoginButton } from "./components/auth/LoginButton"
import { NavbarWithSidebars } from "./components/NavbarWithSidebars"
import { ApplicationBar } from "./components/ApplicationBar"

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
	appId: appId("metro-house"),
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
								<NavbarWithSidebars>
									{/* <LoginButton /> */}
									{children}
									<ApplicationBar />
								</NavbarWithSidebars>
							</GlobalContextProvider>
						</LensProvider>
					</ThirdwebProvider>
				</WagmiConfig>
			</body>
		</html>
	)
}
