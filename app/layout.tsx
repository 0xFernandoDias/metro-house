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
									<div className="fixed sm:invisible sm:opacity-0 z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
										<div className="grid h-full max-w-lg grid-cols-5 mx-auto">
											<button
												data-tooltip-target="tooltip-home"
												type="button"
												className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
											>
												<svg
													className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
												</svg>
												<span className="sr-only">Home</span>
											</button>
											<div
												id="tooltip-home"
												role="tooltip"
												className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
											>
												Home
												<div className="tooltip-arrow" data-popper-arrow></div>
											</div>
											<button
												data-tooltip-target="tooltip-discover"
												type="button"
												className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
											>
												<svg
													className="w-6 h-6 mb-1 stroke-gray-500 fill-white text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
													strokeWidth={1.5}
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
													/>
												</svg>
												<span className="sr-only">Discover</span>
											</button>
											<div
												id="tooltip-discover"
												role="tooltip"
												className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
											>
												Discover
												<div className="tooltip-arrow" data-popper-arrow></div>
											</div>
											<div className="flex items-center justify-center">
												<button
													data-tooltip-target="tooltip-new"
													type="button"
													className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
												>
													<svg
														className="w-6 h-6 text-white"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
														aria-hidden="true"
													>
														<path
															clipRule="evenodd"
															fillRule="evenodd"
															d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
														></path>
													</svg>
													<span className="sr-only">New item</span>
												</button>
											</div>
											<div
												id="tooltip-new"
												role="tooltip"
												className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
											>
												Create new item
												<div className="tooltip-arrow" data-popper-arrow></div>
											</div>
											<button
												data-tooltip-target="tooltip-notifications"
												type="button"
												className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
											>
												<svg
													className="w-6 h-6 mb-1 fill-white dark:stroke-gray-400 group-hover:stroke-blue-600 dark:group-hover:stroke-blue-500 stroke-gray-500 fill-white"
													strokeWidth={1.5}
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
													/>
												</svg>
												<span className="sr-only">Notifications</span>
											</button>
											<div
												id="tooltip-notifications"
												role="tooltip"
												className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
											>
												Notifications
												<div className="tooltip-arrow" data-popper-arrow></div>
											</div>
											<button
												data-tooltip-target="tooltip-more"
												type="button"
												className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
											>
												<svg
													className="w-6 h-6 mb-1 fill-white dark:stroke-gray-400 group-hover:stroke-blue-600 dark:group-hover:stroke-blue-500 stroke-gray-500 fill-white"
													strokeWidth="1.5"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
													></path>
												</svg>
												<span className="sr-only">More</span>
											</button>
											<div
												id="tooltip-more"
												role="tooltip"
												className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
											>
												More
												<div className="tooltip-arrow" data-popper-arrow></div>
											</div>
										</div>
									</div>
								</NavbarWithSidebars>
							</GlobalContextProvider>
						</LensProvider>
					</ThirdwebProvider>
				</WagmiConfig>
			</body>
		</html>
	)
}
