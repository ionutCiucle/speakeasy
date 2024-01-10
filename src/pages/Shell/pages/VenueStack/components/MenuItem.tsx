import { View, Text, StyleSheet } from 'react-native';
import { RatingStars } from '@/pages/Shell/components/RatingStars';
import { Currency, Rating, ServingType } from '@/stateManagement/enums';
import { flex, Color } from '@/styles';

type Props = {
  name: string;
  currency: Currency;
  price: number;
  servingType: ServingType;
  rating: Rating;
};

export const MenuItem = ({
  name,
  currency,
  price,
  servingType,
  rating,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{name}</Text>
        <Text style={styles.headingPrice}>{`${price} ${currency}`}</Text>
      </View>
      <RatingStars rating={rating as Rating} />
      <Text style={styles.servingText}>{servingType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    ...flex('row', 'space-between', 'center'),
    paddingBottom: 5,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headingPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Color.KellyGreen,
  },
  servingText: {
    marginTop: 5,
  },
});
