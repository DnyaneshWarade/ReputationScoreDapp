require("dotenv").config();
const crypto = require("crypto");
const https = require("https");

const apiKey = process.env.API_KEY_KUCOIN;
const apiSecret = process.env.API_SECRET_KUCOIN;
const apiPassphrase = process.env.API_PASSPHRASE_KUCOIN;

function getBalance() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/accounts";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/accounts",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			console.log(res.statusCode);
			console.log(JSON.parse(data));
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

function getBalanceGreaterThanZero() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/accounts";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/accounts",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			let objectData = JSON.parse(data);
			objectData = objectData.data.filter((item) => item.balance > 0);
			console.log(res.statusCode);
			console.log(objectData);
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

function getDeposits() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/deposits";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/deposits",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			console.log(res.statusCode);
			console.log(JSON.parse(data));
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

function getWithdrawals() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/withdrawals";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/withdrawals",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			console.log(res.statusCode);
			console.log(JSON.parse(data));
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

function getMarginConfig() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/margin/config";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/margin/config",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			console.log(res.statusCode);
			console.log(JSON.parse(data));
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

function getMarginAccount() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/margin/account";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/margin/account",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			console.log(res.statusCode);
			console.log(JSON.parse(data));
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

function getMarginRiskLimit() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/risk/limit/strategy";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/risk/limit/strategy",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			console.log(res.statusCode);
			console.log(JSON.parse(data));
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

function getRepayRecord() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/margin/borrow/outstanding";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/margin/borrow/outstanding",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			console.log(res.statusCode);
			console.log(JSON.parse(data));
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

function getRepaymentRecord() {
	const now = Date.now();
	const strToSign = now + "GET" + "/api/v1/margin/borrow/repaid";
	const signature = crypto
		.createHmac("sha256", apiSecret)
		.update(strToSign)
		.digest("base64");
	const passphrase = crypto
		.createHmac("sha256", apiSecret)
		.update(apiPassphrase)
		.digest("base64");

	const options = {
		hostname: "api.kucoin.com",
		path: "/api/v1/margin/borrow/repaid",
		method: "GET",
		headers: {
			"KC-API-KEY": apiKey,
			"KC-API-SIGN": signature,
			"KC-API-TIMESTAMP": now,
			"KC-API-PASSPHRASE": passphrase,
			"KC-API-KEY-VERSION": "2",
		},
	};

	const req = https.request(options, (res) => {
		let data = "";
		res.on("data", (chunk) => {
			data += chunk;
		});
		res.on("end", () => {
			console.log(res.statusCode);
			console.log(JSON.parse(data));
		});
	});

	req.end();
	req.on("error", (error) => {
		console.error(error);
	});
}

getBalance();
getBalanceGreaterThanZero();
getDeposits();
getWithdrawals();
getMarginAccount();
getMarginConfig();
getMarginRiskLimit();
getRepayRecord();
getRepaymentRecord();
