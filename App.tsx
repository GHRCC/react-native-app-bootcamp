import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { Paragraph } from "./Components/Paragraph";
import { Heading } from "./Components/Heading";

export default function App() {
  const [text, setText] = useState("string");
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Heading />
      </View>
      <Paragraph />
      <TextInput
        style={styles.input}
        placeholder="Learning React-Native"
        onChange={() => setText("string")}
      />
      <Button title="Press Me" onPress={() => Alert.alert("Button pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    display: "flex",
    borderWidth: 2,
    borderColor: "black",
    padding: 8,
    margin: 10,
    fontSize: 16,
    alignItems: "flex-end",
  },
  heading: {
    backgroundColor: "red",
    padding: 3,
    width: "100%",
    alignItems: "center",
  },
});
