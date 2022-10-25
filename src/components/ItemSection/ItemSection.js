import React from "react"
import ItemTile from "../ItemTile/ItemTile.js"

import "./ItemSection.css"

const ItemSection = (/* title, list of songs */) => {
	return (
		/* 
		title
		Container
			List of songs

		*/
		<section className="ItemSection">
			<div className = "ItemSectionTitle">
				<h2>Title</h2>
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
				<ItemTile />
			</div>
		</section>
	)
}

export default ItemSection
