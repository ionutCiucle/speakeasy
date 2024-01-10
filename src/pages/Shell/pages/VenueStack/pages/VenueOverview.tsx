import { Text, View } from 'react-native';
import { useAppDispatch } from '@/stateManagement/hooks';
import { BigButton } from '@/pages/Shell/components/BigButton/BigButton';
import { flushSelectedVenue } from '@/stateManagement/venueSlice';

export const VenueOverview = () => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Selected Venue</Text>
      <BigButton
        label="Back to list"
        onPress={() => dispatch(flushSelectedVenue())}
      />
    </View>
  );
};
