// https://flowbite.com/docs/components/rating/#rating-comment
// https://flowbite.com/docs/components/timeline/#vertical-timeline
// https://flowbite.com/docs/typography/lists/#advanced-layout
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
// reaction AUTHENTICATED
// Comments count, total amount of collects, total amount of mirrors, total upvotes, total downvotes
// Comments
// use Who react
// use who collected publication
// use who mirrored publication
// use who reacted
// use Reaction AUTHENTICATED
// use Hide Publication AUTHENTICATED
// https://flowbite.com/docs/components/card/#card-with-list

import {
	AnyPublicationFragment,
	isMirrorPublication,
} from "@lens-protocol/react-web"
import { Publication } from "../Publication"

export function Publications({
	publications,
}: {
	publications: AnyPublicationFragment[]
}) {
	return (
		<div className="flex flex-col">
			<div className="mb-4 border-b border-gray-200 dark:border-gray-700">
				<ul
					className="flex flex-wrap -mb-px text-sm font-medium text-center"
					id="myTab"
					data-tabs-toggle="#myTabContent"
					role="tablist"
				>
					<li className="mr-2" role="presentation">
						<button
							className="inline-block p-4 border-b-2 rounded-t-lg"
							id="profile-tab"
							data-tabs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							Profile
						</button>
					</li>
					<li className="mr-2" role="presentation">
						<button
							className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="dashboard-tab"
							data-tabs-target="#dashboard"
							type="button"
							role="tab"
							aria-controls="dashboard"
							aria-selected="false"
						>
							Dashboard
						</button>
					</li>
					<li className="mr-2" role="presentation">
						<button
							className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="settings-tab"
							data-tabs-target="#settings"
							type="button"
							role="tab"
							aria-controls="settings"
							aria-selected="false"
						>
							Settings
						</button>
					</li>
					<li role="presentation">
						<button
							className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="contacts-tab"
							data-tabs-target="#contacts"
							type="button"
							role="tab"
							aria-controls="contacts"
							aria-selected="false"
						>
							Contacts
						</button>
					</li>
				</ul>
			</div>
			<div id="myTabContent">
				<div
					className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="profile"
					role="tabpanel"
					aria-labelledby="profile-tab"
				>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						This is some placeholder content the{" "}
						<strong className="font-medium text-gray-800 dark:text-white">
							Profile tabs associated content
						</strong>
						. Clicking another tab will toggle the visibility of this one for
						the next. The tab JavaScript swaps classNamees to control the
						content visibility and styling.
					</p>
				</div>
				<div
					className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="dashboard"
					role="tabpanel"
					aria-labelledby="dashboard-tab"
				>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						This is some placeholder content the{" "}
						<strong className="font-medium text-gray-800 dark:text-white">
							Dashboard tabs associated content
						</strong>
						. Clicking another tab will toggle the visibility of this one for
						the next. The tab JavaScript swaps classNamees to control the
						content visibility and styling.
					</p>
				</div>
				<div
					className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="settings"
					role="tabpanel"
					aria-labelledby="settings-tab"
				>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						This is some placeholder content the{" "}
						<strong className="font-medium text-gray-800 dark:text-white">
							Settings tabs associated content
						</strong>
						. Clicking another tab will toggle the visibility of this one for
						the next. The tab JavaScript swaps classNamees to control the
						content visibility and styling.
					</p>
				</div>
				<div
					className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="contacts"
					role="tabpanel"
					aria-labelledby="contacts-tab"
				>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						This is some placeholder content the{" "}
						<strong className="font-medium text-gray-800 dark:text-white">
							Contacts tabs associated content
						</strong>
						. Clicking another tab will toggle the visibility of this one for
						the next. The tab JavaScript swaps classNamees to control the
						content visibility and styling.
					</p>
				</div>
			</div>

			<ul className="flex mb-4 flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
						aria-current="page"
					>
						Tab 1
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						Tab 2
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						Tab 3
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						Tab 4
					</a>
				</li>
				<li>
					<a className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">
						Tab 5
					</a>
				</li>
			</ul>

			{publications.map((publication: AnyPublicationFragment, idx) => {
				return (
					<Publication
						key={parseFloat(publication.id) + idx}
						publication={
							isMirrorPublication(publication)
								? publication.mirrorOf
								: publication
						}
					/>
				)
			})}
		</div>
	)
}
