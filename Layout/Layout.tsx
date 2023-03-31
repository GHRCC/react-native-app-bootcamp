import { Image, StyleSheet, View } from "react-native";

export function Layout(props) {
  return (
    <View>
      <Image source={require("../assets/marble.webp")} />;
    </View>
  );
}
