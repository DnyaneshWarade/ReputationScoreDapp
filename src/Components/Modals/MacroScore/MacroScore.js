import React, { useEffect, useState } from "react";
import "./MacroScore.css";
import Button from "../../Button/Button";
import "./../Modal.css";
import Charts from "../../Charts/Charts";

const user =
	"https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021061/user-logo_w8yfph.jpg";

const MacroScore = ({
	availableWallets,
	setAvailableWalletModalOpen,
	handlePrev,
}) => {
	const [connectedWallet, setConnectedWallet] = useState({
		logo: user,
		name: "",
		id: "",
	});
	useEffect(() => {
		for (let wallet of availableWallets) {
			if (wallet.selected === true) {
				setConnectedWallet({ ...wallet });
				break;
			}
		}
	}, [availableWallets]);
	return (
		<div>
			<section className="macro-wallet-status">
				<div className="section">
					<img src={connectedWallet.logo} alt="" className="user" />
					{connectedWallet.name === "" ? (
						<p>
							<span>Wallet not connected</span>
							<span className="wallet-connect">Connect wallet</span>
						</p>
					) : (
						<p>
							<span>{connectedWallet.name}</span>
							<span className="wallet-connect">{connectedWallet.id}</span>
						</p>
					)}
				</div>
			</section>
			<br />
			<br />
			<section className="macro-wallet-card">
				<h3 className="text-center gray-header">MACRO Score</h3>
				<div className="grid macro-graph-container">
					<div className="macro-graph graph-card">
						<Charts connectedWallet={connectedWallet} />
					</div>
					<div className="flex-center graph-info graph-card">
						<p>
							Your MACRO Score (Multi Asset Credit Risk Oracle) is your on-chain
							credit score.
						</p>
					</div>
				</div>
			</section>
			<br />
			<section className="macro-wallet-card macro-score-check">
				<h3 className="gray-header">Check your MACRO Score</h3>
				<Button onClick={() => setAvailableWalletModalOpen(true)}>
					Connect Wallet
				</Button>
			</section>

			<br />
			<p className="go-back">
				<span onClick={() => handlePrev()} className="go-back-button">
					Go Back
				</span>
			</p>
		</div>
	);
};

export default MacroScore;
