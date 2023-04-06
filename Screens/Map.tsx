import { View, Text, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MapViewNativeComponentType } from "react-native-maps/lib/MapViewNativeComponent";
import { api } from "../api";
import styled from "styled-components/native";
import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import * as Location from "expo-location";
import screen from "../screens.json";

export function Maps({ navigation, route }: NativeStackScreenProps<any>) {
  const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
  `;

  const FullMapView = styled(MapView)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  `;

  const InitialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  const [region, setRegion] = useState(InitialRegion);
  return (
    <Container>
      <FullMapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.95212607142178,
          longitude: -43.210745261583504,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showUserLocation
        region={region}
        onLongPress={(event) => {
          const coords = event.nativeEvent.coordinate;
          navigation.navigate(screen.NotepadCreate, { coords });
        }}
      >
        <MapMarker
          coordinate={{
            latitude: -22.95212607142178,
            longitude: -43.210745261583504,
          }}
        />
      </FullMapView>
    </Container>
  );
}
