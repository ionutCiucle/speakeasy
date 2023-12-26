import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../stateManagement/hooks';
import { Outlet, useNavigate } from 'react-router-native';

import { ConfigPanel } from './components/ConfigPanel';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { toggleConfigPanelVisibility } from '../../stateManagement/layoutSlice';
import { Color, flex } from '../../styles';

export const Shell = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showConfigPanel } = useAppSelector((state) => state.layout);
  const { activeSession } = useAppSelector((state) => state.session);

  useEffect(() => {
    navigate('/active-session');
  }, []);

  const handleCogPress = () => {
    dispatch(toggleConfigPanelVisibility());
  };

  return (
    <View style={styles.container}>
      <Header onCogPress={handleCogPress} />
      <View style={styles.body}>
        <Outlet />
      </View>
      <Navigation activeSessionExists={activeSession !== null} />
      <ConfigPanel visible={showConfigPanel} onClosePress={handleCogPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flex('column', 'space-between', 'stretch'),
    height: '100%',
    position: 'relative',
  },
  body: {
    backgroundColor: Color.White,
    flex: 1,
  },
  bodyText: {
    fontSize: 16,
  },
  configPanel: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: Color.White,
  },
  visibleConfigPanel: {
    top: 0,
  },
});
