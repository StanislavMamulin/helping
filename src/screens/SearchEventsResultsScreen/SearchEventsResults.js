import React, { useLayoutEffect, useRef } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { EventsScreen } from '../EventsScreen/EventsScreen';
import { findEventsByTitle } from '../../dataManager/dataManager';
import styles from './styles';

export const SearchEventsResults = () => {
  const route = useRoute();
  const searchTitle = useRef('');

  useLayoutEffect(() => {
    if (route.params?.title) {
      searchTitle.current = route.params?.title;
    }
  }, [route.params?.title]);

  return (
    <View style={styles.container}>
      <EventsScreen
        getFirstPart={() => findEventsByTitle(searchTitle.current)}
        getNextPart={() => findEventsByTitle(searchTitle.current)}
      />
    </View>
  );
};
