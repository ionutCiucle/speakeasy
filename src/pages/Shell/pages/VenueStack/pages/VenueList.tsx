import { Text, View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { RatingStars } from '@/pages/Shell/components/RatingStars';
import { VenueIcons } from '@/pages/Shell/components/VenueIcons';
import { useAppSelector, useAppDispatch } from '@/stateManagement/hooks';
import { selectVenue } from '@/stateManagement/venueSlice';
// import { useNavigate } from 'react-router-native';
import { Color, flex } from '@/styles';
// import { Venue } from '@/stateManagement/types';

export const VenueList = () => {
  const { venues } = useAppSelector((state) => state.venue);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // const getVenuePressHandler = (venue: Venue) => () => {

  // };

  return (
    <ScrollView>
      {venues.map((venue, index) => (
        <Pressable
          key={index}
          style={styles.venueCard}
          onPress={() => dispatch(selectVenue(venue.id))}
        >
          <View style={styles.top}>
            <Text style={styles.venueName}>{venue.name}</Text>
            <VenueIcons type={venue.type} />
          </View>
          <RatingStars rating={venue.rating!} />
        </Pressable>
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
