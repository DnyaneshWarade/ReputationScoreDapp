import axios from "axios";

const URL = "https://api.studio.thegraph.com/query/41978/aave/v0.0.1";

export async function getBorrows(account) {
	const query = `
		{
			borrows(where: {user: "${account}"}) {
				id
				reserve
				user
				amount
				borrowRate
			}
		}
	`;

	console.log("================== Graph Data of Borrowing ==================");
	try {
		const result = await axios.post(URL, { query: query });
		console.log(result.data.data);
	} catch (error) {
		console.log(error);
	}
}

export async function getDeposits(account) {
	const query = `
		{
			deposits(where: {user: "${account}"}) {
				id
				reserve
				user
				amount
			}
		}
	`;

	console.log("================== Graph Data of Deposits ==================");

	try {
		const result = await axios.post(URL, { query: query });
		console.log(result.data.data);
	} catch (error) {
		console.log(error);
	}
}

export async function getFlashLoans(account) {
	const query = `
		{
			flashLoans(where: {initiator: "${account}"}) {
				id
				target
				initiator
				asset
				amount
				premium
			}
		}
	`;

	console.log(
		"================== Graph Data of Flash Loans =================="
	);

	try {
		const result = await axios.post(URL, { query: query });
		console.log(result.data.data);
	} catch (error) {
		console.log(error);
	}
}

export async function getLiquidationCalls(account) {
	const query = `
		{
			liquidationCalls(where: {user: "${account}"}) {
				id
				collateralAsset
				debtAsset
				user
				debtToCover
				liquidatedCollateralAmount
				liquidator
			}
		}
	`;

	console.log(
		"================== Graph Data of Liquidation =================="
	);

	try {
		const result = await axios.post(URL, { query: query });
		console.log(result.data.data);
	} catch (error) {
		console.log(error);
	}
}

export async function getRepays(account) {
	const query = `
		{
			repays(where: {user: "${account}"}) {
				id
				reserve
				user
				repayer
				amount
			}
		}
	`;

	console.log("================== Graph Data of Repayments ==================");

	try {
		const result = await axios.post(URL, { query: query });
		console.log(result.data.data);
	} catch (error) {
		console.log(error);
	}
}

export async function getSwaps(account) {
	const query = `
		{
			swaps(where: {user: "${account}"}) {
				id
				reserve
				user
				rateMode
			}
		}
	`;

	console.log("================== Graph Data of Swaps ==================");

	try {
		const result = await axios.post(URL, { query: query });
		console.log(result.data.data);
	} catch (error) {
		console.log(error);
	}
}

export async function getWithdraws(account) {
	const query = `
		{
			withdraws(where: {user: "${account}"}) {
				id
				reserve
				user
				to
				amount
			}
		}
	`;

	console.log(
		"================== Graph Data of Withdrawals =================="
	);

	try {
		const result = await axios.post(URL, { query: query });
		console.log(result.data.data);
	} catch (error) {
		console.log(error);
	}
}
