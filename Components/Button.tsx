import { Button, Alert } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";
import type { ParamListBase } from "@react-navigation/native";

export function ButtonComponent({ navigation }) {
  //const falses = false;

  const SButton = styled.Button`
    //background-color: ${(props) => (props.cor ? "orange" : "green")};
  `;

  //esse SContainer é uma View, criamos estilo com a capacidade de acrescentar lógica JS para definir o estilo

  return (
    <SButton
      title="Create Notepad"
      onPress={() => {
        navigation.navigate(screens.NotepadCreate);
      }}
      //cor={falses}
    ></SButton>
  );
}
