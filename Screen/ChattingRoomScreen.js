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
import ChattingBox from "../components/ChattingBox";
import io from "socket.io-client";

const socket = io("http://192.168.0.13:3000");

const ChattingRoomScreen = (props) => {

  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatView, setChatView] = useState(<View/>)
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    socket.on("chat message", msg => {
      console.log("receive msg: " + msg + new Date())
      const temp = messages;
      let isMine = JSON.parse(msg);
      isMine['mine'] = isMine.sender === props.name?true:false;
      temp.push(isMine);
      setMessages(temp);
      console.log(messages);
      setUpdate(true);
    })
  }, [])

  useEffect(() => {
    console.log(123)
  }, [messages])

  useEffect(() => {
    if(update){
      console.log(messages)
      setChatView(<ChattingBox messages={messages}/>);
    }
    setUpdate(false)
  }, [update])

  const sendMessage = () => {
    socket.emit("chat message", JSON.stringify({
      sender: props.name,
      text: text,
      time: new Date(),
    }))
    setText('');
  }

  return (
    <View style={{flex: 1}}>

      <View style={[styles.titleBar]}>
        <TouchableOpacity onPress={()=>{props.setScreen('Home')}}><Text>나가기</Text></TouchableOpacity>
        <Text style={{textAlign: "center", fontSize: 20}}>
          Chatting Room Title
        </Text>
      </View>

      <View style={{flex: 1}}>
        {chatView}
      </View>

      <View style={[styles.sendBox]}>
        <TextInput style={[styles.addText]} onChangeText={setText} value={text}/>
        <TouchableOpacity onPress={sendMessage}><Text style={[styles.sendButton]}>송신</Text></TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  titleBar: {
    height: 60,
    backgroundColor: "#F5E1C0",
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  sendBox: {
    height: 60,
    backgroundColor: "#F5E1C0",
    flexDirection: "row",
    borderRadius: 10,
  },
  addText:{
    margin: 10,
    padding: 10,
    flex: 1,
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

export default ChattingRoomScreen;
