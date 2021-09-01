import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { typesToIconMap, typesToLabelMap } from './dataMapping';
import styles from './styles';

export const HelpButton = ({ type }) => (
  <TouchableOpacity style={styles.button}>
    <Image source={{ uri: typesToIconMap[type] }} style={styles.icon} />
    <Text style={styles.label}>{typesToLabelMap[type]}</Text>
  </TouchableOpacity>
);

HelpButton.propTypes = {
  type: PropTypes.string.isRequired,
};
