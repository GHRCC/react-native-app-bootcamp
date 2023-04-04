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
import { AntDesign } from "@expo/vector-icons";
import { Paragraph } from "../Components/Paragraph";
import { Header } from "../Components/Header";
import { Layout } from "../Layout/Layout";
import styled from "styled-components/native";
import { ButtonComponent } from "../Components/Button";
import { TextField } from "../Components/TextInput";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";

export function Home({ navigation }) {
  const [text, setText] = useState("string");

  const FontDesign = styled.View`
    display: flex;
    align-content: space-around;
  `;

  return (
    <FontDesign>
      <Header />
      <Paragraph />
      <TextField />
      <ButtonComponent navigation={navigation} />
    </FontDesign>
  );
}
