import { View, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "../../../styles";

export const Navigation = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="bolt"
        style={styles.icon}
        onPress={() => console.log("Pressed ActiveSession icon")}
      />
      <FontAwesome5
        name="pen"
        style={styles.icon}
        onPress={() => console.log("Pressed ActiveSession icon")}
      />
      <FontAwesome5
        name="list"
        style={styles.icon}
        onPress={() => console.log("Pressed ActiveSession icon")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 50,
    backgroundColor: Colors.Jonquill,
  },
  icon: {
    fontSize: 30,
    color: Colors.RaisinBlack,
    // color: "white",
  },
});
