import React, { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import {
	BiChevronLeft,
	BiChevronRight,
	BiCaretDown,
	BiCaretUp,
} from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import "./Header.css"

const Header = ({ opacity }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const location = useLocation()
	console.log(location)
	const headerStyle = {
		backgroundColor: `rgba(56, 60, 52, ${opacity})`,
	}

	document.addEventListener("click", () => setIsDropdownOpen(false))

	const handleDropdown = (e) => {
		e.stopPropagation()
		setIsDropdownOpen((state) => !state)
	}
	return (
		<nav className="header" style={headerStyle}>
			<div className="navigationArrows">
				<button>
					<BiChevronLeft />
				</button>
				<button>
					<BiChevronRight />
				</button>
			</div>
			{location.pathname === "/search" ? <SearchBar /> : <></>}
			<div className="accountDropdown" onClick={handleDropdown}>
				<div className="profileImage">
					<AiOutlineUser />
				</div>
				<div className="profileName">
					<p id="name">Nishant</p>
				</div>
				{isDropdownOpen ? (
					<BiCaretUp id="dropdownButton" />
				) : (
					<BiCaretDown id="dropdownButton" />
				)}
				{isDropdownOpen && (
					<div className="dropdownList">
						<NavLink to="#">
							<p>Account</p>
						</NavLink>
						<NavLink to="#">
							<p>Profile</p>
						</NavLink>
						<NavLink to="#">
							<p>Private Session</p>
						</NavLink>
						<NavLink to="#">
							<p>Settings</p>
						</NavLink>
						<NavLink to="#">
							<p>Log out</p>
						</NavLink>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Header
