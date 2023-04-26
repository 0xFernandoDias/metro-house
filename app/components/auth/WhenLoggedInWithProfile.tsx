import {
	WalletData,
	ProfileOwnedByMeFragment,
	useActiveWallet,
	useActiveProfile,
	useActiveWalletSigner,
	useWalletLogin,
	useWalletLogout,
} from "@lens-protocol/react-web"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { ReactNode } from "react"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"

type LoggedInConfig = {
	wallet: WalletData
	profile: ProfileOwnedByMeFragment
}

export type WhenLoggedInWithProfileProps = {
	children: (config: LoggedInConfig) => ReactNode
}

export function WhenLoggedInWithProfile({
	children,
}: WhenLoggedInWithProfileProps) {
	const { data: wallet, loading: walletLoading } = useActiveWallet()
	const { data: profile, error, loading: profileLoading } = useActiveProfile()

	if (walletLoading || profileLoading) {
		return null
	}

	if (wallet === null) {
		return null
	}

	if (profile === null || error) {
		// TODO guide user to create profile
		return null
	}

	return <>{children({ wallet, profile })}</>
}
