import React, { useState } from "react"
import { PlayButton } from "../PlayButton/PlayButton.js"

import "./ItemTile.css"

const ItemTile = () => {
	const [displayButton, setDisplayButton] = useState(0)
	const [position, setPosition] = useState("0px")

	let style = {
		position: "absolute",
		bottom: `${position}`,
		right: "10px",
		transition: "0.3s",
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
				<div id="playButtonDiv" style={style}>
					<PlayButton position={position} displayButton={displayButton} />
				</div>
			</div>
			<div id="itemText">
				<h3>Title</h3>
				<h4>Description</h4>
			</div>
		</div>
	)
}

export default ItemTile
