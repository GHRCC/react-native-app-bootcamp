import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

import styled from "styled-components/native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Toast from "react-native-root-toast";
import { api } from "../api";
import screens from "../screens.json";
import { Notepad } from "../types/Notepad";

const initialFormState = {
  title: "",
  subtitle: "",
  content: "",
  latitude: 0,
  longitude: 0,
};

const Texts = {
  titlePlaceholder: "Notepad Title",
  subtitlePlaceholder: "Notepad Subtitle",
  contentPlaceholder: "What's on your mind?",
  submit: "Edit",
};

const InitialFormState = {
  title: "",
  subtitle: "",
  content: "",
};

const ContainerScreen = styled.View`
  background-color: aliceblue;
  height: 100%;
  justify-content: center;
`;

const FormContainer = styled.View`
  height: 100%;
  display: flex;
`;

const TextField = styled.TextInput`
  background-color: white;
  margin: 10px;
  height: 40px;
  border: solid;
`;

const ContentField = styled.TextInput`
  background-color: white;
  margin: 10px;
  height: 200px;
  border: solid;
  text-align: center;
`;

export function NotepadEdit({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const id = route.params.id;
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const {
        data: { title, subtitle, content, latitude, longitude },
      } = await api.get<Notepad>(`/notepads/${id}`);
      setForm({
        title,
        subtitle,
        content,
        latitude,
        longitude,
      });
    });

    return unsubscribe;
  }, [id]);
  return (
    <ContainerScreen>
      <FormContainer>
        <TextField
          value={form.title}
          onChangeText={(title) => setForm({ ...form, title })}
          placeholder={Texts.titlePlaceholder}
        />
        <TextField
          value={form.subtitle}
          onChangeText={(subtitle) => setForm({ ...form, subtitle })}
          placeholder={Texts.subtitlePlaceholder}
        />
        <ContentField
          value={form.content}
          onChangeText={(content) => setForm({ ...form, content })}
          placeholder={Texts.contentPlaceholder}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity
          onPress={async () => {
            const { data } = await api.put(`/notepads/${id}`, form);
            if (data.success) {
              Toast.show("Success!");
              navigation.navigate(screens.NotepadView, {
                id,
              });
            } else {
              Toast.show(data.errors[0].message);
            }
          }}
          style={{
            backgroundColor: "#546de5",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {Texts.submit}
          </Text>
        </TouchableOpacity>
      </FormContainer>
    </ContainerScreen>
  );
}
