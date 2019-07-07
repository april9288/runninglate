import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<section className="footer-section">
			<div>
				<a href="https://github.com/april9288/runninglate" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i></a>
				<a href="https://www.linkedin.com/in/james-kim-teamplayer" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
			</div>
			<div>
				<p style={{color:"white"}}>&copy; 2019 James Jongho Kim All Rights Reserved</p>
			</div>
		</section>
		)
}

export default Footer;
