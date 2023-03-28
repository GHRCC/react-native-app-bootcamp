import { Text, View, StyleSheet } from "react-native";

export function Heading() {
  return (
    <View>
      <Text style={styles.headingStyle}>I am a Heading!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 40,
  },
});
