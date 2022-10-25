import "./AlbumContentTable.css"
import { FiClock } from "react-icons/fi"
import { VscHeart } from "react-icons/vsc"

import React from "react"

const AlbumContentTable = () => {
	return (
		<div className="ContentTableContainer">
			<div className="ContentTableHeader">
				<span>#</span>
				<span>TITLE</span>
				<span>ALBUM</span>
				<span>DATE ADDED</span>
				<span>
					<VscHeart />
				</span>
				<span>
					<FiClock />
				</span>
				<span>...</span>
			</div>
			<div className="ContentTableRow"></div>
		</div>
	)
}

export default AlbumContentTable
