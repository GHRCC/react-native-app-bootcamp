import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import { ContainerScreen } from "../Components/ContainerScreen";
import { Header } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Toast from "react-native-root-toast";
import { api } from "../api";
import screens from "../screens.json";
import { TextField } from "../Components/TextField";

const Texts = {
  title: "Create Notepad",
  titlePlaceholder: "Notepad Title",
  subtitlePlaceholder: "Notepad Subtitle",
  contentPlaceholder: "What's on your mind?",
  submit: "Create",
};

const InitialFormState = {
  title: "",
  subtitle: "",
  content: "",
};

const FormContainer = styled.View``;

export function NotepadCreate({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [form, setForm] = useState(InitialFormState);
  return (
    <ContainerScreen>
      <Header
        style={{
          textAlign: "center",
        }}
      >
        {Texts.title}
      </Header>
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
        <TextField
          value={form.content}
          onChangeText={(content) => setForm({ ...form, content })}
          placeholder={Texts.contentPlaceholder}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity
          onPress={async () => {
            const { data } = await api.post("/notepads", form);
            if (data.success) {
              Toast.show("Notepad criado com sucesso!");
              navigation.navigate(screens.NotepadList);
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
