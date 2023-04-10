"use client"
import Image from "next/image"

export function NavbarWithSidebars({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col">
			<nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start">
							<button
								data-drawer-target="logo-sidebar"
								data-drawer-toggle="logo-sidebar"
								aria-controls="logo-sidebar"
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<span className="sr-only">Open sidebar</span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										fill-rule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
									></path>
								</svg>
							</button>
							<a href="https://flowbite.com" className="flex ml-2 md:mr-24">
								<img
									src="https://flowbite.com/docs/images/logo.svg"
									width={40}
									height={40}
									className="mr-3"
									alt="FlowBite Logo"
								/>
								<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
									Metro House
								</span>
							</a>
						</div>
						<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
							Home
						</span>
						<div className="flex items-center">
							<div className="flex items-center ml-3">
								<div>
									<button
										type="button"
										className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
										aria-expanded="false"
										data-dropdown-toggle="dropdown-user"
									>
										<span className="sr-only">Open user menu</span>
										<img
											className="rounded-full"
											width={40}
											height={40}
											src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
											alt="user photo"
										/>
									</button>
								</div>
								<div
									className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
									id="dropdown-user"
								>
									<div className="px-4 py-3" role="none">
										<p
											className="text-sm text-gray-900 dark:text-white"
											role="none"
										>
											Neil Sims
										</p>
										<p
											className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
											role="none"
										>
											@neil.sims
										</p>
									</div>
									<ul className="py-1" role="none">
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Dashboard
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Settings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Earnings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Sign out
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<div className="flex flex-row">
				<aside
					id="logo-sidebar"
					className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
					aria-label="Sidebar"
				>
					<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
						<span className="self-center text-xl font-semibold sm:text-lg whitespace-nowrap dark:text-white">
							Hello @fernando.dias
						</span>
						<ul className="space-y-2 font-medium">
							{[
								"Contacts",
								"Discovery",
								"Latest",
								"Top Collected",
								"Top Commented",
								"Top Mirrored",
								"Notifications",
							].map((item, idx) => {
								return (
									<li key={idx}>
										<a
											href="#"
											className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
										>
											<svg
												aria-hidden="true"
												className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
												<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
											</svg>
											<span className="ml-3">
												{item}{" "}
												{item === "Notifications" && (
													<span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
														2
													</span>
												)}
											</span>
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</aside>

				<div className="p-4 sm:ml-64 sm:mr-64">{children}</div>

				<aside
					id="logo-sidebar"
					className="fixed top-0 right-0 z-40 w-64 h-screen pt-20 transition-transform translate-x-full bg-white border-l border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
					aria-label="Sidebar"
				>
					<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
						<form className="flex flex-col items-center">
							<label htmlFor="simple-search" className="sr-only">
								Search
							</label>
							<div className="relative w-full">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										aria-hidden="true"
										className="w-5 h-5 text-gray-500 dark:text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<input
									type="text"
									id="simple-search"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search"
									required
								/>
							</div>
							<span className="m-3">Suggested</span>
							<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
								<li className="pb-3 sm:pb-4">
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<img
												className="rounded-full"
												width={40}
												height={40}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
												Neil Sims
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
										>
											Follow
										</button>
									</div>
								</li>
								<li className="py-3 sm:py-4">
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<img
												className="rounded-full"
												width={40}
												height={40}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
												Bonnie Green
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
										>
											Follow
										</button>
									</div>
								</li>
								<li className="py-3 sm:py-4">
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<img
												className="rounded-full"
												width={40}
												height={40}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
												Michael Gough
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
										>
											Follow
										</button>
									</div>
								</li>
								<li className="py-3 sm:py-4">
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<img
												className="rounded-full"
												width={40}
												height={40}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
												Thomas Lean
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
										>
											Follow
										</button>
									</div>
								</li>
								<li className="pt-3 pb-0 sm:pt-4">
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<img
												className="rounded-full"
												width={40}
												height={40}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
												Lana Byrd
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
										>
											Follow
										</button>
									</div>
								</li>
							</ul>
						</form>

						<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
							<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
								<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
									© 2023{" "}
									<a href="https://flowbite.com/" className="hover:underline">
										Flowbite™
									</a>
									. All Rights Reserved.
								</span>
								<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
									<li>
										<a href="#" className="mr-4 hover:underline md:mr-6 ">
											About
										</a>
									</li>
									<li>
										<a href="#" className="mr-4 hover:underline md:mr-6">
											Privacy Policy
										</a>
									</li>
									<li>
										<a href="#" className="mr-4 hover:underline md:mr-6">
											Licensing
										</a>
									</li>
									<li>
										<a href="#" className="hover:underline">
											Contact
										</a>
									</li>
								</ul>
							</div>
						</footer>
					</div>
				</aside>
			</div>
		</div>
	)
}

{
	/*
            Desktop and Mobile
            Ref. Twitter

            useUnreadNotificationsCount AUTHENTICATED
            
            Metro House PAGE NAME Login/Profile (dark mode)/Settings/ Switch Profile/ Create Profile/ Wrong Network (https://flowbite.com/docs/components/avatar/) https://flowbite.com/docs/components/sidebar/#sidebar-with-navbar
            Latest Top Collected Top Commented Top Mirrored AUTHENTICATED https://flowbite.com/docs/components/tabs/#interactive-tabs
            (Audio) (Image) (Text) (Only) (Video) with icons https://flowbite.com/docs/components/tabs/#pills-tabs
            
            LEFT
            @handle AUTHENTICATED
            Contacts  AUTHENTICATED
            Discovery
            Latest
            Top Collected
            Top Commented
            Top Mirrored
            Notifications (count) AUTHENTICATED https://flowbite.com/docs/components/badge/#button-with-badge
            Profile AUTHENTICATED
            (CREATE POST) AUTHENTICATED
            Login/Profile (dark mode)/Settings/ Switch Profile/ Create Profile/ Wrong Network https://flowbite.com/docs/components/avatar/

            RIGHT
            Search
            Suggested
            Footer https://flowbite.com/docs/components/footer/#Follow-footer

            */
}

{
	/*
            MOBILE
            https://flowbite.com/docs/components/bottom-navigation/#application-bar-example
            https://flowbite.com/docs/components/sidebar/#off-canvas-sidebar
            https://flowbite.com/docs/components/dropdowns/#menu-icon
            Home Discovery (CREATE POST) AUTHENTICATED (LOGIN) Notifications  ...More */
}
