import React from "react" ;
import EditText from "./EditText";
import ColorPicker from "./ColorPicker";

//****--------------------------StickyNote Class Component ------------------------****//

//Creating a StickyNote with properties (text/positions/color/bgcolor/showColorPicker/index/action)

class StickyNote extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            text: props.text, 
            positionX:props.positionX, 
            positionY: props.positionY,  
            color:props.color, 
            bgColor: props.bgColor,
            showColorPicker:false,
            index:props.index,
            action: props.action,
            completedTasks: [],
            draggedStickyNote: {}
        };
        this.handler = this.handler.bind(this);
      } 

    handler(newColor) {
        this.setState({
            bgColor:newColor
        });
    }

    handlePickColor = () => {
        this.setState({
            showColorPicker: !this.state.showColorPicker
        }); 
    };

    renderColorPicker(){
        return(
            <ColorPicker
            color = {this.state.bgColor}
            action={this.handler} 
            />   
        );
    }

    handleDelete = () => {
        this.state.action(this.state.index);
    };
/*
    handlePositionChange(e){
        alert("Hello");
        console.log(e);
    }
*/

onDragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
      



onDrag=(event) =>{
        event.preventDefault();
        this.setstate = {
            positionX:event.nativeEvent.offsetX, 
            positionY:event.nativeEvent.offsetY 
        };
      }

/*-----------------Render StickyNote (with the styles and a heading) inside the Board / Delete the StickyNote--------------------*/
    render(){
        
        const stickyNoteStyle = {
            left: this.state.positionX,
            top: this.state.positionY,
            color: this.state.color,
            backgroundColor: this.state.bgColor 
       };
        return(
            <div className = "postItpad" style={stickyNoteStyle} onClick={(e) => e.stopPropagation()} draggable="true"  onDragStart= {(event) =>{this.onDragStart(event)}} onDrag={(event) => this.onDrag(event)}> 
                <button className = "Add" type="button" onClick={() => this.handlePickColor()} style={{backgroundColor: this.state.bgColor}}> + </button>
                    {this.state.showColorPicker ? this.renderColorPicker() : null }
                <button className = "Delete" type="button" onClick={() => this.handleDelete()} style={{backgroundColor: this.state.bgColor}}> x </button>      
                <div ><h6 className = "postHeading">Today's {this.state.text}!</h6></div>
                <EditText/>
            </div>
        )
    }
};

export default StickyNote;