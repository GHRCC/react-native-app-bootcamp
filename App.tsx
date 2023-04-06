import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
  AppState,
} from "react-native";
import { Paragraph } from "./Components/Paragraph";
import { Header } from "./Components/Header";

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
import { Maps } from "./Screens/Map";
import { Feather } from "@expo/vector-icons";
import { initialAppState } from "./Components/AppState";
import { AppStateContext } from "./Components/AppState";
import { Loader } from "./Components/Loader";
import { api } from "./api";
import { RootSiblingParent } from "react-native-root-siblings";
import * as Location from "expo-location";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [appState, setAppState] = useState(initialAppState);

  useEffect(() => {
    const interceptorRequest = api.interceptors.request.use((config) => {
      setAppState({
        loading: true,
      });
      return config;
    });

    const interceptorResponse = api.interceptors.response.use((config) => {
      setAppState({
        loading: false,
      });
      return config;
    });

    return () => {
      api.interceptors.request.eject(interceptorRequest);
      api.interceptors.response.eject(interceptorResponse);
    };
  }, []);

  return (
    <React.StrictMode>
      <RootSiblingParent>
        <AppStateContext.Provider value={appState}>
          <Loader loading={appState.loading} />
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
                  drawerItemStyle: {
                    display: "none",
                  },
                  drawerIcon({ size, color }) {
                    return (
                      <AntDesign name="rightcircleo" size={24} color="black" />
                    );
                  },
                }}
              />
              <Drawer.Screen
                name={screens.NotepadList}
                component={NotepadList}
                options={{
                  drawerIcon({ color, size }) {
                    return (
                      <AntDesign name="rightcircleo" size={24} color="black" />
                    );
                  },
                }}
              />
              <Drawer.Screen
                name={screens.NotepadView}
                component={NotepadView}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  drawerIcon({ size, color }) {
                    return (
                      <AntDesign name="rightcircleo" size={24} color="black" />
                    );
                  },
                }}
              />
              <Drawer.Screen
                name={screens.Maps}
                component={Maps}
                options={{
                  drawerIcon({ color, size }) {
                    return <Feather name="map-pin" size={24} color="black" />;
                  },
                }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </AppStateContext.Provider>
      </RootSiblingParent>
    </React.StrictMode>
  );
}
