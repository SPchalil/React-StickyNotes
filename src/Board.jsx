import React from "react" ;
import postit from './postit.png';
import StickyNote from "./StickyNote.jsx";

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentStickyNotes: []
            
        };
      } 

    
    addStickyNotes(){
        const currentStickyNotes = this.state.currentStickyNotes;
        const Xmax = 1160;
        const Ymax = 560;
        const Xmin = 0;
        const Ymin = 0;
        
        let posX = getRandomXInt(Xmin, Xmax);
        let posY = getRandomYInt(Ymin, Ymax);
        console.log (posX);
        console.log (posY);

        
        let bcolor = generateColor ();
        
        
        this.setState({
            currentStickyNotes: currentStickyNotes.concat(
                [
                    <StickyNote 
                        text = "Work" 
                        positionX= {posX} 
                        positionY = {posY} 
                        color = "black" 
                        bgColor = {bcolor}
                    /> 
                ])
        });
    }
    renderStickyNotes(){
        return(
            this.state.currentStickyNotes
        );
    }
    
    render(){
        
        return(
            <div className="App">
                <header className="App-header" onClick={() => this.addStickyNotes()}> 
                    {this.renderStickyNotes()}
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

function generateColor () {
    return '#' +  Math.random().toString(16).substr(-6);
  }

export default Board;