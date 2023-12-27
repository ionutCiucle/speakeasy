import { Pressable, StyleSheet, Text } from 'react-native';

import { Color } from '@/styles';

type Props = {
  label: string;
  onPress: (...args: any) => void;
};

export const BigButton = ({ label, onPress }: Props) => (
  <Pressable onPress={onPress}>
    <Text style={styles.button}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    color: Color.RaisinBlack,
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: Color.Jonquill,
  },
});
