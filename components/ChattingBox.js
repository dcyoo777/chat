import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, View, Text } from "react-native";

import SingleChatComponent from "./SingleChatComponent";


const ChattingBox = () => {

  const [messages, setMessages] = useState([
    {
      id: 0,
      writer: "Jack",
      message: "Hello",
      time: new Date(),
    },
  ]);

  const [messageView, setMessageView] = useState();

  useEffect(() => {

    const temp = [];

    messages.forEach((m) => {
      temp.push(<SingleChatComponent writer={m.writer} message={m.message}/>)
    })

    setMessageView(temp);

  },[])

  return (
    <FlatList
      data={messages}
      renderItem={SingleChatComponent}
      keyExtractor={item => item.id}
      ListEmptyComponent={
        <View style={{justifyContent: "center", flex: 1}}>
          <Text style={{alignItems: "center", textAlign: "center", fontSize: 20}}>Nothing!</Text>
        </View>
      }
    />
    // <View style={[styles.box]}>
    //   {messageView}
    // </View>
  )
}

export default ChattingBox;

const styles = StyleSheet.create({
  box:{
    backgroundColor: "white",
    paddingBottom: 16,
  },
});
