import React, { Component } from 'react';
import { db } from '../../db/config';
import './Register.css';

class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      error: null
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    //this is user input
    let { value } = e.target.company
    let manupulatedUserEmail = this.props.user.email.split('.')[0]

    try {
      const firebaseResponse = await db.ref(manupulatedUserEmail).push({
        company: value
      })
      if (firebaseResponse) {
        this.props.handleRegisterUser()
      } else {
        this.setState({error: e})
      }
    } catch(e) {
      this.setState({error: e})
    }

  }

  render() {
    return (
      <section className="register-section">
          <p>Please register your company's email address</p>
          <form className="register-form" onSubmit={this.handleSubmit}> 
            <input name="company" className="register-input" type="email" autoFocus={true}/>
          </form>
      </section>
    );
  }
}

export default Register;

