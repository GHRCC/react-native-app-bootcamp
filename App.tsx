import "react-native-gesture-handler";
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
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={screens.Home}>
        <Drawer.Screen
          name={screens.Home}
          component={Home}
          options={{
            drawerIcon({ color, size }) {
              return <AntDesign name="home" size={24} color="black" />;
            },
          }}
        />
        <Drawer.Screen
          name={screens.NotepadCreate}
          component={NotepadCreate}
          options={{
            drawerIcon({ color, size }) {
              return <AntDesign name="form" size={24} color="black" />;
            },
          }}
        />
        <Drawer.Screen
          name={screens.NotepadEdit}
          component={NotepadEdit}
          options={{
            drawerIcon({ color, size }) {
              return <AntDesign name="edit" size={24} color="black" />;
            },
          }}
        />
        <Drawer.Screen
          name={screens.NotepadList}
          component={NotepadList}
          options={{
            drawerIcon({ color, size }) {
              return <AntDesign name="rightcircleo" size={24} color="black" />;
            },
          }}
        />
        <Drawer.Screen
          name={screens.NotepadView}
          component={NotepadView}
          options={{
            drawerIcon({ color, size }) {
              return <AntDesign name="staro" size={24} color="black" />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
