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
		<div
			className="blockpass-package-star-modal"
			style={{
				width: "55%",
				top: "25%",
				left: "20%",
				border: "1px solid gray",
			}}
		>
			<div className="blockpass-package-modal-header">
				<h3 className="blockpass-package-modal-title">
					Available Wallets
				</h3>
				<label
					onClick={() => setAvailableWalletModalOpen(false)}
					className="blockpass-package-modal-close"
				>
					<svg
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							className="blockpass-package-close-button-fill"
							d="M18.4596 3.44507C18.8501 3.05454 18.8501 2.42138 18.4596 2.03085L17.1358 0.707107C16.7453 0.316583 16.1121 0.316583 15.7216 0.707107L9.58333 6.84538L3.44507 0.707107C3.05454 0.316583 2.42138 0.316583 2.03085 0.707107L0.707107 2.03085C0.316583 2.42138 0.316582 3.05454 0.707107 3.44507L6.84538 9.58333L0.707107 15.7216C0.316583 16.1121 0.316583 16.7453 0.707107 17.1358L2.03085 18.4596C2.42138 18.8501 3.05454 18.8501 3.44507 18.4596L9.58333 12.3213L15.7216 18.4596C16.1121 18.8501 16.7453 18.8501 17.1358 18.4596L18.4596 17.1358C18.8501 16.7453 18.8501 16.1121 18.4596 15.7216L12.3213 9.58333L18.4596 3.44507Z"
							fill="black"
						/>
					</svg>
				</label>
			</div>
			<section className="blockpass-package-available-wallets">
				{availableWallets.map((wallet, i) => (
					<div
						key={i}
						onClick={() => {
							availableWallets[i].selected = true;
							setAvailableWallets([...availableWallets]);
						}}
						className="blockpass-package-single-wallet"
					>
						<div className="flex items-center gap-4">
							<div className="h-[45px] w-[45px] p-1 rounded-md">
								<img
									className="h-full w-full rounded-full"
									src={wallet.logo}
									alt=""
								/>
							</div>
							<h4 className="blockpass-package-wallet-name">
								{wallet.name}
							</h4>
						</div>
						{wallet.selected === true ? (
							<p className="blockpass-package-selected-symbol">
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
