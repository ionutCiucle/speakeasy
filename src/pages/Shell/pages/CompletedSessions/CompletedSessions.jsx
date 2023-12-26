import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { flex } from "../../../../styles";
import { timestampToDateString } from "../../../utils";
import { PageHeading } from "../../components/PageHeading";

export const CompletedSessions = () => {
  const { completedSessions } = useSelector((state) => state.session);
  return (
    <View style={styles.container}>
      <PageHeading text="Completed Sessions" />
      <ScrollView>
        {completedSessions.map((session, index) => (
          <View key={index} style={styles.sessionItem}>
            <Text style={styles.sessionItemHeading}>
              {timestampToDateString(session.startDate)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  sessionList: {
    ...flex("column", "flex-start", "flex-start"),
    flex: 1,
    width: "100%",
  },
  sessionItem: {
    padding: 10,
  },
  sessionItemHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
