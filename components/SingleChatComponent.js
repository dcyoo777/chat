import React from 'react'
import { StyleSheet, View, Text } from "react-native";

const SingleChatComponent = (props) => {
  return (
    <View style={[props.writer==="Carl"?{flexDirection: "row-reverse"}:{flexDirection: "row"}, styles.messageArea]}>


      <View style={[styles.miniProfile]}>
        <View style={[styles.profileImage]}></View>
        <Text style={[]}>
          {props.writer}
        </Text>
      </View>


      <View style={[styles.chatView,props.writer==="Carl"?styles.mine:styles.others]}>
        <Text style={[]}>
          {props.message}
        </Text>
      </View>


    </View>
  );
};

export default SingleChatComponent;

const styles = StyleSheet.create({
  messageArea: {
    alignItems: "center",
    alignContent: "center",
    paddingTop: 4,
  },
  miniProfile:{
    margin: 8,
    width: 60,
    height: 60,
    alignItems: "center",
  },
  profileImage:{
    width: 45,
    height: 45,
    backgroundColor: "purple",
    borderRadius: 40,
  },
  chatView: {
    margin: 0,
    marginTop: 14,
    marginBottom: 14,
    padding: 12,
    borderRadius: 20,
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#dddddd",
  },
  others: {
    alignSelf: "flex-start",
    backgroundColor: "orange",
  },
  mine: {
    alignSelf: "flex-end",
    backgroundColor: "powderblue",
  },
});
