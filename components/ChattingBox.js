import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, ScrollView, FlatList, View, Text } from "react-native";

import SingleChatComponent from "./SingleChatComponent";


const ChattingBox = ({messages}) => {

  // const [messageView, setMessageView] = useState();
  //
  // useEffect(() => {
  //
  //   console.log("update")
  //
  //   const temp = [];
  //
  //   messages.forEach((m) => {
  //     temp.push(<SingleChatComponent key={m.time} writer={m.sender} message={m.text}/>)
  //   })
  //
  //   setMessageView(temp);
  //
  // },[messages])

  const scrollViewRef = useRef();

  useEffect(() => {
    console.log("update")
  }, [messages])

  return (
    <FlatList
      ref={scrollViewRef}
      data={messages}
      renderItem={SingleChatComponent}
      onContentSizeChange={()=>{
        scrollViewRef.current.scrollToEnd();
      }}
      keyExtractor={item => item.time}
      ListEmptyComponent={
        <View style={{justifyContent: "center", flex: 1}}>
          <Text style={{alignItems: "center", textAlign: "center", fontSize: 20}}>Nothing!</Text>
        </View>
      }
    />
  )
}

export default ChattingBox;

const styles = StyleSheet.create({

  box:{
    backgroundColor: "white",
    paddingBottom: 16,
  },
});
