import { Text, StyleSheet } from "react-native";

export function Paragraph() {
  return (
    <Text style={styles.paragraph}>
      As experiências acumuladas demonstram que o comprometimento entre as
      equipes nos obriga à análise do fluxo de informações.
    </Text>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 20,
    margin: 20,
  },
});
