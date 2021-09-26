import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const ButtonThemed = ({
  text = '',
  styleButton = {},
  styleText = {},
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styleButton]}>
      <Text style={[styles.text, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
};

ButtonThemed.propTypes = {
  text: PropTypes.string.isRequired,
  styleButton: PropTypes.object,
  styleText: PropTypes.object,
  onPress: PropTypes.func.isRequired,
};
