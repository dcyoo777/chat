import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

const HomeScreen = (props) => {

  const enterChattingRoom = () => {
    props.setScreen('Room')
  }

  return (
    <View style={{justifyContent: "center", flex: 1}}>
      <View style={styles.box}>


        <TextInput style={[styles.addText]} onChangeText={props.setName}/>
        <TouchableOpacity onPress={()=>{props.setScreen('Room')}}><Text style={[styles.sendButton]}>입장</Text></TouchableOpacity>


      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F5E1C0",
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  addText:{
    height: 40,
    width: "50%",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 0.4,
    color: "black",
  },
  sendButton:{
    fontSize: 20,
    padding: 20,
    paddingLeft: 8,
    color: "black",
  },
});

export default HomeScreen;
