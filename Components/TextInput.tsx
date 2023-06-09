import { TextInput, View } from "react-native";
import { useState } from "react";
import styled from "styled-components/native";

export function TextField() {
  const [text, setText] = useState("string");
  const STextInput = styled.TextInput`
    width: 90%;
    margin: auto;
    height: 100px;
    text-align: center;
    border: solid 2px #be4c54;
    font-size: 20px;
    font-weight: bold;
  `;

  return (
    <View>
      <STextInput
        value
        placeholder="Learning React-Native"
        onChange={() => setText("string")}
      />
    </View>
  );
}
