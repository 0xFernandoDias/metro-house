"use client"
import { useEffect, useState } from "react"
import {
	useWalletLogin,
	useWalletLogout,
	useActiveWallet,
	useActiveProfile,
	PendingSigningRequestError,
	WalletConnectionError,
	UserRejectedError,
} from "@lens-protocol/react-web"
import { ChainId } from "@thirdweb-dev/sdk"
import { WhenLoggedInWithProfile } from "./WhenLoggedInWithProfile"
import { WhenLoggedOut } from "./WhenLoggedOut"
import {
	useAccount,
	useConnect,
	useDisconnect,
	useNetwork,
	useSwitchNetwork,
} from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"

export function LoginButton() {
	const {
		execute: login,
		isPending: isLoginPending,
		error: loginError,
	} = useWalletLogin()
	const { execute: logout, isPending: isLogoutPending } = useWalletLogout()
	const { data: activeWallet, loading: activeWalletLoading } = useActiveWallet()
	const { data: profile, error: profileError } = useActiveProfile()

	const { isConnected } = useAccount()
	const { disconnectAsync, isLoading: isDisconnectLoading } = useDisconnect()
	const {
		connectAsync,
		isLoading: isConnectLoading,
		error: connectError,
	} = useConnect({
		connector: new MetaMaskConnector({
			options: {
				shimDisconnect: true,
			},
		}),
	})

	const { chain } = useNetwork()
	const isWrongNetwork = isConnected && chain?.id !== 80001
	const {
		switchNetwork,
		isLoading: isSwitchNetworkLoading,
		error: switchNetworkError,
	} = useSwitchNetwork()

	const [walletError, setWalletError] = useState<
		| PendingSigningRequestError
		| WalletConnectionError
		| UserRejectedError
		| ""
		| undefined
	>()

	useEffect(() => {
		if (loginError || profileError || connectError) {
			setWalletError(loginError! || connectError || profileError)
		}
	}, [loginError, profileError, connectError])

	useEffect(() => {
		setWalletError("")
	}, [isConnected, activeWallet, profile])

	const onLoginClick = async (e: any) => {
		e.preventDefault()

		if (isConnected) {
			await disconnectAsync()
		}

		const { connector } = await connectAsync()

		if (connector instanceof MetaMaskConnector) {
			const signer = await connector.getSigner()
			await login(signer)
		}
	}

	const onLogoutClick = async (e: any) => {
		e.preventDefault()
		await logout()
		await disconnectAsync()
	}

	if (isWrongNetwork) {
		return (
			<>
				<button
					type="button"
					className="max-w-[15%] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
					onClick={(e) => {
						e.preventDefault
						switchNetwork?.(ChainId.Mumbai)
					}}
					disabled={isSwitchNetworkLoading}
				>
					Switch to Mumbai
				</button>
				<span style={{ color: "red" }}>
					{switchNetworkError && "User did not switch to correct network."}
				</span>
			</>
		)
	}

	if (activeWallet && !profile) {
		return (
			<button
				type="button"
				className="max-w-[15%] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				onClick={async (e) => {
					e.preventDefault
					await logout()
					await disconnectAsync()
				}}
				disabled={isDisconnectLoading || isLogoutPending}
			>
				Mint a profile
			</button>
		)
	}

	return (
		<>
			<WhenLoggedInWithProfile>
				{() => (
					<button
						type="button"
						className="max-w-[15%] py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						onClick={onLogoutClick}
						disabled={isDisconnectLoading || isLogoutPending}
					>
						Logout
					</button>
				)}
			</WhenLoggedInWithProfile>
			<WhenLoggedOut>
				<button
					type="button"
					className="max-w-[15%] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					onClick={
						isConnected
							? (e) => {
									onLoginClick(e)
							  }
							: () => {
									connectAsync()
							  }
					}
					disabled={isConnectLoading || isLoginPending || activeWalletLoading}
				>
					{isConnected ? "Sign in with Lens" : "Connect Wallet"}
				</button>
			</WhenLoggedOut>
			{walletError && (
				<span style={{ color: "red" }}>{walletError.message}</span>
			)}
		</>
	)
}

// https://flowbite.com/docs/components/buttons/#payment-buttons
