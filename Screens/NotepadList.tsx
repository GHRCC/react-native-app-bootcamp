import { View, Text, FlatList } from "react-native";
import { api } from "../api";
import type { ParamListBase } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";
import { Notepad } from "../Types/Notepad"; //it is better to create a type at a separate file, so that we can import it wherever we want
import { NotepadItem } from "../Components/NotepadItems";

export function NotepadList({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [notepads, setNotepads] = useState([] as Notepad[]); //another option for this syntax would be: const initialNotepads: Notepads [] = []; and then, useState (initialNotepads)

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      //we use "unsubscribe" to unsubscribe the actions and stores once component gets unloaded, which prevents the screen to keep re-rendering
      const { data } = await api.get<Notepad[]>("/notepads");

      setNotepads(data);
    });
    return unsubscribe;
  }, []);

  return (
    <FlatList
      data={notepads}
      keyExtractor={({ id }) => id.toLocaleString()}
      renderItem={({ item }) => {
        return (
          <NotepadItem
            notepad={item}
            onPress={() => {
              navigation.navigate(screens.NotepadView, {
                id: item.id,
              });
            }}
          />
        );
      }}
    />
  );
}
