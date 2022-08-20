import React from "react"
import "./App.css"
import HomePage from "./pages/HomePage.js"
import AlbumPage from "./pages/AlbumPage.js"
import NavMenu from "./components/NavMenu.js"
import PlaySection from "./components/PlaySection.js"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
	return (
		<Router>
			<div className="App">
				<NavMenu />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/album" element={<AlbumPage />} />
				</Routes>
				<PlaySection />
			</div>
		</Router>
	)
}

export default App
