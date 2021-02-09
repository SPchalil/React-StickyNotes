import React from "react" ;
import EditText from "./EditText";
import ColorPicker from "./ColorPicker";
//import {SketchPicker} from 'react-color';

//****--------------------------StickyNote Class Component ------------------------****//

//Creating a StickyNote with properties (text/positions/color/bgcolor)
class StickyNote extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            text: props.text, 
            positionX:props.positionX, 
            positionY: props.positionY,  
            color:props.color, 
            bgColor: props.bgColor,
            showColorPicker:false
        };
      } 
/*
    NoteColor = () => {
        this.setState({bgColor:generateColor()});
    }

/*
    handleChangeComplete = (color) => {
        this.setState({ bgColor: color.hex });
      };
*/

handlePickColor = (e) => {
    this.setState({
        showColorPicker: !this.state.showColorPicker
    });
    
    
  };
renderColorPicker(){
    return(
        <ColorPicker/>   
    );
}

      
/*-----------------Render StickyNote (with the styles and a heading) inside the Board--------------------*/
    render(){
        
        const stickyNoteStyle = {
            left: this.state.positionX,
            top: this.state.positionY,
            color: this.state.color,
            backgroundColor: this.state.bgColor 
       };
        return(
            <div className = "postItpad" style={stickyNoteStyle} onClick={(e) => e.stopPropagation()}> 
            <button className = "Add" type="button" onClick={(e) => this.handlePickColor(e)} style={{backgroundColor: this.state.bgColor}}> + </button>
                {this.state.showColorPicker ? this.renderColorPicker() : null }
            
            
                <h6 className = "postHeading">Today's {this.state.text}!</h6>
                <EditText/>
                
            </div>
        )
    
    }
    
};

function generateColor () {
    return '#' +  Math.random().toString(16).substr(-6);
}

export default StickyNote;