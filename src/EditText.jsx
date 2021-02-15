/*-------------------------TextInput---------------------------*/
/*
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
    alignItems: 'center',
    justifyContent:'center',
  },

  input:{
    borderWidth:2,
    borderColor:'#C7CFB7',
    padding: 5,
    margin:5,
    width:150,
    height: 150

  }

});

*/
/*-----------------------------------------------------------------------------------*/
/*
import React from 'react';
import { View, StyleSheet,TextInput} from 'react-native';
//import React, { useState } from 'react';

export default function EditText(props){



  return(

    <View style={styles.container}>
      
      <TextInput
      multiline
      numberOfLines = {40}
      keyboardType= 'default'
      style={styles.input} 
      placeholder = 'Take a note..' 
      onChangeText={(props.onChange)}
      defaultValue = {props.text}
      />
    </View>

  );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },

  input:{
    borderWidth:2,
    borderColor:'#C7CFB7',
    padding: 5,
    margin:5,
    width:150,
    height: 150

  }

});
*/



import React from 'react';
import { View, StyleSheet,TextInput} from 'react-native';

class EditText extends React. Component{
//constructor(){
 // super();
 // this.state ={
 //   text: props.text,
//    onChange: props.onChange
 // }
  
//}
/*
handleChangeText= (text) => {
       
  this.setState({ text: text });
  
}
*/

render(){
  return(
    <View style={styles.container}>
      
      <TextInput
      multiline
      numberOfLines = {40}
      keyboardType= 'default'
      style={styles.input} 
      placeholder = 'Take a note..' 
      onChangeText={this.props.onChange}
      defaultValue = {this.props.text}
      
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },

  input:{
    borderWidth:2,
    borderColor:'#C7CFB7',
    padding: 5,
    margin:5,
    width:150,
    height: 150

  }

});

export default EditText;
