import React from "react";
import postit from './postit.png';
import StickyNote from "./StickyNote.jsx";
import './StickyNotesApp.css';

import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3000/stickynotes'
})

//****--------------------------Board  Class Component ------------------------****//

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStickyNotes: [],
            
            height: 0,
            width: 0,
            draggedStickyNoteIndex: null
        };
        this.resizeHandler = this.resizeHandler.bind(this);
        this.hideStickyNoteHandler = this.hideStickyNoteHandler.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.whenStickyNoteDragged = this.whenStickyNoteDragged.bind(this);
        this.onChangeStickyNote = this.onChangeStickyNote.bind(this);
        
 /*--------------------------------API call------------------------------------------*/
        const currentStickyNotes = [];
        api.get('/').then(res => {
            console.log(res.data)
            const apiStickyNotes = res.data;
            //console.log(apiStickyNote)
            //const currentStickyNotes = [];
            //const fakeStickyNotes =[];
            
            /*
            apiStickyNotes.forEach(myFunction);   ///arrow function
            function myFunction(key){
                const fakeStickyNote =
                <StickyNote
                        key={apiStickyNotes[key].stickynotekey}
                        title={apiStickyNotes[key].title}
                        positionX={apiStickyNotes[key].posx}
                        positionY={apiStickyNotes[key].posy}
                        color={apiStickyNotes[key].color}
                        bgColor={apiStickyNotes[key].bgcolor}
                        index={index}
                        text={apiStickyNotes[key].text} 
                        //hideAction={this.hideStickyNoteHandler} 
                    /> 
                currentStickyNotes.push(fakeStickyNote);
             };

             this.setState({
                        currentStickyNotes: currentStickyNotes
                    });
            */
           
            let items = apiStickyNotes.length;
            for (let i=0; i<items; i++){
             
                const fakeStickyNote =
                
                    <StickyNote
                        key={apiStickyNotes[i].stickynotekey}
                        title={apiStickyNotes[i].title}
                        positionX={apiStickyNotes[i].posx}
                        positionY={apiStickyNotes[i].posy}
                        color={apiStickyNotes[i].color}
                        bgColor={apiStickyNotes[i].bgcolor}
                        index={apiStickyNotes[i].stickynoteindex}
                        text={apiStickyNotes[i].text} 
                        hideAction={this.hideStickyNoteHandler}
                        dragAction={this.whenStickyNoteDragged}
                        onChangeAction={this.onChangeStickyNote}
                    /> 
                    
                    currentStickyNotes.push(fakeStickyNote);
                    }
                         
                    //currentStickyNotes.push(fakeStickyNote);
                    this.setState({
                        currentStickyNotes: currentStickyNotes
                    });

                    
              
        })

        
        
    }
