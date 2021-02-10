import React from "react" ;
import postit from './postit.png';
import StickyNote from "./StickyNote.jsx";

//****--------------------------Board  Class Component ------------------------****//
class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentStickyNotes: [],
            height: 0,
            width:0,
           
            
        };
        this.resizeHandler = this.resizeHandler.bind(this); 
        this.hideStickyNoteHandler = this.hideStickyNoteHandler.bind(this);
      } 

    //Get the Height, Width of the element after React renders that element/window resize event
    resizeHandler() {
        const width = this.divElement.clientWidth;
        const height = this.divElement.clientHeight;
        this.setState({ width, height });
    }
    componentDidMount() {
        this.resizeHandler();
        window.addEventListener('resize', this.resizeHandler);
      }
    
    componentWillUnmount(){
        window.removeEventListener('resize', this.resizeHandler);
      }

     

    /*--------------------------Add a StickyNote --------------------------*/
    addStickyNotes(e){
        const currentStickyNotes = this.state.currentStickyNotes;
        const Xmax = this.state.width-200;
        const Ymax = this.state.height-200;
        
        console.log(e);
        let posX = e.nativeEvent.offsetX;  // X and Y coordinates of the mouse click position
        let posY = e.nativeEvent.offsetY;
        console.log (posX);
        console.log (posY);
        if (posX > Xmax) {                 // positioning w.r.t the size of the Board
            posX = e.nativeEvent.offsetX-200;
        }
        if (posY > Ymax) {
            posY = e.nativeEvent.offsetY-200;
        }
        
        let bcolor = generateColor (); //Random color generation
        let index = currentStickyNotes.length;

        // New state - Adding new stickyNote to the currentStickyNotes array 
        this.setState({
           
            currentStickyNotes: currentStickyNotes.concat(
                [
                    <StickyNote                //calling the StickyNote component passing the properties
                        text = "Work" 
                        positionX= {posX} 
                        positionY = {posY} 
                        color = "black" 
                        bgColor = {bcolor}
                        
                        index = {index}
                        action={this. hideStickyNoteHandler} 
                    /> 
                ])
        });
    }
    
    /*-----------------Render Sticky Notes --------------------*/

    renderStickyNotes(){
        return(
            this.state.currentStickyNotes   //current stickynote along with the previous ones
        );
    }
    
    /*-----------------Hide Sticky Notes --------------------*/

    hideStickyNoteHandler(index){
        const newStickyNotes = [...this.state.currentStickyNotes];
        newStickyNotes.splice(index,1);
        this.setState({
            currentStickyNotes : newStickyNotes
        });        
    }


    /*-----------------Render Board- with StickyNotes along with Headings --------------------*/
    render(){
        
        return(
            <div className="App">
                <header className="App-header" onClick={(e) => this.addStickyNotes(e)} ref={ (divElement) => { this.divElement = divElement } }> 
                    
                  {this.renderStickyNotes() }
                    
                    <img src={postit} className="App-logo" alt="postit" />
                    <div className = "heading"> <h1>Sticky Notes</h1> </div>
                    <div className = "ref"> 
                        <h2 className = "name"> .. by Swapna 
                            <a className = "link" href="https://github.com/SPchalil/React-StickyNotes"> github </a>  
                        </h2> 
                    </div>
   
                </header>

                
            </div>
        )
    
    }
    
};

// Function - Generating random color Sticky Notes 

function generateColor () {
    return '#' +  Math.random().toString(16).substr(-6);
  }


export default Board;