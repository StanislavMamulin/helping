import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { Loader } from '../../Loader/Loader';

export const EventsFooter = ({ isLoadingMore = false }) => (
  <View style={styles.bottomOffset}>
    {isLoadingMore ? <Loader /> : <View />}
  </View>
);

EventsFooter.propTypes = {
  isLoadingMore: PropTypes.bool,
};

EventsFooter.defaultProps = {
  isLoadingMore: false,
};
