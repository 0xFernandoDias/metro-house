// https://testnet.lenster.xyz/ + https://lenster.xyz/ + https://www.lensfrens.xyz/ + https://lens-do-it.vercel.app/ +
"use client"
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi"
import { polygon, polygonMumbai } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import {
	appId,
	LensConfig,
	LensProvider,
	production,
	development,
} from "@lens-protocol/react-web"
import { bindings as wagmiBindings } from "@lens-protocol/wagmi"
import { GlobalContextProvider } from "./context/store"
import "./global.css"
import { NavbarWithSidebars } from "./components/NavbarWithSidebars"
import { ApplicationBar } from "./components/ApplicationBar"
import { Mumbai, Polygon } from "@thirdweb-dev/chains"

const ENVIRONMENT = process.env.ENVIRONMENT as "development" | "production"

const chain =
	ENVIRONMENT === "development"
		? polygonMumbai
		: ENVIRONMENT === "production"
		? polygon
		: polygonMumbai

const { provider, webSocketProvider } = configureChains(
	[chain],
	[publicProvider()]
)

const wagmiClient = createClient({
	autoConnect: true,
	provider,
	webSocketProvider,
})

const environment =
	ENVIRONMENT === "development"
		? development
		: ENVIRONMENT === "production"
		? production
		: development

const activeChain =
	ENVIRONMENT === "development"
		? Mumbai
		: ENVIRONMENT === "production"
		? Polygon
		: Mumbai

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
			<body>
				<ThirdwebProvider activeChain={Polygon}>
					<WagmiConfig client={wagmiClient}>
						<LensProvider config={lensConfig}>
							<GlobalContextProvider>
								<NavbarWithSidebars>
									{/* <LoginButton /> */}
									{children}
									<ApplicationBar />
								</NavbarWithSidebars>
							</GlobalContextProvider>
						</LensProvider>
					</WagmiConfig>
				</ThirdwebProvider>
			</body>
		</html>
	)
}
