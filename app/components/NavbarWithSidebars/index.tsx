"use client"
import Image from "next/image"
import Link from "next/link"

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
								className="inline-flex items-center p-2 text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
										fillRule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
									></path>
								</svg>
							</button>
							<a href="/" className="flex ml-2 md:mr-24 gap-3">
								<svg
									className="h-12 w-12 fill-white stroke-gray-500"
									strokeWidth={1.5}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
									/>
								</svg>
								<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
									Metro House
								</span>
							</a>
						</div>
						{/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
							Hello @fernando.dias
						</span> */}
						<div className="flex items-center">
							<div className="flex items-center ml-3">
								<button
									type="button"
									className="flex text-lg bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
									aria-expanded="false"
									data-dropdown-toggle="dropdown-user"
								>
									<span className="sr-only">Open user menu</span>
									<img
										className="rounded-full"
										width={48}
										height={48}
										src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
										alt="user photo"
									/>
								</button>

								<div
									className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
									id="dropdown-user"
								>
									<div className="px-4 py-3" role="none">
										<p
											className="text-lg text-gray-900 dark:text-white"
											role="none"
										>
											Neil Sims
										</p>
										<p
											className="text-lg font-medium text-gray-900 truncate dark:text-gray-300"
											role="none"
										>
											@neil.sims
										</p>
									</div>
									<ul className="py-1" role="none">
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Dashboard
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Settings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Earnings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
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
					className="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
					aria-label="Sidebar"
				>
					<div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800 justify-between flex flex-col">
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
										<Link
											href={`/${item}`}
											className="flex text-xl items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
										>
											{item === "Contacts" ? (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													fill="none"
													stroke="currentColor"
													strokeWidth={1.5}
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
													/>
												</svg>
											) : item === "Discovery" ? (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													fill="none"
													stroke="currentColor"
													strokeWidth={1.5}
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
													/>
												</svg>
											) : item === "Latest" ? (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													fill="none"
													stroke="currentColor"
													strokeWidth={1.5}
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
													/>
												</svg>
											) : item === "Top Collected" ? (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													fill="none"
													stroke="currentColor"
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
											) : item === "Top Commented" ? (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													fill="none"
													stroke="currentColor"
													strokeWidth={1.5}
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
													/>
												</svg>
											) : item === "Top Mirrored" ? (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													fill="none"
													stroke="currentColor"
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
											) : (
												<svg
													className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
													fill="none"
													stroke="currentColor"
													strokeWidth={1.5}
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
													/>
												</svg>
											)}
											<span className="ml-3">
												{item}{" "}
												{item === "Notifications" && (
													<span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-md font-semibold text-blue-800 bg-blue-200 rounded-full">
														2
													</span>
												)}
											</span>
										</Link>
									</li>
								)
							})}
						</ul>
						<button
							type="button"
							className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
						>
							<svg
								aria-hidden="true"
								className="w-6 h-5 mr-2 -ml-1"
								viewBox="0 0 2405 2501"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{" "}
								<g clip-path="url(#clip0_1512_1323)">
									{" "}
									<path
										d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z"
										fill="#E4761B"
										stroke="#E4761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z"
										fill="#E4761B"
										stroke="#E4761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z"
										fill="#E2761B"
										stroke="#E2761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z"
										fill="#E2761B"
										stroke="#E2761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z"
										fill="#E4761B"
										stroke="#E4761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z"
										fill="#E4761B"
										stroke="#E4761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z"
										fill="#C0AD9E"
										stroke="#C0AD9E"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z"
										fill="#CD6116"
										stroke="#CD6116"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z"
										fill="#E2761B"
										stroke="#E2761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z"
										fill="#E4751F"
										stroke="#E4751F"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z"
										fill="#CD6116"
										stroke="#CD6116"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z"
										fill="#E4761B"
										stroke="#E4761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z"
										fill="#CD6116"
										stroke="#CD6116"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z"
										fill="#233447"
										stroke="#233447"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z"
										fill="#E4761B"
										stroke="#E4761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z"
										fill="#CD6116"
										stroke="#CD6116"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z"
										fill="#E4761B"
										stroke="#E4761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z"
										fill="#CD6116"
										stroke="#CD6116"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z"
										fill="#C0AD9E"
										stroke="#C0AD9E"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z"
										fill="#D7C1B3"
										stroke="#D7C1B3"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z"
										fill="#E4761B"
										stroke="#E4761B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z"
										fill="#D7C1B3"
										stroke="#D7C1B3"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z"
										fill="#CD6116"
										stroke="#CD6116"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z"
										fill="#CD6116"
										stroke="#CD6116"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z"
										fill="#CD6116"
										stroke="#CD6116"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z"
										fill="#E4751F"
										stroke="#E4751F"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z"
										fill="#233447"
										stroke="#233447"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z"
										fill="#763D16"
										stroke="#763D16"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z"
										fill="#C0AD9E"
										stroke="#C0AD9E"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z"
										fill="#E4751F"
										stroke="#E4751F"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z"
										fill="#E4751F"
										stroke="#E4751F"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z"
										fill="#F6851B"
										stroke="#F6851B"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z"
										fill="#C0AD9E"
										stroke="#C0AD9E"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z"
										fill="#C0AD9E"
										stroke="#C0AD9E"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z"
										fill="#161616"
										stroke="#161616"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z"
										fill="#161616"
										stroke="#161616"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z"
										fill="#161616"
										stroke="#161616"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z"
										fill="#161616"
										stroke="#161616"
										stroke-width="5.94955"
									/>{" "}
									<path
										d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z"
										fill="#161616"
										stroke="#161616"
										stroke-width="5.94955"
									/>{" "}
								</g>{" "}
								<defs>
									{" "}
									<clipPath id="clip0_1512_1323">
										{" "}
										<rect
											width="2404"
											height="2500"
											fill="white"
											transform="translate(0.519043 0.132812)"
										/>{" "}
									</clipPath>{" "}
								</defs>{" "}
							</svg>
							Connect with MetaMask
						</button>
					</div>
				</aside>

				<div className="flex flex-col p-8 sm:ml-72 sm:mr-72">
					<nav
						className="flex mb-6 max-w-min px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
						aria-label="Breadcrumb"
					>
						<ol className="inline-flex items-center space-x-1 md:space-x-3">
							<li className="inline-flex items-center">
								<a
									href="#"
									className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
								>
									<svg
										aria-hidden="true"
										className="w-4 h-4 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
									</svg>
									Home
								</a>
							</li>
							{/* <li>
								<div className="flex items-center">
									<svg
										aria-hidden="true"
										className="w-6 h-6 text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<a
										href="#"
										className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
									>
										Templates
									</a>
								</div>
							</li>
							<li aria-current="page">
								<div className="flex items-center">
									<svg
										aria-hidden="true"
										className="w-6 h-6 text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
										Flowbite
									</span>
								</div>
							</li> */}
						</ol>
					</nav>

					{children}
				</div>

				<aside
					id="logo-sidebar"
					className="fixed top-0 right-0 z-40 w-72 h-screen pt-20 transition-transform translate-x-full bg-white border-l border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
					aria-label="Sidebar"
				>
					<div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800 justify-between flex flex-col">
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
											fillRule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<input
									type="text"
									id="simple-search"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search"
									required
								/>
							</div>
							<Link href={"/Suggested"} className="m-4 text-xl">
								Suggested
							</Link>
							<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
								<li className="pb-3 sm:pb-4">
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<img
												className="rounded-full"
												width={48}
												height={48}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<Link
												href={"/Profile"}
												className="text-xl font-medium text-gray-900 truncate dark:text-white"
											>
												Neil Sims
											</Link>
											<p className="text-xl text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
												width={48}
												height={48}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<Link
												href={"/Profile"}
												className="text-xl font-medium text-gray-900 truncate dark:text-white"
											>
												Bonnie Green
											</Link>
											<p className="text-xl text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
												width={48}
												height={48}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<Link
												href={"/Profile"}
												className="text-xl font-medium text-gray-900 truncate dark:text-white"
											>
												Michael Gough
											</Link>
											<p className="text-xl text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white shadow-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
												width={48}
												height={48}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<Link
												href={"/Profile"}
												className="text-xl font-medium text-gray-900 truncate dark:text-white"
											>
												Thomas Lean
											</Link>
											<p className="text-xl text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
												width={48}
												height={48}
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<Link
												href={"/Profile"}
												className="text-xl font-medium text-gray-900 truncate dark:text-white"
											>
												Lana Byrd
											</Link>
											<p className="text-xl text-gray-500 truncate dark:text-gray-400">
												@neil.sims
											</p>
										</div>
										<button
											type="button"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
										>
											Follow
										</button>
									</div>
								</li>
							</ul>
						</form>

						<footer className="bg-white rounded-lg dark:bg-gray-800 max-w-max">
							<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex-col">
								<ul className="flex flex-wrap gap-2 items-center justify-center mt-3 text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
									<li>
										<a href="/" className="hover:underline">
											Home
										</a>
									</li>
									<li>
										<a href="/About" className="hover:underline">
											About
										</a>
									</li>
									<li>
										<a href="/CreateProfile" className="hover:underline">
											Create Profile
										</a>
									</li>
									<li>
										<a href="/Discovery" className="hover:underline">
											Discovery
										</a>
									</li>
									<li>
										<a href="/Settings" className="hover:underline">
											Settings
										</a>
									</li>
									<li>
										<a href="/Suggested" className="hover:underline">
											Suggested
										</a>
									</li>
									<li>
										<a href="/TermsAndPrivacy" className="hover:underline">
											Terms and Privacy
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
            Home Discovery (CREATE POST) AUTHENTICATED (LOGIN) Notifications  ...More 
				invisible transition-opacity opacity-0
			*/
}
