import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/stateManagement/hooks';
import { flushSelectedVenue } from '@/stateManagement/venueSlice';
import { AntDesign } from '@expo/vector-icons';
import { flex, Color } from '@/styles';

export const VenueOverview = () => {
  const dispatch = useAppDispatch();
  const { selectedVenue } = useAppSelector((state) => state.venue);

  return (
    <View>
      <View style={styles.headingSection}>
        <Pressable onPress={() => dispatch(flushSelectedVenue())}>
          <AntDesign style={styles.backIcon} name="left" size={24} />
        </Pressable>

        <Text style={styles.heading}>{selectedVenue?.name}</Text>
        <Pressable>
          <AntDesign style={styles.backIcon} name="plus" size={24} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingSection: {
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: Color.RaisinBlack,

    ...flex('row', 'space-between', 'center'),
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,
    color: Color.White,
  },
  backIcon: {
    color: Color.White,
    // alignSelf: 'flex-start',
  },
});
