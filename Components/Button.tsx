import { Button, Alert } from "react-native";
import styled from "styled-components/native";

export function ButtonComponent() {
  //const falses = false;

  const SButton = styled.Button`
    background-color: blue !important;

    //background-color: ${(props) => (props.cor ? "orange" : "green")};
  `;

  //esse SContainer é uma View, criamos estilo com a capacidade de acrescentar lógica JS para definir o estilo

  return (
    <SButton
      title="Press"
      onPress={() => Alert.alert("Button pressed")}
      //cor={falses}
    ></SButton>
  );
}
