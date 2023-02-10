import React, { useState } from "react";
import AvailableWallets from "./Modals/AvailableWallets/AvailableWallets";
import "./Modals/Modal.css";
import "./BlockPass.css";
import Button from "./Button/Button";
import ModalController from "./ModalController/ModalController";

const BlockPass = () => {
	const [modalController, setModalController] = useState(false);
	const [availableWalletModalOpen, setAvailableWalletModalOpen] =
		useState(false);
	const [availableWallets, setAvailableWallets] = useState([
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo1_q4lugd.png",
			name: "MetaMask",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: true,
			score: 905,
			grade: "A+",
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021059/logo2_o2yqhd.png",
			name: "WalletConnect",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 700,
			grade: "A-",
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo6_xhcxav.png",
			name: "Coinbase",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 650,
			grade: "B",
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo4_wxtljw.jpg",
			name: "Magic Wallet",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 805,
			grade: "A",
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo5_kxostt.png",
			name: "Portis",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 907,
			grade: "A+",
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo7_a5agqf.png",
			name: "Torus",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 700,
			grade: "A-",
		},
	]);

	return (
		<div className="blockpass">
			<Button
				onClick={() => setModalController(true)}
				className={`${modalController ? "my-blur" : " "} blockpass-button`}
			>
				My Account
			</Button>
			{modalController && (
				<ModalController
					availableWallets={availableWallets}
					setModalController={setModalController}
					availableWalletModalOpen={availableWalletModalOpen}
					setAvailableWalletModalOpen={setAvailableWalletModalOpen}
				/>
			)}
			{availableWalletModalOpen && (
				<AvailableWallets
					setAvailableWalletModalOpen={setAvailableWalletModalOpen}
					availableWallets={availableWallets}
					setAvailableWallets={setAvailableWallets}
				/>
			)}
		</div>
	);
};

export default BlockPass;
