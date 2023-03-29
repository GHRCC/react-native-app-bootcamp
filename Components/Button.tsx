import { Button, Alert } from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export function ButtonComponent({ title, onPress }: ButtonProps) {
  const ButtonDesign = styled.Button`
    background-color: orange;
  `;

  return (
    <ButtonDesign>
      <Button title="Press Me" onPress={() => Alert.alert("Button pressed")} />
    </ButtonDesign>
  );
}
