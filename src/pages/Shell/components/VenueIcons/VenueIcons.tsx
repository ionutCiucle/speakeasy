// import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { VenueType } from '@/stateManagement/enums';
import { Color, flex } from '@/styles';

type Props = {
  type: VenueType;
  iconSize?: number;
};

export const VenueIcons = ({ type, iconSize = 30 }: Props) => {
  const renderIcons = () => {
    const markup = [];

    switch (type) {
      case VenueType.Restaurant: {
        markup.push(
          <MaterialIcons
            size={iconSize}
            color={Color.RaisinBlack}
            key={1}
            name="restaurant"
          />,
          <MaterialIcons
            size={iconSize}
            key={2}
            color={Color.RaisinBlack}
            name="wine-bar"
          />,
        );
        break;
      }
      case VenueType.Cafe: {
        markup.push(
          <Feather
            size={iconSize}
            key={1}
            color={Color.RaisinBlack}
            name="coffee"
          />,
        );
        break;
      }
      case VenueType.Bar: {
        markup.push(
          <MaterialIcons
            size={iconSize}
            key={1}
            color={Color.RaisinBlack}
            name="local-bar"
          />,
        );
        break;
      }
      case VenueType.ConcertHall: {
        markup.push(
          <MaterialIcons
            size={iconSize}
            key={1}
            color={Color.RaisinBlack}
            name="music-note"
          />,
        );
        break;
      }
      default: {
        throw new Error('<VenueIcons/> | Unknown venue type.');
      }
    }

    return markup;
  };

  return <View style={styles.container}>{renderIcons()}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...flex('row', 'flex-start', 'center'),
    color: Color.White,
  },
});
