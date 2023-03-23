"use client"

import { useGlobalContext } from "./context/store"

export default function Home() {
	const { count, increment } = useGlobalContext()

	return (
		<div>
			<h1>Metro House</h1>
			<p>Count: {count}</p>
			<button type="button" onClick={increment}>
				Increment
			</button>
		</div>
	)
}
