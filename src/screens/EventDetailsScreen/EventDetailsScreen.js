import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';
import styles from './styles';

const EventDetailsScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightButton type="share" onPress={() => {}} />,
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
