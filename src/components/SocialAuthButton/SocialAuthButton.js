import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const SocialAuthButton = ({
  type = '',
  onPress = () => {},
  extStyle = {},
}) => (
  <TouchableOpacity
    onPress={() => onPress(type)}
    style={[styles.button, extStyle]}
  >
    <Image source={{ uri: type }} style={styles.icon} />
  </TouchableOpacity>
);

SocialAuthButton.propTypes = {
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  extStyle: PropTypes.object,
};
