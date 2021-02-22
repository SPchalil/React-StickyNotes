import React from 'react';
import logIn2 from './logIn2.png';
//import './StickyNotesApp.css';
import './Register.css';
import { Route, Link, Switch } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        
      };
    }
    /*
    onSubmit={this.mySubmitHandler}>
    mySubmitHandler = (event) => {
      event.preventDefault();
      let age = this.state.age;
      if (!Number(age)) {
        alert("Your age must be a number");
      }
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    */
    render() {
      return (
        <div className = "formPage">
            <img src={logIn2} className="logIn-logo" alt="logIn" />
            <h2 className = "formHeading">Registration </h2>
            <form 
                className = "formStyle" >
                
        
                <input
                    className = "inputEmail"
                    type='text'
                    name='email'
                    placeholder='Email address'
                    onChange={this.handleChange}
                    required
                />
            <br/>
                <input
                    className = "inputName"
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={this.handleChange}
                    required
                />
            <br/>
                <input
                    className = "inputPassword"
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.handleChange}
                    required
                />
            <br/>
                <input
                    className = "confirmPassword"
                    type='password'
                    name='confirmpassword'
                    placeholder='Confirm Password'
                    onChange={this.handleChange}
                    required
                />

           
            <br/>
                <div className="regButtons">
                    <nav>

                            <button className = "cancelButton" ><Link style={{ textDecoration: 'none' }} to="/home">Cancel</Link></button>
                            <button className = "signUpButton" ><Link style={{ textDecoration: 'none', color: '#FFF'  }} to="/registered">Sign Up</Link></button>
                        
                    </nav>
                    
                </div>
            </form>
        </div>
      );
    }
  }
  /*
  <button className = "cancelButton" type='cancel' > Cancel </button>
                    <button className = "signInButton" type='signIn' > Sign Up </button> 
*/

  export default Register;