import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { api } from "../api";
import type { Notepad } from "../Types/Notepad";
import screens from "../screens.json";
import styled from "styled-components/native";
import Toast from "react-native-root-toast";

const initialNotepad: Notepad = {
  id: 0,
  title: "",
  subtitle: "",
  created_at: "",
  content: "",
  latitude: null,
  longitude: null,
};

const Coords = styled.View``;

export function NotepadView({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const [notepad, setNotepad] = useState(initialNotepad);
  const id = route.params.id;
  console.log(id);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepad>(`/notepads/${id}`);
      setNotepad(data);
    });

    return unsubscribe;
  }, [id]);

  return (
    <View>
      <Text>{id}</Text>
      <Text>{new Date(notepad.created_at).toLocaleDateString()}</Text>
      <Text>{notepad.title}</Text>
      <Text>{notepad.subtitle}</Text>
      <Text>{notepad.content}</Text>
      <Coords>
        <Text>
          Latitude: {notepad.latitude} Longitude: {notepad.longitude}
        </Text>
      </Coords>
      <Button
        title="Deletar"
        color="#eb4d4b"
        onPress={async () => {
          const { data } = await api.delete(`/notepads/${id}`);
          if (data.success) {
            Toast.show("Notepad deletado com sucesso!");
            navigation.navigate(screens.NotepadList);
          } else {
            Toast.show("Houve um erro ao deletar o seu notepad!");
          }
        }}
      />
      <Button
        title="Editar"
        color="#16a085"
        onPress={async () => {
          navigation.navigate(screens.NotepadEdit, {
            id,
          });
        }}
      />
    </View>
  );
}
