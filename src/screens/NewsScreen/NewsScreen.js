import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Events } from '../../components/Events/Events';
import { Loader } from '../../components/Loader/Loader';
import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import styles from './styles';

import { typesOfHelp } from '../../dataManager/data/typesOfHelp';

export const NewsScreen = ({ navigation, route }) => {
  const [events, setEvents] = useState([]);
  const [showedEvents, setShowedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showEventsTypes, setShowEventsTypes] = useState(new Set(typesOfHelp));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightButton
          type="filter"
          onPress={() =>
            navigation.navigate({
              name: 'FilterScreen',
              params: { toShow: Array.from(showEventsTypes) },
            })
          }
        />
      ),
    });
  }, [navigation, showEventsTypes]);

  // set the type of displayed events based on values from the Filter screen
  useEffect(() => {
    if (route.params?.toShow) {
      setShowEventsTypes(new Set(route.params.toShow));
    }
  }, [route.params?.toShow]);

  // filtering showing events
  useEffect(() => {
    const filteredEvents = events.filter(event =>
      event.typesOfHelp.some(type => showEventsTypes.has(type)),
    );

    setShowedEvents(filteredEvents);
  }, [showEventsTypes, events]);

  const loadNextPart = () => {};

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Events
          events={showedEvents}
          getNextPart={loadNextPart}
          isLoadingMore={isLoadingMore}
        />
      )}
    </View>
  );
};

NewsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      toShow: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};
