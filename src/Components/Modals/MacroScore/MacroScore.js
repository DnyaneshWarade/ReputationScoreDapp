import React, { useEffect, useState } from "react";
import "./MacroScore.css";
import Button from "../../Button/Button";
import "./../Modal.css";
import Charts from "../../Charts/Charts";
import Loader from "../../Loader/Loader";
const user =
	"https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021061/user-logo_w8yfph.jpg";

const MacroScore = ({
	availableWallets,
	handlePrev,
}) => {
	const [connectedWallet, setConnectedWallet] = useState({
		logo: user,
		name: "",
		id: "",
	});
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		for (let wallet of availableWallets) {
			if (wallet.selected === true) {
				setConnectedWallet({ ...wallet });
				break;
			}
		}
	}, [availableWallets]);

	useEffect(()=>{
		setTimeout(loaderSetter, 4000);
	},[])

	const loaderSetter = () => {
		setLoader(false);
	}

	return (
		<div>
			<div className={`${loader ? "blockpass-package-my-blur" : " "}`}>
				<section className="blockpass-package-macro-wallet-status">
					<div className="section">
						<img
							src={connectedWallet.logo}
							alt=""
							className="blockpass-package-default-logo"
						/>
						{connectedWallet.name === "" ? (
							<p>
								<span>Wallet not connected</span>
								<span className="blockpass-package-wallet-connect">
									Connect wallet
								</span>
							</p>
						) : (
							<p>
								<span>{connectedWallet.name}</span>
								<span className="blockpass-package-wallet-connect">
									{connectedWallet.id}
								</span>
							</p>
						)}
					</div>
				</section>
				<br />
				<section className="blockpass-package-macro-wallet-card-container">
					<h3 className="text-center gray-header">
						Reputation Score
					</h3>
					<div className="blockpass-package-macro-wallet-card">
						<div className="blockpass-package-graph-card blockpass-package-flex-center">
							<p>On Chain</p>
							<Charts
								connectedWallet={connectedWallet}
								loader={loader}
							/>
						</div>
						<div className="blockpass-package-graph-card blockpass-package-flex-center">
							<p>Off Chain</p>
							<Charts
								connectedWallet={connectedWallet}
								loader={loader}
							/>
						</div>
					</div>
				</section>
				<br />
				<br />

				<div className="blockpass-package-button-group">
					<button
						className="blockpass-package-go-back-button blockpass-package-flex-center"
						onClick={() => handlePrev()}
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill={"rgba(100, 116, 139, 1)"}
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.75 4.94121L8.25 12L15.75 19.0589L14.25 21.8824L3.75 12L14.25 2.11768L15.75 4.94121Z"
								fill={"rgba(100, 116, 139, 1)"}
							/>
						</svg>{" "}
						<span>Back</span>
					</button>
					<Button>Create NFC</Button>
				</div>
			</div>
			{loader && <Loader />}
		</div>
	);
};

export default MacroScore;
