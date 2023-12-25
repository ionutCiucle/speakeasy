import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "../../../styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Speakeasy</Text>
      <FontAwesome5
        name="cog"
        size={20}
        style={styles.icon}
        onPress={() => console.log("Pressed the cog!")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Jonquill,
    padding: 20,
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.RaisinBlack,
  },
  icon: {
    color: Colors.RaisinBlack,
  },
});