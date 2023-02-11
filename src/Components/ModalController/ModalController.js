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
	const steps = ["wallets", "reputation score"];
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
			className={`${
				availableWalletModalOpen ? "blockpass-package-my-blur" : " "
			} blockpass-package-star-modal`}
			style={{ width: "45%", minHeight: "50vh" }}
		>
			<div className="blockpass-package-modal-header">
				<h3 className="blockpass-package-modal-title">Account</h3>
				<label
					onClick={() => setModalController(false)}
					className="blockpass-package-modal-close blockpass-package-flex-center"
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
