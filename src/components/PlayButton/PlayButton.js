import React, { useState } from "react"

export const PlayButton = ({ displayButton }) => {
	const [isHover, setIsHover] = useState(false)
	const handleMouseEnter = () => {
		setIsHover(true)
	}
	const handleMouseLeave = () => {
		setIsHover(false)
	}
	const buttonStyle = {
		borderRadius: "100px",
		borderStyle: "none",
		height: "50px",
		width: "50px",
		backgroundColor: isHover ? "rgba(89,255,43,1)" : "rgb(89, 255, 43,0.8)",
		transform: isHover ? "scale(1.1)" : "scale(1)",
		transition: "0.3s",
		opacity: `${displayButton}`,
	}
	return (
		<button
			id="playButton"
			style={buttonStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		></button>
	)
}
