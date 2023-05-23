"use client"
import { CommentsSection } from "../../components/CommentsSection"
import { Publication as PublicationComponent } from "../../components/Publication"
import {
	PublicationId,
	isMirrorPublication,
	useActiveProfile,
	usePublication,
	isCommentPublication,
} from "@lens-protocol/react-web"
import { Spinner } from "@/app/components/Spinner"

export default function Publication({
	params,
}: {
	params: { slug: PublicationId }
}) {
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

	const postOriginal =
		publication && isCommentPublication(publication) && publication.mainPost

	const tratedPostOriginal =
		postOriginal && !isMirrorPublication(postOriginal) && postOriginal

	if (!publication || loading || profileLoading) {
		return (
			<>
				<title>Publication / Metro House</title>
				<Spinner />
			</>
		)
	}

	return (
		<>
			<title>
				{`@${publication.profile?.handle}'s`}
				Publication / Metro House
			</title>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col">
					{tratedPostOriginal && (
						<div className="flex flex-col">
							<PublicationComponent isPage publication={tratedPostOriginal} />
							<div className="flex h-[150px] w-[2px] bg-gray-200" />
						</div>
					)}

					<PublicationComponent
						isPage
						publication={
							isMirrorPublication(publication)
								? publication.mirrorOf
								: publication
						}
						mirrorHandle={
							isMirrorPublication(publication) ? publication.profile.handle : ""
						}
						mirrorId={isMirrorPublication(publication) && publication.id}
					/>
				</div>

				<CommentsSection
					isLoading={loading || profileLoading}
					commentsOf={publication.id}
				/>
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