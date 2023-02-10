import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./../Modal.css";
import "./ConnectedWallets.css";

const emptyCart = "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/empty-cart_zxm3mn.gif";

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
		<div>
			{isSelected ? (
				<section>
					<div className="connected-wallets-container space-y-4 mt-2">
						{availableWallets
							.filter((wallet) => wallet.selected === true)
							.map((wallet, i) => (
								<div key={i} className="connected-wallet flex gap-4 px-4 py-2">
									<div className="flex-center">
										<img
											className="h-[35px] w-[35px] rounded-full"
											src={wallet.logo}
											alt=""
										/>
									</div>
									<div className="flex flex-col">
										<h4>{wallet.id}</h4>
										<p className="text-[12px] is-primary">
											{wallet.primary ? "Primary wallet" : "Secondary wallet"}
										</p>
									</div>
								</div>
							))}
					</div>
				</section>
			) : (
				<section className="empty-card flex-center">
					<img src={emptyCart} alt="" />
					<h4>Empty Connected Wallets</h4>
				</section>
			)}
			<div className="button-group">
				<Button
					onClick={() => setAvailableWalletModalOpen(true)}
					className="flex-center"
				>
					+ Add more wallets
				</Button>
				<Button onClick={() => handleNext()} className="preview-nfc">
					Preview NFC
				</Button>
			</div>
		</div>
	);
};

export default ConnectedWallets;
