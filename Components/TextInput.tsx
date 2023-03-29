import { TextInput, View } from "react-native";
import { useState } from "react";

type TextFieldProps = {
  placeholder: string;
  onChange: () => void;
};

export function TextField({ placeholder, onChange }: TextFieldProps) {
  const [text, setText] = useState("string");
  return (
    <View>
      <TextInput
        placeholder="Learning React-Native"
        onChange={() => setText("string")}
      />
    </View>
  );
}
