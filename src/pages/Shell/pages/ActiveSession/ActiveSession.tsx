import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

import {
  useAppSelector,
  useAppDispatch,
} from '../../../../stateManagement/hooks';
import { completeSession } from '../../../../stateManagement/sessionSlice';
import { flex } from '../../../../styles';
import { timestampToDateString } from '../../../utils';
import { BigButton } from '../../components/BigButton/BigButton';
import { PageHeading } from '../../components/PageHeading';

export const ActiveSession = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { activeSession } = useAppSelector((state) => state.session);

  useEffect(() => {
    if (activeSession === null) {
      navigate('/home');
    }
  }, [activeSession]);

  return (
    <View style={styles.container}>
      <PageHeading text="Active Session" />
      <Text>{`Started at ${timestampToDateString(
        // @ts-ignore
        activeSession?.startDate,
      )}`}</Text>
      <BigButton
        label="End Session"
        onPress={() => dispatch(completeSession())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    ...flex('column', 'flex-start', 'center'),
  },
  heading: {
    padding: 20,
    fontSize: 35,
    fontWeight: 'bold',
  },
});
