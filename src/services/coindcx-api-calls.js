const request = require("request");
const crypto = require("crypto");
const Buffer = require("buffer").Buffer;
require("dotenv").config();

const baseurl = "https://api.coindcx.com";

const timeStamp = Math.floor(Date.now());

const key = process.env.API_KEY_COINDCX;
const secret = process.env.API_SECRET_COINDCX;

const body = {
	currency_short_name: "BTC",
	duration: 20,
	amount: 0.5,
	timestamp: timeStamp,
};

const payload = new Buffer(JSON.stringify(body)).toString();
const signature = crypto
	.createHmac("sha256", secret)
	.update(payload)
	.digest("hex");

async function getBalances() {
	const options = {
		url: baseurl + "/exchange/v1/users/balances",
		headers: {
			"X-AUTH-APIKEY": key,
			"X-AUTH-SIGNATURE": signature,
		},
		json: true,
		body: body,
	};

	try {
		console.log("Balances :");
		// get only non-zero balances
		request.post(options, function (error, response, body) {
			const nonZeroAccounts = body.filter((account) => {
				return (
					parseFloat(account.balance) > 0 ||
					parseFloat(account.locked_balance) > 0
				);
			});

			console.log(nonZeroAccounts);
		});
	} catch (error) {
		console.error("Error in request.post:", error);
	}
}

async function userInfo() {
	const options = {
		url: baseurl + "/exchange/v1/users/info",
		headers: {
			"X-AUTH-APIKEY": key,
			"X-AUTH-SIGNATURE": signature,
		},
		json: true,
		body: body,
	};

	try {
		request.post(options, function (error, response, body) {
			if (error) {
				throw error;
			}
			console.log(body);
		});
	} catch (error) {
		console.error("Error in request.post:", error);
	}
}

async function tradeHistory() {
	const options = {
		url: baseurl + "/exchange/v1/orders/trade_history",
		headers: {
			"X-AUTH-APIKEY": key,
			"X-AUTH-SIGNATURE": signature,
		},
		json: true,
		body: body,
	};

	try {
		request.post(options, function (error, response, body) {
			if (error) {
				throw error;
			}
			console.log(body);
		});
	} catch (error) {
		console.error("Error in request.post:", error);
	}
}

async function fetchOrders() {
	const options = {
		url: baseurl + "/exchange/v1/funding/fetch_orders",
		headers: {
			"X-AUTH-APIKEY": key,
			"X-AUTH-SIGNATURE": signature,
		},
		json: true,
		body: body,
	};

	try {
		request.post(options, function (error, response, body) {
			if (error) {
				throw error;
			}
			console.log(body);
		});
	} catch (error) {
		console.error("Error in request.post:", error);
	}
}

userInfo();
getBalances();
tradeHistory();
fetchOrders();
