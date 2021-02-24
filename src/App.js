import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import postit from './postit.png';
import LogIn from "./LogIn";
//import Register from "./Register";
import './index.css';
import './StickyNotesApp.css';
import Home from "./Home";
import StickyNotesApp from './StickyNotesApp'; 
import Register from './Register';
import Thanks from './Thanks';
import Logout from './Logout';





  function App() {
    return (
        <div>
            
            
            
            <Switch>
                <Route path="/login">
                    <LogIn />
                </Route>
               
                <Route path="/stickynotesapp/:userId">
                    <StickyNotesApp />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/registered">
                    <Thanks />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
                <Route path="/">
                    <Home />
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