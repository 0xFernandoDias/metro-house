"use client"
import { Button } from "@chakra-ui/react"
import { useGlobalContext } from "./context/store"

export default function Home() {
	const { count, increment } = useGlobalContext()

	return (
		<>
			<title>Metro House</title>
			<div>
				<h1>Metro House</h1>
				<p>Count: {count}</p>
				<Button colorScheme="blue" onClick={increment}>
					Increment
				</Button>
			</div>
		</>
	)
}
