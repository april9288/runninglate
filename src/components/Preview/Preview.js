import React from 'react'
import './Preview.css';

const Preview = ({ user , situation }) => {

	let modifiedSituation
	if (situation === "traffic") {
		modifiedSituation = "stuck in heavy traffic"
	} else if (situation === "accident") {
		modifiedSituation = "into a car accident"
	} else if (situation === "hurricane") {
		modifiedSituation = "stuck in hurricane"
	} else if (situation === "police") {
		modifiedSituation = "pulled over by the police"
	}

	return (
		<section className = "preview-section">
			<p>{`Hello. This is ${user.displayName}.`}</p>
			<p>{`I'm so sorry. I'm on my way in now, but I got ${modifiedSituation}. My apologies again.`}</p>
			<p>It shouldn’t be much longer. Thank you.</p>
			<p>{user.displayName}</p>
			<p>{user.email}</p>
		</section>
		)
}

export default Preview;

