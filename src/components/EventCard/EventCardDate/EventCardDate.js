import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { getDateText } from '../../../utils/text';
import { styles } from './styles';

export const EventCardDate = ({
  date = {
    from: 0,
    to: 0,
  },
}) => (
  <View style={styles.container}>
    <Image source={{ uri: 'icon_calendar' }} style={styles.icon} />
    <Text style={styles.text}>{getDateText(date)}</Text>
  </View>
);

EventCardDate.propTypes = {
  date: PropTypes.shape({
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
  }).isRequired,
};
