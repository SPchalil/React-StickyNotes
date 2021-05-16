import React from "react";
import EditText from "./EditText";
import ColorPicker from "./ColorPicker";

//****--------------------------StickyNote Class Component ------------------------****//

//Creating a StickyNote with properties (text/positions/color/bgcolor/showColorPicker/index/action)
class StickyNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showColorPicker : false,
            hideAction: props.hideAction,
            dragAction: props.dragAction,
            onChangeAction: props.onChangeAction
        };
        this._props = {
            key: props.index,
            index: props.index,
            title: props.title,
            positionX: props.positionX,
            positionY: props.positionY,
            color: props.color,
            bgColor: props.bgColor,
            text: props.text
        };
        this.colorChangeHandler = this.colorChangeHandler.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    /*------Color Picker - Change color of the stickynote-------------------*/
    
    colorChangeHandler(newColor) {
        this._props.bgColor = newColor;
        this.state.onChangeAction(this._props);
    }
    handlePickColor = () => {
        this.setState({
            showColorPicker: !this.state.showColorPicker
        });
    };
    renderColorPicker() {
        return (
            <ColorPicker
                color={this._props.bgColor}
                action={this.colorChangeHandler}
            />
        );
    }

    /*------------------------------------------------------------------------*/

    handleDelete = () => {
        this.state.hideAction(this._props.index);
    }
    /*------------------------------------------------------------------------*/

    onDrag = (event) => {
        event.preventDefault();
        this.state.dragAction(this._props.index);
    }

    /*------------------------------------------------------------------------*/
    
    handleChangeText = (text) => {
        this._props.text = text;
        this.state.onChangeAction(this._props);
    }
    
    /*-----------------Render StickyNote (with the styles and a heading) inside the Board / Delete the StickyNote--------------------*/
   
    render() {
        const stickyNoteStyle = {
            left: this._props.positionX,
            top: this._props.positionY,
            color: this._props.color,
            backgroundColor: this._props.bgColor
        };
        return (
            <div
                className="postItpad"
                style={stickyNoteStyle}
                onClick={(e) => e.stopPropagation()}
                draggable="true"
                onDrag={(event) => this.onDrag(event)}>
                <button
                    className="Add"
                    type="button"
                    onClick={() => this.handlePickColor()}
                    style={{ backgroundColor: this._props.bgColor }}>
                    +
                </button>
                {this.state.showColorPicker ? this.renderColorPicker() : null}
                <button
                    className="Delete"
                    type="button"
                    onClick={() => this.handleDelete()}
                    style={{ backgroundColor: this._props.bgColor }}>
                    x
                </button>
                <h6
                    className="postHeading">
                    Today's {this._props.title}!
                </h6>
                <EditText
                    text={this._props.text}
                    onChange={this.handleChangeText}
                />
            </div>
        )
    }
};
export default StickyNote;