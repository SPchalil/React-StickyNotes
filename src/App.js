import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import LogIn from "./LogIn";
import StickyNotesApp from './StickyNotesApp';
import Register from './Register';
import Thanks from './Thanks';
import Logout from './Logout';

import './index.css';
import './StickyNotesApp.css';

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

export default App;