import React from 'react';
//import React, {useState} from 'react';
import { TextInput } from 'react-native';

const EditText = () => {
  const [value, onChangeText] = React.useState('Edit');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default EditText;


/*
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,PropTypes} from 'react-native';


export default class EditText extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text:''}
  }
  render() {
    return (
      <TextInput style={styles.textinput}
        placeholder = {this.props.placeholder}
        onChangeText={ this.props.inputChange }
        onSubmitEditing= {this.props.AddItem}
      >
      </TextInput>
    )
  }
}
*/