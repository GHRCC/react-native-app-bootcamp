import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import type { Notepad } from "../Types/Notepad";

export type NotepadItemProps = {
  onPress: () => void;
  notepad: Notepad;
};

const STouchable = styled.TouchableOpacity`
  border: 2px;
  margin: 10px;
  padding: 20px;
  display: flex;
  gap: 10px;
`;

const STitle = styled.Text`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
`;

const SSubtitle = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
`;

const SDate = styled.Text`
  font-family: Helvetica;
`;

export function NotepadItem({
  onPress,
  notepad: { title, subtitle, created_at },
}: NotepadItemProps) {
  return (
    <STouchable onPress={onPress}>
      <SDate>{new Date(created_at).toLocaleDateString()}</SDate>
      <STitle>{title}</STitle>
      <SSubtitle>{subtitle}</SSubtitle>
    </STouchable>
  );
}
