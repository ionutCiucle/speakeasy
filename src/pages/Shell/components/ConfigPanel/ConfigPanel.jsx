import { View, Text, StyleSheet, Switch, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { flex } from "../../../../styles";

export const ConfigPanel = ({ style = {}, onClosePress }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Pressable style={styles.closeButton} onPress={onClosePress}>
        <FontAwesome size={40} name="close" />
      </Pressable>
      <View style={styles.switchGroup}>
        <Text>Buzz Mode</Text>
        <Switch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flex("column", "flex-start", "center"),
    padding: 30,
    paddingTop: 80,
    width: "100%",
    height: "100%",
  },
  closeButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
  },
  switchGroup: {
    ...flex("row", "flex-start", "center"),
    width: "100%",
  },
});
