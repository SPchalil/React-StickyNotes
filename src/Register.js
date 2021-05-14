import React from 'react';
import logIn2 from './logIn2.png'
import './Register.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            errors: {
                username: 'Required Field',
                email: 'Required Field',
                password: 'Required Field',
                confirmpassword: 'Required Field',
            }
        };
    }
    validEmailRegex =
        RegExp(/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    validateForm = (errors) => {
        let errorConcat = '';
        Object.entries(errors).forEach((obj) => {
            if (obj[1].length > 0) {
                errorConcat = `${errorConcat}\n${obj[0]}: ${obj[1]}`;
            }
        });
        return errorConcat;
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username =
                    value.length < 5
                        ? 'must be 5 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    this.validEmailRegex.test(value)
                        ? ''
                        : 'Not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Must be 8 characters long!'
                        : '';
                break;
            case 'confirmpassword':
                errors.confirmpassword = value !== this.state.password ? 'Should match password' : '';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validateForm(this.state.errors);
        if (!errors) {
            this.props.history.push("/registered");
        } else {
            alert(errors);
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <div className="formPage">
                <img src={logIn2} className="logIn-logo" alt="logIn" />
                <h2 className="formHeading">Registration </h2>
                <form
                    className="formStyle" onSubmit={this.handleSubmit} noValidate>
                    <div className="email">
                        <input
                            className="inputEmail"
                            type='email'
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
                    <div className="username">
                        <input
                            className="inputName"
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                            noValidate
                        />
                        {errors.username.length > 0 &&
                            <span className='error'>{errors.username}</span>}
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
                    <div className="confirmpassword">
                        <input
                            className="confirmPassword"
                            type='password'
                            name='confirmpassword'
                            placeholder='Confirm Password'
                            value={this.state.confirmpassword}
                            onChange={this.handleChange}
                            required
                            noValidate
                        />
                        {errors.confirmpassword.length > 0 &&
                            <span className='error'>{errors.confirmpassword}</span>}
                    </div>
                    <br />
                    <div className="regButtons">
                        <nav>
                            <button className="cancelButton" ><Link style={{ textDecoration: 'none' }} to="/home">Cancel</Link></button>
                            <button className="signUpButton" type="submit" onClick={this.handleSubmit}>Sign Up</button>
                        </nav>
                    </div>
                </form>
            </div>
        );
    }
}
export default withRouter(Register);