import React from 'react';
import logIn from './logIn.png';
import './StickyNotesApp.css';
import './Register.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
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
                            <button className="logInEnterButton" type="submit" onClick={this.handleSubmit}><Link style={{ textDecoration: 'none', color: '#FFF' }} to="/stickynotesapp/Esteban">Enter</Link></button>
                        </nav>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LogIn);
