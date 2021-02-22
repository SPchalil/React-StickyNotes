import React from 'react';
import logIn from './logIn.png';
import './StickyNotesApp.css';
import './Register.css';
import { Route, Link, Switch } from 'react-router-dom';
import StickyNotesApp from './StickyNotesApp'; 
import Register from './Register'; 


class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
      };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      //let age = this.state.age;
      //if (!Number(age)) {
       // alert("Your age must be a number");
      //}
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    render() {
      return (
        <div className = "formPage">
            <img src={logIn} className="logIn-logo" alt="logIn" />
            <br/>
            <form 
                className = "formStyle"
                onSubmit={this.mySubmitHandler}>
        
                <input
                    className = "inputEmail"
                    type='text'
                    name='email'
                    placeholder='Email address'
                    onChange={this.myChangeHandler}
                    required
                />
            <br/>
                <input
                    className = "inputPassword"
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.myChangeHandler}
                    required
                />

            
            <br/>
                
                <div className = "formButtons">
                        <nav>
                            <ul>
                                <button className = "logInButton" ><Link style={{ textDecoration: 'none' }} to="/stickynotesapp">Log In</Link></button>
                                <div><h3 style = {{color: "white"}}>New User ?</h3></div>
                                <button className = "createNewButton" ><Link style={{ textDecoration: 'none'}} to="/register">Create New Account</Link></button>
                            </ul>
                        </nav>
                    </div>
            </form>
            <Switch>
                <Route path="/stickynotesapp">
                    <StickyNotesApp />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                
                
            </Switch>
        </div>
      );
    }
  }

  export default LogIn;
  /*
  <div className="formButtons">
                    
                    <button className = "logInButton" type='logIn' > Log In </button> 
                    <div><h3 style = {{color: "white"}}>New User?</h3></div>
                    <button className = "createNewButton" type='createnew' > Create New Account </button> 

                </div>
*/