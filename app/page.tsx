"use client"
import { Button } from "@chakra-ui/react"
import { useGlobalContext } from "./context/store"
import { useGetCat } from "./hooks/useGetCat"

export default function Home() {
	const { count, increment } = useGlobalContext()
	const { data, isCatLoading } = useGetCat()

	if (isCatLoading) return <>...loading</>

	return (
		<>
			<title>Metro House</title>
			<div>
				<h1>Metro House</h1>
				<p>Count: {count}</p>
				{/* @ts-ignore */}
				<Button colorScheme="blue" onClick={increment}>
					Increment
				</Button>
			</div>
			<div>
				<h1>Cats fact: {data?.fact}</h1>
			</div>
		</>
	)
}
