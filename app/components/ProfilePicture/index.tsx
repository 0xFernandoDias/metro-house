"use client"
import Link from "next/link"
import { MediaRenderer } from "@thirdweb-dev/react"
import {
	MediaSet,
	Profile as ProfileType,
	ProfileMedia,
} from "@lens-protocol/react-web"

export function ProfilePicture({
	picture,
	profile,
	design = "profileSmall",
}: {
	picture: MediaSet | ProfileMedia | null
	profile: ProfileType
	design?: "small" | "profileSmall" | "profileLarge"
}) {
	if (!picture) {
		return (
			<Link
				href={`/profile/${profile.handle}`}
				className={`flex w-${
					design === "profileSmall"
						? "16"
						: design === "profileLarge"
						? "36"
						: "10"
				} h-${
					design === "profileSmall"
						? "16"
						: design === "profileLarge"
						? "36"
						: "10"
				} items-center justify-center text-xs font-medium text-white bg-gray-400 rounded-full`}
			>
				<svg
					strokeWidth={1.5}
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					className="fill-gray-400 stroke-white"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
				</svg>
			</Link>
		)
	}

	if (picture.__typename === "MediaSet") {
		return (
			<Link href={`/profile/${profile.handle}`}>
				{!picture.original.url.includes("https://test.com") ? (
					<MediaRenderer
						className="rounded-full"
						height={`${
							design === "profileSmall"
								? "64px"
								: design === "profileLarge"
								? "144px"
								: "40px"
						}`}
						width={`${
							design === "profileSmall"
								? "64px"
								: design === "profileLarge"
								? "144px"
								: "40px"
						}`}
						src={picture.original.url}
					/>
				) : (
					<div
						className={`flex w-${
							design === "profileSmall"
								? "16"
								: design === "profileLarge"
								? "36"
								: "10"
						} h-${
							design === "profileSmall"
								? "16"
								: design === "profileLarge"
								? "36"
								: "10"
						} items-center justify-center text-xs font-medium text-white bg-gray-400 rounded-full`}
					>
						<svg
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							className="fill-gray-400 stroke-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
					</div>
				)}
			</Link>
		)
	}

	return (
		<div
			className={`flex w-${
				design === "profileSmall"
					? "16"
					: design === "profileLarge"
					? "36"
					: "10"
			} h-${
				design === "profileSmall"
					? "16"
					: design === "profileLarge"
					? "36"
					: "10"
			} items-center justify-center text-xs font-medium text-white bg-gray-400 rounded-full`}
		>
			<svg
				strokeWidth={1.5}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				className="fill-gray-400 stroke-white"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
				/>
			</svg>
		</div>
	)
}
