import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/stateManagement/store";
import { Shell } from "./src/Shell";

export default function App() {
  return (
    <Provider store={store}>
      <Shell />
    </Provider>
  );
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
