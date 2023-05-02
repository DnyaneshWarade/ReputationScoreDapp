import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
	const loaderName = [
		"Proof of Sustainability: GHG emissions reduced data",
		"Proof of Sustainability: Renewable energy produced",
		"Proof of Sustainability: Livelihoods supported",
		"Proof of Sustainability: Improvement in health",
		"Proof of Sustainability: SDG Goals met",
		"DeFi Actions",
		"Liquidation History",
		"Health and Risk Factors",
		"Length of History",
		"Wallet History",
		"Market History",
		"Credit Mix",
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex === loaderName.length) {
			console.log("stopping");
			setCurrentIndex(0);
			return;
		}
		const interval = setInterval(() => {
			const updatedData = currentIndex + 1;
			setCurrentIndex(updatedData);
		}, 1000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<div className="reputation-loader-container">
			<div className="reputation-loader-spin reputation-loader"></div>
			<h3>{loaderName[currentIndex]}</h3>
		</div>
	);
};

export default Loader;
