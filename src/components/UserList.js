import React from 'react';
import User from './User';
import './UserList.css';

const UserList = ({userData, chosenUser}) => {

	return (
		<section>
		<h1 style={{color:"white"}}>Choose your profile</h1>
			<div className="User-List">
			     {
			     	(userData !== null) 
			     	&&
			     		(
			     			(userData.length > 0)
			     			? userData.map((item, i) => <User key={i} data={item} chosenUser={chosenUser}/>)
			     			:<User data={userData}/>
			     		)
			 	 }
		 	 </div>
		</section>
		)
}

export default UserList;
