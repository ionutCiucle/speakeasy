import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { Color } from "../../../../styles";

type Props = {
  onCogPress: (...args: any) => void;
};

export const Header = ({ onCogPress }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Speakeasy</Text>
      <Pressable onPress={onCogPress}>
        <FontAwesome5 name="cog" size={20} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Jonquill,
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
    color: Color.RaisinBlack,
  },
  icon: {
    color: Color.RaisinBlack,
  },
});
