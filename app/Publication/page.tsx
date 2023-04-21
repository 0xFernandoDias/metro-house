"use client"
import Link from "next/link"
import { CommentsSection } from "../components/CommentsSection"
import { Publication as PublicationComponent } from "../components/Publication"
import Image from "next/image"

export default function Publication({ params }: { params: { slug: string } }) {
	return (
		<div className="flex flex-col gap-8">
			<PublicationComponent />
			{/* <CommentsSection /> */}
		</div>
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
