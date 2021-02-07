import React from "react" ;
import EditText from "./EditText";
//import { TextInput } from 'react-native';

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
            bgColor: props.bgColor
        };
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
            <div className = "postItpad" style={stickyNoteStyle}> 
                <h6 className = "postHeading">Today's {this.state.text}!</h6>
                <EditText/> 
            </div>
        )
    
    }
    
};


export default StickyNote;