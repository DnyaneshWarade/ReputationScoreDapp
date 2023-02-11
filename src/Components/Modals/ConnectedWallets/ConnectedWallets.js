import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./../Modal.css";
import "./ConnectedWallets.css";

const ConnectedWallets = ({
	setAvailableWalletModalOpen,
	availableWallets,
	handleNext,
}) => {
	const [isSelected, setIsSelected] = useState(false);
	useEffect(() => {
		for (let wallet of availableWallets) {
			if (wallet.selected === true) {
				setIsSelected(true);
				break;
			}
		}
	}, [availableWallets]);
	return (
		<div className="blockpass-package-connected-modal">
			{isSelected ? (
				<section>
					<div className="blockpass-package-connected-wallets-container space-y-4 mt-2">
						{availableWallets
							.filter((wallet) => wallet.selected === true)
							.map((wallet, i) => (
								<div
									key={i}
									className="blockpass-package-connected-wallet flex gap-4"
								>
									<div className="blockpass-package-flex-center">
										<img
											className="h-[35px] w-[35px] rounded-full"
											src={wallet.logo}
											alt=""
										/>
									</div>
									<div className="flex flex-col">
										<h4>{wallet.id}</h4>
										<p className="text-[12px] blockpass-package-is-primary">
											{wallet.primary
												? "Primary wallet"
												: "Secondary wallet"}
										</p>
									</div>
								</div>
							))}
					</div>
				</section>
			) : (
				<section className="blockpass-package-empty-card blockpass-package-flex-center">
					<h4>No wallet is connected</h4>
				</section>
			)}
			<br />
			<div className="blockpass-package-button-group">
				<Button onClick={() => setAvailableWalletModalOpen(true)}>
					+ Add more wallets
				</Button>
				<Button onClick={() => handleNext()} disabled={!isSelected}>
					Next
				</Button>
			</div>
		</div>
	);
};

export default ConnectedWallets;
