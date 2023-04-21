import Link from "next/link"

export function LeftSidebar() {
	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 left-0 z-40 w-80 h-screen pt-28 transition-transform -translate-x-full lg:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800 justify-between flex flex-col items-center">
				{/* Menu Buttons */}
				<ul className="space-y-2 font-medium flex flex-col justify-between">
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
							<Link
								key={idx}
								className="flex p-2 text-xl items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
								href={
									item === "Contacts"
										? "/Contacts"
										: item === "Discovery"
										? "/Discovery"
										: item === "Latest"
										? "/"
										: item === "Top Collected"
										? "/?tab=topcollected"
										: item === "Top Commented"
										? "/?tab=topcommented"
										: item === "Top Mirrored"
										? "/?tab=topmirrored"
										: item === "Notifications"
										? "/Notifications"
										: "/"
								}
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
								<div className="ml-3">
									{item}
									{item === "Notifications" && (
										<span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-md font-semibold text-blue-800 bg-blue-200 rounded-full">
											2
										</span>
									)}
								</div>
							</Link>
						)
					})}
				</ul>

				{/* Login Button and "USER" */}
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
						<g clipPath="url(#clip0_1512_1323)">
							<path
								d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z"
								fill="#E4761B"
								stroke="#E4761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z"
								fill="#E4761B"
								stroke="#E4761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z"
								fill="#E2761B"
								stroke="#E2761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z"
								fill="#E2761B"
								stroke="#E2761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z"
								fill="#E4761B"
								stroke="#E4761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z"
								fill="#E4761B"
								stroke="#E4761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z"
								fill="#C0AD9E"
								stroke="#C0AD9E"
								strokeWidth="5.94955"
							/>
							<path
								d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z"
								fill="#CD6116"
								stroke="#CD6116"
								strokeWidth="5.94955"
							/>
							<path
								d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z"
								fill="#E2761B"
								stroke="#E2761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z"
								fill="#E4751F"
								stroke="#E4751F"
								strokeWidth="5.94955"
							/>
							<path
								d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z"
								fill="#CD6116"
								stroke="#CD6116"
								strokeWidth="5.94955"
							/>
							<path
								d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z"
								fill="#E4761B"
								stroke="#E4761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z"
								fill="#CD6116"
								stroke="#CD6116"
								strokeWidth="5.94955"
							/>
							<path
								d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z"
								fill="#233447"
								stroke="#233447"
								strokeWidth="5.94955"
							/>
							<path
								d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z"
								fill="#E4761B"
								stroke="#E4761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z"
								fill="#CD6116"
								stroke="#CD6116"
								strokeWidth="5.94955"
							/>
							<path
								d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z"
								fill="#E4761B"
								stroke="#E4761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z"
								fill="#CD6116"
								stroke="#CD6116"
								strokeWidth="5.94955"
							/>
							<path
								d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z"
								fill="#C0AD9E"
								stroke="#C0AD9E"
								strokeWidth="5.94955"
							/>
							<path
								d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z"
								fill="#D7C1B3"
								stroke="#D7C1B3"
								strokeWidth="5.94955"
							/>
							<path
								d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z"
								fill="#E4761B"
								stroke="#E4761B"
								strokeWidth="5.94955"
							/>
							<path
								d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z"
								fill="#D7C1B3"
								stroke="#D7C1B3"
								strokeWidth="5.94955"
							/>
							<path
								d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z"
								fill="#CD6116"
								stroke="#CD6116"
								strokeWidth="5.94955"
							/>
							<path
								d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z"
								fill="#CD6116"
								stroke="#CD6116"
								strokeWidth="5.94955"
							/>
							<path
								d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z"
								fill="#CD6116"
								stroke="#CD6116"
								strokeWidth="5.94955"
							/>
							<path
								d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z"
								fill="#E4751F"
								stroke="#E4751F"
								strokeWidth="5.94955"
							/>
							<path
								d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z"
								fill="#233447"
								stroke="#233447"
								strokeWidth="5.94955"
							/>
							<path
								d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z"
								fill="#763D16"
								stroke="#763D16"
								strokeWidth="5.94955"
							/>
							<path
								d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z"
								fill="#C0AD9E"
								stroke="#C0AD9E"
								strokeWidth="5.94955"
							/>
							<path
								d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z"
								fill="#E4751F"
								stroke="#E4751F"
								strokeWidth="5.94955"
							/>
							<path
								d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z"
								fill="#E4751F"
								stroke="#E4751F"
								strokeWidth="5.94955"
							/>
							<path
								d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z"
								fill="#F6851B"
								stroke="#F6851B"
								strokeWidth="5.94955"
							/>
							<path
								d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z"
								fill="#C0AD9E"
								stroke="#C0AD9E"
								strokeWidth="5.94955"
							/>
							<path
								d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z"
								fill="#C0AD9E"
								stroke="#C0AD9E"
								strokeWidth="5.94955"
							/>
							<path
								d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z"
								fill="#161616"
								stroke="#161616"
								strokeWidth="5.94955"
							/>
							<path
								d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z"
								fill="#161616"
								stroke="#161616"
								strokeWidth="5.94955"
							/>
							<path
								d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z"
								fill="#161616"
								stroke="#161616"
								strokeWidth="5.94955"
							/>
							<path
								d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z"
								fill="#161616"
								stroke="#161616"
								strokeWidth="5.94955"
							/>
							<path
								d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z"
								fill="#161616"
								stroke="#161616"
								strokeWidth="5.94955"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1512_1323">
								<rect
									width="2404"
									height="2500"
									fill="white"
									transform="translate(0.519043 0.132812)"
								/>
							</clipPath>
						</defs>
					</svg>
					Connect with MetaMask
				</button>
			</div>
		</aside>
	)
}
