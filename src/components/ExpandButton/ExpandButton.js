import React from "react"
import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md"
import "./ExpandButton.css"
const ExpandButton = ({ isHovering, isExpanded, handleExpanded }) => {
	const actionInitialState = {
		height: "10px",
		width: "10px",
		opacity: "0",
	}
	const actionFinalState = {
		height: "20px",
		width: "20px",
		opacity: "0.7",
	}
	return (
		<div
			className="expandButton"
			style={isHovering ? actionFinalState : actionInitialState}
			onClick={handleExpanded}
		>
			{isExpanded ? (
				<MdOutlineKeyboardArrowDown />
			) : (
				<MdOutlineKeyboardArrowUp />
			)}
		</div>
	)
}

export default ExpandButton
