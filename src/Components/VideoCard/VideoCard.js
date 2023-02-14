import React from "react";
import { Player } from "@livepeer/react";
import "../../App.css";

const playbackId = "721cq9iewi4c2ybt";

const VideoCard = ({ setIsVideoOpen }) => {
	return (
		<div className="video-my-blur">
			<div
				className="video-backgound-star-modal"
				style={{
					width: "55%",
					height: "50%",
					top: "17%",
				}}
			>
				<div>
					<label
						onClick={() => setIsVideoOpen(false)}
						style={{ float: "right" }}
					>
						<svg
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.4596 3.44507C18.8501 3.05454 18.8501 2.42138 18.4596 2.03085L17.1358 0.707107C16.7453 0.316583 16.1121 0.316583 15.7216 0.707107L9.58333 6.84538L3.44507 0.707107C3.05454 0.316583 2.42138 0.316583 2.03085 0.707107L0.707107 2.03085C0.316583 2.42138 0.316582 3.05454 0.707107 3.44507L6.84538 9.58333L0.707107 15.7216C0.316583 16.1121 0.316583 16.7453 0.707107 17.1358L2.03085 18.4596C2.42138 18.8501 3.05454 18.8501 3.44507 18.4596L9.58333 12.3213L15.7216 18.4596C16.1121 18.8501 16.7453 18.8501 17.1358 18.4596L18.4596 17.1358C18.8501 16.7453 18.8501 16.1121 18.4596 15.7216L12.3213 9.58333L18.4596 3.44507Z"
								fill="white"
							/>
						</svg>
					</label>
					<br />

					<Player
						title="Waterfalls"
						playbackId={playbackId}
						showPipButton
						autoPlay
						showTitle={false}
						aspectRatio="16to9"
						// poster={<PosterImage />}
						controls={{
							autohide: 3000,
						}}
						theme={{
							borderStyles: { containerBorderStyle: "hidden" },
							radii: { containerBorderRadius: "10px" },
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
