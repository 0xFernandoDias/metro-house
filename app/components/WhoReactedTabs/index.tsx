import { useSearchParams } from "next/navigation"
import Link from "next/link"

export function WhoReactedTabs({ publicationId }: { publicationId: string }) {
	const { get } = useSearchParams()
	const tab = get("tab")

	return (
		<ul
			className="flex gap-2 flex-wrap text-lg font-medium text-center border-b border-gray-200 "
			id="myTab"
			data-tabs-toggle="#myTabContent"
			role="tablist"
		>
			<Link
				className={`inline-block p-4 ${
					tab === "likes" || !tab ? "border-b-2 border-blue-700" : ""
				} rounded-t-lg`}
				id="likes-tab"
				data-tabs-target={
					`/publication/${publicationId}/whoReacted?tab=likes` ||
					`/publication/${publicationId}/whoReacted`
				}
				href={`/publication/${publicationId}/whoReacted?tab=likes`}
				role="tab"
				aria-controls="likes"
				aria-selected="false"
			>
				<div className="flex flex-row gap-2 items-center">
					<svg
						className="h-6 w-6 fill-white stroke-gray-500"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
						/>
					</svg>
					Likes
				</div>
			</Link>

			<Link
				className={`inline-block p-4 ${
					tab === "mirrors" && "border-b-2 border-blue-700"
				} rounded-t-lg`}
				id="mirrors-tab"
				data-tabs-target={`/publication/${publicationId}/whoReacted?tab=mirrors`}
				href={`/publication/${publicationId}/whoReacted?tab=mirrors`}
				role="tab"
				aria-controls="mirrors"
				aria-selected="false"
			>
				<div className="flex flex-row gap-2 items-center">
					<svg
						className="h-6 w-6 fill-white stroke-gray-500"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
						/>
					</svg>
					Mirrors
				</div>
			</Link>

			<Link
				className={`inline-block p-4 ${
					tab === "collects" && "border-b-2 border-blue-700"
				} rounded-t-lg`}
				id="collects-tab"
				data-tabs-target={`/publication/${publicationId}/whoReacted?tab=collects`}
				href={`/publication/${publicationId}/whoReacted?tab=collects`}
				role="tab"
				aria-controls="collects"
				aria-selected="false"
			>
				<div className="flex flex-row gap-2 items-center">
					<svg
						className="h-6 w-6 fill-white stroke-gray-500"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
						/>
					</svg>
					Collects
				</div>
			</Link>
		</ul>
	)
}
