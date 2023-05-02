const { ethers } = require("ethers");
export const isConnected = async () => {
	try {
		if (window.ethereum) {
			let chainId = window.ethereum.chainId;
			if (chainId !== "0x30e0a") {
				const temp = await window.provider.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: "0x30e0a" }], // chainId must be in hexadecimal numbers
				});
			}
			if (chainId === "0x30e0a") {
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const account = await provider.send("eth_requestAccounts", []);
				console.log(account);
				return {
					success: true,
					account,
				};
			}
		} else if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			window.open("https://metamask.app.link/dapp/dygnify.in/");
		} else {
			localStorage.setItem("Wallet-Check", false);
			return {
				success: false,
				msg: "Please Install Wallet",
			};
		}
	} catch (error) {
		return {
			success: false,
			msg: "Please Open Metamask and Connect",
		};
	}
};
