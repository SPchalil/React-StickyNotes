import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Board from './Board.jsx';
import './StickyNotesApp.css';

function StickyNotesApp() {
  let { userId } = useParams();
  const history = useHistory();
  const handleClick = () => history.push('/logout');
  return (
    <div>
      <div className="UserMessage">
        <div >Hello, {userId}</div>
        <div className="regButtons">
          <nav>
            <button
              className="logOutButton"
              type="button"
              onClick={handleClick}>
              <Link
                style={{ textDecoration: 'none' }}
                to="/logout">
                Logout
              </Link>
            </button>
          </nav>
        </div>
      </div>
      <Board />
    </div>
  );
}
export default StickyNotesApp;