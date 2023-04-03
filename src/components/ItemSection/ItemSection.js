import React from "react"
import ItemTile from "../ItemTile/ItemTile.js"

import "./ItemSection.css"

const ItemSection = ({ title } /* title, list of songs */) => {
	return (
		/* 
		title
		Container
			List of songs

		*/
		<section className="ItemSection">
			<div className="SectionTitle">
				<h2>{title}</h2>
				<button>View all</button>
			</div>
			<div className="ItemTileContainer">
				<ItemTile />
				<ItemTile />
				<ItemTile />
				<ItemTile />
				<ItemTile />
				<ItemTile />
				<ItemTile />
			</div>
		</section>
	)
}

export default ItemSection
