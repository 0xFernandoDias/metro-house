"use client"
import { useState } from "react"
import Link from "next/link"
import { useActiveWallet, useCreateProfile } from "@lens-protocol/react-web"
import { LoginButton } from "../components/auth/LoginButton"

const ENVIRONMENT = process.env.ENVIRONMENT as "development" | "production"

export default function CreateProfile({}: {}) {
	const [result, setResult] = useState<string | null>(null)
	const [createdProfileHandle, setCreatedProfileHandle] = useState<string>("")

	const { data: activeWallet, loading: activeWalletLoading } = useActiveWallet()
	const { execute, error, isPending } = useCreateProfile()

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
				<a className="text-xl font-semibold">Create Profile</a>
				{/* Handle */}
				<div className="relative z-0 group">
					<input
						type="text"
						name="handle"
						id="handle"
						className="block py-2.5 px-0 max-w-min text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						minLength={5}
						maxLength={31}
						disabled={isPending}
					/>
					<label
						htmlFor="handle"
						className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						@Handle*
					</label>
				</div>

				<button
					type="submit"
					className="text-white max-w-[20%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center "
					disabled={isPending}
				>
					{isPending ? "Creating..." : "Create profile"}
				</button>

				{result && (
					<Link
						className="text-xl font-semibold underline"
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
