import { StyleSheet, View } from 'react-native';
import { useLocation, useNavigate } from 'react-router-native';
import { AnimatedIcon } from '../AnimatedIcon';

import { Color } from '@/styles';

type Props = {
  activeSessionExists: boolean;
};

export const Navigation = ({ activeSessionExists }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveStyling = (navButtonRouteList: string[]) =>
    navButtonRouteList.some((routeName) => location.pathname === routeName)
      ? styles.iconActive
      : null;

  return (
    <View style={styles.container}>
      <AnimatedIcon
        name="pen"
        style={{ ...styles.icon, ...getActiveStyling(['/venues']) }}
        onPress={() => navigate('/venue-stack')}
      />
      <AnimatedIcon
        name="bolt"
        style={{
          ...styles.icon,
          ...getActiveStyling(['/active-session', '/home']),
        }}
        onPress={() =>
          activeSessionExists ? navigate('/active-session') : navigate('/home')
        }
      />
      <AnimatedIcon
        name="list"
        style={{ ...styles.icon, ...getActiveStyling(['/completed-sessions']) }}
        onPress={() => navigate('/completed-sessions')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 50,
    backgroundColor: Color.Jonquill,
  },
  icon: {
    fontSize: 30,
    color: Color.RaisinBlackLight,
  },
  iconActive: {
    color: Color.RaisinBlack,
  },
});
