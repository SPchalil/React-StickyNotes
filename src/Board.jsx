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
        const Xmin = 0;
        const Ymin = 0;
        
        //let posX = getRandomXInt(Xmin, Xmax);  //Random positions 
        //let posY = getRandomYInt(Ymin, Ymax);
        //console.log (posX);
        //console.log (posY);
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
    
    /*-----------------Render Board- with StickyNotes along with Headings --------------------*/
    render(){
        
        return(
            <div className="App">
                <header className="App-header" onClick={(e) => this.addStickyNotes(e)} ref={ (divElement) => { this.divElement = divElement } }> 
                    {this.renderStickyNotes()}
                    
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
//Size: width: <b>{this.state.width}px</b>, height: <b>{this.state.height}px</b>

/*-----------------------------
// Functions - Generating random positions 
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

----------------------------------*/
// Function - Generating random color Sticky Notes 

function generateColor () {
    return '#' +  Math.random().toString(16).substr(-6);
  }


export default Board;