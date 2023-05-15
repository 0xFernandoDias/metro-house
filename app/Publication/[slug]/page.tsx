"use client"
import Link from "next/link"
import { CommentsSection } from "../../components/CommentsSection"
import { Publication as PublicationComponent } from "../../components/Publication"
import Image from "next/image"
import {
	isMirrorPublication,
	useActiveProfile,
	usePublication,
} from "@lens-protocol/react-web"

export default function Publication({ params }: { params: { slug: string } }) {
	const { slug } = params

	const {
		data: profile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const { data: publication, loading } = usePublication({
		publicationId: slug,
		observerId: profile?.id,
	})

	if (!publication) {
		return <div>Loading pub...</div>
	}

	return (
		<>
			<title>
				@{publication.profile.handle}
				{"'s"} Publication / Metro House
			</title>
			<div className="flex flex-col gap-8">
				<PublicationComponent
					publication={
						publication.__typename === "Mirror"
							? publication.mirrorOf
							: publication
					}
				/>
				<CommentsSection commentsOf={publication.id} />
			</div>
		</>
	)
}

// https://flowbite.com/docs/components/rating/#rating-comment
// (publication id)
// typename
// created At
// hidden?
// id
// profile - @handle
// 	Contacts (Followers, Following, Mutual)
// 	picture
// 	Follow AUTHENTICATE AT LEAST WITH METAMASK hash
// 	Name
// 	Proof of humanity
// useEncryptedPublication
// LOGIN TO DECRYPT - https://testnet.lenster.xyz/posts/0x1b-0x0133
// canObserverDecrypt?
// can COMMENT, can MIRROR, Has Collected by me? AUTHENTICATED
// Metadata
// mirrors
// reaction
// Comments count, total amount of collects, total amount of mirrors, total upvotes, total downvotes
// Comments
// use Who react
// use who collected publication
// use who mirrored publication
// use who reacted
// use Reaction AUTHENTICATED
// use Hide Publication AUTHENTICATED IF ITS MINE
// https://flowbite.com/docs/components/card/#card-with-list
// ...
// Posted via
