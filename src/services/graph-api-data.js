import { useQuery, gql } from "@apollo/client";

const GET_BORROWS = gql`
	query GetBorrows($account: String) {
		borrows(where: { user: $account }) {
			id
			reserve
			user
			amount
			borrowRate
		}
	}
`;
const GET_DEPOSITS = gql`
	query GetDeposits($account: String) {
		deposits(where: { user: $account }) {
			id
			reserve
			user
			amount
		}
	}
`;
const GET_FLASH_LOANS = gql`
	query GetFlashLoans($account: String) {
		flashLoans(where: { initiator: $account }) {
			id
			target
			initiator
			asset
			amount
			premium
		}
	}
`;

const GET_LIQUIDATION_CALLS = gql`
	query GetLiquidationCalls($account: String) {
		liquidationCalls(where: { user: $account }) {
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
const GET_REPAYS = gql`
	query GetRepays($account: String) {
		repays(where: { user: $account }) {
			id
			reserve
			user
			repayer
			amount
		}
	}
`;
const GET_SWAPS = gql`
	query GetSwaps($account: String) {
		swaps(where: { user: $account }) {
			id
			reserve
			user
			rateMode
		}
	}
`;
const GET_WITHDRAWS = gql`
	query GetWithdraws($account: String) {
		withdraws(where: { user: $account }) {
			id
			reserve
			user
			to
			amount
		}
	}
`;
export function GetBorrows(account) {
	console.log("================== Graph Data of Borrowing ==================");
	const { loading, error, data } = useQuery(GET_BORROWS, {
		variables: { account },
	});
	console.log(data);
}
export function GetDeposits(account) {
	console.log("================== Graph Data of Deposits ==================");
	const { loading, error, data } = useQuery(GET_DEPOSITS, {
		variables: { account },
	});
	console.log(data);
}
export function GetFlashLoans(account) {
	console.log("================== Graph Data of Flash Loans ==================");
	const { loading, error, data } = useQuery(GET_FLASH_LOANS, {
		variables: { account },
	});
	console.log(data);
}
export function GetLiquidationCalls(account) {
	console.log("================== Graph Data of Liquidation ==================");
	const { loading, error, data } = useQuery(GET_LIQUIDATION_CALLS, {
		variables: { account },
	});
	console.log(data);
}
export function GetRepays(account) {
	console.log("================== Graph Data of Repayments ==================");
	const { loading, error, data } = useQuery(GET_REPAYS, {
		variables: { account },
	});
	console.log(data);
}
export function GetSwaps(account) {
	const { loading, error, data } = useQuery(GET_SWAPS, {
		variables: { account },
	});
	console.log(data);
}
export function GetWithdraws(account) {
	console.log("================== Graph Data of Withdrawals ==================");
	const { loading, error, data } = useQuery(GET_WITHDRAWS, {
		variables: { account },
	});
	console.log(data);
}
