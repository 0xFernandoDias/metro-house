import {
	ContentPublicationFragment,
	useEncryptedPublication,
} from "@lens-protocol/react-web"
import Link from "next/link"

export const Publication = ({
	publication,
}: {
	publication: ContentPublicationFragment
}) => {
	const { data, isPending } = useEncryptedPublication({
		publication,
	})

	if (isPending) {
		return <div>Loading...</div>
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
			<Link className="font-bold" href={`/profile/${data.profile.handle}`}>
				@{data.profile.handle}
			</Link>
			<span>{data.metadata.content}</span>
		</div>
	)
}
