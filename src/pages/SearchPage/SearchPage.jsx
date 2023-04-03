import React from "react"
import Category from "../../components/Category/Category"
import "./SearchPage.css"

const SearchPage = () => {
	
	return (
		<div className="SearchPage">
			<p id="title">Browse all</p>

			<div className="categoriesContainer">
				<Category title="Summer Vibes" />
			</div>
		</div>
	)
}

export default SearchPage
