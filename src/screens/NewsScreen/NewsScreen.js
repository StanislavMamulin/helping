import React, { useLayoutEffect, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { buttonsStyles } from '../../commonStyles/buttons';
import { Events } from '../../components/Events/Events';
import { Loader } from '../../components/Loader/Loader';

const NewsScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Image source={{ uri: 'filter' }} style={buttonsStyles.headerRight} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadNextPart = () => {};

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Events
          events={events}
          getNextPart={loadNextPart}
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
