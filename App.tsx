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
import { Paragraph } from "./Components/Paragraph";
import { Heading } from "./Components/Heading";
import { Layout } from "./Layout/Layout";
import { Home } from "./Screens/Home";
import styled from "styled-components/native";

export default function App() {
  return (
    <View>
      <Home />
    </View>
  );
}
