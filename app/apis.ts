import { AnkrProvider } from "@ankr.com/ankr.js"

const provider = new AnkrProvider("")

export const getNfts = async (address: string) => {
	const { assets, nextPageToken } = await provider.getNFTsByOwner({
		walletAddress: address,
		blockchain: ["polygon", "eth", "eth_goerli"],
	})

	if (nextPageToken) {
		const { assets: nextAssets } = await provider.getNFTsByOwner({
			walletAddress: address,
			blockchain: ["polygon", "eth", "eth_goerli"],
			pageToken: nextPageToken,
		})
		assets.push(...nextAssets)
	}

	return {
		nfts: assets,
	}
}
