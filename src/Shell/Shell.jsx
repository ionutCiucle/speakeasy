import { View, Text } from "react-native";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";

export const Shell = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.bodyText}>Start a new session</Text>
      </View>
      <Navigation />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  body: {
    backgroundColor: "white",
    padding: 10,
  },
  bodyText: {
    fontSize: 16,
  },
};
