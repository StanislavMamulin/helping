import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const ChangerItem = ({
  type = '',
  text = '',
  style = {},
  onPress = () => {},
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
    <Image source={{ uri: type }} style={styles.icon} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

ChangerItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func,
};
