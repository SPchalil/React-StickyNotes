import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import postit from './postit.png';
import LogIn from "./LogIn";
//import Register from "./Register";

import './StickyNotesApp.css';
//import Home from "./Home";



  function App() {
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
                    
                    <div className = "enterButtonsContainer">
                        <nav>
                            <ul>
                                
                                <button className = "enterButton"><Link style={{ textDecoration: 'none' }} to="/login">Log In</Link></button>
                                
                    
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
            
            <Switch>
                <Route path="/login">
                    <LogIn />
                </Route>
                
                
                
                
            </Switch>
        </div>
    );
}
//<button className = "enterButton" ><Link style={{ textDecoration: 'none' }} to="/">Home</Link></button>
//<button className = "enterButton"><Link style={{ textDecoration: 'none' }} to="/register">Create New Account</Link></button>
/*<Route path="/">
                    <Home />
                </Route>

<Route path="/register">
                    <Register />
                </Route>
*/
export default App;