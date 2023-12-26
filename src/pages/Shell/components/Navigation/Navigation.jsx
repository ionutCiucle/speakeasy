import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigate, useLocation } from "react-router-native";

import { Colors } from "../../../../styles";

export const Navigation = ({ activeSessionExists }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveStyling = (navButtonRouteList) =>
    navButtonRouteList.some((routeName) => location.pathname === routeName)
      ? styles.iconActive
      : null;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate("/update-menu")}>
        <FontAwesome5
          name="pen"
          style={{ ...styles.icon, ...getActiveStyling(["/update-menu"]) }}
        />
      </Pressable>
      <Pressable
        onPress={() =>
          activeSessionExists ? navigate("/active-session") : navigate("/home")
        }
      >
        <FontAwesome5
          name="bolt"
          style={{
            ...styles.icon,
            ...getActiveStyling(["/active-session", "/create-session"]),
          }}
        />
      </Pressable>
      <Pressable onPress={() => navigate("/completed-sessions")}>
        <FontAwesome5
          name="list"
          style={{
            ...styles.icon,
            ...getActiveStyling(["/completed-sessions"]),
          }}
        />
      </Pressable>
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
    color: Colors.RaisinBlackLight,
  },
  iconActive: {
    color: Colors.RaisinBlack,
  },
});
