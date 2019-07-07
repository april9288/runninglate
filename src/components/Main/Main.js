import React, { Component } from 'react';
import { db } from '../../db/config';
import './Main.css';

import axios from 'axios';

import Header from '../Header/Header';
import Register from '../Register/Register';
import EmailRequest from '../EmailRequest/EmailRequest';
import Footer from '../Footer/Footer';
import Thankyou from '../Thankyou/Thankyou';

class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      userMoreInfo: null,
      error: null,
      serverResponse: null
    }
  }

  componentDidMount(){
    this.retrieveUserInfo()
  }

  //this function will retrieve user info from Firebase
  //if the user is new, this function will return undefined
  retrieveUserInfo = async () => {

    try{

      //user will hold a basic user info 
      //will look like ... { displayName: "someone" , email: "some@thing.com"}
      let { user } = this.props

      //will look like ... some@thing
      //since names of Firebase DB reference cannot contain special keys such as '.' or '$'
      //so the email address should be split by '.'
      let modifiedUserInfo = user.email.split('.')[0]

      //will return if there is a more info for the user
      //the more info will look like ... { id : '-abcdefg' , company : 'com@pany.com' } 
      await db.ref(modifiedUserInfo)
      .once('value', (snapshot)=> {

        const dataBucket = []

        //snapshot is an array that holds a bunch of arrays inside
        //all I need is only the first child array
        snapshot.forEach(childSnapShot => {
          dataBucket.push({
            id:childSnapShot.key,
            ...childSnapShot.val()
          })
        })

          //it could be either a meaningful data or undefined
          this.setState({ userMoreInfo : dataBucket[0] })          
        })

    }catch(e){
      //if there is any error, then...
      this.setState({ error : e })      
    }
  }

  handleRegisterUser = () => {
    this.retrieveUserInfo()
  }

  handleRequestSubmit = (request) => {
    //check if the registered company email is different from the request
    if (request.emailTo !== this.state.userMoreInfo.company) {
      this.handleUpdate(request)
    }
    this.sendRequestToServer(request)
  }

  handleUpdate = async (request) => {
    let { user } = this.props
    let modifiedUserInfo = user.email.split('.')[0]
    let { id } = this.state.userMoreInfo
    let { emailTo } = request

    try{
      await db.ref(`${modifiedUserInfo}/${id}`).update({
        company : emailTo
      })
    } catch(e) {
      console.log("update error")
    }
  }

  sendRequestToServer = async (request) => {
    try{
      let axios_response = await axios.post('https://runninglate.herokuapp.com/email', request)
      if (axios_response.data.status === 202) {
        this.setState({serverResponse: "success"})
      } else {
        this.setState({serverResponse: "bad request"})
      }
    }catch(e) {
      this.setState({serverResponse: "bad request"})
    }
  }

  handleDeleteUserInfo = async () => {
    let { user } = this.props
    let modifiedUserInfo = user.email.split('.')[0]
    await db.ref(modifiedUserInfo).remove()  
    this.handleSignout()
  }

  handleSignout = () => {
    //disconnect with Firebase DB
    let { user } = this.props
    let modifiedUserInfo = user.email.split('.')[0]
    db.ref(modifiedUserInfo).off()

    //disconnect with Firebase Auth
    this.props.signout()
  }

  render() {
    return (
      <section className="main-section">
        <section className="main-section-2">
          <Header displayName={this.props.user.displayName} handleSignout={this.handleSignout}/>
            <section>
            {
              (this.state.userMoreInfo === undefined)
              ? <Register user={this.props.user} handleRegisterUser={this.handleRegisterUser}/>
              : (this.state.userMoreInfo && !this.state.serverResponse) 
              ? <EmailRequest user={this.props.user} userMoreInfo={this.state.userMoreInfo} handleRequestSubmit={this.handleRequestSubmit}/>
              : (this.state.serverResponse)
              && <Thankyou response={this.state.serverResponse} handleDeleteUserInfo={this.handleDeleteUserInfo} handleSignout={this.handleSignout}/>
            }
            </section>
        </section>
      <Footer />
      </section>
    );
  }
}

export default Main;