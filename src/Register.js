import React from 'react';
import logIn2 from './logIn2.png';
//import './StickyNotesApp.css';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
      };
    }
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
    render() {
      return (
        <div className = "formPage">
            <img src={logIn2} className="logIn-logo" alt="logIn" />
            <h2 className = "formHeading">Registration </h2>
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
                    className = "inputName"
                    type='text'
                    name='username'
                    placeholder='Username'
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
                <input
                    className = "confirmPassword"
                    type='password'
                    name='confirmpassword'
                    placeholder='Confirm Password'
                    onChange={this.myChangeHandler}
                    required
                />

            <br/>
            <br/>
                <div className="formButtons">
                    <button className = "cancelButton" type='cancel' > Cancel </button>
                    <button className = "signInButton" type='signIn' > Sign Up </button> 
                </div>
            </form>
        </div>
      );
    }
  }

  export default Register;