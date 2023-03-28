import { Button } from "@chakra-ui/react"
import {
	useActiveProfile,
	useActiveWallet,
	useWalletLogin,
	useWalletLogout,
} from "@lens-protocol/react-web"
import {
	ChainId,
	ConnectWallet,
	useAddress,
	useSigner,
	useNetwork,
	useNetworkMismatch,
} from "@thirdweb-dev/react"
import { useEffect } from "react"

export default function LoginButton() {
	const address = useAddress() // Detect the connected address
	const signer = useSigner()
	const isWrongNetwork = useNetworkMismatch() // Detect if the user is on the wrong network
	const [, switchNetwork] = useNetwork() // Switch the network

	const {
		execute: login,
		error: loginError,
		isPending: isLoginPending,
	} = useWalletLogin()
	const { execute: logout, isPending: isLogoutPending } = useWalletLogout()
	const { data: wallet, loading } = useActiveWallet()
	const { data: profile, error, loading: profileLoading } = useActiveProfile()

	useEffect(() => {
		console.log(
			`Active wallet: ${wallet?.address} and active profile: ${profile?.handle} `
		)
	}, [profile, wallet])

	useEffect(() => {
		if (profile && !address) logout()
	}, [profile, address, logout])

	async function onLoginClick() {
		if (!signer) return

		await login(signer)
	}

	// User needs to connect their wallet
	if (!address) {
		return <ConnectWallet />
	}

	// User need to switch network to Mumbai
	if (isWrongNetwork) {
		return (
			<button onClick={() => switchNetwork?.(ChainId.Mumbai)}>
				Switch to Mumbai Network
			</button>
		)
	}

	if (error) {
		return <div>{error.message}</div>
	}

	if (profile) {
		// @ts-ignore
		return <Button onClick={logout}>Logout</Button>
	}

	if (wallet && !profile) {
		return <Button onClick={logout}>Claim Profile</Button>
	}

	// Sign In with Lens

	// Show the user their profile on Lens

	return <Button onClick={onLoginClick}>Login</Button>
}

// ARRUMAR OS LOADINGS
