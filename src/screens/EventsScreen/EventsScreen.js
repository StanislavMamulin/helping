import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
} from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Events } from '../../components/Events/Events';
import { Loader } from '../../components/Loader/Loader';
import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import styles from './styles';

import { TYPES_OF_HELP } from '../../dataManager/data/typesOfHelp';

export const EventsScreen = ({
  getFirstPart = () => {},
  getNextPart = () => {},
}) => {
  const navigation = useNavigation();
  const route = useRoute();

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
      const firstEvents = await getFirstPart();
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
      const newEvents = await getNextPart();
      if (newEvents.length === 0) {
        setNoMoreEvents(true);
      }

      setEvents([...events, ...newEvents]);
      setIsLoadingMore(false);
    }
  }, [isLoadingMore, noMoreEvents, events, getNextPart]);

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

EventsScreen.propTypes = {
  getFirstPart: PropTypes.func.isRequired,
  getNextPart: PropTypes.func.isRequired,
};
