import React, { useLayoutEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { EventsScreen } from '../EventsScreen/EventsScreen';
import {
  findEventsByNKO,
  findEventsByTitle,
} from '../../dataManager/searchManager';

import { TYPES_OF_SEARCH } from '../../dataManager/data/typesOfSearch';
import styles from './styles';

export const SearchEventsResultScreen = () => {
  const route = useRoute();

  const searchTitle = useRef('');
  const [searchType, setSearchType] = useState('');

  useLayoutEffect(() => {
    if (route.params?.title) {
      searchTitle.current = route.params?.title;
    }

    const type = route.params?.type;
    if (type) {
      setSearchType(type);
    }
  }, [route.params?.title, route.params?.type]);

  if (searchType === '') {
    return <View />;
  }

  return (
    <View style={styles.container}>
      {searchType === TYPES_OF_SEARCH.eventsTitle ? (
        <EventsScreen
          getFirstPart={() => findEventsByTitle(searchTitle.current)}
          getNextPart={() => findEventsByTitle(searchTitle.current)}
        />
      ) : (
        <EventsScreen
          getFirstPart={() => findEventsByNKO(searchTitle.current)}
          getNextPart={() => findEventsByNKO(searchTitle.current)}
        />
      )}
    </View>
  );
};
