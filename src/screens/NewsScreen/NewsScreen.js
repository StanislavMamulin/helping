import React from 'react';
import { View } from 'react-native';

import { EventsScreen } from '../EventsScreen/EventsScreen';

import styles from './styles';
import { getFirstEvents, getNextEvents } from '../../dataManager/dataManager';

const NUMBER_OF_REQUESTED_EVENTS = 5;

export const NewsScreen = () => (
  <View style={styles.container}>
    <EventsScreen
      getFirstPart={() => getFirstEvents(NUMBER_OF_REQUESTED_EVENTS)}
      getNextPart={() => getNextEvents(NUMBER_OF_REQUESTED_EVENTS)}
    />
  </View>
);
