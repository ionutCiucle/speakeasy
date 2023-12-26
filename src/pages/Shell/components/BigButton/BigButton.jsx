import { Pressable, Text, StyleSheet } from "react-native";

import { Colors } from "../../../../styles";

export const BigButton = ({ label, onPress }) => (
  <Pressable onPress={onPress}>
    <Text style={styles.button}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    color: Colors.RaisinBlack,
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: Colors.Jonquill,
  },
});
