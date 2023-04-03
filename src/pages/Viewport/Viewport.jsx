import React, { useState, useRef, useEffect } from "react"
import Header from "../../components/Header/Header"
import { Outlet } from "react-router-dom"
import "./Viewport.css"

const Viewport = () => {
	const [opacity, setOpacity] = useState(0)
	const ref = useRef(null)
	
	useEffect(() => {
		const viewport = ref.current
		const handleScroll = (e) => {
			setOpacity(viewport.scrollTop / 200)
		}
		
		viewport.addEventListener("scroll", handleScroll)
		return () => viewport.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="viewport" id="viewport" ref={ref}>
			<Header opacity={opacity} />
			<Outlet />
		</div>
	)
}

export default Viewport
