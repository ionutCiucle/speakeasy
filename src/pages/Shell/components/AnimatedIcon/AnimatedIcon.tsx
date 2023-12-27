import { useRef } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Animated, Pressable, Easing } from 'react-native';

const AnimatableIcon = Animated.createAnimatedComponent(FontAwesome5);

type Props = {
  name: string;
  style: object;
  onPress: (...args: any) => void;
};
export const AnimatedIcon = ({ name, style, onPress }: Props) => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  const getStyle = () => ({
    ...style,
    transform: [{ scale: animatedValue }],
  });

  const bounce = () => {
    Animated.timing(animatedValue, {
      toValue: 2,
      easing: Easing.elastic(3),
      useNativeDriver: true,
      duration: 300,
    }).start(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: 50,
      }).start();
    });
  };

  const handlePress = () => {
    bounce();
    onPress();
  };

  return (
    <Pressable onPressIn={handlePress}>
      <AnimatableIcon name={name} style={getStyle()} />
    </Pressable>
  );
};
