import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Input = ({changedHandler}) => {
  const [enterdText, setEnteredText] = useState("");
  //update this callback function to receive the changed text and store it in text state variable
  function changeTextHandler(typedText){
    console.log(typedText);
    setEnteredText(typedText);
  }
  function confirmHandler(){
    //call a function that is passed to me from App.js and pass the enteredText via it
    changedHandler(enterdText);
    setEnteredText("");
  }
  return (
    <View>
        <TextInput style = {styles.input} 
        onChangeText = {changeTextHandler}
        value = {enterdText}/>
        <Button title = "confirm" onPress = {confirmHandler}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})