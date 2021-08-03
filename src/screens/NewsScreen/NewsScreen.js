import React, { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Events } from '../../components/Events/Events';
import { Loader } from '../../components/Loader/Loader';
import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import styles from './styles';

const NewsScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightButton type="filter" onPress={() => {}} />,
    });
  }, [navigation]);

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadNextPart = () => {};

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Events
          events={events}
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
};

export default NewsScreen;
