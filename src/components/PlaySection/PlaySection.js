import React, { useState } from "react"
import SongInfo from "../SongInfo/SongInfo.js"
import { FaStepBackward, FaStepForward, FaPlayCircle } from "react-icons/fa"
import { BiShuffle } from "react-icons/bi"
import { TiArrowLoop } from "react-icons/ti"
import ExpandButton from "../ExpandButton/ExpandButton.js"
import "./PlaySection.css"

export const PlaySection = () => {
	const [songProgress, setSongProgress] = useState(0)
	const [isHovering, setIsHovering] = useState(false)
	const [isHoveringOnImage, setIsHoveringOnImage] = useState(false)
	const [isExpanded, setIsExpanded] = useState(false)
	const handleSongProgress = (e) => {
		setSongProgress(e.target.value)
	}

	const imageInitialStyle = {
		top: "0px",
	}
	const imageExpandedStyle = {
		top: "-200px",
	}

	const handleExpanded = () => {
		setIsExpanded(false)
	}
	return (
		<footer className="PlaySection">
			<SongInfo isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
			<div
				id="expandedImage"
				style={isExpanded ? imageExpandedStyle : imageInitialStyle}
				onMouseEnter={() => setIsHoveringOnImage(true)}
				onMouseLeave={() => setIsHoveringOnImage(false)}
			>
				<ExpandButton
					isHovering={isHoveringOnImage}
					isExpanded={isExpanded}
					handleExpanded={handleExpanded}
				/>
			</div>
			<div id="playBar">
				<div id="buttons">
					<button>
						<BiShuffle />
					</button>
					<button>
						<FaStepBackward />
					</button>
					<button>
						<FaPlayCircle />
					</button>
					<button>
						<FaStepForward />
					</button>
					<button>
						<TiArrowLoop />
					</button>
				</div>
				<div
					id="songSliderContainer"
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
				>
					<div className="progressBar">
						<div
							className="progressIndicator"
							style={{ width: `${songProgress}%` }}
						></div>
					</div>
					<input
						type="range"
						min="0"
						max="100"
						value={songProgress}
						className="songSlider"
						onChange={handleSongProgress}
						style={{ display: `${isHovering ? "" : "none"}` }}
					/>
				</div>
			</div>
			<div id="options">
				<h4>Volume</h4>
			</div>
		</footer>
	)
}

export default PlaySection
