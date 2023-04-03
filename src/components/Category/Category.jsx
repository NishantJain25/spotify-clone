import React from "react"
import "./Category.css"

const Category = ({ title }) => {
	return (
		<a href="#">
			<div className="category">
				<p id="categoryTitle">{title}</p>
			</div>
		</a>
	)
}

export default Category
