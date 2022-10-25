import React from "react"
import { PlayButton } from "../../components/PlayButton/PlayButton.js"
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader.js"
import AlbumContentTable from "../../components/AlbumContentTable/AlbumContentTable.js"
import { VscHeart } from "react-icons/vsc"
import { FiSearch } from "react-icons/fi"

import "./AlbumPage.css"

const AlbumPage = () => {
	return (
		<div className="AlbumPage">
			<PlaylistHeader />
			<div className="ActionButtons">
				<div id="alignLeft">
					<PlayButton displayButton={1} />
					<button id="actionButton">
						<VscHeart />
					</button>
					<button id="actionButton">Download</button>
					<button id="actionButton">. . .</button>
				</div>
				<div id="alignRight">
					<button id="actionButton">
						<FiSearch />
					</button>
					<button id="actionButton">Custom order</button>
				</div>
			</div>
			<AlbumContentTable />
		</div>
	)
}

export default AlbumPage
