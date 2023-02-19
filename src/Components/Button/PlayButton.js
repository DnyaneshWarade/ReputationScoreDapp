import React, { useState } from 'react';
import './PlayButton.css';

const PlayButton = ({ onClick }) => {
	return (
		<div className="play-button-container">
			<a
				id="play-video"
				className="video-play-button"
				href="#"
				onClick={onClick}
			>
				<span className="play"></span>
			</a>
		</div>
	);
};

export default PlayButton;