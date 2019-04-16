import React from 'react';
import './Status.css';

const Status = ({finish}) => {

	return (
		<section className="Status-section">
			<h1>{finish}</h1>
				<div>
					<h5>Please follow my github and linkedin</h5>
				</div>
		</section>
		)
}

export default Status;