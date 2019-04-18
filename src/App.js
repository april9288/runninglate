import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Scroll from './components/Scroll';
import Register from './components/Register';
import UserList from './components/UserList';
import Situation from './components/Situation';
import Footer from './components/Footer';
import Status from './components/Status';
import {db} from './db/config';

let port
if (process.env.NODE_ENV === "development") {
  port = "http://localhost:3001"
} else {
  port = "https://runninglate.herokuapp.com"
}

class App extends Component {
  state={
    userData: null,
    serverStatus: null,
    chosenUser: null,
    situation: null,
    finish:null
  }

  componentDidMount() {
    this.getUserDataFromFB()
  }

  getUserDataFromFB = () => {
    db.ref('user')
    .on('value', (snapshot)=> {
      const results = []
      snapshot.forEach(childSnapShot => {
        results.push({
          id:childSnapShot.key,
          ...childSnapShot.val()
        })
      })
      this.setState({userData:results})
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let handle = e.target.elements.handle.value
    let email = e.target.elements.email.value
    let githubResponse = await axios.post(`${port}/register?handle=${handle}&email=${email}`)
    try{
        if (githubResponse.data.status === 200) {
          db.ref("user").push(githubResponse.data.user)
          this.setState({serverStatus : true})
        } else {
          this.setState({serverStatus : false})
        }
    } catch(e) {
        this.setState({serverStatus : false})
    }
  }

  chosenUser = (chosenUser) => {
    this.setState({chosenUser})
  }

  getSituation = async (situation) => {
    //get situation number and send email!!!
    this.setState({situation, finish:"pending"})
    try{
        let dbResponse = await axios.post(`https://runninglate.herokuapp.com/email`, {
          chosenUser: this.state.chosenUser,
          situation
        })
        if (dbResponse.data.status === 200){
          this.setState({finish:"success"})
          db.ref('user').off()
        } else {
          this.setState({finish:"fail"})
        }
    }catch(e){
      this.setState({finish:"fail"})
    }
  }

  display = () => {
    if (this.state.finish === null) {
      return (
          <Scroll>
            <Register handleSubmit={this.handleSubmit} status={this.state.serverStatus}/>
            {
              (this.state.chosenUser === null) 
              ? <UserList userData={this.state.userData} chosenUser={this.chosenUser}/>
              : <UserList userData={this.state.chosenUser} />
            }
            <Situation getSituation={this.getSituation}/>
          </Scroll>
        )
    } else {
      return <Status finish={this.state.finish}/>
    }

  }

  render() {
    return (
      <section className="App">
        <Header />
            {
              this.display()
            }
        <Footer />
      </section>
    );
  }
}

export default App;


