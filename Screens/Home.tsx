import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { Paragraph } from "../Components/Paragraph";
import { Heading } from "../Components/Heading";
import { Layout } from "../Layout/Layout";
import styled from "styled-components/native";
import { ButtonComponent } from "../Components/Button";
import { TextField } from "../Components/TextInput";

export function Home() {
  const [text, setText] = useState("string");
  const LayoutOp = styled.View`
    justify-content: center;
    align-items: center;
  `;
  const FontDesign = styled.Text`
    font-family: Helvetica;
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
  `;
  return (
    <View>
      <Heading />
      <Paragraph />
      <TextField
        placeholder="Learning React-Native"
        onChange={() => setText("string")}
      />
      <ButtonComponent
        title="Press Me"
        onPress={() => Alert.alert("Button pressed")}
      />
    </View>
  );
}
