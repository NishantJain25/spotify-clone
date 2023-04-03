import React, { useState } from "react"
import { PlayButton } from "../PlayButton/PlayButton"
import "./RecentPlaylistTile.css"

const RecentPlaylistTile = () => {
	const [isHovering, setIsHovering] = useState(0)
	const handleMouseEnter = () => {
		setIsHovering(1)
	}
	const handleMouseLeave = () => {
		setIsHovering(0)
	}
	return (
		<div
			className="RecentPlaylistTile"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div id="playlistTileImage"></div>
			<h2 id="playlistName">Playlist Name</h2>
			<PlayButton displayButton={isHovering} />
		</div>
	)
}

export default RecentPlaylistTile
