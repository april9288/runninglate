import React from 'react';
import './User.css';

const User = ({data, chosenUser}) => {

	const { name, profile, email } = data

	return (
		<section className="user-card">
			<button onClick={()=>chosenUser(data)}>
			<img alt="user_profile" src={profile} />
			<h4>{name}</h4>
			<h4>{email}</h4>
			</button>
		</section>
		)
}

export default User;