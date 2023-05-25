"use client"
import { useContext, createContext, useReducer } from "react"
import { Publication } from "@lens-protocol/client"

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "SetNewPublications":
			return { ...state, newPublications: state.newPublications }
		default:
			return state
	}
}

const GlobalContext = createContext({
	newPublications: [],
	setNewPublications: () => {},
} as {
	newPublications: Publication[]
	setNewPublications: (newPublications: Publication[]) => void
})

export const GlobalContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [state, dispatch] = useReducer(reducer, {
		count: 0,
		newPublications: [],
	})

	function setNewPublications(newPublications: Publication[]) {
		dispatch({ type: "SetNewPublications", newPublications })
	}

	return (
		<GlobalContext.Provider
			value={{
				newPublications: state.newPublications,
				setNewPublications,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)
