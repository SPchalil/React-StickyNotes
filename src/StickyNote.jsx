import React from "react" ;
import EditText from "./EditText";
import ColorPicker from "./ColorPicker";
//****--------------------------StickyNote Class Component ------------------------****//
//Creating a StickyNote with properties (text/positions/color/bgcolor/showColorPicker/index/action)
class StickyNote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: props.title, 
            positionX:props.positionX, 
            positionY: props.positionY,  
            color:props.color, 
            bgColor: props.bgColor,
            showColorPicker:false,
            index:props.index,
            text:props.text,
            hideAction: props.hideAction,
            dragAction: props.dragAction,
            
        };
        this.handler = this.handler.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this); 
        
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
        this.state.hideAction(this.state.index);
    };

    onDrag=(event) =>{
        event.preventDefault();
        this.state.dragAction(this.state.index);
      }

    handleChangeText= (text) => {
       
        this.setState({
            text: text
        });
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
            <div 
                className = "postItpad" 
                style={stickyNoteStyle} 
                onClick={(e) => e.stopPropagation()} 
                draggable="true"  
                onDrag={(event) => this.onDrag(event)}> 
                <button 
                    className = "Add" 
                    type="button" 
                    onClick={() => this.handlePickColor()} 
                    style={{backgroundColor: this.state.bgColor}}>
                    + 
                </button>
                {this.state.showColorPicker ? this.renderColorPicker() : null }
                <button 
                    className = "Delete" 
                    type="button" 
                    onClick={() => this.handleDelete()} 
                    style={{backgroundColor: this.state.bgColor}}> 
                    x
                </button>      
                <h6 
                    className = "postHeading">
                    Today's {this.state.title}!
                </h6>
                <EditText
                    text={this.state.text}
                    onChange={this.handleChangeText}   
                
                />
            </div>
        )
    }
};
export default StickyNote;