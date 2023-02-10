import React, { useState } from "react";
import ConnectedWallets from "../Modals/ConnectedWallets/ConnectedWallets";
import Stepper from "../Stepper/Stepper";
import "../Modals/Modal.css";
import MacroScore from "../Modals/MacroScore/MacroScore";

const ModalController = ({
	availableWallets,
	setModalController,
	availableWalletModalOpen,
	setAvailableWalletModalOpen,
}) => {
	const [currentStep, setCurrentStep] = useState(1);
	const steps = ["wallets", "preview nfc"];
	const displayStep = (step) => {
		switch (step) {
			case 1:
				return (
					<ConnectedWallets
						availableWallets={availableWallets}
						setAvailableWalletModalOpen={
							setAvailableWalletModalOpen
						}
						handleNext={handleNext}
					/>
				);
			case 2:
				return (
					<MacroScore
						availableWallets={availableWallets}
						setAvailableWalletModalOpen={
							setAvailableWalletModalOpen
						}
                        handlePrev={handlePrev}
					/>
				);
			default:
		}
	};

	const handleNext = () => {
		setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
	};
    const handlePrev = () => {
		setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
		displayStep(currentStep);
	};

	return (
		<div
			className={`${availableWalletModalOpen ? "my-blur" : " "} star-modal`}
			style={{ width: "45%", minHeight: "50vh" }}
		>
			<div className="modal-header">
				<h3 className="modal-title">Account</h3>
				<button
					onClick={() => setModalController(false)}
					className="modal-close"
				>
					X
				</button>
			</div>
			<div>
				<Stepper steps={steps} currentStep={currentStep} />
				<div style={{ marginTop: "60px" }}>
					{displayStep(currentStep)}
				</div>
			</div>
		</div>
	);
};

export default ModalController;
