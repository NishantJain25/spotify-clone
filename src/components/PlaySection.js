import React, { useState } from "react"

const PlaySection = () => {
	return (
		<div className="PlaySection">
			<div id="songInfo">
				<h4>Song name</h4>
			</div>
			<div id="playBar">
				<div id="buttons">
					<p>Shuffle</p>
					<p>Prev</p>
					<p>Play</p>
					<p>Next</p>
					<p>Loop</p>
				</div>
				<div id="progressBar"></div>
			</div>
			<div id="options">
				<h4>Volume</h4>
			</div>
		</div>
	)
}

export default PlaySection
