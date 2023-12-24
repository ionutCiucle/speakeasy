// import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Root } from "./src/Root";

export default function App() {
  return <Root />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    direction: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
  },
  top: {
    direction: "column",
  },
});
