import React from "react";
import { Player } from "@livepeer/react";
import "../../App.css";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
const playbackId = "a44c3m96nbh5xmqr";

const InfoModal = ({ setIsModal, isInfoModalMsg, setIsInfoModalMsg }) => {
	return (
		<div className="video-my-blur">
			<div className="info-modal">
				<div className="info-modal-header">
					<label
						onClick={() => {
							setIsInfoModalMsg("");
							setIsModal(false);
						}}
						className="info-modal-close"
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.4596 3.44507C18.8501 3.05454 18.8501 2.42138 18.4596 2.03085L17.1358 0.707107C16.7453 0.316583 16.1121 0.316583 15.7216 0.707107L9.58333 6.84538L3.44507 0.707107C3.05454 0.316583 2.42138 0.316583 2.03085 0.707107L0.707107 2.03085C0.316583 2.42138 0.316582 3.05454 0.707107 3.44507L6.84538 9.58333L0.707107 15.7216C0.316583 16.1121 0.316583 16.7453 0.707107 17.1358L2.03085 18.4596C2.42138 18.8501 3.05454 18.8501 3.44507 18.4596L9.58333 12.3213L15.7216 18.4596C16.1121 18.8501 16.7453 18.8501 17.1358 18.4596L18.4596 17.1358C18.8501 16.7453 18.8501 16.1121 18.4596 15.7216L12.3213 9.58333L18.4596 3.44507Z"
								fill="black"
							/>
						</svg>
					</label>
				</div>

				<div className="info-modal-msg">
					{isInfoModalMsg === "" && (
						<div className="info-loader-box">
							<h3>NFC is under progress</h3>
							<div className="info-loader"></div>
						</div>
					)}
					{isInfoModalMsg !== "" && <h3>{isInfoModalMsg}</h3>}
				</div>
				<div className="info-modal-btn">
					<Button
						onClick={() => {
							setIsModal(false);
							setIsInfoModalMsg("");
						}}
					>
						Close
					</Button>
				</div>
			</div>
		</div>
	);
};

export default InfoModal;
