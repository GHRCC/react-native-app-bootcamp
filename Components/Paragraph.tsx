import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

export function Paragraph() {
  const FontDesign = styled.Text`
    font-family: Helvetica;
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    padding: 20px;
    color: #be4c54;
  `;

  return (
    <FontDesign>
      <Text>
        As experiências acumuladas demonstram que o comprometimento entre as
        equipes nos obriga à análise do fluxo de informações.
      </Text>
    </FontDesign>
  );
}
