import { View, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speakeasy</Text>
      <View>
        <Text
          style={styles.menuEntry}
          onPress={() => navigation.navigate("CreateSession")}
        >
          Start a new session
        </Text>
        <Text
          style={styles.menuEntry}
          onPress={() => navigation.navigate("AddDrink")}
        >
          Add a new drink
        </Text>
        <Text
          style={styles.menuEntry}
          onPress={() => navigation.navigate("AddMeal")}
        >
          Add a new meal
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  menuEntry: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Home;
