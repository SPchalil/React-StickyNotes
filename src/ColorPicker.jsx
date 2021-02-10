import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          color: props.color,
          action: props.action  
        };
      } 

      handleChangeComplete = (newColor) => {
        this.setState({ color: newColor.hex });
        this.state.action(newColor.hex);
      };

      render() {
          return (
              <div className="floatingTooltip">
                  <SketchPicker 
                      color={ this.state.color }
                      onChangeComplete={ this.handleChangeComplete} 
                  /> 
              </div> 
          );
      }
  }
export default ColorPicker

