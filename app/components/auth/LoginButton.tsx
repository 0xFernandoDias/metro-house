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
		if (!isConnected && activeWallet) {
			logout()
		}
	}, [isConnected, activeWallet, logout])

	useEffect(() => {
		if (loginError || profileError || connectError) {
			setWalletError(loginError! || connectError || profileError)
		}
	}, [loginError, profileError, connectError])

	useEffect(() => {
		setWalletError("")
	}, [isConnected, activeWallet, profile])

	const onLoginClick = async () => {
		if (isConnected) {
			await disconnectAsync()
		}

		const { connector } = await connectAsync()

		if (connector instanceof MetaMaskConnector) {
			const signer = await connector.getSigner()
			await login(signer)
		}
	}

	const onLogoutClick = async () => {
		await logout()
		await disconnectAsync()
	}

	if (isWrongNetwork) {
		return (
			<>
				<button
					type="button"
					onClick={() => switchNetwork?.(ChainId.Mumbai)}
					disabled={isSwitchNetworkLoading}
				>
					Switch to Mumbai Network
				</button>
				{switchNetworkError && (
					<span style={{ color: "red" }}>
						User did not switch to correct network.
					</span>
				)}
			</>
		)
	}

	if (activeWallet && !profile) {
		return (
			<button
				type="button"
				onClick={async () => {
					await logout()
					await disconnectAsync()
				}}
				disabled={isDisconnectLoading || isLogoutPending}
			>
				Mint a profile to continue
			</button>
		)
	}

	return (
		<>
			<WhenLoggedInWithProfile>
				{() => (
					<button
						type="button"
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
					onClick={
						isConnected
							? () => {
									onLoginClick()
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
