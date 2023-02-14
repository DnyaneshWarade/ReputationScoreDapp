import React, { useState } from 'react';
import './PlayButton.css';

const PlayButton = () => {
    return (
		<div className="play-button-container">
			<a
				id="play-video"
				class="video-play-button"
				href="#"
			>
				<span className="play"></span>
			</a>
		</div>
	);
};

export default PlayButton;