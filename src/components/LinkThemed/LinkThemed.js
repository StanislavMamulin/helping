import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const LinkThemed = ({ text = '', onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.link}>{text}</Text>
  </TouchableOpacity>
);

LinkThemed.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
