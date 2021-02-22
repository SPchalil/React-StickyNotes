import React from 'react';
import postit from './postit.png';
import './index.css';
import './StickyNotesApp.css';
//import Home from "./Home";
import { Link } from 'react-router-dom';

class Thanks extends React.Component {

    render() {
        return (
            <div>
                <div className="App">
                    <header
                        className="App-board" onClick={(e) => e.stopPropagation()}>

                        <img src={postit} className="App-logo" alt="postit" />
                        <div className="heading"> <h1>Thanks for registering!</h1> </div>
                        

                        <div className="formButtons">
                            <nav>
                                <ul>

                                <button className = "logInButton" ><Link style={{ textDecoration: 'none',  color: '#FFF' }} to="/login">Log In</Link></button>


                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Thanks;
