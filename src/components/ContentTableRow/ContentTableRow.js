import "./ContentTableRow.css"

import { VscHeart } from "react-icons/vsc"
import { BiPlay } from "react-icons/bi"
import React, { useState } from "react"

const ContentTableRow = () => {
	const [isHovering, setIsHovering] = useState(false)

	return (
		<div
			className="ContentTableRow"
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<span style={{ textAlign: "center" }}>
				{isHovering ? <BiPlay id="row-play-button" /> : "1"}
			</span>{" "}
			{/* or play button */}
			<div id="row-song-tile">
				<div id="song-image">
					<img
						src="https://images.unsplash.com/photo-1553780753-b128e6787eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2luZSUyMGRyYWdvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
						alt="song"
					/>
				</div>
				<div id="song-details">
					<p>Song Name</p>
					<span>Artist names</span>
				</div>
			</div>
			<span>Album name</span>
			<span>dd/mm/yyyy</span>
			<span className={isHovering ? "actionButton visible" : "actionButton"}>
				<VscHeart />
			</span>
			<span style={{ textAlign: "center" }}>3:59</span>
			<span
				className={isHovering ? "actionButton visible" : "actionButton"}
				style={{ textAlign: "center" }}
			>
				...
			</span>
		</div>
	)
}

export default ContentTableRow
