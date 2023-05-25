"use client"
import {
	ChangeEvent,
	Dispatch,
	RefCallback,
	SetStateAction,
	useEffect,
	useState,
} from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
	MediaRenderer,
	NFT,
	ThirdwebNftMedia,
	useContract,
	useOwnedNFTs,
} from "@thirdweb-dev/react"
import { usePrepareSendTransaction, useSendTransaction } from "wagmi"
import { parseEther } from "ethers/lib/utils.js"
import {
	useProfile,
	usePublications,
	useProfileFollowers,
	isProfileOwnedByMe,
	useMutualFollowers,
	useActiveProfile,
	ProfileId,
	ProfileMedia,
	MediaSet,
	Profile as ProfileType,
	useUpdateProfileDetails,
	AnyPublication,
	ProfileOwnedByMe,
	useActiveProfileSwitch,
	useProfilesOwnedByMe,
	useCollectedPublications,
} from "@lens-protocol/react-web"
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll"
import { upload } from "@/app/helpers/upload"
import { WhenLoggedInWithProfile } from "@/app/components/auth/WhenLoggedInWithProfile"
import { Spinner } from "@/app/components/Spinner"
import { Profile as ProfileComponent } from "@/app/components/Profile"
import { ProfilePicture } from "@/app/components/ProfilePicture"
import { FollowUnfollowButton } from "@/app/components/FollowUnfollowButton"
import { Publications } from "@/app/components/Publications"

const ENVIRONMENT = process.env.ENVIRONMENT as "development" | "production"

function ProfileCover({
	picture,
	isMobile,
}: {
	picture: MediaSet | ProfileMedia | null
	isMobile?: boolean
}) {
	if (!picture) return null

	switch (picture.__typename) {
		case "MediaSet":
			return (
				<MediaRenderer
					className={`${
						isMobile
							? "sm:hidden flex opacity-100 sm:opacity-0 -mb-24"
							: "hidden sm:flex opacity-0 sm:opacity-100"
					}`}
					width={"530px"}
					height={"200px"}
					src={picture.original.url}
				/>
			)

		default:
			return <></>
	}
}

