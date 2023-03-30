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
import { Header } from "../Components/Header";
import { Layout } from "../Layout/Layout";
import styled from "styled-components/native";
import { ButtonComponent } from "../Components/Button";
import { TextField } from "../Components/TextInput";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";

export function Home({
  navigation,
  route,
}: NativeStackScreenProps<ParamListBase>) {
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
      <Button
        title="Create Notepad"
        onPress={() => {
          navigation.navigate(screens.NotepadCreate);
        }}
      />
      <Button
        title="Edit Notepad"
        onPress={() => {
          navigation.navigate(screens.NotepadEdit);
        }}
      />
      <Button
        title="Notepad List"
        onPress={() => {
          navigation.navigate(screens.NotepadList);
        }}
      />
      <Button
        title="View Notepads"
        onPress={() => {
          navigation.navigate(screens.NotepadView);
        }}
      />
      <Header />
      <Paragraph />
      <TextField />
      <ButtonComponent />
    </View>
  );
}
