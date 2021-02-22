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
    /*
    onSubmit={this.mySubmitHandler}>
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
    */
    render() {
      return (
        <div className = "formPage">
            <img src={logIn} className="logIn-logo" alt="logIn" />
            <br/>
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
                    className = "inputPassword"
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.handleChange}
                    required
                />

            
            <br/>
                
                    <div className = "formButtons">
                        <nav>
                            
                            <button className = "logInCancelButton" ><Link style={{ textDecoration: 'none'}} to="/home">Cancel</Link></button>    
                            <button className = "logInEnterButton" ><Link style={{ textDecoration: 'none', color: '#FFF' }} to="/stickynotesapp">Enter</Link></button>
                        
                                
                            
                        </nav>
                    </div>
            </form>
            
        </div>
      );
    }
  }

  export default LogIn;
  