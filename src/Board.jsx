import React from "react" ;
import postit from './postit.png';
import StickyNote from "./StickyNote.jsx";

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentStickyNotes: null
            
        };
      } 

    
    renderStickyNotes(){
        const currentStickyNotes = this.state.currentStickyNotes;
        const Xmax = 500;
        const Ymax = 50;
        const Xmin = 0;
        const Ymin = 0;
        
        let posX = getRandomXInt(Xmin, Xmax);
        let posY = getRandomYInt(Ymin, Ymax);
        console.log (posX);
        console.log (posY);
        
        
        this.setState({currentStickyNotes: <StickyNote text = "Work" positionX= {posX} positionY = {posY} color = "black" bgColor = "pink"/>})
        

    }

    
    render(){
        return(
            <div className="App">
                <header className="App-header" onClick={() => this.renderStickyNotes()}> 
                    {this.state.currentStickyNotes}
                    <img src={postit} className="App-logo" alt="postit" />
                    <div className = "heading"> <h1>Sticky Notes</h1> </div>
                    <div className = "ref"> <h2 className = "name"> .. by Swapna <a className = "link" href="https://github.com/SPchalil/React-StickyNotes"> github </a>  </h2> </div>
        
                    
                    
                </header>

                
            </div>
        )
    
    }
    
};

function getRandomXInt(Xmin, Xmax) {
    const min = Math.ceil(Xmin);
    const max = Math.floor(Xmax);
    const num =  Math.floor(Math.random() * (max - min + 1) + min);
    return num.toString()+"px"; 
  }
  
function getRandomYInt(Ymin, Ymax) {
    const min = Math.ceil(Ymin);
    const max = Math.floor(Ymax);
    const num =  Math.floor(Math.random() * (max - min + 1) + min);
    return num.toString()+"px"; 
  }



export default Board;