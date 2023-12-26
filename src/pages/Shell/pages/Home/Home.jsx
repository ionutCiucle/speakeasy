import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { Colors, flex } from "../../../../styles";

export const Home = ({ onStart }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onStart}>
        <Text style={styles.button}>Start new session</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    ...flex("row", "center", "center"),
  },
  button: {
    padding: 10,
    borderRadius: 20,
    color: Colors.RaisinBlack,
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: Colors.Jonquill,
  },
});
