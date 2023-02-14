const CryptoJS = require("crypto-js");

const apiKey = process.env.REACT_APP_API_KEY_KUCOIN;
const apiSecret = process.env.REACT_APP_API_SECRET_KUCOIN;
const apiPassphrase = process.env.REACT_APP_API_PASSPHRASE_KUCOIN;

export async function getBalance() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/accounts";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/accounts",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		console.log(response.status);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

export async function getBalanceGreaterThanZero() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/accounts";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/accounts",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		let objectData = data;
		objectData = objectData.data.filter((item) => item.balance > 0);
		console.log(response.status);
		console.log(objectData);
	} catch (error) {
		console.error(error);
	}
}

export async function getDeposits() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/deposits";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/deposits",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		console.log(response.status);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

export async function getWithdrawals() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/withdrawals";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/withdrawals",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		console.log(response.status);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

export async function getMarginConfig() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/margin/config";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/margin/config",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		console.log(response.status);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

export async function getMarginAccount() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/margin/account";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/margin/account",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		console.log(response.status);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

export async function getMarginRiskLimit() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/risk/limit/strategy";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/risk/limit/strategy",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		console.log(response.status);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

export async function getRepayRecord() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/margin/borrow/outstanding";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/margin/borrow/outstanding",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		console.log(response.status);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

export async function getRepaymentRecord() {
	const timestamp = Date.now();
	const strToSign = timestamp + "GET" + "/api/v1/margin/borrow/repaid";
	const signature = CryptoJS.HmacSHA256(strToSign, apiSecret).toString(
		CryptoJS.enc.Base64
	);
	const passphrase = CryptoJS.HmacSHA256(apiPassphrase, apiSecret).toString(
		CryptoJS.enc.Base64
	);

	const headers = {
		"KC-API-KEY": apiKey,
		"KC-API-SIGN": signature,
		"KC-API-TIMESTAMP": timestamp,
		"KC-API-PASSPHRASE": passphrase,
		"KC-API-KEY-VERSION": "2",
	};

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/margin/borrow/repaid",
			{
				method: "GET",
				headers: headers,
			}
		);

		const data = await response.json();
		console.log(response.status);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}
