import React from 'react'
import late from '../photos/late.png'
import './Header.css';

const Header = () => {
	return (
		<section className="header-section">
			<img className="rotate-center" alt="late" src={late} />
			  <h1>Running Late!!!</h1>
			<img className="rotate-center" alt="late" src={late} />
		</section>
		)
}

export default Header;

