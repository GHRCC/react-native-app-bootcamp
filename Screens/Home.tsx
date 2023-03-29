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
import { Heading } from "../Components/Header";
import { Layout } from "../Layout/Layout";
import styled from "styled-components/native";
import { ButtonComponent } from "../Components/Button";
import { TextField } from "../Components/TextInput";

export function Home() {
  const [text, setText] = useState("string");

  /*const FontDesign = styled.Text`
    font-family: Helvetica;
    font-size: 28px;
    text-align: center;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  `;*/
  return (
    <View>
      <Heading />
      <Paragraph />
      <TextField />
      <ButtonComponent />
    </View>
  );
}
