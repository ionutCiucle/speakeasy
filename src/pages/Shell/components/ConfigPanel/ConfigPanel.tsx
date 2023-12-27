import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Pressable,
  Animated,
  Easing,
} from 'react-native';

import { flex, Color } from '../../../../styles';

type Props = {
  visible: boolean;
  onClosePress: (...args: any) => void;
};

export const ConfigPanel = ({ visible, onClosePress }: Props) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      slideIn();
    } else {
      slideOut();
    }
  }, [visible]);

  const slideIn = () => {
    Animated.timing(slideAnim, {
      // TODO: Find a way to move this exactly its height up in a way
      // that extracts the height at runtime;
      // 100% doesn't mean 100% of the box height in react native, it seems :S
      // Also, after finding the solution, remove ts-ignore statements
      // @ts-ignore
      toValue: '-852%',
      duration: 180,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      // @ts-ignore
      toValue: '0',
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{ ...styles.container, transform: [{ translateY: slideAnim }] }}
    >
      <Pressable style={styles.closeButton} onPress={onClosePress}>
        <FontAwesome size={40} name="close" />
      </Pressable>
      <View style={styles.switchGroup}>
        <Text>Buzz Mode</Text>
        <Switch />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flex('column', 'flex-start', 'center'),
    padding: 30,
    paddingTop: 80,
    width: '100%',
    height: '100%',
    top: '100%',
    position: 'absolute',
    backgroundColor: Color.White,
    border: '1px solid black',
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
  },
  switchGroup: {
    ...flex('row', 'flex-start', 'center'),
    width: '100%',
  },
});
