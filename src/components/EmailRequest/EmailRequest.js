import React, { Component } from 'react';
import './EmailRequest.css';
import Preview from '../Preview/Preview';

class EmailRequest extends Component {
  constructor(props){
    super(props)
    this.state={
      user: '',
      company: '',
      situation : 'traffic'
    }
  }

  componentDidMount() {
    this.formUpdate()
  }

  formUpdate = () => {
    this.setState({
      user : this.props.user.email,
      company : this.props.userMoreInfo.company
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = (e) => { 
    e.preventDefault()
    let request = {
      user: this.props.user.displayName,
      emailFrom: this.state.user,
      emailTo: this.state.company,
      situation: this.state.situation
    }
    this.props.handleRequestSubmit(request)
  }

  render() {
    return (
      <section className="email-request-section">
        <form onSubmit={this.handleSubmit} className="email-request-form">
          <div className="email-request-form-div">From : <input type="email" name="user" id="user_email" value={this.state.user} onChange={this.handleChange}/></div>
          <div className="email-request-form-div">To : <input type="email" name="company" id="compnay_email" value={this.state.company} onChange={this.handleChange}/></div>
          <div className="email-request-form-div">Situation : 
            <select className="email-request-situation" name="situation" id="user_situation" value={this.state.situation} onChange={this.handleChange}>
              <option value="traffic"> heavy traffic </option>
              <option value="accident"> car accident </option>
              <option value="hurricane"> hurricane </option>
              <option value="police"> police </option>
            </select>
          </div>
          <Preview user={this.props.user} situation={this.state.situation}/>
          <button id="email-request-form-submit" type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default EmailRequest;

