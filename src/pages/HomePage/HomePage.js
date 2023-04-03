import React, { useState, useEffect } from "react"
import ItemSection from "../../components/ItemSection/ItemSection.js"
import RecentPlaylistSection from "../../components/RecentPlaylistSection/RecentPlaylistSection"

import "./HomePage.css"

const HomePage = () => {
	const today = new Date()
	const [currentHour, setCurrentHour] = useState(today.getHours())
	useEffect(() => {
		const interval = setInterval(() => {
			const today = new Date()
			setCurrentHour(() => today.getHours())
		}, 1000 * 60 * 60)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		console.log(currentHour)
	}, [currentHour])
	return (
		<div className="HomePage">
			<RecentPlaylistSection
				title={
					currentHour > 4 && currentHour < 12
						? "Good Morning"
						: currentHour > 12 && currentHour < 16
						? "Good Afternoon"
						: "Good Evening"
				}
			/>
			<ItemSection title="Made for you" />
			<ItemSection title="Summer Playlists" />
			<ItemSection title="Hot in India" />
			<ItemSection title="Made for Nishant" />
		</div>
	)
}

export default HomePage
