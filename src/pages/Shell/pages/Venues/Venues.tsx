import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { RatingStars } from '@/pages/Shell/components/RatingStars';
import { VenueIcons } from '@/pages/Shell/components/VenueIcons';
import { useAppSelector } from '@/stateManagement/hooks';
import { Color, flex } from '@/styles';

export const Venues = () => {
  const { venues } = useAppSelector((state) => state.venue);

  return (
    <ScrollView>
      {venues.map((venue, index) => (
        <View key={index} style={styles.venueCard}>
          <View style={styles.top}>
            <Text style={styles.venueName}>{venue.name}</Text>
            <VenueIcons type={venue.type} />
            {/* <Text style={styles.venueType}>{venue.type}</Text> */}
          </View>
          <RatingStars rating={venue.rating!} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  venueCard: {
    backgroundColor: Color.Flame,
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  top: {
    ...flex('row', 'space-between', 'center'),
  },
  venueName: {
    fontSize: 30,
    color: Color.White,
    fontWeight: 'bold',
  },
  venueType: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
