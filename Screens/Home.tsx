import React, { useEffect } from "react";
import { useState } from "react";
import { Paragraph } from "../Components/Paragraph";
import { Header } from "../Components/Header";
import * as Location from "expo-location";
import styled from "styled-components/native";
import { ButtonComponent } from "../Components/Button";
import { TextField } from "../Components/TextInput";

import Toast from "react-native-root-toast";

function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export function Home({ navigation }) {
  const [text, setText] = useState("string");
  const InitialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  const [region, setRegion] = useState(InitialRegion);
  const FontDesign = styled.View`
    display: flex;
    align-content: space-around;
  `;
  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then(async (Response) => {
      if (Response.status === "granted") {
        await delay(2);
        const position = await location.getCurrentPositionAsync();
        setRegion({
          ...region,
          ...position.coords,
        });
      } else {
        Toast.show("This app needs access to your location");
      }
    });
  });

  return (
    <FontDesign>
      <Header />
      <Paragraph />
      <TextField />
      <ButtonComponent navigation={navigation} />
    </FontDesign>
  );
}
