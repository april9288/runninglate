import React from 'react'
import './Register.css';

const Register = ({handleSubmit, status}) => {
	return (
		<section className="register-section">
			<form onSubmit={handleSubmit}>
			  <label>
			    Github Handle : 
			    <input type="text" name="handle" autoFocus required/>
			  </label>
			  <label>
			    Email : 
			    <input type="email" name="email" required/>
			  </label>
			  <button>Submit</button>
			</form>
			{
				(status === false) 
				&& <p>Bad Input!</p>
			}
		</section>
		)
}

export default Register;

