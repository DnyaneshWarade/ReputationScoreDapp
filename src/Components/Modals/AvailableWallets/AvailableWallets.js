import React from "react";
import { FaCheck } from "react-icons/fa";
import "./../Modal.css";
import "./AvailableWallets.css";
import "./../MacroScore/MacroScore.css";

const AvailableWallets = ({
	setAvailableWalletModalOpen,
	availableWallets,
	setAvailableWallets,
}) => {
	return (
		<div className="star-modal" style={{ width: "55%",top:'25%', left:'20%', border:'1px solid gray' }}>
			<div className="modal-header">
				<h3 className="modal-title">Available Wallets</h3>
				<button
					onClick={() => setAvailableWalletModalOpen(false)}
					className="modal-close"
				>
					X
				</button>
			</div>
			<section className="available-wallets">
				{availableWallets.map((wallet, i) => (
					<div
						key={i}
						onClick={() => {
							availableWallets[i].selected = true;
							setAvailableWallets([...availableWallets]);
						}}
						className="single-wallet"
					>
						<div className="flex items-center gap-4">
							<div className="h-[45px] w-[45px] p-1 rounded-md">
								<img
									className="h-full w-full rounded-full"
									src={wallet.logo}
									alt=""
								/>
							</div>
							<h4 className="wallet-name">{wallet.name}</h4>
						</div>
						{wallet.selected === true ? (
							<p className="selected-symbol">
								<FaCheck className="bg-green-500 rounded-full p-1 box-border text-[20px]" />
							</p>
						) : (
							""
						)}
					</div>
				))}
			</section>
		</div>
	);
};

export default AvailableWallets;
