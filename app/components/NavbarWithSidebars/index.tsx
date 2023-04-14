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
							<a href="/" className="flex ml-2 md:mr-24">
								<img
									src="https://flowbite.com/docs/images/logo.svg"
									width={48}
									height={48}
									className="mr-3"
									alt="FlowBite Logo"
								/>
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
											<svg
												aria-hidden="true"
												className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
								<ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
								<span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
									© 2023{" "}
									<a href="https://flowbite.com/" className="hover:underline">
										Flowbite™
									</a>
									. All Rights Reserved.
								</span>
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
