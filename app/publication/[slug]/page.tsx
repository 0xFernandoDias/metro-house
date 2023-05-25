"use client"
import {
	PublicationId,
	isMirrorPublication,
	useActiveProfile,
	usePublication,
	isCommentPublication,
} from "@lens-protocol/react-web"
import { Spinner } from "@/app/components/Spinner"
import { Publication as PublicationComponent } from "../../components/Publication"
import { CommentsSection } from "../../components/CommentsSection"

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
