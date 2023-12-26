import { Text, StyleSheet } from "react-native";

export const PageHeading = ({ text }) => (
  <Text style={styles.label}>{text}</Text>
);

const styles = StyleSheet.create({
  label: {
    padding: 20,
    fontSize: 35,
    fontWeight: "bold",
  },
});
