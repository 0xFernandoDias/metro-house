"use client"
import { ReactNode } from "react"
import { useActiveWallet } from "@lens-protocol/react-web"

export type WhenLoggedOutProps = {
	children: ReactNode
}

export function WhenLoggedOut({ children }: WhenLoggedOutProps) {
	const { data: wallet, loading } = useActiveWallet()

	if (wallet !== null || loading) {
		return null
	}

	return <>{children}</>
}
