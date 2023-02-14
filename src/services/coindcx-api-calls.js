const CryptoJS = require("crypto-js");
const key = process.env.REACT_APP_API_KEY_COINDCX; // Place your API key here
const secret = process.env.REACT_APP_API_SECRET_COINDCX; // Place your secret here
const baseurl = "https://cors-anywhere.herokuapp.com/https://api.coindcx.com";

export async function getBalances() {
	const timeStamp = Math.floor(Date.now());
	// To check if the timestamp is correct
	console.log(timeStamp);

	const body = {
		currency_short_name: "BTC",
		duration: 20,
		amount: 0.5,
		timestamp: timeStamp,
	};

	const payload = JSON.stringify(body);
	const signature = CryptoJS.HmacSHA256(payload, secret).toString();

	const options = {
		method: "POST",
		headers: {
			// "Content-Type": "application/json",
			"X-AUTH-APIKEY": key,
			"X-AUTH-SIGNATURE": signature,
		},
		body: payload,
	};

	fetch(baseurl + "/exchange/v1/users/balances", options)
		.then((response) => response.json())
		.then((data) => {
			const nonZeroAccounts = data.filter((account) => {
				return (
					parseFloat(account.balance) > 0 ||
					parseFloat(account.locked_balance) > 0
				);
			});
			console.log(nonZeroAccounts);
		})
		.catch((error) => console.error(error));
}

export async function userInfo() {
	const timeStamp = Math.floor(Date.now());

	const body = {
		currency_short_name: "BTC",
		duration: 20,
		amount: 0.5,
		timestamp: timeStamp,
	};

	const payload = JSON.stringify(body);
	const signature = CryptoJS.HmacSHA256(payload, secret).toString();

	const options = {
		method: "POST",
		headers: {
			// "Content-Type": "application/json",
			"X-AUTH-APIKEY": key,
			"X-AUTH-SIGNATURE": signature,
		},
		body: payload,
	};

	fetch(baseurl + "/exchange/v1/users/info", options)
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
}

export async function trade_history() {
	const timeStamp = Math.floor(Date.now());

	const body = {
		currency_short_name: "BTC",
		duration: 20,
		amount: 0.5,
		timestamp: timeStamp,
	};

	const payload = JSON.stringify(body);
	const signature = CryptoJS.HmacSHA256(payload, secret).toString();

	const options = {
		method: "POST",
		headers: {
			// "Content-Type": "application/json",
			"X-AUTH-APIKEY": key,
			"X-AUTH-SIGNATURE": signature,
		},
		body: payload,
	};

	fetch(baseurl + "/exchange/v1/orders/trade_history", options)
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
}

export async function fetchOrders() {
	const timeStamp = Math.floor(Date.now());

	const body = {
		currency_short_name: "BTC",
		duration: 20,
		amount: 0.5,
		timestamp: timeStamp,
	};

	const payload = JSON.stringify(body);
	const signature = CryptoJS.HmacSHA256(payload, secret).toString();

	const options = {
		method: "POST",
		headers: {
			// "Content-Type": "application/json",
			"X-AUTH-APIKEY": key,
			"X-AUTH-SIGNATURE": signature,
		},
		body: payload,
	};

	fetch(baseurl + "/exchange/v1/funding/fetch_orders", options)
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
}
