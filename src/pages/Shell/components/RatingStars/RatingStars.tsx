import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Rating } from '@/stateManagement/enums';
import { flex, Color } from '@/styles';

type Props = {
  rating: Rating;
};

export const RatingStars = ({ rating }: Props) => {
  const renderStar = (empty: boolean, key: number) => (
    <AntDesign name={`star${empty ? 'o' : ''}`} key={key} style={styles.star} />
  );

  const renderStars = () => {
    const markup = [];

    for (let i = 0; i < 5; i++) {
      markup.push(renderStar(rating < i + 1, i));
    }

    return markup;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...flex('row', 'flex-start', 'center'),
  },
  star: {
    color: Color.Jonquill,
  },
});
