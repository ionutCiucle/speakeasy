import { StyleSheet, Text } from 'react-native';

type Props = {
  text: string;
};

export const PageHeading = ({ text }: Props) => (
  <Text style={styles.label}>{text}</Text>
);

const styles = StyleSheet.create({
  label: {
    padding: 20,
    fontSize: 35,
    fontWeight: 'bold',
  },
});
