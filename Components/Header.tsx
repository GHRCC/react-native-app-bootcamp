import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

export function Header() {
  const Container = styled.View`
    color: black;

    background-color: #32ebd9;
    height: 70px;
    display: flex;
    justify-content: center;
  `;
  const Title = styled.Text`
    font-size: 40px;
    text-align: center;
    font-family: Helvetica;
  `;

  return (
    <Container>
      <Title>
        <Text>Hello! I am a Header!</Text>
      </Title>
    </Container>
  );
}
