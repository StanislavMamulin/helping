import React, { useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { buttonsStyles } from '../../commonStyles/buttons';

const EventDetailsScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Image source={{ uri: 'share' }} style={buttonsStyles.headerRight} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
    </View>
  );
};

EventDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default EventDetailsScreen;
