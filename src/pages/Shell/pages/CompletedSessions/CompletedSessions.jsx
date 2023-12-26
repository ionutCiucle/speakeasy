import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const CompletedSessions = () => {
  const { completedSessions } = useSelector((state) => state.session);
  return (
    <View style={styles.container}>
      {completedSessions.map((session, index) => (
        <View>
          <Text>{`Started at: ${session.startDate}`}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
