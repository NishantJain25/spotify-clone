import React from "react"
import { Link } from "react-router-dom"
import { MdHomeFilled } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { VscLibrary } from "react-icons/vsc"

const NavMenu = () => {
	return (
		<div className="NavMenu">
			<nav>
				<ul>
					<li>
						<div>
							<MdHomeFilled />
						</div>
						<div>
							<Link to="#">Home</Link>
						</div>
					</li>
					<li>
						<div>
							<FiSearch />
						</div>
						<div>
							<Link to="#">Search</Link>
						</div>
					</li>
					<li>
						<div>
							<VscLibrary />
						</div>
						<div>
							<Link to="#">Your Library</Link>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavMenu
