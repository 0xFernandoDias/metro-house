"use client"
import {
	ContentFocus,
	ProfileOwnedByMe,
	useCreatePost,
} from "@lens-protocol/react-web"
import { upload } from "@/app/helpers/upload"

export function CreatePublication({
	publisher,
}: {
	publisher: ProfileOwnedByMe
}) {
	const {
		execute: create,
		error,
		isPending,
	} = useCreatePost({ publisher, upload })

	const submit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const form = event.currentTarget

		const formData = new FormData(form)
		const content = (formData.get("content") as string | null) ?? ""

		await create({
			content,
			contentFocus: ContentFocus.TEXT,
			locale: "en",
		})

		form.reset()
	}

	return (
		<form className="flex flex-col sm:max-w-[80%] gap-4" onSubmit={submit}>
			{/* Text field */}
			<div className="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
				<div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
					<div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
						<div className="flex items-center space-x-1">
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<div className="w-5 h-5 items-center justify-center font-extrabold text-lg flex">
									B
								</div>
								<span className="sr-only">Bold</span>
							</button>
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<i className="w-5 h-5 items-center justify-center font-semibold text-lg flex">
									I
								</i>
								<span className="sr-only">Italic</span>
							</button>
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Add emoji</span>
							</button>
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
										clipRule="evenodd"
									></path>
								</svg>

								<span className="sr-only">Upload image</span>
							</button>
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									className="w-5 h-5 stroke-gray-50 fill-gray-500"
									strokeWidth={1.5}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
									/>
								</svg>

								<span className="sr-only">Gif</span>
							</button>
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Format code</span>
							</button>
						</div>
						<div className="flex flex-wrap items-center space-x-1">
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									className="w-5 h-5 stroke-gray-50 fill-gray-500"
									strokeWidth={1.5}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
									/>
								</svg>
								<span className="sr-only">Privacy</span>
							</button>
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									className="w-5 h-5 fill-gray-50 stroke-gray-500"
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
								<span className="sr-only">Collect Settings</span>
							</button>
							<button
								type="button"
								className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									className="w-5 h-5 fill-gray-50 stroke-gray-500"
									strokeWidth={1.5}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
								<span className="sr-only">Access</span>
							</button>
						</div>
					</div>
				</div>

				<div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
					<label htmlFor="editor" className="sr-only">
						Publish
					</label>
					<textarea
						id="editor"
						name="content"
						rows={8}
						className="block w-full h-32 px-0 text-lg text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:placeholder-gray-400"
						placeholder="Write your post..."
						required
						disabled={isPending}
					></textarea>
				</div>
			</div>

			<button
				type="submit"
				className="inline-flex items-center gap-2 max-w-min px-5 py-2.5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
				disabled={isPending}
			>
				<svg
					className="h-6 w-6 fill-blue-700 stroke-white"
					strokeWidth={1.5}
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
					/>
				</svg>
				Publish
			</button>
		</form>
	)
}
