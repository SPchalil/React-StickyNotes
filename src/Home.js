import React from 'react';
import postit from './postit.png';
import './index.css';
import './StickyNotesApp.css';
import { Link } from 'react-router-dom';
/*
const notes = [
    {
       key: "1",
       index: "test",
       title: "test",
       positionX: "1",
       positionY: "1",
       color: "test",
       bgColor: "test",
       text: "test"
    },
    {
       key: "2",
       index: "test",
       title: "test",
       positionX: "test",
       positionY: "test",
       color: "test",
       bgColor: "test",
       text: "test"
    },
    {
       key: "3",
       index: "test",
       title: "test",
       positionX: "test",
       positionY: "test",
       color: "test",
       bgColor: "test",
       text: "test"
    },
 ]

 */
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header
                        className="App-board" onClick={(e) => e.stopPropagation()}>
                        <img src={postit} className="App-logo" alt="postit" />
                        <div className="heading"> <h1>Sticky Notes App</h1> </div>
                        <div className="ref">
                            <h2 className="name"> .. by Swapna
                                <a className="link" href="https://github.com/SPchalil/React-StickyNotes"> github </a>
                            </h2>
                        </div>
                        <div className="formButtons">
                            <nav>
                                <ul>
                                    <button className="logInButton" ><Link style={{ textDecoration: 'none', color: '#FFF' }} to="/login">Log In</Link></button>
                                    <div><h5 style={{ color: "black" }}>New User ?</h5></div>
                                    <button className="createNewButton" ><Link style={{ textDecoration: 'none', color: 'blue' }} to="/register">Create New Account</Link></button>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Home;
