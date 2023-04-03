import "./RecentPlaylistSection.css"
import RecentPlaylistTile from "../RecentPlaylistTile/RecentPlaylistTile"
import React from "react"

const RecentPlaylistSection = ({ title }) => {
	return (
		<div className="RecentPlaylistSection">
			<div className="SectionTitle">
				<h2>{title}</h2>
			</div>
			<div className="RecentPlaylistTiles">
				<RecentPlaylistTile />
				<RecentPlaylistTile />
				<RecentPlaylistTile />
				<RecentPlaylistTile />
				<RecentPlaylistTile />
				<RecentPlaylistTile />
			</div>
		</div>
	)
}

export default RecentPlaylistSection
