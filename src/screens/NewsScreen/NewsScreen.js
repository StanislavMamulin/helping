import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
} from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Events } from '../../components/Events/Events';
import { Loader } from '../../components/Loader/Loader';
import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import styles from './styles';

import { TYPES_OF_HELP } from '../../dataManager/data/typesOfHelp';

import { getFirstEvents, getNextEvents } from '../../dataManager/dataManager';

const NUMBER_OF_REQUESTED_EVENTS = 5;

export const NewsScreen = ({ navigation, route }) => {
  const [events, setEvents] = useState([]);
  const [showedEvents, setShowedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showEventsTypes, setShowEventsTypes] = useState(
    new Set(TYPES_OF_HELP),
  );
  const [noMoreEvents, setNoMoreEvents] = useState(false);

  useEffect(() => {
    const fetchFirstEvents = async () => {
      const firstEvents = await getFirstEvents(NUMBER_OF_REQUESTED_EVENTS);
      setIsLoading(false);
      setEvents(firstEvents);
    };

    fetchFirstEvents();
  }, []);

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

  const loadNextPart = useCallback(async () => {
    if (!isLoadingMore && !noMoreEvents) {
      setIsLoadingMore(true);
      const newEvents = await getNextEvents(NUMBER_OF_REQUESTED_EVENTS);
      if (newEvents.length === 0) {
        setNoMoreEvents(true);
      }

      setEvents([...events, ...newEvents]);
      setIsLoadingMore(false);
    }
  }, [isLoadingMore, noMoreEvents, events]);

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
