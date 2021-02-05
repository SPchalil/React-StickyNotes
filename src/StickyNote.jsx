import React from "react" ;

class StickyNote extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {text: props.text, positionX:props.positionX, positionY: props.positionY,  color:props.color, bgColor: props.bgColor};
      }  
/*----
    addNewpostit = () => {
        this.setState({positionX:"200px", positionY: "200px"});
    }
                <div >
                    <button className = "Add" type="button" onClick={this.addNewpostit}> + </button>
                </div>
*/

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

            </div>
        )
    
    }
    
};


export default StickyNote;