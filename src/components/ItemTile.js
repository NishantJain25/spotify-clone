import React, { useState } from "react"

const ItemTile = () => {
	const [displayButton, setDisplayButton] = useState(0)
	const [position, setPosition] = useState("0px")

	const buttonStyle = {
		position: "absolute",
		bottom: `${position}`,
		right: "10px",
		borderRadius: "100px",
		height: "50px",
		width: "50px",
		alignSelf: "flex-end",
		backgroundColor: "rgb(89, 255, 43)",
		transition: "0.3s",
		opacity: `${displayButton}`,
	}

	return (
		<div
			className="ItemTile"
			onMouseEnter={() => {
				setDisplayButton(1)
				setPosition("10px")
			}}
			onMouseLeave={() => {
				setDisplayButton(0)
				setPosition("0px")
			}}
		>
			<div id="itemImage">
				<button id="playButton" style={buttonStyle}></button>
			</div>
			<div id="itemText">
				<h3>Title</h3>
				<h4>Description</h4>
			</div>
		</div>
	)
}

export default ItemTile
