import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useAppSelector } from '@/stateManagement/hooks';
import { flex } from '@/styles';
import { timestampToDateString } from '@/stateManagement/utils';
import { PageHeading } from '@/pages/Shell/components/PageHeading';

export const CompletedSessions = () => {
  const { completedSessions } = useAppSelector((state) => state.session);
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
    width: '100%',
    height: '100%',
  },
  sessionList: {
    ...flex('column', 'flex-start', 'flex-start'),
    flex: 1,
    width: '100%',
  },
  sessionItem: {
    padding: 10,
  },
  sessionItemHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
