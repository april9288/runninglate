import React from 'react'
import './Thankyou.css';

const Thankyou = ({response,handleDeleteUserInfo,handleSignout}) => {
  return (
    <section className = "thankyou-section">
      {
        (response === 'success')
        ? (
          <div>
            <p>Thank you </p>
            <button onClick={handleSignout}>Logout</button>
            <button onClick={handleDeleteUserInfo}>Delete user info and logout</button>
          </div>
          )
        : (
          <div>
            <p>Sorry... Bad request</p>
            <button onClick={handleSignout}>Logout</button>
            <button onClick={handleDeleteUserInfo}>Delete user info and logout</button>
          </div>
          )
      }
    </section>
    )
}

export default Thankyou;

