"use client"

import { useProfile } from "@lens-protocol/react-web"

export default function Profile({ params }: { params: { slug: string } }) {
	const { slug: profileHandle } = params
	const {
		data: profile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	if (loading) {
		return <div>Loading profile...</div>
	}

	return <div>Hello {profile?.handle}</div>
}
