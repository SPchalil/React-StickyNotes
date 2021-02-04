import React from "react" ;
import postit from './postit.png';
import StickyNote from "./StickyNote.jsx";

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          history: [{stickers: Array(10).fill(null)}]
        };
      } 

    handleClick() {
        alert("Hello! I am an alert box!!");
        //<StickyNote text = "Work" positionX= "100px" positionY = "150px" color = "black" bgColor = "blue"/> ;
    }

    render(){
        return(
            <div className="App">
                <header className="App-header" onClick={this.handleClick}>
                    <img src={postit} className="App-logo" alt="postit" />
                    <div className = "heading"> <h1>Sticky Notes</h1> </div>
                    <div className = "ref"> <h2 className = "name"> .. by Swapna <a className = "link" href="https://github.com/SPchalil/React-StickyNotes"> github </a>  </h2> </div>
        
                    
                    
                </header>

                
            </div>
        )
    
    }
    
};

export default Board;