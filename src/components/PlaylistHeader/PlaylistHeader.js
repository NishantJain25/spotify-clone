import "./PlaylistHeader.css"

import React from "react"

const PlaylistHeader = ({ albumInfo }) => {
	const { name, songList, description } = albumInfo
	const playlistImageStyle =
		songList.length >= 4
			? {
					display: "grid",
					gridTemplateColumns: "50% 50%",
					gridTemplateRows: "50% 50%",
			  }
			: { display: "block" }

	const imageList = songList.map((song) => song.imageUrl)
	console.log(imageList)
	return (
		<div className="PlaylistHeader">
			<div id="playlistImage" style={playlistImageStyle}>
				{songList.length === 1 ? (
					<img src={`${imageList[0]}`} alt="Playlist" />
				) : (
					imageList.map((image, key) => (
						<img src={image} alt="Playlist" key={key} />
					))
				)}
			</div>
			<div id="playlistDetails">
				<p>PUBLIC PLAYLIST</p>
				<h1 id="playlistTitle">{name}</h1>
				<span id="playlistDescription">{description}</span>
				<span>Nishant Jain . 46 songs, 2 hr 39 min</span>
			</div>
		</div>
	)
}

export default PlaylistHeader
