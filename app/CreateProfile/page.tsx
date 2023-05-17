"use client"

import { LoginButton } from "../components/auth/LoginButton"
import { useActiveWallet, useCreateProfile } from "@lens-protocol/react-web"
import { useState } from "react"
import Link from "next/link"

const ENVIRONMENT = process.env.ENVIRONMENT as "development" | "production"

export default function CreateProfile({
	params,
}: {
	params: { slug: string }
}) {
	const { data: activeWallet, loading: activeWalletLoading } = useActiveWallet()

	const { execute, error, isPending } = useCreateProfile()

	const [result, setResult] = useState<string | null>(null)
	const [createdProfileHandle, setCreatedProfileHandle] = useState<string>("")

	const submit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const form = event.currentTarget

		const formData = new FormData(form)
		const handle = (formData.get("handle") as string) ?? null

		const result = await execute({ handle })

		if (result.isSuccess()) {
			setResult("Profile created")
			setCreatedProfileHandle(handle)
			event.currentTarget.innerText = ""
		}

		form.reset()
	}

	if (ENVIRONMENT !== "development") return null

	if (!activeWallet) {
		return (
			<>
				<title>Create Profile / Metro House</title>
				<div className="flex flex-col gap-4">
					<h1>
						To create a profile you need to connect with your wallet and sign
						with Lens
					</h1>
					<LoginButton />
				</div>
			</>
		)
	}

	return (
		<>
			<title>Create Profile / Metro House</title>
			<form className="flex flex-col gap-6" onSubmit={submit}>
				{/* Name */}
				{/* <div className="relative z-0 w-full group">
				<input
					type="text"
					name="floating_name"
					id="floating_name"
					className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_name"
					className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Name*
				</label>
			</div> */}

				<a className="text-xl font-semibold">Create Profile</a>
				{/* Handle */}
				<div className="relative z-0 w-full group">
					<input
						type="text"
						name="handle"
						id="handle"
						className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						minLength={5}
						maxLength={31}
						disabled={isPending}
					/>
					<label
						htmlFor="handle"
						className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						@Handle*
					</label>
				</div>

				{/* Bio */}
				{/* <div className="relative z-0 w-full group">
				<input
					type="text"
					name="bio"
					id="floating_bio"
					className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_bio"
					className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Bio
				</label>
			</div> */}

				{/* Location */}
				{/* <div className="relative z-0 w-full group">
				<input
					type="text"
					name="location"
					id="floating_location"
					className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_location"
					className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Location
				</label>
			</div> */}

				{/* Group */}
				{/* <div className="grid md:grid-cols-2 md:gap-6"> */}
				{/* Website */}
				{/* <div className="relative z-0 w-full group">
					<input
						type="text"
						name="floating_website"
						id="floating_website"
						className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_website"
						className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Website
					</label>
				</div> */}

				{/* Twitter */}
				{/* <div className="relative z-0 w-full group">
					<input
						type="text"
						name="floating_twitter"
						id="floating_twitter"
						className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_twitter"
						className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						@Twitter
					</label>
				</div> */}

				{/* Avatar */}
				{/* <div className="relative z-0 w-full group gap-2">
					<label
						className="block text-lg font-medium text-gray-900 dark:text-white"
						htmlFor="user_avatar"
					>
						Upload file
					</label>
					<input
						className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						aria-describedby="user_avatar_help"
						id="user_avatar"
						type="file"
					/>
					<div
						className="text-lg text-gray-500 dark:text-gray-300"
						id="user_avatar_help"
					>
						Avatar*
					</div>
				</div> */}

				{/* Cover */}
				{/* <div className="relative z-0 w-full gap-1 group">
					<label
						className="block text-lg font-medium text-gray-900 dark:text-white"
						htmlFor="user_avatar"
					>
						Upload file
					</label>
					<input
						className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						aria-describedby="user_cover"
						id="user_cover"
						type="file"
					/>
					<div
						className="text-lg text-gray-500 dark:text-gray-300"
						id="user_cover"
					>
						Cover
					</div>
				</div> */}
				{/* </div> */}

				{/* Create */}
				<button
					type="submit"
					className="text-white max-w-[20%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					disabled={isPending}
				>
					{isPending ? "Creating..." : "Create profile"}
				</button>

				{result && (
					<Link
						className="text-xl font-semibold"
						href={`/profile/${createdProfileHandle}.test`}
					>
						{result}. Click here to goes to the {createdProfileHandle}
						{"'"}s profile.
					</Link>
				)}

				{error && <p>{error.message}</p>}
			</form>
		</>
	)
}
// I think you don't need to be authenticated
