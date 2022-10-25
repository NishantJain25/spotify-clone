import "./PlaylistHeader.css"

import React from "react"

const PlaylistHeader = () => {
	return (
		<div className="PlaylistHeader">
			<div id="playlistImage"></div>
			<div id="playlistDetails">
				<p>PUBLIC PLAYLIST</p>
				<h1 id="playlistTitle">Playlist Name</h1>
				<span id="playlistDescription">Specially made for you</span>
				<span>Nishant Jain . 46 songs, 2 hr 39 min</span>
			</div>
		</div>
	)
}

export default PlaylistHeader
