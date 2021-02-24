import React from "react";
import {useParams} from "react-router-dom";
import Board from './Board.jsx';
import './StickyNotesApp.css';
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

function StickyNotesApp() {
  let { userId } = useParams();  

  
    const history = useHistory();
    const handleClick = () => history.push('/logout');
 
  return (
    <div>
      
      <div>
        <h3 className="esteban">Hello, {userId}</h3>
        
        

        <div className="regButtons">
                        <nav>

                            
                            <button className="logOutButton" type="button" onClick = {handleClick}><Link style={{ textDecoration: 'none'}} to="/logout">Logout</Link></button>

                        </nav>

        </div>
        <Board />
      </div>
    </div>
  );
}

export default StickyNotesApp;
/*
<div>   
                <button className = "logOutButton" type="button" onClick={handleClick}>
                    Logout
                </button>
        </div>
*/
