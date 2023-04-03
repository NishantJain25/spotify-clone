import React from "react"
import "./App.css"
import HomePage from "./pages/HomePage/HomePage"
import AlbumPage from "./pages/AlbumPage/AlbumPage"
import SearchPage from "./pages/SearchPage/SearchPage"
import NavMenu from "./components/NavMenu/NavMenu"
import PlaySection from "./components/PlaySection/PlaySection"
import Viewport from "./pages/Viewport/Viewport"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
	return (
		<Router>
			<div className="App">
				<NavMenu />
				<Routes>
					<Route path="/" element={<Viewport />}>
						<Route index element={<HomePage />} />
						<Route exact path="/album/:id" element={<AlbumPage />} />
						<Route exact path="/search" element={<SearchPage />} />
					</Route>
				</Routes>
				<PlaySection />
			</div>
		</Router>
	)
}

export default App
