"use client"
import { useEffect } from "react"
import {
	useMetamask,
	useAddress,
	useSigner,
	useNetworkMismatch,
	useNetwork,
} from "@thirdweb-dev/react"
import {
	useWalletLogin,
	useWalletLogout,
	useActiveWallet,
	useActiveProfile,
} from "@lens-protocol/react-web"
import { ChainId } from "@thirdweb-dev/sdk"
import { WhenLoggedInWithProfile } from "./WhenLoggedInWithProfile"
import { WhenLoggedOut } from "./WhenLoggedOut"
import { Button } from "@chakra-ui/react"

import { useAccount, useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

export function LoginButton() {
	// const connect = useMetamask()
	// const disconnect = useDisconnect()
	// const address = useAddress()
	// const signer = useSigner()
	const {
		execute: login,
		error: loginError,
		isPending: isLoginPending,
	} = useWalletLogin()
	const { execute: logout, isPending: isLogoutPending } = useWalletLogout()
	const { data: activeWallet, loading: activeWalletLoading } = useActiveWallet()
	const {
		data: profile,
		loading: profileLoading,
		error: profileError,
	} = useActiveProfile()

	const isWrongNetwork = useNetworkMismatch()
	const [, switchNetwork] = useNetwork()

	const { isConnected } = useAccount()
	const { disconnectAsync } = useDisconnect()
	const { connectAsync } = useConnect({
		connector: new InjectedConnector({
			options: {
				shimDisconnect: true,
			},
		}),
	})

	useEffect(() => {
		if (!isConnected && activeWallet) {
			logout()
		}
	}, [isConnected, activeWallet, logout])

	// const onLoginClick = async (e: any) => {
	// 	e.preventDefault()
	// 	if (!signer || !address) {
	// 		return
	// 	}

	// 	await login(signer)
	// }

	const onLoginClick = async () => {
		if (isConnected) {
			await disconnectAsync()
		}

		const { connector } = await connectAsync()

		if (connector instanceof InjectedConnector) {
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
			<button onClick={() => switchNetwork?.(ChainId.Mumbai)}>
				Switch to Mumbai Network
			</button>
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
			>
				Mint a profile to continue
			</button>
		)
	}

	if (profileLoading) {
		return <>...Loading</>
	}

	if (loginError || profileError) {
		window.location.reload()
	}

	return (
		<>
			<WhenLoggedInWithProfile>
				{() => (
					<button
						type="button"
						onClick={onLogoutClick}
						disabled={isLogoutPending}
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
					disabled={activeWalletLoading || isLoginPending}
				>
					{isConnected ? "Sign in with Lens" : "Connect Wallet"}
				</button>
			</WhenLoggedOut>
		</>
	)
}
