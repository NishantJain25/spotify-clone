import React from "react"
import { NavLink } from "react-router-dom"
import { MdHomeFilled, MdAddBox } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { FaSpotify } from "react-icons/fa"
import { VscLibrary, VscHeart } from "react-icons/vsc"

import "./NavMenu.css"

const NavMenu = () => {
	return (
		<div className="NavMenu">
			<div className="logo">
				<FaSpotify id="spotifyLogo" />
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">
							{({ isActive }) => (
								<div className="NavLink">
									<div className={isActive ? "active Icon" : "Icon"}>
										<MdHomeFilled />
									</div>
									<span className={isActive ? "active" : undefined}>Home</span>
								</div>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to="search">
							{({ isActive }) => (
								<div className="NavLink">
									<div className={isActive ? "active Icon" : "Icon"}>
										<FiSearch />
									</div>
									<span className={isActive ? "active text" : "text"}>
										Search
									</span>
								</div>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to="/library">
							{({ isActive }) => (
								<div className="NavLink">
									<div className={isActive ? "active Icon" : "Icon"}>
										<VscLibrary />
									</div>
									<span className={isActive ? "active" : undefined}>
										Your Library
									</span>
								</div>
							)}
						</NavLink>
					</li>
					<li></li>
					<li>
						<NavLink to="/create-playlist">
							{({ isActive }) => (
								<div className="NavLink">
									<div className={isActive ? "active Icon" : "Icon"}>
										<MdAddBox />
									</div>
									<span className={isActive ? "active" : undefined}>
										Create Playlist
									</span>
								</div>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to="/liked-songs">
							{({ isActive }) => (
								<div className="NavLink">
									<div className={isActive ? "active Icon" : "Icon"}>
										<VscHeart />
									</div>
									<span className={isActive ? "active" : undefined}>
										Liked Songs
									</span>
								</div>
							)}
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="separator" />
			<div className="AlbumList">
				{/* NavLinks */}
				<NavLink to="/album">
					<span className={({ isActive }) => (isActive ? "active" : undefined)}>
						My Mixtape #1
					</span>
				</NavLink>
				<NavLink to="/album2">
					<span className={({ isActive }) => (isActive ? "active" : undefined)}>
						My Mixtape #2
					</span>
				</NavLink>
			</div>
		</div>
	)
}

export default NavMenu
