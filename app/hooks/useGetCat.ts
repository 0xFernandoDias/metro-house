import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetCat = () => {
	const {
		data,
		refetch,
		isLoading: isCatLoading,
	} = useQuery(["cat"], async () =>
		axios.get("https://catfact.ninja/fact").then((res) => res.data)
	)

	function refetchData() {
		alert("Data refetched.")
		refetch()
	}

	return { data, isCatLoading, refetchData }
}
