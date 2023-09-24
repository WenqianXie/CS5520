import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const [text, setText] = useState("");
  const name = "My awesome App";

function changedDataHandler(data){
  console.log("callback function called", data);
  setText(data);
}
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      {/* render Header component here and pass a prop to it with the name variable as value*/}
      <Header appName = {name}/>
      <StatusBar style="auto" />
      <Input changedHandler={changedDataHandler}/>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    width: 200,
  }
});