export default function Profile({ params }: { params: { slug: ProfileId } }) {
	const { slug: profileHandle } = params
	const { get } = useSearchParams()
	const tab = get("tab")

	const {
		data: myProfile,
		error: profileError,
		loading: profileLoading,
	} = useActiveProfile()

	const {
		data: originalProfile,
		error,
		loading,
	} = useProfile({ handle: profileHandle })

	const [profile, setProfile] = useState(originalProfile)
	const [isEditProfileToggled, setIsEditProfileToggled] = useState(false)
	const [isSendTransactionToggled, setIsSendTransactionToggled] =
		useState(false)
	const [transactionValue, setTransactionValue] = useState("")

	const isMyProfile = profile && isProfileOwnedByMe(profile)
	const profileAddress = profile?.ownedBy || ""
	const contractAddress = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"
	const { contract, isLoading: contractLoading } = useContract(contractAddress)
	const { data: nfts, isLoading } = useOwnedNFTs(contract, profileAddress)

	const {
		data: publications,
		loading: loadingPublications,
		hasMore,
		observeRef,
	} = useInfiniteScroll(
		usePublications({
			profileId: profile?.id!,
			observerId: myProfile?.id,
		})
	)

	const {
		loading: collectedPublicationsLoading,
		data: collectedPublications,
		error: collectedPublicationsError,
		hasMore: hasMoreCollectedPublications,
		observeRef: observeCollectedPublicationsRef,
	} = useInfiniteScroll(
		useCollectedPublications({ walletAddress: profileAddress })
	)

	const { config } = usePrepareSendTransaction({
		chainId: ENVIRONMENT === "development" ? 80001 : 137,
		request: {
			to: profile?.ownedBy || "",
			from: myProfile?.ownedBy || "",
			value: transactionValue ? parseEther(transactionValue) : undefined,
		},
	})

	const {
		data: sendTransactionResult,
		isLoading: sendTransactionLoading,
		isSuccess: sendTransactionSuccess,
		error: sendTransactionError,
		sendTransaction,
	} = useSendTransaction(config)

	useEffect(() => {
		setProfile(originalProfile)
	}, [originalProfile])

	useEffect(() => {
		if (sendTransactionSuccess) {
			setTransactionValue("")
		}
	}, [sendTransactionSuccess])

	const handleTransactionValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTransactionValue(e.target.value)
	}

	if (
		loading ||
		loadingPublications ||
		isLoading ||
		contractLoading ||
		collectedPublicationsLoading ||
		!profile ||
		profileLoading
	) {
		return (
			<>
				<title>Profile / Metro House</title>
				<Spinner />
			</>
		)
	}

	return (
		<>
			<title>
				{profile.name} {`@${profile?.handle}`}/ Metro House
			</title>
			<div className="flex flex-col">
				{isEditProfileToggled ? (
					<WhenLoggedInWithProfile>
						{({ profile }) => (
							<EditableProfile
								profile={profile}
								hasMore={hasMore}
								collectedPublications={collectedPublications}
								hasMoreCollectedPublications={hasMoreCollectedPublications}
								loadingPublications={loadingPublications}
								nfts={nfts}
								observeRef={observeRef}
								observeCollectedPublicationsRef={
									observeCollectedPublicationsRef
								}
								publications={publications}
								handleSave={() => setIsEditProfileToggled(false)}
								setProfile={setProfile}
								closeEditProfileToggled={() => setIsEditProfileToggled(false)}
							/>
						)}
					</WhenLoggedInWithProfile>
				) : (
					<div className="md:flex-row gap-8 flex flex-col justify-between">
						{/* Left Side */}
						<div className="flex flex-col gap-4 md:max-w-[50%]">
							<ProfileCover isMobile picture={profile.coverPicture} />
							<ProfilePicture
								design="profileLarge"
								profile={profile}
								picture={profile.picture}
							/>

							<div className="flex gap-2 text-xl max-w-[80%]">
								{Object.entries(profile.attributes).map(([key, value]) => {
									if (key !== "statusMessage" && key !== "statusEmoji")
										return null

									return <div key={key}>{value.toString() ?? null}</div>
								})}
							</div>

							{/* Name */}
							<div className="text-3xl font-semibold leading-none items-center text-gray-900 gap-2 flex">
								{profile?.name || ""}

								{profile.onChainIdentity.proofOfHumanity && (
									<div className="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full ">
										<svg
											aria-hidden="true"
											className="w-3.5 h-3.5"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										<span className="sr-only">Verified</span>
									</div>
								)}
							</div>

							<p className="text-xl font-normal">@{profile.handle}</p>

							<WhenLoggedInWithProfile>
								{({ profile: activeProfile }) => (
									<div className="flex flex-col gap-8">
										<FollowUnfollowButton
											follower={activeProfile}
											followee={profile}
										/>

										{isMyProfile ? (
											<div className="flex flex-col gap-2">
												<button
													type="button"
													className="text-white w-48 items-center flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
													onClick={() => setIsEditProfileToggled(true)}
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
													Edit Profile
												</button>

												<SwitchProfile myProfile={activeProfile} />
											</div>
										) : !isSendTransactionToggled ? (
											<button
												className="text-white w-36 items-center flex gap-3 bg-[#8345E6] hover:bg-[#5f32a7] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
												onClick={() => {
													setIsSendTransactionToggled(true)
												}}
											>
												<svg
													className="h-6 w-6 fill-[#8345E6] stroke-white"
													strokeWidth={1.5}
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
													/>
												</svg>
												Transfer
											</button>
										) : (
											<div className="flex flex-col gap-4">
												<div className="relative z-0 w-full group font-semibold">
													<input
														type="text"
														name="transactionValue"
														id="transactionValue"
														className="block py-2.5 px-0 max-w-min text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
														placeholder=""
														value={transactionValue}
														onChange={handleTransactionValueChange}
													/>
													<label
														htmlFor="transactionValue"
														className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
													>
														Transaction Value $(MATIC):
													</label>
												</div>
												<div className="flex gap-4">
													<button
														onClick={() => sendTransaction?.()}
														className="text-white disabled:bg-blue-400 max-w-min flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
														disabled={
															sendTransactionLoading || transactionValue === ""
														}
													>
														Send
													</button>
													<button
														type="button"
														className="text-black hover:text-white max-w-min flex gap-3 bg-white hover:bg-gray-500 focus:ring-4 focus:ring-black font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
														onClick={() => setIsSendTransactionToggled(false)}
														disabled={sendTransactionLoading}
													>
														Cancel
													</button>
												</div>
												{sendTransactionSuccess && sendTransactionResult && (
													<Link
														className="text-xl font-semibold underline"
														href={`${
															ENVIRONMENT === "development"
																? `https://mumbai.polygonscan.com/tx/${sendTransactionResult.hash}`
																: `https://polygonscan.com/tx/${sendTransactionResult.hash}`
														}`}
													>
														Success
													</Link>
												)}
												{sendTransactionError && (
													<div className="text-red-500">
														{sendTransactionError.name}{" "}
														{sendTransactionError.message}
													</div>
												)}
											</div>
										)}
									</div>
								)}
							</WhenLoggedInWithProfile>

							<p className="text-xl max-w-[80%]">{profile.bio}</p>

							<div className="flex flex-col gap-2 text-xl max-w-[80%]">
								{Object.entries(profile.attributes).map(([key, value]) => {
									if (key === "statusMessage" || key === "statusEmoji")
										return null

									if (
										value.toString() === "true" ||
										value.toString() === "false" ||
										value === null
									)
										return null

									return <div key={key}>{`${key}: ${value.toString()}`}</div>
								})}
							</div>

							<ProfileContacts
								viewingProfileId={myProfile?.id}
								profile={profile}
							/>

							{nfts?.map((nft, idx) => {
								return (
									<ThirdwebNftMedia
										key={idx}
										metadata={nft.metadata}
										height="200px"
										width="200px"
									/>
								)
							})}

							<p className="text-xl font-normal">{profile.id}</p>
							<p className="text-xl font-normal">
								{profile.ownedBy.slice(0, 5)}...{profile.ownedBy.slice(-4)}
							</p>
						</div>

						{/* Right Side */}
						<div className="flex flex-col gap-4 md:w-[50%]">
							<ProfileCover picture={profile.coverPicture} />

							<Publications
								isProfile
								profile={profile}
								publications={publications}
								collectedPublications={collectedPublications}
								hasMore={hasMore}
								hasMoreCollectedPublications={hasMoreCollectedPublications}
								observeRef={observeRef}
								observeCollectedPublicationsRef={
									observeCollectedPublicationsRef
								}
								isLoading={profileLoading || loading || loadingPublications}
							/>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

function SwitchProfile({ myProfile }: { myProfile: ProfileOwnedByMe }) {
	const [isSwitchProfileToggled, setIsSwitchProfileToggled] = useState(false)
	const [selected, setSelected] = useState<ProfileId>("" as ProfileId)

	const { execute: switchProfile, isPending } = useActiveProfileSwitch()
	const {
		data: myProfiles,
		error: myProfilesError,
		loading: myProfilesLoading,
	} = useProfilesOwnedByMe()

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		void switchProfile(selected)
	}

	if (myProfilesLoading) return <Spinner />

	if (!isSwitchProfileToggled) {
		return (
			<button
				type="button"
				className="w-48 flex focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2"
				onClick={() => setIsSwitchProfileToggled(true)}
			>
				<svg
					className="h-6 w-6 mr-3 stroke-white"
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
				Switch Profile
			</button>
		)
	}

	return (
		<form className="flex flex-col gap-4" onSubmit={onSubmit}>
			{myProfiles?.map((profile) => {
				if (profile.id === myProfile.id) return null

				return (
					<label key={profile.id}>
						<input
							type="checkbox"
							name="profile"
							value={profile.id}
							checked={profile.id === selected}
							onChange={() => setSelected(profile.id)}
						/>
						<ProfileComponent profile={profile} />
					</label>
				)
			})}
			<div className="flex gap-4">
				<button
					type="submit"
					className="text-white
					bg-purple-700 hover:bg-purple-800
					focus:ring-purple-300 disabled:bg-purple-300 max-w-min flex gap-3 focus:ring-4 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
					disabled={isPending || selected === ""}
				>
					{isPending ? "Saving..." : "Switch"}
				</button>
				<button
					type="button"
					className="text-black hover:text-white max-w-min flex gap-3 bg-white hover:bg-gray-500 focus:ring-4 focus:ring-black font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
					onClick={() => setIsSwitchProfileToggled(false)}
				>
					Cancel
				</button>
			</div>
		</form>
	)
}

function EditableProfile({
	profile,
	nfts,
	publications,
	collectedPublications,
	hasMore,
	hasMoreCollectedPublications,
	observeRef,
	observeCollectedPublicationsRef,
	loadingPublications,
	handleSave,
	setProfile,
	closeEditProfileToggled,
}: {
	profile: ProfileOwnedByMe
	nfts: NFT[] | undefined
	publications: AnyPublication[] | undefined
	collectedPublications: AnyPublication[] | undefined
	hasMore: boolean
	hasMoreCollectedPublications: boolean
	observeRef: RefCallback<unknown>
	observeCollectedPublicationsRef: RefCallback<unknown>
	loadingPublications: boolean
	handleSave: () => void
	setProfile: Dispatch<SetStateAction<ProfileType | undefined>>
	closeEditProfileToggled: () => void
}) {
	const [name, setName] = useState(profile.name as string)
	const [bio, setBio] = useState(profile.bio as string)

	const { execute, isPending, error } = useUpdateProfileDetails({
		profile: profile,
		upload,
	})

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const handleBioChange = (e: ChangeEvent<HTMLInputElement>) => {
		setBio(e.target.value)
	}

	const submit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const form = event.currentTarget

		const formData = new FormData(form)
		const name = (formData.get("name") as string) ?? ""
		const bio = (formData.get("bio") as string) ?? ""
		const attributes = {
			statusMessage: (formData.get("statusMessage") as string | null) || null,
			location: (formData.get("location") as string | null) || null,
			website: (formData.get("website") as string | null) || null,
			twitter: (formData.get("twitter") as string | null) || null,
			app: (formData.get("app") as string | null) || null,
		}

		const result = await execute({ name, bio, attributes })

		if (result.isSuccess()) {
			setProfile(profile && { ...profile, name, bio })
			closeEditProfileToggled()
		}
	}

	return (
		<form
			className="md:flex-row gap-8 flex flex-col justify-between"
			onSubmit={submit}
		>
			{/* Left Side */}
			<div className="flex flex-col gap-4 md:max-w-[50%]">
				<ProfilePicture
					design="profileLarge"
					profile={profile}
					picture={profile.picture}
				/>

				<p className="text-xl font-normal">@{profile.handle}</p>

				{Object.entries(profile.attributes).map(([key, value]) => {
					if (key !== "statusMessage") return null

					return (
						<div className="relative z-0 w-full group font-semibold" key={key}>
							<input
								type="text"
								name={key}
								id={key}
								className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=""
							/>
							<label
								htmlFor="bio"
								className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								{key}
							</label>
						</div>
					)
				})}

				<div className="text-3xl font-semibold leading-none items-center text-gray-900 gap-2 flex">
					<div className="relative z-0 w-full group">
						<input
							type="text"
							name="name"
							id="name"
							className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							value={name}
							onChange={handleNameChange}
						/>
						<label
							htmlFor="name"
							className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Name
						</label>
					</div>

					{profile.onChainIdentity.proofOfHumanity && (
						<div className="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full ">
							<svg
								aria-hidden="true"
								className="w-3.5 h-3.5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clipRule="evenodd"
								></path>
							</svg>
							<span className="sr-only">Verified</span>
						</div>
					)}
				</div>

				<div className="relative z-0 w-full group font-semibold">
					<input
						type="text"
						name="bio"
						id="bio"
						className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						value={bio}
						onChange={handleBioChange}
					/>
					<label
						htmlFor="bio"
						className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Bio
					</label>
				</div>

				{Object.entries(profile.attributes).map(([key, value]) => {
					if (key === "statusMessage" || key === "statusEmoji") return null

					if (
						value.toString() === "true" ||
						value.toString() === "false" ||
						value === null
					)
						return null

					return (
						<div className="relative z-0 w-full group font-semibold" key={key}>
							<input
								type="text"
								name={key}
								id={key}
								className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=""
							/>
							<label
								htmlFor="bio"
								className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								{key}
							</label>
						</div>
					)
				})}

				<div className="flex gap-4">
					<button
						type="submit"
						className="text-white disabled:bg-blue-400 max-w-min flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
						disabled={isPending}
					>
						Save
					</button>
					<button
						type="button"
						className="text-black hover:text-white max-w-min flex gap-3 bg-white hover:bg-gray-500 focus:ring-4 focus:ring-black font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none "
						onClick={handleSave}
						disabled={isPending}
					>
						Cancel
					</button>
				</div>

				{error && <p>{error.message}</p>}

				<ProfileContacts viewingProfileId={profile?.id} profile={profile} />

				{nfts?.map((nft, idx) => {
					return (
						<ThirdwebNftMedia
							key={idx}
							metadata={nft.metadata}
							height="200px"
							width="200px"
						/>
					)
				})}

				<p className="text-xl font-normal">{profile.id}</p>
				<p className="text-xl font-normal">
					{profile.ownedBy.slice(0, 5)}...{profile.ownedBy.slice(-4)}
				</p>
			</div>

			{/* Right Side */}
			<div className="flex flex-col gap-4 md:w-[50%]">
				<ProfileCover picture={profile.coverPicture} />

				<Publications
					isProfile
					profile={profile}
					publications={publications}
					collectedPublications={collectedPublications}
					hasMore={hasMore}
					hasMoreCollectedPublications={hasMoreCollectedPublications}
					observeRef={observeRef}
					observeCollectedPublicationsRef={observeCollectedPublicationsRef}
					isLoading={loadingPublications}
				/>
			</div>
		</form>
	)
}

function ProfileContacts({
	profile,
	viewingProfileId,
}: {
	profile: ProfileType
	viewingProfileId?: ProfileId
}) {
	const isMyProfile = isProfileOwnedByMe(profile)

	const { data: mutual, loading: loadingMutual } = useMutualFollowers({
		observerId: viewingProfileId!,
		viewingProfileId: profile.id,
	})

	if (loadingMutual) return <Spinner />

	return (
		<ul className="flex text-xl flex-col gap-4">
			<div className="flex flex-row gap-4">
				<Link
					href={`/profile/${profile.handle}/contacts?tab=followers`}
					className="font-semibold hover:underline text-gray-900 "
				>
					{profile.stats.totalFollowers} Followers
				</Link>
				<Link
					href={`/profile/${profile.handle}/contacts?tab=following`}
					className="font-semibold hover:underline text-gray-900 "
				>
					{profile.stats.totalFollowing} Following
				</Link>
			</div>

			<WhenLoggedInWithProfile>
				{() =>
					isMyProfile ? (
						<></>
					) : (
						<Link
							href={`/profile/${profile.handle}/contacts?tab=mutual`}
							className="font-semibold hover:underline text-gray-900 "
						>
							{isMyProfile
								? ""
								: `${mutual?.length ? `${mutual?.length} mutual` : ""}`}
						</Link>
					)
				}
			</WhenLoggedInWithProfile>

			<div className="flex -space-x-3">
				{mutual?.map((mutual, idx) => {
					if (idx > 3) return null

					return (
						<ProfilePicture
							picture={mutual.picture}
							profile={mutual}
							key={mutual.id}
						/>
					)
				})}
				{mutual && mutual.length > 4 && (
					<Link
						className="flex items-center justify-center w-16 h-16 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 "
						href={`/profile/${profile.handle}/contacts?=mutual`}
					>
						+{mutual.length - 4}
					</Link>
				)}
			</div>
		</ul>
	)
}
