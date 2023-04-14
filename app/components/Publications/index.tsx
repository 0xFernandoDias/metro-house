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
// ancora no comentario

"use client"
import {
	AnyPublicationFragment,
	isMirrorPublication,
} from "@lens-protocol/react-web"
import { Publication } from "../Publication"
import Link from "next/link"

export function Publications({
	publications,
	isProfile = false,
}: {
	publications: AnyPublicationFragment[]
	isProfile?: boolean
}) {
	return (
		<div className="flex flex-col">
			<div className="mb-4 border-b border-gray-200 dark:border-gray-700">
				<ul
					className="flex flex-wrap -mb-px text-lg font-medium text-center"
					id="myTab"
					data-tabs-toggle="#myTabContent"
					role="tablist"
				>
					<li className="mr-2" role="presentation">
						<button
							className="inline-block p-4 border-b-2 rounded-t-lg"
							id="latest-tab"
							data-tabs-target="#latest"
							type="button"
							role="tab"
							aria-controls="latest"
							aria-selected="false"
						>
							{isProfile ? "Posts" : "Latest"}
						</button>
					</li>
					<li className="mr-2" role="presentation">
						<button
							className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="topcollected-tab"
							data-tabs-target="#topcollected"
							type="button"
							role="tab"
							aria-controls="topcollected"
							aria-selected="false"
						>
							{isProfile ? "Collects" : "Top Collected"}
						</button>
					</li>
					<li className="mr-2" role="presentation">
						<button
							className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="topcommented-tab"
							data-tabs-target="#topcommented"
							type="button"
							role="tab"
							aria-controls="topcommented"
							aria-selected="false"
						>
							{isProfile ? "Mirrors" : "Top Commented"}
						</button>
					</li>
					<li role="presentation">
						<button
							className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="topmirrored-tab"
							data-tabs-target="#topmirrored"
							type="button"
							role="tab"
							aria-controls="topmirrored"
							aria-selected="false"
						>
							{isProfile ? "NFTS" : "Top Mirrored"}
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
					<p className="text-lg text-gray-500 dark:text-gray-400">
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
					<p className="text-lg text-gray-500 dark:text-gray-400">
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
					<p className="text-lg text-gray-500 dark:text-gray-400">
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
					<p className="text-lg text-gray-500 dark:text-gray-400">
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

			<ul className="flex mb-4 flex-wrap text-lg font-medium text-center text-gray-500 dark:text-gray-400">
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
						aria-current="page"
					>
						All
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						Audio
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						Image
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						Text Only
					</a>
				</li>
				<li className="mr-2">
					<a
						href="#"
						className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						Video
					</a>
				</li>
				{/* <li>
					<a className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">
						Tab 5
					</a>
				</li> */}
			</ul>

			{isProfile ? (
				<>
					<button
						id="dropdownRadioButton"
						data-dropdown-toggle="dropdownDefaultRadio"
						className="text-white max-w-max bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						type="button"
					>
						Dropdown radio{" "}
						<svg
							className="w-4 h-4 ml-2"
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</button>

					<div
						id="dropdownDefaultRadio"
						className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
					>
						<ul
							className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownRadioButton"
						>
							<li>
								<div className="flex items-center">
									<input
										id="default-radio-1"
										type="radio"
										value=""
										name="default-radio"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
									/>
									<label
										htmlFor="default-radio-1"
										className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Default radio
									</label>
								</div>
							</li>
							<li>
								<div className="flex items-center">
									<input
										checked
										id="default-radio-2"
										type="radio"
										value=""
										name="default-radio"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
									/>
									<label
										htmlFor="default-radio-2"
										className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Checked state
									</label>
								</div>
							</li>
							<li>
								<div className="flex items-center">
									<input
										id="default-radio-3"
										type="radio"
										value=""
										name="default-radio"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
									/>
									<label
										htmlFor="default-radio-3"
										className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Default radio
									</label>
								</div>
							</li>
						</ul>
					</div>
				</>
			) : null}

			<div className="flex flex-col gap-8">
				{publications.map((publication: AnyPublicationFragment, idx) => {
					return (
						<Link
							style={{ display: "flex", flexDirection: "column", gap: "14px" }}
							className="max-w-5xl"
							href="/Publication"
							key={parseFloat(publication.id) + idx}
						>
							<Publication
								publication={
									isMirrorPublication(publication)
										? publication.mirrorOf
										: publication
								}
							/>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
