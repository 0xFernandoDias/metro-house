// https://testnet.lenster.xyz/ + https://lenster.xyz/ + https://www.lensfrens.xyz/ + https://lens-do-it.vercel.app/ + transfer = METRO HOUSE
"use client"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import { Mumbai, Polygon } from "@thirdweb-dev/chains"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { polygon, polygonMumbai } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { bindings as wagmiBindings } from "@lens-protocol/wagmi"
import {
	appId,
	LensConfig,
	LensProvider,
	production,
	development,
} from "@lens-protocol/react-web"
import { GlobalContextProvider } from "./context/store"
import { NavbarWithSidebars } from "./components/NavbarWithSidebars"
import { ApplicationBar } from "./components/ApplicationBar"
import "./global.css"

const ENVIRONMENT = process.env.ENVIRONMENT as "development" | "production"

const chain =
	ENVIRONMENT === "development"
		? polygonMumbai
		: ENVIRONMENT === "production"
		? polygon
		: polygonMumbai

const environment =
	ENVIRONMENT === "development"
		? development
		: ENVIRONMENT === "production"
		? production
		: development

// const activeChain =
// 	ENVIRONMENT === "development"
// 		? Mumbai
// 		: ENVIRONMENT === "production"
// 		? Polygon
// 		: Mumbai

const { provider, webSocketProvider } = configureChains(
	[chain],
	[publicProvider()]
)

const wagmiClient = createClient({
	autoConnect: true,
	provider,
	webSocketProvider,
})

const lensConfig: LensConfig = {
	bindings: wagmiBindings(),
	environment,
	appId: appId("metro-house"),
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<ThirdwebProvider activeChain={Polygon}>
				<WagmiConfig client={wagmiClient}>
					<LensProvider config={lensConfig}>
						<GlobalContextProvider>
							<body>
								<NavbarWithSidebars>
									{children}
									<ApplicationBar />
								</NavbarWithSidebars>
							</body>
						</GlobalContextProvider>
					</LensProvider>
				</WagmiConfig>
			</ThirdwebProvider>
		</html>
	)
}
