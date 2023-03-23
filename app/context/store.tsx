"use client"

import { useContext, createContext, useReducer } from "react"

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "Increment":
			return { count: state.count + 1 }
		default:
			return state
	}
}

const GlobalContext = createContext({
	count: 0,
	increment: () => {},
} as {
	count: number
	increment: () => void
})

export const GlobalContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [state, dispatch] = useReducer(reducer, { count: 0 })

	const increment = () => dispatch({ type: "Increment" })

	return (
		<GlobalContext.Provider value={{ count: state.count, increment }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)
