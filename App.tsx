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
import { Header } from "./Components/Header";
import { Layout } from "./Layout/Layout";
import { Home } from "./Screens/Home";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens from "./screens.json";
import { NotepadCreate } from "./Screens/NotepadCreate";
import { NotepadEdit } from "./Screens/NotepadEdit";
import { NotepadList } from "./Screens/NotepadList";
import { NotepadView } from "./Screens/NotepadView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.Home}>
        <Stack.Screen name={screens.Home} component={Home} />
        <Stack.Screen name={screens.NotepadCreate} component={NotepadCreate} />
        <Stack.Screen name={screens.NotepadEdit} component={NotepadEdit} />
        <Stack.Screen name={screens.NotepadList} component={NotepadList} />
        <Stack.Screen name={screens.NotepadView} component={NotepadView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