/*
    hideStickyNoteHandler(index) {
        const apiNewStickyNotes = [...this.state.currentStickyNotes];
        apiNewStickyNotes.splice(index, 1, null);
        this.setState({
            currentStickyNotes: apiNewStickyNotes
        });
    }        
*/
    /*
    apiStickyNotes.forEach((stickyNote) => {
   // Do something similar to what you are doing in your for loop
});
    function addFunction(index) { 
    title={apiStickyNotes[index].title}    
    const fakeStickyNote =
                    <StickyNote
                        key={apiStickyNote[0].key}
                        title={apiStickyNote[0].title}
                        positionX={apiStickyNote[0].positionX}
                        positionY={apiStickyNote[0].positionY}
                        color={apiStickyNote[0].color}
                        bgColor={apiStickyNote[0].bgColor}
                        index="0"
                        text={apiStickyNote[0].text}  
                    />
                
                    currentStickyNotes.push(fakeStickyNote);
                    this.setState({
                        currentStickyNotes: currentStickyNotes
                    });
    
    
    
    
    */
    
    
    //fakeStickyNotes:[],
    //this.setState({ fakeStickyNotes: res.data })
    
    /*------------------------------------------------------------------*/
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
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }
    
    /*--------------------------Add a StickyNote --------------------------*/
    
    addStickyNotes(e) {
        const currentStickyNotes = this.state.currentStickyNotes;
        console.log(currentStickyNotes);
        const Xmax = this.state.width - 200;
        const Ymax = this.state.height - 200;
        console.log(e);
        let posX = e.nativeEvent.offsetX;  // X and Y coordinates of the mouse click position
        let posY = e.nativeEvent.offsetY;
        console.log(posX);
        console.log(posY);
        if (posX > Xmax) {                 // positioning w.r.t the size of the Board
            posX = e.nativeEvent.offsetX - 200;
        }
        if (posY > Ymax) {
            posY = e.nativeEvent.offsetY - 200;
        }
        let bcolor = generateColor(); //Random color generation
        let index = currentStickyNotes.length;

        // New state - Adding new stickyNote to the currentStickyNotes array 
        this.setState({
            currentStickyNotes: currentStickyNotes.concat(   // concat - join two or more arrays, & returns a new array containing the values of the joined arrays
                [
                    <StickyNote                //calling the StickyNote component passing the properties
                        key={`StickyNote_${index}`}
                        title="Work"
                        positionX={posX}
                        positionY={posY}
                        color="black"
                        bgColor={bcolor}
                        index={index}
                        text=""
                        hideAction={this.hideStickyNoteHandler}
                        dragAction={this.whenStickyNoteDragged}
                        onChangeAction={this.onChangeStickyNote}
                    />
                ]
                
                
                )
        });
    }


    
    /*-----------------Render Sticky Notes --------------------*/
    renderStickyNotes() {
        return (
            this.state.currentStickyNotes   //current stickynote along with the previous ones
        );
    }
    /*-----------------Hide Sticky Notes --------------------*/
    hideStickyNoteHandler(index) {
        const newStickyNotes = [...this.state.currentStickyNotes];
        newStickyNotes.splice(index, 1, null);  // index- integer value that specifies at what position to remove item, 
                                                //howmany -1, the new item to be added to the array - null
        this.setState({
            currentStickyNotes: newStickyNotes
        });

        const stickynoteindex = index;
        api.delete(`/${stickynoteindex}`)  
        .then(res => {  
        console.log(res);  
        console.log(res.data);  
    })  
        
    }
    

    /*-----------------Drag & Drop Sticky Notes --------------*/

    whenStickyNoteDragged(index) {
        this.setState({
            draggedStickyNoteIndex: index
        })
    }

    onDragOver = (event) => {
        event.preventDefault();
    }
    /*-----------------Change in color/text______________*/
    onChangeStickyNote(newProps) {
        const newStickyNote =
            <StickyNote
                key={`${newProps.key}_1`}
                title={newProps.title}
                positionX={newProps.positionX}
                positionY={newProps.positionY}
                color={newProps.color}
                bgColor={newProps.bgColor}
                index={newProps.index}
                text={newProps.text}
                hideAction={this.hideStickyNoteHandler}
                dragAction={this.whenStickyNoteDragged}
                onChangeAction={this.onChangeStickyNote}
            />
        const newStickyNotes = [...this.state.currentStickyNotes];
        newStickyNotes.splice(newProps.index, 1, newStickyNote);
        this.setState({
            currentStickyNotes: newStickyNotes
        });
    }
    /*------------------------Drop----------*/
    onDrop = (e) => {
        e.preventDefault();
        if (this.state.draggedStickyNoteIndex !== null) {
            const Xmax = this.state.width - 200;
            const Ymax = this.state.height - 200;
            let posX = e.nativeEvent.offsetX;  // X and Y coordinates of the mouse click position
            let posY = e.nativeEvent.offsetY;
            if (posX > Xmax) {                 // positioning w.r.t the size of the Board
                posX = e.nativeEvent.offsetX - 200;
            }
            if (posY > Ymax) {
                posY = e.nativeEvent.offsetY - 200;
            }
            const index = this.state.draggedStickyNoteIndex;
            const oldStickyNote = this.state.currentStickyNotes[index];
            const newStickyNote =
                <StickyNote
                    key={`${oldStickyNote.key}_1`}
                    title={oldStickyNote.props.title}
                    positionX={posX}
                    positionY={posY}
                    color={oldStickyNote.props.color}
                    bgColor={oldStickyNote.props.bgColor}
                    index={oldStickyNote.props.index}
                    text={oldStickyNote.props.text}
                    hideAction={this.hideStickyNoteHandler}
                    dragAction={this.whenStickyNoteDragged}
                    onChangeAction={this.onChangeStickyNote}
                />
            const newStickyNotes = [...this.state.currentStickyNotes];
            newStickyNotes.splice(index, 1, newStickyNote);
            this.setState({
                currentStickyNotes: newStickyNotes,
                draggedStickyNoteIndex: null
            });
        }
    }
    
    /*-----------------Render Board- with StickyNotes along with Headings --------------------*/
    //{this.state.fakeStickyNotes.map(fakeStickyNote => <h2 key={fakeStickyNote.id}>{fakeStickyNote.title}</h2>)}
    render() {
        
        return (
            <div className="App">
                <header
                    className="App-header"
                    onClick={(e) => this.addStickyNotes(e)}
                    ref={(divElement) => { this.divElement = divElement }}
                    onDrop={(event) => this.onDrop(event)}
                    onDragOver={(event) => this.onDragOver(event)}>
                    {this.renderStickyNotes()}
                    
                    <img src={postit} className="App-logo" alt="postit" />
                    <div className="heading"> <h1>Sticky Notes</h1> </div>
                    <div className="ref">
                        <h2 className="name"> .. by Swapna
                            <a className="link" href="https://github.com/SPchalil/React-StickyNotes"> github </a>
                        </h2>
                    </div>
                </header>
            </div>
        )
    }
};
// Function - Generating random color Sticky Notes 
function generateColor() {
    return '#' + Math.random().toString(16).substr(-6);
}
export default Board;