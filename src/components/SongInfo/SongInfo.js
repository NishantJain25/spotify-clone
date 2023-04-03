import React, { useState } from "react"
import "./SongInfo.css"
import ExpandButton from "../ExpandButton/ExpandButton.js"
const SongInfo = ({ isExpanded, setIsExpanded }) => {
	const [isHovering, setIsHovering] = useState(false)
	const imageInitialStyle = {
		transform: "translateX(0)",
	}
	const imageSlideStyle = {
		transform: "translateX(-80px)",
	}
	const handleExpanded = () => {
		setIsExpanded(true)
	}

	return (
		<div id="songInfo" style={isExpanded ? imageSlideStyle : imageInitialStyle}>
			<div
				id="songImage"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
			>
				<ExpandButton
					isHovering={isHovering}
					isExpanded={isExpanded}
					handleExpanded={handleExpanded}
				/>
			</div>
			<div id="songDetails">
				<p id="name">Song name</p>
				<p id="artist">Artist Name</p>
			</div>
		</div>
	)
}

export default SongInfo
