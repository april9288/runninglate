import React from 'react'
import './Header.css';

const Header = ({displayName, handleSignout}) => {
	return (
		<section className = "header-section">
			<p className = "header-welcome">Welcome {displayName}</p>
			<button onClick={handleSignout}>Logout</button>
		</section>
		)
}

export default Header;

