import React from 'react';
import logIn from './logIn.png';
import './StickyNotesApp.css';
import './Register.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

//Backend
const api = axios.create({
    baseURL: 'http://localhost:3001'
})


class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: 'Required Field',
                password: 'Required Field',
            }
        };
    }
    validEmailRegex =
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => {
            if (val.length > 0) {
                valid = false;
            }
        });
        return valid;
    }

    handleChange = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;
        switch (name) {
            case 'email':
                errors.email =
                    this.validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? '* Password must be 8 characters long!'
                        : '';
                break;

            default:
                break;
        }
        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            console.info('Valid Form')

// backend-login
            let email = this.state.email;
            let password = this.state.password;

            api.post(`/login`,
            {
            email:`${email}`, 
            password:`${password}`
            
            })  
            .then(res => {  
            console.log(res);  
            console.log(res.data);
            if (res.data == 0){
                alert("Invalid login; Please login again");
                //this.props.history.push("/login");
                window.location.reload();
            }
            else{
                //this.props.history.push("/stickynotesapp/Esteban");
                let username = res.data[0].username;
                console.log("id: ",username);
                this.props.history.push(`/stickynotesapp/${username}`);
            } 
            }); 


        } else {
            alert('Invalid Form')
            this.props.history.push("/login");
            this.setState({
                password: "",
            });
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <div className="formPage">
                <img src={logIn} className="logIn-logo" alt="logIn" />
                <br />
                <form
                    className="formStyle" onSubmit={this.handleSubmit} noValidate>
                    <div className="email">
                        <input
                            className="inputEmail"
                            type='text'
                            name='email'
                            placeholder='Email address'
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                            noValidate
                        />
                        {errors.email.length > 0 &&
                            <span className='error'>{errors.email}</span>}
                    </div>
                    <br />
                    <div className="password">
                        <input
                            className="inputPassword"
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                            noValidate
                        />
                        {errors.password.length > 0 &&
                            <span className='error'>{errors.password}</span>}
                    </div>
                    <br />
                    <div className="formButtons">
                        <nav>
                            <button className="logInCancelButton" ><Link style={{ textDecoration: 'none' }} to="/home">Cancel</Link></button>
                            <button className="logInEnterButton" type="submit" onClick={this.handleSubmit}>Enter</button>
                        </nav>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LogIn);

//<button className="logInEnterButton" type="submit" onClick={this.handleSubmit}><Link style={{ textDecoration: 'none', color: '#FFF' }} to="/stickynotesapp/Esteban">Enter</Link></button>
