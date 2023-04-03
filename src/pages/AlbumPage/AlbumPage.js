import React from "react"
import { PlayButton } from "../../components/PlayButton/PlayButton.js"
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader.js"
import { VscHeart } from "react-icons/vsc"
import { FiSearch, FiClock } from "react-icons/fi"
import ContentTableRow from "../../components/ContentTableRow/ContentTableRow"

import "./AlbumPage.css"

const AlbumPage = () => {
	const albumInfo = {
		name: "My mixtape #1",
		songList: [
			{
				title: "Till I collapse",
				imageUrl:
					"https://images.genius.com/84c8c9a51f164219a4b8230cbd321d6a.600x600x1.jpg",
			},
			{
				title: "Till I collapse",
				imageUrl:
					"https://images.genius.com/84c8c9a51f164219a4b8230cbd321d6a.600x600x1.jpg",
			},
			{
				title: "Till I collapse",
				imageUrl:
					"https://images.genius.com/84c8c9a51f164219a4b8230cbd321d6a.600x600x1.jpg",
			},
			{
				title: "Till I collapse",
				imageUrl:
					"https://images.genius.com/84c8c9a51f164219a4b8230cbd321d6a.600x600x1.jpg",
			},
		],
		description: "Specially made for you",
	}

	const { songList } = albumInfo
	return (
		<div className="AlbumPage">
			<PlaylistHeader albumInfo={albumInfo} />
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
			<div className="ContentTableContainer">
				<div className="ContentTableHeader">
					<span style={{ textAlign: "center" }}>#</span>
					<span>TITLE</span>
					<span>ALBUM</span>
					<span>DATE ADDED</span>
					<span></span>
					<span style={{ textAlign: "center" }}>
						<FiClock />
					</span>
					<span></span>
				</div>

				{songList.map((song, key) => (
					<ContentTableRow song={song} key={key} />
				))}
			</div>
		</div>
	)
}

export default AlbumPage
