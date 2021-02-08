/*--------------
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
--------------------*/


/*----------------------------------------
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
------------------------------------------*/


import React, { useState } from 'react';
import { View, StyleSheet,TextInput} from 'react-native';

export default function EditText(){

  const[text, setText] = useState('');

  return(

    <View style={styles.container}>
      
      <TextInput
      multiline
      numberOfLines = {40}
      keyboardType= 'default'
      style={styles.input} 
      placeholder = 'Take a note..' 
      onChangeText={text => setText(text)}
      defaultValue = {text}
      />
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },

  input:{
    borderWidth:1,
    borderColor:'#777',
    padding: 8,
    margin:10,
    width:150,
    height: 150

  }


});

