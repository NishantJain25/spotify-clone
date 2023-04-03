import React, { useState } from "react"
import { FiSearch } from "react-icons/fi"
import "./SearchBar.css"

const SearchBar = () => {
	const [searchText, setSearchText] = useState("")

	const handleChange = (e) => {
		e.preventDefault()

		setSearchText(e.target.value)
	}
	return (
		<div className="SearchBar">
			<FiSearch />
			<input
				type="text"
				value={searchText}
				onChange={handleChange}
				placeholder="What do you want to listen to?"
			/>
		</div>
	)
}

export default SearchBar
