import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { EventDetails } from '../../components/EventDetails/EventDetails';
import { HeaderRightButton } from '../../components/HeaderRightButton/HeaderRightButton';

export const EventDetailsScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightButton type="share" onPress={() => {}} />,
    });
  }, [navigation]);

  return <EventDetails />;
};

EventDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
