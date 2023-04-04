import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Header() {
  const Container = styled.View`
    background-color: #fff4e3;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
  `;
  const Title = styled.Text`
    font-size: 30px;
    text-align: center;
    font-family: Helvetica;
    padding-left: 10px;
    color: #be4c54;
  `;

  return (
    <Container>
      <Title>
        <Text>What's on your mind?</Text>
      </Title>
      <MaterialCommunityIcons name="typewriter" size={40} color="#be4c54" />
    </Container>
  );
}
