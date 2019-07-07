import React, { Component } from 'react';
import './App.css';
import { auth , db } from './db/config';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Main from './components/Main/Main';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      isSignedIn: false,
      firebaseUser: null,
      visitor: null
    }

    //this variable is bound to the App class
    this.uiConfig={
      signInFlow: "popup",
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.FacebookAuthProvider.PROVIDER_ID,
        auth.GithubAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    }
  }

  //will involk handleAuth() function right after React renders render()
  componentDidMount(){
    this.handleAuth()
  }

  //This function handles user login
  handleAuth = async () => {
    try {
      await auth().onAuthStateChanged( user => {
        if (user) {
          this.setState({ isSignedIn: !!user, firebaseUser: user })
        } else {
          console.log("login fail")
        }
      })
    } catch(e){
      console.log("login fail : ", e)
    }
  }

  //This function handles visitor login
  //will bypass Firebase authentication
  handleVisitor = () => {
    this.setState({isSignedIn: true, firebaseUser: {
      displayName: "Visitor",
      email: "visitor@company.com"
    },
    visitor : true
    })
  }

  signout = () => {
    if (this.state.visitor) {
      this.setState({
        isSignedIn: false,
        firebaseUser: null
      })
    } else {
      auth().signOut()
    }
  }

  componentWillMount() {
    db.ref("visitor@company").remove()
  }

  render() {
    return (
      <section className="App">
        {
          (!this.state.isSignedIn)
          ? 
          (
          <div className="loginPage">
            <p className="loginTitle">Don't be late!!!</p>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={auth()}
            />
            <button className="loginVisitor" onClick={this.handleVisitor}>I'm a visitor</button>
          </div>
          )
          : <Main user={this.state.firebaseUser} signout={this.signout}/>
        }
      </section>
    );
  }
}

export default App;


